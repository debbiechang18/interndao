import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getUserData } from './UserData';
import "../styles/ProfilePage.css";
import link from "../assets/link-icon.png";
import GetText from "./GetText";
import UserAwards from "./UserAwards";
import BackButton from "./BackButton"

const MobileProfilePage = () => {
    const { username, section } = useParams(); // Added section parameter to useParams
    const [user, setUser] = useState(null);
    const [awards, setAwards] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const userData = await getUserData(username);
          setUser(userData);
          setAwards(userData.awards);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
  
      fetchData();
    }, [username]);
  
    if (!user) {
      // If user is still null, display a loading message or return null to avoid rendering anything until data is fetched.
      return <p>Loading...</p>;
    }
  
    const photoPath = `/${user.photo}`;
    const instagramUrl = `https://instagram.com/${user.instagram}`.replace('@',"");
    const twitterUrl = `https://twitter.com/${user.twitter}`.replace('@',"");

    return (
        <>
        <BackButton section={section} activePanel={user.section} /> {/* Pass section and activePanel */}
        
        <div className="profile-container">
            <div className="profile-wrapper">
                <img src={photoPath} alt={user.name} className="profile-img" />
                <ul className="social-links">
                    <li className="social-link play-font">
                        <a href={instagramUrl} className="href">
                            <i className="fa-brands fa-instagram profile-page-icons" />
                        </a>
                    </li>
                    <li className="social-link play-font">
                        <a href={twitterUrl} className="href">
                            <i className="profile-page-icons fa-brands fa-twitter" />
                        </a>
                    </li>
                    <li className="social-link play-font">
                        <a href={user.website} className="href">
                            <img src={link} className="link-icon profile-page-icons" alt="link-icon" />
                        </a>
                    </li>
                    <li className="social-link play-font">
                        <a href={user.link2} className="href">
                            <img src={link} className="link-icon profile-page-icons" alt="link-icon" />
                        </a>
                    </li>
                </ul>

                <h2 className="play-font profile-page-username">{user.name}</h2>
                <h3 className="role-title play-font link-text">{user.title}</h3>
                <div className="bio-text-container">
                    <GetText filename={`/${user.bio}`} />
                </div>
            </div>
        </div>
        
        <div className="user-awards-container">
            <UserAwards awards={user.awards} />
        </div>
        </>
    );
};

export default MobileProfilePage;
