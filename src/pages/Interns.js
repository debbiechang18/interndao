import React from "react";
import Accordion from "../components/Accordion";
import useInternData from "../functions/InternData";

const Interns = ({ activePanel }) => {
  const internData = useInternData();

  return (
    <>
      {/* Pass the fetched intern data to the Accordion component */}
      <Accordion data={internData.interns} activePanel={activePanel} />
    </>
  );
};

export default Interns;
