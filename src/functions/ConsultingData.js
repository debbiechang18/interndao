import { useState, useEffect } from 'react';
import axios from 'axios';

const useConsultingData = () => {
  const [consultingData, setConsultingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConsultingData = async () => {
      try {
        const apiUrls = {
          consultingCards: 'https://strapi-production-5302.up.railway.app/api/consulting-cards?populate=*',
          consultingPosts: 'https://strapi-production-5302.up.railway.app/api/consulting-posts',
        };

        const responseCards = await axios.get(apiUrls.consultingCards);
        const responsePosts = await axios.get(apiUrls.consultingPosts);

        const standardizedDataCards = responseCards.data.data.map(item => ({
          attributes: 
            {
              type: 'card',
              clientName: item.attributes.clientName,
              thumbnail: item.attributes.photo.data.attributes.formats.thumbnail.url,
              section: item.attributes.section
          }
        }));

        const standardizedDataPosts = responsePosts.data.data.map(item => ({
          attributes: {
            type: 'post',
            section: item.attributes.section,
            header: item.attributes.header,
            text: item.attributes.text
          }
        }));

        const combinedData = [...standardizedDataCards, ...standardizedDataPosts];

        setConsultingData(combinedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching consulting data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchConsultingData();
  }, []);

  return { consultingData, loading, error };
};

export default useConsultingData;
