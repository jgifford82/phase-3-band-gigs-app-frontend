import React from "react";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <div>
      <Typography
        variant="h3"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        <img
          src="https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Singer Singing on Stage Beside Guitar Player and Bass Player"
        ></img>
      </Typography>
    </div>
  );
};

export default Home;
