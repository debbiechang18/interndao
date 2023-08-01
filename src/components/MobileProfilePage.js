// MobileProfilePage.js
import React from "react";

const MobileProfilePage = ({ intern, loading }) => {
  if (loading) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }

  if (!intern) {
    return <div>Intern not found</div>; // Display a message if the intern with the provided username is not found
  }

  return (
    <div>
      {/* Render the intern data on the mobile profile page */}
      <h1>Mobile Profile Page</h1>
      <h1>{intern.attributes.name}</h1>
      <p>{intern.attributes.bio}</p>
      {/* Add other relevant intern information */}
    </div>
  );
};

export default MobileProfilePage;
