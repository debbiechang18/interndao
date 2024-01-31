import { useState, useEffect } from "react";
import axios from "axios";

const useConsultingData = () => {
  const [consultingData, setConsultingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const FILLER_IMAGE_URL = "logo-icon-pink.svg";

  useEffect(() => {
    const fetchConsultingData = async () => {
      try {
        const apiUrls = {
          consultingCards:
            "https://strapi-production-b624.up.railway.app/api/Consulting-cards?populate=*",
          consultingPosts:
            "https://strapi-production-b624.up.railway.app/api/Consulting-posts",
        };

        const responseCards = await axios.get(apiUrls.consultingCards);
        const responsePosts = await axios.get(apiUrls.consultingPosts);

        const standardizedDataCards = responseCards.data.data.map((item) => ({
          attributes: {
            type: "card",
            clientName: item.attributes.clientName,
            thumbnail:
              item.attributes.photo.data.attributes.formats.thumbnail.url ||
              FILLER_IMAGE_URL,
            section: item.attributes.section,
          },
        }));

        const standardizedDataPosts = responsePosts.data.data.map((item) => ({
          attributes: {
            type: "post",
            section: item.attributes.section,
            header: item.attributes.header,
            text: item.attributes.text,
          },
        }));

        const combinedData = [
          ...standardizedDataCards,
          ...standardizedDataPosts,
        ];

        setConsultingData(combinedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching consulting data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchConsultingData();
  }, []);

  return { consultingData, loading, error };
};

export default useConsultingData;
