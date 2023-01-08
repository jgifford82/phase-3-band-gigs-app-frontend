import React, { useState } from "react";
import CitiesEventsEditForm from "./CitiesEventsEditForm";

const ShowCityEvent = ({ event, onDeleteClick, onEditEvent }) => {
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
      <CitiesEventsEditForm
        event={event}
        onEditClick={handleEditClick}
        onEditEvent={onEditEvent}
      />
      for ${event.price}{" "}
    </div>
  );

  return <div>{isEdit ? <>{renderEditEvent}</> : <>{renderEvent}</>}</div>;
};

export default ShowCityEvent;
