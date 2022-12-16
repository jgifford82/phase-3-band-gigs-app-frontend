import React from "react";
import { useParams } from "react-router-dom";
import CitiesEventsForm from "./CitiesEventsForm";
import ShowCityEvent from "./ShowCityEvent.js";

const CitiesEventsList = ({
  cities,
  onDeleteEvent,
  onAddEvent,
  onEditEvent,
}) => {
  // put post, delete, & patch here

  // useParams returns object with key/value pairs. destructured the id value to use it in foundCity variable
  const { id } = useParams();
  // console.log(id);

  // find all events with city id that equals the params id
  const foundCity = cities.find((city) => city.id == id);
  // console.log(foundCity);
  // console.log(foundCity.events);

  // Map over the events for the specific city whose page is being viewed and pass down the event info to ShowCityEvent component.
  const renderEvents = foundCity.events.map((event) => (
    <ShowCityEvent
      key={event.id}
      event={event}
      onDeleteClick={handleDeleteClick}
      onEditEvent={onEditEvent}
    />
  ));

  function handleDeleteClick(e, event) {
    fetch(`http://localhost:9292/events/${event.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      // .then((data) => console.log(data));
      .then((deletedEvent) => onDeleteEvent(deletedEvent));
  }

  function handleEditSubmit(e) {
    // prevent page refresh on submit:
    e.preventDefault();
    // console.log("submitted");
    // console.log(values);
    // console.log(id);
  }

  return (
    <div>
      <CitiesEventsForm id={id} onAddEvent={onAddEvent} />
      <br></br>
      <br></br>
      CitiesEventsList
      {renderEvents}
    </div>
  );
};

export default CitiesEventsList;
