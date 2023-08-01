import React, { useState, useEffect } from "react";
import CardList from '../components/CardList';
import axios from "axios";

const Research = () => {
  const itemsPerPage = 8; // Number of research cards to display per page
  const [researchData, setResearchData] = useState([]); // State to store the fetched research data

  useEffect(() => {
    // Scrolls to the top of the page with x and y coordinates both set to 0
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const apiUrl = "https://strapi-production-5302.up.railway.app/api/research-posts?populate=*";

    axios
      .get(apiUrl)
      .then((response) => {
        // Set the researchData state with the fetched data
        setResearchData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching research data:", error);
      });
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <CardList data={researchData} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default Research;
