import React, { useState } from "react";

const ShowCityEvent = ({
  event,
  handleDeleteClick,
  handleEditClick,
  handleEditSubmit,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  function handleEditClick(e, event) {
    console.log("updating");
    setIsEdit(!isEdit);
    console.log(isEdit);
  }

  const renderEvent = (
    <div key={event.id}>
      <button onClick={(e) => handleDeleteClick(e, event)}>X</button> &nbsp;
      <button onClick={(e) => handleEditClick(e, event)}>Edit</button> &nbsp;
      <span style={{ fontWeight: "bold" }}>{event.band}</span>: {event.date}{" "}
      {event.time} at {event.venue} for ${event.price}{" "}
    </div>
  );

  const renderEditEvent = (
    <div key={event.id}>
      <button onClick={(e) => handleDeleteClick(e, event)}>X</button> &nbsp;
      <button onClick={(e) => handleEditClick(e, event)}>Edit</button> &nbsp;
      <span style={{ fontWeight: "bold" }}>{event.band}</span>:{" "}
      <form onSubmit={handleEditSubmit}>
        <input value={event.date} /> <input value={event.time} /> at{" "}
        <input value={event.venue} />{" "}
        <input type="submit" value="Submit Changes" />
      </form>{" "}
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
