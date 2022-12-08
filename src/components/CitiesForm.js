import React from "react";
import Typography from "@mui/material/Typography";

const CitiesForm = () => {
  return (
    <div>
      CitiesForm
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        <form>
          <label>
            <span style={{ fontWeight: "bold" }}>Add New City:</span>
            <input
              type="text"
              name="city"
              placeholder="City"
              // value={values.band}
              // onChange={handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Typography>
    </div>
  );
};

export default CitiesForm;
