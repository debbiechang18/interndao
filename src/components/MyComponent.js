import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/MyComponent.css';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/members');
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Strapi API:</h1>
      <ul className="strapi_data">
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.attributes.name}</h3>
            <p>{item.attributes.username}</p>
            <p>{item.attributes.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
