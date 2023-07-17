import React, { useState } from "react";
import "../styles/Research.css";
import CardList from '../components/CardList';
import researchData from '../data/research.json';

const Research = () => {
  const itemsPerPage = 8; // Number of research cards to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <CardList data={researchData} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default Research;