import React from 'react';
import { useLocation } from 'react-router-dom';
import InternCard from '../components/InternCard';
import ConsultingCard from './ConsultingCard';
import ContactButtons from './ContactButtons';
import ConsultingPost from './ConsultingPost';
import '../styles/Accordion.css';

const FILLER_IMAGE_URL = 'logo512.png';

const AccordionContent = ({ items, index }) => {
  // Retrieve the location object using the useLocation hook
  const location = useLocation();

  const shouldCenterJustify = location.pathname === '/consulting' && items.every(item => item.attributes.section !== 'clients');

  // Grouping the ConsultingPost components by section
  const consultingPostsBySection = items.reduce((acc, item) => {
    const { section } = item.attributes;
    if (section !== 'clients') {
      if (!acc[section]) {
        acc[section] = [];
      }
      acc[section].push(
        <ConsultingPost
          header={item.attributes.header}
          text={item.attributes.text}
          index={index}
          key={item.id} // Use a unique key for the React list
          section={section}
        />
      );
    }
    return acc;
  }, {});

  // Create a mapping of section and button data
  const buttonDataMapping = items.reduce((acc, item) => {
    const { section, buttonID } = item.attributes;
    acc[section] = { section, buttonID };
    return acc;
  }, {});

  return (
    <div className="accordion-content-wrapper expanded">
      <div className={`accordion-section-content ${shouldCenterJustify ? 'center-justify' : ''}`}>
        {items.map((item, i) => {
          const { section } = item.attributes;
          let renderedItem = null;

          switch (location.pathname) {
            case '/interns':
              const photoUrl = item.attributes.photo?.data?.attributes?.url || FILLER_IMAGE_URL;
              renderedItem = (
                <InternCard 
                  name={item.attributes.name} 
                  photo={photoUrl} 
                  twitter={item.attributes.twitter} 
                  username={item.attributes.username} 
                  index={index} 
                  key={i} 
                  section={section}
                />
              );
              break;
            case '/consulting':
              if (section === 'clients') {
                const clientPhotoUrl = item.attributes.thumbnail || FILLER_IMAGE_URL;
                const clientName = item.attributes.clientName;
                renderedItem = (
                  <ConsultingCard 
                    clientName={clientName} 
                    thumbnail={clientPhotoUrl}
                    index={index}
                    key={i}
                    section={section}
                  />
                );
              }
              break;
            case '/contact':
              const buttonData = buttonDataMapping[section]; // Get the button data for this section
              console.log("buttondata", buttonData)
              if (buttonData) {
                renderedItem = (
                  <ContactButtons section={section} buttonID={buttonData.buttonID} key={i} />
                );
              }
              break;
            default:
              break;
          }

          return renderedItem;
        })}

        {/* Render the consulting-posts-container only when the page is /consulting and the section is not 'clients' */}
        {location.pathname === '/consulting' &&
          Object.entries(consultingPostsBySection).map(([section, consultingPosts]) => (
            <div key={section} className="consulting-posts-container">
              <div className="consulting-posts-wrapper">
              {consultingPosts}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AccordionContent;
