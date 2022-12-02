import React, { useState, useEffect } from "react";
import CitiesList from "./CitiesList";

const CitiesContainer = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/cities")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setCities(data));
  }, []);

  return (
    <div>
      CitiesContainer
      <CitiesList cities={cities} />
    </div>
  );
};

export default CitiesContainer;
