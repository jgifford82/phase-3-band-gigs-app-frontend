import React, { useState, useEffect } from "react";
import GigsList from "./GigsList";
import GigsForm from "./GigsForm";

const GigsContainer = () => {
  return (
    <div>
      <GigsForm />
      <br></br>
      <br></br>
      <GigsList />
    </div>
  );
};

export default GigsContainer;
