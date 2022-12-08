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

  useEffect(() => {
    fetch("http://localhost:9292/cities")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setCities(data));
  }, []);

  // This fetches the data from backend server and sets the state with that data.
  // the empty dependencies array means the side effect runs only the first time the component renders.
  useEffect(() => {
    fetch("http://localhost:9292/events")
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setEvents(data));
  }, []);

  // This updates state responsible for rendering events when a new event is added.
  // Callback function is passed as a prop to child (EventsForm) so the new event can be sent up to parent (EventsContainer).
  function handleAddEvent(newEvent) {
    // console.log("In EventsContainer:", newMeet);
    setEvents([...events, newEvent]);
  }

  function handleDeleteEvent(deletedEvent) {
    // console.log("handle delete Event", deletedEvent);
    // const test = events.map((event) => event.id);
    // console.log("handle delete event", test);
    const testB = events.filter((event) => event.id !== deletedEvent.id);
    console.log("handle delete event", testB);
    // const updatedEvents = events.filter((event) => console.log(deletedEvent.id));
    // const updatedEvents = events.filter((event) => event.id !== deletedEvent.id);
    // setEvents(updatedEvents);
  }

  // This is an example of code for onDelete function:
  //   const newCities = cities.map((city) => {
  //     return {

  //       ...city,
  //         events: city.events.filter((event) => event.id !== deletedEvent.id)
  //     }}
  // setCities(newCities)

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cities" element={<CitiesList cities={cities} />} />
        <Route
          path="/cities/:id"
          element={<CitiesEventsList cities={cities} />}
        />
        <Route
          path="/events"
          element={
            <EventsList
              events={events}
              onAddEvent={handleAddEvent}
              onDeleteEvent={handleDeleteEvent}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
