import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import GigsContainer from "./GigsContainer";
// import BrowserRouter as Router for easier reference in code below.
// use Routes instead of Switch, and wrap everything in Routes.
// Keep NavBar within Router below so we can use the links.

const App = () => {
  const [cities, setCities] = useState([]);

  console.log(cities);

  useEffect(() => {
    fetch("http://localhost:9292/cities")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setCities(data));
  }, []);

  // This is an example of code for onDelete function:
  //   const newCities = cities.map((city) => {
  //     return {

  //       ...city,
  //         gigs: city.gigs.filter((gig) => gig.id !== deletedGig.id)
  //     }}
  // setCities(newCities)

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gigs" element={<GigsContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
