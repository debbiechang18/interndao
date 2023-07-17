import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ResearchCard from './ResearchCard';
import ToolsCard from './ToolsCard';
import '../styles/CardList.css';

const CardList = ({ data, itemsPerPage }) => {
  const location = useLocation();
  let ActiveCard = ResearchCard; // Default to ResearchCard

  if (location.pathname === '/tools') {
    ActiveCard = ToolsCard;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

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
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
    <div className="card-list">
      {getPageData().map((item, index) => (
        <ActiveCard
          key={index}
          title={item.title}
          image={item.image}
          subtitle={item.subtitle}
          url={item.url}
          text={item.text}
        />
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
  );
};

export default CardList;
