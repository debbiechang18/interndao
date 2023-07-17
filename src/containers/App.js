import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import '../styles/App.css';
import MobileHeader from '../components/MobileHeader';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Interns from '../pages/Interns';
import Consulting from '../pages/Consulting';
import Contact from '../pages/Contact';
import Research from '../pages/Research';
import Tools from '../pages/Tools';
import ProfilePage from '../components/ProfilePage';
import { useMediaQuery } from 'react-responsive';
import ScrollTopButton from "../components/ScrollTopButton";
import ParallaxContainer from '../components/ParallaxContainer'


function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isParallax = location.pathname === '/parallax';
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <div className={`app-container ${isHomePage ? 'app-container-home' : ''}`}>
        {isMobile && (
          <header className="main-head">
            <MobileHeader menuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
          </header>
        )}

        <div className="scroll-top-container"><ScrollTopButton /></div>

        <aside className={`side ${isHomePage ? 'home-side' : ''}`}>
          <Nav />
        </aside>

        <article className={`content ${isParallax ? 'parallax-content' : ''}`}>
          {isMenuOpen && (<div
            className={`dark-overlay ${isMenuOpen ? 'visible' : ''}`}
            onClick={toggleMenu}
          ></div>)}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/interns" element={<Interns />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/research" element={<Research />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/interns/:username" element={<ProfilePage />} />
            <Route path="/parallax" element={<ParallaxContainer />} />
          </Routes>
        </article>

        {isMobile && (
          <footer className="main-footer">
            <Footer />
          </footer>
        )}
      </div>
  );
}

export default App;
