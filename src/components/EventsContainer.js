import React, { useState, useEffect } from "react";
import EventsList from "./EventsList";
import EventsForm from "./EventsForm";

const EventsContainer = () => {
  // This is the state used for the events array.
  const [events, setEvents] = useState([]);

  // This fetches the data from backend server and sets the state with that data.
  // the empty dependencies array means the side effect runs only the first time the component renders.
  useEffect(() => {
    fetch("http://localhost:9292/events")
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setEvents(data));
  }, []);

  // console.log(events);

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

  return (
    <div>
      <EventsForm onAddEvent={handleAddEvent} />
      <br></br>
      <br></br>
      <EventsList events={events} onDeleteEvent={handleDeleteEvent} />
    </div>
  );
};

export default EventsContainer;
