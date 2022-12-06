import React from "react";

const CitiesList = ({ cities }) => {
  function handleClick() {
    console.log("city clicked");
  }

  const renderCities = cities.map((city) => (
    <ul key={city.id}>
      <span onClick={handleClick} style={{ fontWeight: "bold" }}>
        {city.name}
      </span>
    </ul>
  ));
  return <div>CitiesList {renderCities}</div>;
};

export default CitiesList;
