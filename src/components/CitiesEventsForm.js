import React, { useState } from "react";
import Typography from "@mui/material/Typography";

const CitiesEventsForm = ({ id, onAddEvent }) => {
  // console.log(id);

  const cityId = parseInt(id);
  // console.log(cityId);
  // console.log(typeof cityId);

  const initialValues = {
    band: "",
    date: "",
    time: "",
    venue: "",
    price: "",
    city_id: cityId,
  };
  // console.log(initialValues);

  // State sets default form input values as object with empty strings.
  const [values, setValues] = useState(initialValues);
  // console.log(values);

  // Handles all form inputs with a single onChange handler. Destructured name & value attributes from input fields to reference the key/value pairs when updating state. onChange prop added to each input to call handleInputChange
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

  function handleSubmit(e) {
    // prevent page refresh on submit:
    e.preventDefault();
    // console.log("submitted");
    // console.log(values);
    // console.log(id);

    fetch("http://localhost:9292/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((r) => r.json())
      // .then((data) => console.log(data))
      .then((newEvent) => onAddEvent(newEvent));

    // clear input fields on submit by updating values state:
    setValues(initialValues);
  }

  return (
    <div>
      EventsForm
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        <form onSubmit={handleSubmit}>
          <label>
            <span style={{ fontWeight: "bold" }}>Add New Event:</span>
            <input
              type="text"
              name="band"
              placeholder="Band Name"
              value={values.band}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="date"
              placeholder="Date format YYYY-MM-DD"
              value={values.date}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="time"
              placeholder="Time"
              value={values.time}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              value={values.venue}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="price"
              placeholder="Price (number only, no $)"
              value={values.price}
              onChange={handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Typography>
    </div>
  );
};

export default CitiesEventsForm;
