import React from 'react';
import { useParams } from 'react-router-dom';
import DesktopProfilePage from './DesktopProfilePage';
import MobileProfilePage from './MobileProfilePage';
import TabletProfilePage from './TabletProfilePage';
import useInternData from '../functions/InternData'; // Import the custom hook
import { useMediaQuery } from 'react-responsive';

const ProfilePage = () => {
  const isMobile = useMediaQuery({maxWidth: 767});
  const isTablet = useMediaQuery({maxWidth: 991});
  const { username } = useParams(); // This will extract the 'username' parameter from the URL
  const { interns, loading } = useInternData(); // Call the custom hook to get the fetched data

  // Find the intern with the matching username from the fetched data
  const intern = interns.find((intern) => intern.attributes.username === username);

  // Handle the loading and error states while fetching data
  if (loading) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }

  if (!intern) {
    return <div>Intern not found</div>; // Display a message if the intern with the provided username is not found
  }

  // Render the profile page components with the fetched 'intern' data
  return (
    <div className="profile-page-container">
      {isMobile ? <MobileProfilePage intern={intern} /> : 
      isTablet ? <TabletProfilePage intern={intern} /> : 
      <DesktopProfilePage intern={intern} />}
    </div>
  );
  
};

export default ProfilePage;
