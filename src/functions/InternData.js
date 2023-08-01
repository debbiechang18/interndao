import { useState, useEffect } from 'react';
import axios from 'axios';

const useInternData = () => {
  // State to hold the fetched intern data
  const [interns, setInterns] = useState([]);

  // State to track the loading status while fetching data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This function fetches intern data from the API endpoint
    const fetchInternsData = async () => {
      try {
        // Send a GET request to the API to fetch intern data
        const response = await axios.get('https://strapi-production-5302.up.railway.app/api/members?populate=*');

        // Update the 'interns' state with the fetched data from the response
        setInterns(response.data.data);

        // Set 'loading' to 'false' once the data is successfully fetched
        setLoading(false);
      } catch (error) {
        // If there's an error during the fetch, handle it here
        console.error('Error fetching intern data:', error);

        // Set 'loading' to 'false' even if there's an error, so it doesn't stay in a loading state forever
        setLoading(false);
      }
    };

    // Call the function to fetch intern data when the component using this hook mounts
    fetchInternsData();
  }, []);
  // Return an object containing the fetched intern data and loading status
  return { interns, loading };
};

export default useInternData;
