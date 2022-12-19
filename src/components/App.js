import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import EventsList from "./EventsList.js";
import CitiesEventsList from "./CitiesEventsList";
import CitiesList from "./CitiesList";
// import BrowserRouter as Router for easier reference in code below.
// use Routes instead of Switch, wrap everything in Routes.
// Keep NavBar within Router below so we can use the links.

const App = () => {
  const [cities, setCities] = useState([]);
  // Events state is for EventsList component to display 10 recently added events.
  const [events, setEvents] = useState([]);
  // console.log(cities);
  // console.log(cities.events);

  // Fetches cities data (containing events for each city) from backend server & sets state with that data. Empty dependencies array = side effect only runs 1st time component renders.
  useEffect(() => {
    fetch("http://localhost:9292/cities")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setCities(data));
  }, []);

  // Fetches events data for EventsList component to display 10 recently added events.
  useEffect(() => {
    fetch("http://localhost:9292/events")
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setEvents(data));
  }, []);

  // Updates state responsible for rendering cities when new city is added, which refreshes the page to display new city. Callback function passed as a prop to child (CitiesForm) so the new city can be sent up to parent (CitiesList).
  function handleAddCity(newCity) {
    // console.log("In CitiesList:", newCity);
    setCities([...cities, newCity]);
  }

  function handleDeleteEvent(deletedEvent) {
    // console.log("handle delete Event", deletedEvent);
    // newCitites filters cities array down to all cities whose id doesn't match the deleted id.
    const newCities = cities.map((city) => {
      return {
        ...city,
        events: city.events.filter((event) => event.id !== deletedEvent.id),
      };
    });
    // console.log(newCities);
    setCities(newCities);
  }

  function handleAddEvent(newEvent) {
    console.log("In EventsList:", newEvent);
    // setEvents([...events, newEvent]);

    const updateCities = cities.map((city) => {
      return {
        ...city,
        events: city.events.map((event) => event, newEvent),
      };
    });
    console.log(updateCities);
    // debugger;
    setCities(updateCities);
  }
  console.log(cities);

  function handleEditEvent(editEvent) {
    console.log("In EventsList:", editEvent);
    const updateCities = cities.map((city) => {
      return {
        ...city,
        events: city.events.map((event) => {
          if (event.id === editEvent.id) {
            return editEvent;
          }
          return event;
        }),
      };
    });
    // console.log(updateCities);
    setCities(updateCities);
    console.log(updateCities);
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cities"
          element={<CitiesList cities={cities} onAddCity={handleAddCity} />}
        />
        <Route
          path="/cities/:id"
          element={
            <CitiesEventsList
              cities={cities}
              onDeleteEvent={handleDeleteEvent}
              onAddEvent={handleAddEvent}
              onEditEvent={handleEditEvent}
            />
          }
        />
        <Route path="/events" element={<EventsList events={events} />} />
      </Routes>
    </Router>
  );
};

export default App;
