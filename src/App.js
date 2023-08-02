import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Interns from "./pages/Interns";
import Consulting from "./pages/Consulting";
import Contact from "./pages/Contact";
import Research from "./pages/Research";
import Tools from "./pages/Tools";
import ProfilePage from "./components/ProfilePage";
import { useMediaQuery } from "react-responsive";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import InformationSecurity from "./pages/InformationSecurity";
import ComingSoon from "./components/ComingSoon"

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll to the top of the page whenever the location changes
    window.scrollTo(0, 0);
  }, [location]);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      {isMobile && (
        <header className="main-head">
          <Header menuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </header>
      )}

      {!isMobile && (
        <aside className={`side ${isHomePage ? "home-side" : ""}`}>
          <Nav />
        </aside>
      )}

      <article className={`content ${isHomePage ? "home-content" : ""}`}>
        {isMobile && isMenuOpen && (
          <div className="dark-overlay" onClick={toggleMenu}></div>
        )}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/interns" element={<Interns />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/research" element={<Research />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/interns/:username" element={<ProfilePage />} />
          <Route path="/apply" element={<ComingSoon />} />
          <Route path="/terms-of-service" element={<ComingSoon />} />
          <Route path="/privacy-policy" element={<ComingSoon />} />
          <Route path="/information-security-statement" element={<ComingSoon />} />
        </Routes>
      </article>

      {isMobile && (
        <footer className="main-footer">
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default App;
