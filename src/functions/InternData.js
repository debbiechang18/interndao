import { useState, useEffect } from 'react';
import axios from 'axios';

const useInternData = () => {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInternsData = async () => {
      try {
        const response = await axios.get('https://strapi-production-5302.up.railway.app/api/members?populate=*');
        setInterns(response.data.data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching intern data:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };
    fetchInternsData();
  }, []);

  // This useEffect will log the updated interns state whenever it changes
  useEffect(() => {
    console.log(interns);
  }, [interns]);

  // Return an object with the fetched interns data and loading status
  return { interns, loading };
};

export default useInternData;
