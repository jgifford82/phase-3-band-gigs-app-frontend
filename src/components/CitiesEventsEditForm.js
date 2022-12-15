import React, { useState } from "react";

const CitiesEventsEditForm = ({ event, onEditClick, onEditEvent }) => {
  //   console.log(id);

  const eventId = event.id;
  // console.log(eventId);

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
    console.log(values);
  };

  // State sets default form input values as object with empty strings.
  const [values, setValues] = useState(initialValues);
  //   console.log(values);

  function handleSubmit(e, event) {
    // prevent page refresh on submit:
    e.preventDefault();
    // console.log("submitted");
    console.log(values);
    // console.log(eventId);

    // using eventId instead of event.id
    fetch(`http://localhost:9292/events/${eventId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
    //   .then((newEvent) => onEditEvent(newEvent));

    // set isEdit state to !isEdit so the form is no longer displayed
    onEditClick();

    // Not sure I need to clear input fields if the edit form goes away on Submit?
    // clear input fields on submit by updating values state:
    setValues(initialValues);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="date"
          placeholder={event.date}
          value={values.date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="time"
          placeholder={event.time}
          value={values.time}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="venue"
          placeholder={event.venue}
          value={values.venue}
          onChange={handleInputChange}
        />
        <input type="submit" value="Submit Changes" />
      </form>
    </div>
  );
};

export default CitiesEventsEditForm;
