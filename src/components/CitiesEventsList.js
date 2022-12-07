import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CitiesEventsList = ({ cities }) => {
  const [events, setEvents] = useState([]);

  // map out cities events
  // put delete event & update here

  // useParams returns an object with key value pairs, so need to destructure the id value out of the useParams object
  const { id } = useParams();
  // console.log(id);

  // need to find all events with city id that equals the params id
  // const find = cities.find((id) => id === id);
  // console.log(find);
  // console.log(find.events);

  // Need to play around with this more. When a city is clicked, it's only showing the events that match city id 12
  useEffect(() => {
    const find = cities.find((city) => city.id == id);
    // console.log(cities);
    // console.log(find);
    // console.log(id);
    // console.log(find.events);
    setEvents(find.events);
  }, []);

  // , [events]

  // console.log(events);

  const renderEvents = events.map((event) => (
    <ul key={event.id}>
      <span style={{ fontWeight: "bold" }}>{event.band}</span>: {event.date} //{" "}
      {event.time} at {event.venue} for ${event.price}
    </ul>
  ));

  return <div>CitiesEventsList {renderEvents}</div>;
};

export default CitiesEventsList;
