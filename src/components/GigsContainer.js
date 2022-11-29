import React, { useState, useEffect } from "react";
import GigsList from "./GigsList";
import GigsForm from "./GigsForm";

const GigsContainer = () => {
  // This is the state used for the gigs array.
  const [gigs, setGigs] = useState([]);

  return (
    <div>
      <GigsForm />
      <br></br>
      <br></br>
      <GigsList gigs={gigs} />
    </div>
  );
};

export default GigsContainer;
