import React, { useState } from "react";
import CitiesEventsEditForm from "./CitiesEventsEditForm";

const ShowCityEvent = ({ event, onDeleteClick, onEditSubmit }) => {
  const [isEdit, setIsEdit] = useState(false);

  function handleEditClick(e, event) {
    // console.log("updating");
    setIsEdit(!isEdit);
    // console.log(isEdit);
  }

  const renderEvent = (
    <div key={event.id}>
      <button onClick={(e) => onDeleteClick(e, event)}>X</button> &nbsp;
      <button onClick={(e) => handleEditClick(e, event)}>Edit</button> &nbsp;
      <span style={{ fontWeight: "bold" }}>{event.band}</span>: {event.date}{" "}
      {event.time} at {event.venue} for ${event.price}{" "}
    </div>
  );

  const renderEditEvent = (
    <div key={event.id}>
      <button onClick={(e) => onDeleteClick(e, event)}>X</button> &nbsp;
      <button onClick={(e) => handleEditClick(e, event)}>Edit</button> &nbsp;
      <span style={{ fontWeight: "bold" }}>{event.band}</span>:{" "}
      <CitiesEventsEditForm event={event} onEditClick={handleEditClick}/>
      {/* <form onSubmit={onEditSubmit}>
        <input value={event.date} /> <input value={event.time} /> at{" "}
        <input value={event.venue} />{" "}
        <input type="submit" value="Submit Changes" />
      </form>{" "} */}
      for ${event.price}{" "}
    </div>
  );

  return (
    <div>
      ShowCityEvent
      {isEdit ? <>{renderEditEvent}</> : <>{renderEvent}</>}
    </div>
  );
};

export default ShowCityEvent;
