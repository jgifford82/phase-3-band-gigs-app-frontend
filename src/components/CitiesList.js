import React from "react";

const CitiesList = ({ cities }) => {
  const renderCities = cities.map((city) => (
    <ul key={city.id}>
      <span style={{ fontWeight: "bold" }}>{city.name}</span>
    </ul>
  ));
  return <div>CitiesList {renderCities}</div>;
};

export default CitiesList;
