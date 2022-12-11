import React from "react";
import Typography from "@mui/material/Typography";

const CitiesEventsEditForm = () => {
  return (
    <div>
      CitiesEventsEditForm
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        {/* onSubmit={handleSubmit} */}
        <form>
          <label>
            <span style={{ fontWeight: "bold" }}>Update Existing Event:</span>
            <input
              type="text"
              name="band"
              placeholder="Band Name"
              //   value={values.band}
              //   onChange={handleInputChange}
            />
            <input
              type="text"
              name="date"
              placeholder="Date format YYYY-MM-DD"
              //   value={values.date}
              //   onChange={handleInputChange}
            />
            <input
              type="text"
              name="time"
              placeholder="Time"
              //   value={values.time}
              //   onChange={handleInputChange}
            />
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              //   value={values.venue}
              //   onChange={handleInputChange}
            />
            <input
              type="text"
              name="price"
              placeholder="Price (number only, no $)"
              //   value={values.price}
              //   onChange={handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Typography>
    </div>
  );
};

export default CitiesEventsEditForm;
