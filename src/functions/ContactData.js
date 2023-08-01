import { useState, useEffect } from 'react';
import axios from 'axios';

const useContactData = () => {
  // State to hold the fetched button data
  const [buttons, setButtons] = useState([]);

  // State to track the loading status while fetching data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This function fetches button data from the API endpoint
    const fetchButtonData = async () => {
      try {
        // Send a GET request to the API to fetch button data
        const response = await axios.get('https://strapi-production-5302.up.railway.app/api/contact-buttons');

        // Sort the buttons by their id attribute
        const sortedButtons = response.data.data.sort((a, b) => a.id - b.id);

        // Update the 'buttons' state with the sorted data
        setButtons(sortedButtons);

        // Set 'loading' to 'false' once the data is successfully fetched
        setLoading(false);
      } catch (error) {
        // If there's an error during the fetch, handle it here
        console.error('Error fetching button data:', error);

        // Set 'loading' to 'false' even if there's an error, so it doesn't stay in a loading state forever
        setLoading(false);
      }
    };

    // Call the function to fetch button data when the component using this hook mounts
    fetchButtonData();
  }, []);

  // Return an object containing the fetched button data and loading status
  return { buttons, loading };
};

export default useContactData;
