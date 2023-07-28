import React from 'react';
import { useLocation } from 'react-router-dom';
import InternCard from '../components/InternCard';
import ConsultingCard from './ConsultingCard';
import ContactButton from './ContactButton';
import ConsultingPage from './ConsultingPage';
import "../styles/Accordion.css";
import "../styles/ConsultingCard.css";

const FILLER_IMAGE_URL = 'logo512.png'; // Replace with your filler image URL

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
            const photoUrl = item.attributes.photo?.data?.attributes?.url || FILLER_IMAGE_URL;
            renderedItem = (
              <InternCard 
                name={item.attributes.name} 
                photo={photoUrl} 
                twitter={item.attributes.twitter} 
                username={item.attributes.username} 
                index={index} 
                key={i} 
                section={item.attributes.section}
              />
            );
          } else if (location.pathname === '/consulting') {
            if (item.attributes.section === 'clients') {
              const photoUrl = item.attributes.photo?.data?.attributes?.url || FILLER_IMAGE_URL;
              renderedItem = (
                <div className="accordion-item active">
                  <ConsultingCard name={item.attributes.name} photo={photoUrl} />
                </div>
              );
            } else {
              renderedItem = (
                <div
                  className="accordion-item"
                  style={item.isExpanded ? { position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '1' } : {}}
                >
                  <ConsultingPage content={item.attributes.content} />
                </div>
              );
            }
          } else if (location.pathname === '/contact') {
            renderedItem = (
              <ContactButton buttonID={item.attributes.buttonID} key={i} />
            );
          }

          return renderedItem;
        })}
      </div>
    </div>
  );
};

export default AccordionContent;
