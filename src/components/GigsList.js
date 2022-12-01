import React from "react";

const GigsList = ({ gigs }) => {
  // console.log(gigs);

  function handleDelete() {
    console.log("clicked");
  }

  const renderGigs = gigs.map((gig) => (
    <ul key={gig.id}>
      <button onClick={handleDelete}>X</button>
      <span style={{ fontWeight: "bold" }}>{gig.band}</span>: {gig.date}{" "}
      {gig.time} at {gig.venue} for ${gig.price}
    </ul>
  ));

  return <div>GigsList {renderGigs}</div>;
};

export default GigsList;
