import React from "react";
import Accordion from "../components/Accordion";
import useConsultingData from "../functions/ConsultingData";

const Consulting = ({ activePanel }) => {
  const { consultingData, loading, error } = useConsultingData();
  console.log(consultingData)

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator if data is not ready yet
  }

  if (error) {
    return <div>Error fetching data</div>; // Show an error message if there's an error
  }

  return (
    <>
      {/* Pass the fetched consulting data to the Accordion component */}
      <Accordion data={consultingData} activePanel={activePanel} />
    </>
  );
};

export default Consulting;
