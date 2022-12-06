import React from "react";

const CitiesList = ({ cities }) => {
  // This makes each city clickable and console logs the id of the clicked city.
  function handleClick(id) {
    console.log("city clicked");
    console.log(id);
  }

  const renderCities = cities.map((city) => (
    <ul key={city.id}>
      <span onClick={() => handleClick(city.id)} style={{ fontWeight: "bold" }}>
        {city.name}
      </span>
    </ul>
  ));
  return <div>CitiesList {renderCities}</div>;
};

export default CitiesList;
