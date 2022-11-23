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
        <img
          src="https://images.pexels.com/photos/1749822/pexels-photo-1749822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Band Members Playing On Stage"
        ></img>
      </Typography>
    </div>
  );
};

export default About;
