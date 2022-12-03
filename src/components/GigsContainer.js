import React, { useState, useEffect } from "react";
import GigsList from "./GigsList";
import GigsForm from "./GigsForm";

const GigsContainer = () => {
  // This is the state used for the gigs array.
  const [gigs, setGigs] = useState([]);

  // This fetches the data from backend server and sets the state with that data.
  // the empty dependencies array means the side effect runs only the first time the component renders.
  useEffect(() => {
    fetch("http://localhost:9292/events")
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setGigs(data));
  }, []);

  // console.log(gigs);

  // This updates state responsible for rendering events when a new event is added.
  // Callback function is passed as a prop to child (EventsForm) so the new event can be sent up to parent (EventsContainer).
  function handleAddGig(newGig) {
    // console.log("In EventsContainer:", newMeet);
    setGigs([...gigs, newGig]);
  }

  function handleDeleteGig(deletedGig) {
    // console.log("handle delete gig", deletedGig);
    // const test = gigs.map((gig) => gig.id);
    // console.log("handle delete gig", test);
    const testB = gigs.filter((gig) => gig.id !== deletedGig.id);
    console.log("handle delete gig", testB);
    // const updatedGigs = gigs.filter((gig) => console.log(deletedGig.id));
    // const updatedGigs = gigs.filter((gig) => gig.id !== deletedGig.id);
    // setGigs(updatedGigs);
  }

  return (
    <div>
      <GigsForm onAddGig={handleAddGig} />
      <br></br>
      <br></br>
      <GigsList gigs={gigs} onDeleteGig={handleDeleteGig} />
    </div>
  );
};

export default GigsContainer;
