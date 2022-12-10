import React from "react";
import { useParams } from "react-router-dom";

const CitiesEventsList = ({ cities, onDeleteEvent }) => {
  // put post, delete, & patch here

  // useParams returns object with key/value pairs. destructured the id value to use it in foundCity variable
  const { id } = useParams();
  // console.log(id);

  // find all events with city id that equals the params id
  const foundCity = cities.find((city) => city.id == id);
  // console.log(foundCity);
  // console.log(foundCity.events);

  const renderEvents = foundCity.events.map((event) => (
    <ul key={event.id}>
      <button onClick={(e) => handleDeleteClick(e, event)}>X</button>
      <span style={{ fontWeight: "bold" }}>{event.band}</span>: {event.date} //{" "}
      {event.time} at {event.venue} for ${event.price}
    </ul>
  ));

  function handleDeleteClick(e, event) {
    fetch(`http://localhost:9292/events/${event.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      // .then((data) => console.log(data));
      .then((deletedEvent) => onDeleteEvent(deletedEvent));
  }

  return <div>CitiesEventsList {renderEvents}</div>;
};

export default CitiesEventsList;
