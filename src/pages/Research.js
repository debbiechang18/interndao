import React, { useState } from "react";
import "../styles/Research.css";
import CardList from '../components/CardList';
import axios from "axios";

const Research = () => {
  const itemsPerPage = 8; // Number of research cards to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const apiUrl = "https://strapi-production-5302.up.railway.app/api/philosophy-text";

    axios
      .get(apiUrl)
      .then((response) => {
        // handle API response data
        const philosophyTextData = response.data.data.attributes.text;
        setPhilosophyText(philosophyTextData);
      })
      .catch((error) => {
        console.error("Error fetching philosophy text:", error);
      });
  }, []);


  return (
    <div>
      <CardList data={researchData} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default Research;