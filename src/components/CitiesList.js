import React from "react";
import { Link } from "react-router-dom";
import CitiesForm from "./CitiesForm";
import Typography from "@mui/material/Typography";

const CitiesList = ({ cities, onAddCity }) => {
  const renderCities = cities.map((city) => (
    <ul key={city.id}>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
        fontWeight="bold"
      >
        <Link to={`/cities/${city.id}`}>{city.name}</Link>
      </Typography>
    </ul>
  ));
  return (
    <div>
      <CitiesForm onAddCity={onAddCity} />
      <br></br>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
        fontWeight="bold"
        color="green"
      >
        <br></br>
        <br></br>
        Click on a city to see it's events!{" "}
      </Typography>{" "}
      <br></br>
      {renderCities}
    </div>
  );
};

export default CitiesList;
