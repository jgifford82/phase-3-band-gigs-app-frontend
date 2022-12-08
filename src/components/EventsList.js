import React, { useState, useEffect } from "react";
import EventsForm from "./EventsForm";
// removed onAddEvent from props
const EventsList = ({ events, onDeleteEvent }) => {
  // console.log(events);

  function handleDeleteClick(e, event) {
    console.log("clicked");
    // console.log(onDeleteEvent);
    onDeleteEvent(event);

    // fetch(`http://localhost:9292/events/${event.id}`, {
    //   method: "DELETE",
    // })
    //   .then((r) => r.json())
    //   .then(() => console.log("deleted!"));
    //   .then((deletedEvent) => onDeleteEvent(deletedEvent));
  }

  const renderEvents = events.map((event) => (
    <ul key={event.id}>
      <button onClick={(e) => handleDeleteClick(e, event)}>X</button>
      <span style={{ fontWeight: "bold" }}>{event.band}</span>: {event.date}{" "}
      {event.time} at {event.venue} for ${event.price}
    </ul>
  ));

  return (
    <div>
      {/* removed onAddEvent={onAddEvent} from Eventsform props*/}
      <EventsForm />
      <br></br>
      <br></br>EventsList {renderEvents}
    </div>
  );
};

export default EventsList;
