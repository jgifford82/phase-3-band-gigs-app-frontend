import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import GigsContainer from "./GigsContainer";
// import BrowserRouter as Router for easier reference in code below.
// use Routes instead of Switch, and wrap everything in Routes.
// Keep NavBar within Router below so we can use the links.

const App = () => {
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
