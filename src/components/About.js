import React from "react";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <div>
      <Typography
        variant="h3"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        <p>See what shows are happening in your city!</p>
        <p>Bands can add their shows to the list!</p>
      </Typography>
    </div>
  );
};

export default About;
