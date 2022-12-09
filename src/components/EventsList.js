import React, { useState, useEffect } from "react";
import EventsForm from "./EventsForm";

const EventsList = ({ events, onAddEvent }) => {
  // console.log(events);

  const renderEvents = events.map((event) => (
    <ul key={event.id}>
      <span style={{ fontWeight: "bold" }}>{event.band}</span>: {event.date}{" "}
      {event.time} at {event.venue} for ${event.price}
    </ul>
  ));

  return (
    <div>
      <EventsForm onAddEvent={onAddEvent} />
      <br></br>
      <br></br>EventsList {renderEvents}
    </div>
  );
};

export default EventsList;
