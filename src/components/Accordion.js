import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import AccordionContent from './AccordionContent';
import '../styles/Accordion.css';

const Accordion = ({ data }) => {
  const location = useLocation();
  const [activePanels, setActivePanels] = useState([]);
  const accordionRef = useRef(null);

  useEffect(() => {
    if (location.pathname === '/contact') {
      const panelIds = data.map((item, index) => `panel_${index + 1}`);
      setActivePanels(panelIds);
    } else {
      setActivePanels(['panel_1']);
    }
  }, [location.pathname, data]);

  const togglePanel = (panelId) => {
    setActivePanels((prevPanels) => {
      if (prevPanels.includes(panelId)) {
        // Panel is active, close it
        return [];
      } else {
        // Panel is inactive, open it
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        return [panelId];
      }
    });
  };

  // Grouping the data based on section
  const groupedData = data.reduce((acc, item) => {
    if (acc[item.attributes.section]) {
      acc[item.attributes.section].push(item);
    } else {
      acc[item.attributes.section] = [item];
    }
    return acc;
  }, {});

  return (
    <div className="accordion-container" ref={accordionRef}>
      {/* Render each section */}
      {Object.entries(groupedData).map(([section, items], index) => {
        const panelId = `panel_${index + 1}`;
        const isActive = activePanels.includes(panelId) ? 'true' : '';

        return (
          <div
            key={index}
            id={panelId}
            className={`panel panel_${index + 1} ${isActive ? 'active' : ''}`}
          >
            {/* Render the accordion header */}
            <div
              className="play-font accordion-header"
              onClick={() => togglePanel(panelId)}
            >
              <div className={`panel_${index + 1} accordion-header-container`}>
                <i className={`fas fa-chevron-down chevron ${isActive ? 'rotate' : ''}`}></i>
                <h5 className="play-font accordion-label">{section}</h5>
                <span className="dot"></span>
                <div className="divider-line"></div>
              </div>
            </div>

            {/* Render the accordion content if section is active */}
            <div className={`collapsible ${isActive ? 'active' : ''}`}>
              {isActive && <AccordionContent items={items} index={index} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
