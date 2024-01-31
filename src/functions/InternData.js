import { useState, useEffect } from "react";
import axios from "axios";
import members from "../data/members"; // Make sure this path is correct

const useInternData = () => {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);

  // Use 'members' directly as the default dataset
  const defaultInternData = members;

  useEffect(() => {
    const fetchInternsData = async () => {
      try {
        const response = await axios.get(
          "https://strapi-production-b624.up.railway.app/api/members?populate=*"
        );
        setInterns(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching intern data:", error);
        setInterns(defaultInternData); // Set to members data on error
        setLoading(false);
      }
    };

    fetchInternsData();
  }, []);

  return { interns, loading };
};

export default useInternData;
