import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import EventsList from "./EventsList.js";
import CitiesEventsList from "./CitiesEventsList";
import CitiesList from "./CitiesList";
// import BrowserRouter as Router for easier reference in code below.
// use Routes instead of Switch, and wrap everything in Routes.
// Keep NavBar within Router below so we can use the links.

const App = () => {
  const [cities, setCities] = useState([]);
  const [events, setEvents] = useState([]);
  // console.log(cities);
  // console.log(cities.events);

  // Fetches data from backend server & sets state with that data. Empty dependencies array = side effect only runs 1st time component renders.
  useEffect(() => {
    fetch("http://localhost:9292/cities")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setCities(data));
  }, []);

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

  // This updates state responsible for rendering events when a new event is added, which refreshes the page so the new event is displayed. Callback function is passed as a prop to child (EventsForm) so the new event can be sent up to parent (EventsList).
  function handleAddEvent(newEvent) {
    // console.log("In EventsList:", newEvent);
    setEvents([...events, newEvent]);
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
          element={<CitiesEventsList cities={cities} />}
        />
        <Route
          path="/events"
          element={<EventsList events={events} onAddEvent={handleAddEvent} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
