import React from "react";
import useContactData from "../functions/ContactData";
import Accordion from "../components/Accordion";

const Contact = () => {
  // Use the custom hook to get the fetched data and loading status
  const { buttons, loading } = useContactData();
  console.log("sorted buttons", buttons)

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Accordion data={buttons} />
  );
};

export default Contact;
