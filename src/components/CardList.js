import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ResearchCard from './ResearchCard';
import '../styles/CardList.css';

const CardList = ({ data, itemsPerPage }) => {
  console.log(data)
  const FILLER_IMAGE_URL = "logo512.png"
  let ActiveCard = ResearchCard; // Default to ResearchCard

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    scrollToTop(); // Scroll to top of the page with smooth scrolling
  };
  
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    scrollToTop(); // Scroll to top of the page with smooth scrolling
  };
  
  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop(); // Scroll to top of the page with smooth scrolling
  };


  const renderPaginationNumbers = () => {
    const paginationNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationNumbers.push(
        <button
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => handlePaginationClick(i)}
        >
          {i}
        </button>
      );
    }

    return paginationNumbers;
  };

  return (
    <div className="card-list-container">
    <div className="card-list">
      {getPageData().map((item, index) => (
        <Link to={item.attributes.url}>
          <ActiveCard
            key={index}
            title={item.attributes.title || ""}
            image={item.attributes.thumbnail?.data?.attributes?.url || FILLER_IMAGE_URL}
            subtitle={item.attributes.subtitle || ""}
            url={item.attributes.url || "#"}
            text={item.attributes.text || ""}
          />
        </Link>
      ))}
      <div className="pagination-buttons">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          &lt;
        </button>
        {renderPaginationNumbers()}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
    </div>
  );
};

export default CardList;
