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
  // useParams returns object with key/value pairs. destructured the id value to use it in foundCity variable
  const { id } = useParams();
  const params = useParams();

  // find all events with city id that equals the params id, which had to be converted from string to number using parseInt.
  // const foundCity = cities.find((city) => city.id == id);
  const foundCity = cities.find(({ id }) => id === parseInt(params.id));

  // Map over the events for the specific city whose page is being viewed and pass down the event info to ShowCityEvent component. if no foundCity, returns error undefined when refreshing a city's events page
  let renderEvents;
  if (foundCity) {
    renderEvents = foundCity.events.map((event) => (
      <ShowCityEvent
        key={event.id}
        event={event}
        onDeleteClick={handleDeleteClick}
        onEditEvent={onEditEvent}
      />
    ));
  }

  function handleDeleteClick(e, event) {
    fetch(`http://localhost:9292/events/${event.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      // .then((data) => console.log(data));
      .then((deletedEvent) => onDeleteEvent(deletedEvent));
  }

  return (
    <div>
      <CitiesEventsForm id={id} onAddEvent={onAddEvent} />
      <br></br>
      <br></br>
      {renderEvents}
    </div>
  );
};

export default CitiesEventsList;
