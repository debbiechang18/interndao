import React from "react";
import '../styles/MobileProfilePage.css'
import linkIcon from '../assets/link-icon.png'
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// Define the URL for the filler image
const FILLER_IMAGE_URL = 'logo512.png';

const MobileProfilePage = ({ intern }) => {

    const section = intern.attributes.section.replace(" ", "-");
    const profilePhotoUrl = intern.attributes.photo?.data?.attributes?.url || FILLER_IMAGE_URL;

    const name = intern?.attributes?.name
    const title = intern?.attributes?.title
  
    const twitterUrl = intern?.attributes?.twitter ? `https://twitter.com/${intern?.attributes?.twitter}` : null;

    const instagramUrl = intern?.attributes?.instagram ? `https://instagram.com/${intern?.attributes?.twitter}` : null;

    const website = intern?.attributes?.website

    const link2 = intern?.attributes?.link2

    const userBio = intern?.attributes?.bio

    const awards = intern?.attributes?.awards


    return (
        <>
        <div className={`profile-wrapper ${section}`}>
              <img src={profilePhotoUrl} alt={intern?.attributes?.name} className="profile-img" />
              <div className="social-links">
                  {twitterUrl && (
                  <a href={ twitterUrl }className="social-link">
                      <i class="fab fa-twitter social-icons" />
                  </a>
                  )}

                  {instagramUrl && (
                  <a href={ instagramUrl } className="social-link">
                      <i class="fab fa-instagram social-icons" />
                  </a>
                  )}               
                  {website && (
                  <a href={ website } className="social-link">
                      <img className="link-icon" src={linkIcon} alt="link-icon" />
                  </a>
                  )}   
                  {link2 && (
                  <a href={ link2 } className="social-link">
                      <img className="link-icon" src={linkIcon} alt="link-icon"/>
                  </a>
                  )}
                  
              </div>
              <h3 className="play-font display-name">{ name }</h3>
                <h5 className="play-font role-title">{ title }</h5>
                <ReactMarkdown className="trispace-font user-bio">{ userBio }</ReactMarkdown>
            </div>

        {awards && awards.length > 0 && (
            <>
              {awards.map((award, index) => (
                <div className="awards-wrapper" key={index}>
                  <div className="user-award">
                    <span role="img" aria-label="trophy" className="trophy-emoji">&#x1F3C6;</span>
                    <div className="award-label">
                        <h5 className="play-font award-date">{award.date}</h5><br />
                        <h5 className="play-font award-name">'{award.award}'</h5>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

        </>
    );
    };

export default MobileProfilePage;
