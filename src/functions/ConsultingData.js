import React, { useState, useEffect } from 'react';
import ConsultingCard from '../components/ConsultingCard';
import axios from 'axios';

const ConsultingData = () => {
  const [consultingData, setConsultingData] = useState([]);

  const fetchConsultingData = async () => {
    // ... Your API call to fetch consulting data ...
  };

  useEffect(() => {
    fetchConsultingData();
  }, []);

  return (
    <>
      {consultingData.map((item) => (
        <div className={`accordion-item ${item.isExpanded ? 'active' : ''}`} key={item.id}>
          <ConsultingCard name={item.name} photo={item.photo} />
        </div>
      ))}
    </>
  );
};

export default ConsultingData;