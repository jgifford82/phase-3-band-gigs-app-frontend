import React from "react";

const EventsList = ({ events }) => {
  // console.log(events);

  const renderEvents = events.map((event) => (
    <ul key={event.id}>
      <span style={{ fontWeight: "bold" }}>{event.band}</span>: {event.date}{" "}
      {event.time} at {event.venue} for ${event.price}
    </ul>
  ));

  return (
    <div>
      <br></br>
      <br></br>EventsList {renderEvents}
    </div>
  );
};

export default EventsList;
