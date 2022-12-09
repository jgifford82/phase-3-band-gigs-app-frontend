import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CitiesEventsList = ({ cities }) => {
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
      <button>X</button>
      <span style={{ fontWeight: "bold" }}>{event.band}</span>: {event.date} //{" "}
      {event.time} at {event.venue} for ${event.price}
    </ul>
  ));

  return <div>CitiesEventsList {renderEvents}</div>;
};

export default CitiesEventsList;
