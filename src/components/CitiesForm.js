import React, { useState } from "react";
import Typography from "@mui/material/Typography";

const CitiesForm = ({ onAddCity }) => {
  const initialValues = {
    name: "",
  };

  // State sets default form input value as object with empty strings.
  const [values, setValues] = useState(initialValues);

  // Handles all form inputs with a single onChange handler. Destructured name & value attributes from input fields to reference the key/value pairs when updating state. onChange prop added to each input to call handleInputChange
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

  function handleSubmit(event) {
    // prevent page refresh on submit:
    event.preventDefault();
    // console.log("submitted");
    // console.log(values);

    fetch("http://localhost:9292/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((r) => r.json())
      // .then((data) => console.log(data));
      .then((newCity) => onAddCity(newCity));

    // clear input fields on submit by updating values state:
    setValues(initialValues);
  }

  return (
    <div>
      CitiesForm
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        <form onSubmit={handleSubmit}>
          <label>
            <span style={{ fontWeight: "bold" }}>Add New City:</span>
            <input
              type="text"
              name="name"
              placeholder="City Name"
              value={values.name}
              onChange={handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Typography>
    </div>
  );
};

export default CitiesForm;
