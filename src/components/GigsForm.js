import React from "react";
import Typography from "@mui/material/Typography";

const GigsForm = () => {
  return (
    <div>
      GigsForm
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        <form>
          <label>
            <span style={{ fontWeight: "bold" }}>Add New Gig:</span>
            <input
              type="text"
              name="name"
              placeholder="Band Name"
              // value={values.title}
              // onChange={handleInputChange}
            />
            <input
              type="text"
              name="date"
              placeholder="Date"
              // value={values.day}
              // onChange={handleInputChange}
            />
            <input
              type="text"
              name="time"
              placeholder="Time"
              // value={values.time}
              // onChange={handleInputChange}
            />
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              // value={values.location}
              // onChange={handleInputChange}
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              // value={values.location}
              // onChange={handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Typography>
    </div>
  );
};

export default GigsForm;
