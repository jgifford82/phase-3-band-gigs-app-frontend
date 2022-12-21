import React from "react";
import Typography from "@mui/material/Typography";

const EventsList = ({ events }) => {
  // console.log(events);

  const renderEvents = events.map((event) => (
    <ul key={event.id}>
      <span style={{ fontWeight: "bold" }}>{event.band}</span>: {event.date}{" "}
      {event.time} at {event.venue} for ${event.price}
    </ul>
  ));

  return (
    <div>
      <br></br>
      <Typography
        variant="h3"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        Here are the 10 newest events!
      </Typography>
      {renderEvents}
    </div>
  );
};

export default EventsList;
