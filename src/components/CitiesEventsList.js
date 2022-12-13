import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CitiesEventsEditForm from "./CitiesEventsEditForm";
import CitiesEventsForm from "./CitiesEventsForm";

const CitiesEventsList = ({
  cities,
  onDeleteEvent,
  onAddEvent,
  onEditEvent,
}) => {
  // put post, delete, & patch here
  const [isEdit, setIsEdit] = useState(false);
  // console.log(isEdit);

  // useParams returns object with key/value pairs. destructured the id value to use it in foundCity variable
  const { id } = useParams();
  // console.log(id);

  // find all events with city id that equals the params id
  const foundCity = cities.find((city) => city.id == id);
  // console.log(foundCity);
  // console.log(foundCity.events);

  const renderEvents = foundCity.events.map((event) => (
    <ul key={event.id}>
      <button onClick={(e) => handleDeleteClick(e, event)}>X</button> &nbsp;
      <button onClick={(e) => handleEditClick(e, event)}>Edit</button> &nbsp;
      <Link to={`/events/${event.id}`} style={{ fontWeight: "bold" }}>
        {event.band}: {event.date} {event.time} at {event.venue} for $
        {event.price}{" "}
      </Link>
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

  function handleEditClick(e, event) {
    console.log("updating");
    setIsEdit(!isEdit);
    // console.log(isEdit);
  }

  return (
    <div>
      <CitiesEventsForm id={id} onAddEvent={onAddEvent} />
      <br></br>
      <CitiesEventsEditForm id={id} onEditEvent={onEditEvent} />
      <br></br>
      CitiesEventsList {renderEvents}
    </div>
  );
};

export default CitiesEventsList;
