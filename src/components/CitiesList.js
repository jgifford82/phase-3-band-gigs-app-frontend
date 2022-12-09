import React from "react";
import { Link } from "react-router-dom";
import CitiesForm from "./CitiesForm";

const CitiesList = ({ cities, onAddCity }) => {
  const renderCities = cities.map((city) => (
    <ul key={city.id}>
      <Link to={`/cities/${city.id}`} style={{ fontWeight: "bold" }}>
        {city.name}
      </Link>
    </ul>
  ));
  return (
    <div>
      <CitiesForm onAddCity={onAddCity} />
      <br></br>
      CitiesList {renderCities}
    </div>
  );
};

export default CitiesList;
