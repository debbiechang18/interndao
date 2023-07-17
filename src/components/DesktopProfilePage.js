import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getUserData } from './UserData';
import "../styles/ProfilePage.css";
import link from "../assets/link-icon.png";
import GetText from "./GetText";
import UserAwards from "./UserAwards";
import BackButton from "./BackButton";

const DesktopProfilePage = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
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

    // Function to handle the click event when the back button is clicked
    const handleBack = () => {
      // Navigate to the previous page with the active panel as state
      navigate(-1, { state: { activePanel: user.activePanel } });
    };

    return (
      <>
        <BackButton section={user.section} activePanel={user.activePanel} />

        <div className="desktop-profile-container">
          <div className="profile-wrapper">
            <div className="left-panel">
              <img src={photoPath} alt={user.name} className="profile-img" />
              <div className="links-section">
                <ul className="social-links">
                  <li className="social-link">
                    <a href={instagramUrl} className="href">
                      <i className="fa-brands fa-instagram profile-page-icons" />
                      <h6 className="link-text play-font">{user.instagram}</h6>
                    </a>
                  </li>
                  <li className="social-link">
                    <a href={twitterUrl} className="href">
                      <i className="profile-page-icons fa-brands fa-twitter" />
                      <h6 className="link-text play-font">{user.twitter}</h6>
                    </a>
                  </li>
                  <li className="social-link">
                    <a href={user.website} className="href">
                      <img src={link} className="link-icon profile-page-icons" alt="link-icon" />
                      <h6 className="link-text play-font">{user.website}</h6>
                    </a>
                  </li>
                  <li className="social-link">
                    <a href={user.link2} className="href">
                      <img src={link} className="link-icon profile-page-icons" alt="link-icon" />
                      <h6 className="link-text play-font">{user.link2}</h6>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-panel">
              <h2 className="play-font profile-page-username">{user.name}</h2>
              <h4 className="role-title play-font">{user.title}</h4>
              <div className="bio-text-container">
                <p className="bio-text trispace-font">
                  <GetText filename={`/${user.bio}`} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="user-awards-container">
          <UserAwards awards={awards} />
        </div>

      </>
    );
};

export default DesktopProfilePage;
