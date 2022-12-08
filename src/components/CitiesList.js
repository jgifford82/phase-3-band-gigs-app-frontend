import React from "react";
import { Link } from "react-router-dom";
import CitiesForm from "./CitiesForm";

const CitiesList = ({ cities, onAddCity }) => {
  //  Don't need the click handler since Link makes it clickable and navigates to the city's events
  // This makes each city clickable and console logs the id of the clicked city and the events associated with that city.
  // function handleClick(id, events) {
  //   console.log("city clicked");
  //   console.log(id);
  //   console.log(cities);
  //   console.log(events);
  // }

  const renderCities = cities.map((city) => (
    <ul key={city.id}>
      <Link
        to={`/cities/${city.id}`}
        // onClick={() => handleClick(city.id, city.events)}
        style={{ fontWeight: "bold" }}
      >
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
