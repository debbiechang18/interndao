import React from 'react';
import { useLocation } from 'react-router-dom';
import InternCard from '../components/InternCard';
import ConsultingCard from './ConsultingCard';
import Buttons from './Buttons';
import ConsultingPage from './ConsultingPage';
import "../styles/Accordion.css";
import "../styles/ConsultingCard.css";

const AccordionContent = ({ items, index }) => {
  // Retrieve the location object using the useLocation hook
  const location = useLocation();

  // Check if the location object is defined before accessing its properties
  if (!location) {
    return null; // Return null or show a loading indicator
  }

  const shouldCenterJustify = location.pathname === '/consulting';

  return (
    <div className="accordion-content-wrapper expanded">
      <div className={`accordion-section-content ${shouldCenterJustify && items.some(item => item.section !== 'clients') ? 'center-justify' : ''}`}>
        {items.map((item, i) => {
          let renderedItem = null;
          if (location.pathname === '/interns') {
            renderedItem = (
              <InternCard 
              name={item.name} 
              photo={item.photo} 
              twitter={item.twitter} 
              username={item.username} 
              index={index} key={i} 
              section={item.section}/>
            );
          } else if (location.pathname === '/consulting') {
            if (item.section === 'clients') {
              renderedItem = (
                <div className="accordion-item active">
                  <ConsultingCard name={item.name} photo={item.photo} />
                </div>
              );
            } else {
              renderedItem = (
                <div
                  className="accordion-item"
                  style={item.isExpanded ? { position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '1' } : {}}
                >
                  <ConsultingPage content={item.content} />
                </div>
              );
            }
          } else if (location.pathname === '/contact') {
            renderedItem = (
              <Buttons buttonID={item.buttonID} key={i} />
            );
          }

          return renderedItem;
        })}
      </div>
    </div>
  );
};

export default AccordionContent;
