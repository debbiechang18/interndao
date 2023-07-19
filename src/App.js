import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import './index.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Interns from './pages/Interns'
import Consulting from './pages/Consulting'
import Contact from './pages/Contact'
import Research from './pages/Research'
import Tools from './pages/Tools'
import ProfilePage from './components/ProfilePage'
import { useMediaQuery } from 'react-responsive'

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <div className="app-container">
        {isMobile && (
          <header className="main-head">
            <Header menuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
          </header>
        )}

        <aside className={`side ${isHomePage ? 'home-side' : ''}`}>
          <Nav />
        </aside>

        <article className={`content ${isHomePage ? 'home-content' : ''}`}>
          {isMenuOpen && (
          <div
            className={`dark-overlay ${isMenuOpen ? 'visible' : ''}`}
            onClick={toggleMenu}
          >
          </div>)}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/interns" element={<Interns />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/research" element={<Research />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/interns/:username" element={<ProfilePage />} />
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