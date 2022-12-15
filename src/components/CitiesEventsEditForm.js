import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CitiesEventsEditForm = ({ event, id, onEditEvent }) => {
  //   console.log(id);

  // useParams returns object with key/value pairs. destructured the id value to use it in foundCity variable
  //   const eventId = useParams();
  // this useParams is loggin the city's id
  //   console.log(eventId);

  const initialValues = {
    date: "",
    time: "",
    venue: "",
  };
  //   console.log(initialValues);

  const handleInputChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    // console.log(values);
  };

  // State sets default form input values as object with empty strings.
  const [values, setValues] = useState(initialValues);
  //   console.log(values);

  function handleSubmit(e, event) {
    // prevent page refresh on submit:
    e.preventDefault();
    // console.log("submitted");
    // console.log(values);
    // console.log(id);

    // fetch(`http://localhost:9292/events/${event.id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // })
    //   .then((r) => r.json())
    //   .then((data) => console.log(data));
    //   .then((newEvent) => onEditEvent(newEvent));

    // clear input fields on submit by updating values state:
    setValues(initialValues);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="date"
          // placeholder="Date format YYYY-MM-DD"
          value={event.date}
          // value={values.date}
          // onChange={handleInputChange}
        />
        <input
          type="text"
          name="time"
          // placeholder="Time"
          value={event.time}
          // value={values.time}
          // onChange={handleInputChange}
        />
        <input
          type="text"
          name="venue"
          // placeholder="Venue"
          value={event.venue}
          // value={values.venue}
          // onChange={handleInputChange}
        />
        <input type="submit" value="Submit Changes" />
      </form>
    </div>
  );
};

export default CitiesEventsEditForm;
