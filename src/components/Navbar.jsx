import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoForLight from '../assets/logo-for-light.png';
import logoForDark from '../assets/logo-for-dark.png';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Force dark logo (white version) for the permanent dark navbar
  const currentLogo = logoForDark;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname !== '/') {
      // If not on home page, navigate home first then jump to ID
      navigate('/#' + id);
      // Let the home page handle the scroll on mount if we want, 
      // but standard anchor jump is usually handled by browser if we use /#id
      // For smoother effect we can manually scroll after navigation
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={currentLogo} alt="Global Buying Solutions" />
          <span className="navbar__logo-text">Global Buying Solutions Limited</span>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          <li><Link to="/" onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</Link></li>
          <li><Link to="/zarify" onClick={() => setMobileOpen(false)}>Zarify</Link></li>
          <li><Link to="/capify" onClick={() => setMobileOpen(false)}>Capify</Link></li>
          <li><Link to="/yuanify" onClick={() => setMobileOpen(false)}>Yuanify</Link></li>
          <li><a href="#technology" onClick={(e) => handleNav(e, 'technology')}>Technology</a></li>
          <li>
            <button
              className="navbar__theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                /* Sun icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                /* Moon icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </li>
          <li><a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="navbar__cta">Get in Touch</a></li>
        </ul>

        {/* Mobile Toggle */}
        <div className="navbar__mobile-right">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            className={`navbar__hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`}>
        <Link to="/" onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</Link>
        <Link to="/zarify" onClick={() => setMobileOpen(false)}>Zarify</Link>
        <Link to="/capify" onClick={() => setMobileOpen(false)}>Capify</Link>
        <Link to="/yuanify" onClick={() => setMobileOpen(false)}>Yuanify</Link>
        <a href="#technology" onClick={(e) => handleNav(e, 'technology')}>Technology</a>
        <a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="navbar__cta">Get in Touch</a>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          /* Forced Dark Aesthetic */
          background: rgba(11, 17, 32, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid transparent;
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .navbar--scrolled {
          background: rgba(11, 17, 32, 0.92);
          border-bottom-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }

        /* Logo */
        .navbar__logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          transition: opacity 0.2s ease;
        }
        .navbar__logo:hover {
          opacity: 0.85;
        }
        .navbar__logo img {
          height: 55px;
          width: auto;
          display: block;
        }
        .navbar__logo-text {
          margin-left: 1.25rem;
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: #F8FAFC; /* Dark mode text primary */
          letter-spacing: 0.02em;
          white-space: nowrap;
        }
        @media (max-width: 900px) {
          .navbar__logo-text {
            font-size: 0.9rem;
            margin-left: 0.75rem;
          }
        }
        @media (max-width: 600px) {
          .navbar__logo-text {
            display: none;
          }
        }

        /* Desktop Links */
        .navbar__links {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .navbar__links a {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #94A3B8; /* Dark mode text secondary */
          transition: color 0.25s ease;
          position: relative;
        }

        .navbar__links a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: #3B82F6; /* Fixed Blue Accent */
          transition: width 0.3s ease;
          border-radius: 1px;
        }

        .navbar__links a:hover {
          color: #F8FAFC; /* Dark mode text primary */
        }
        .navbar__links a:hover::after {
          width: 100%;
        }

        /* Theme Toggle */
        .navbar__theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #1E293B; /* Dark mode bg tertiary */
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94A3B8;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .navbar__theme-toggle:hover {
          color: #3B82F6;
          border-color: #3B82F6;
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
          transform: rotate(15deg);
        }

        /* CTA Button */
        .navbar__cta {
          padding: 0.55rem 1.25rem !important;
          border: 1px solid #3B82F6 !important;
          border-radius: 4px;
          color: #3B82F6 !important;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
        }
        .navbar__cta::after {
          display: none !important;
        }
        .navbar__cta:hover {
          background: #3B82F6 !important;
          color: #0B1120 !important;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }

        /* Mobile right group */
        .navbar__mobile-right {
          display: none;
          align-items: center;
          gap: 0.75rem;
        }

        /* Hamburger */
        .navbar__hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 28px;
          height: 28px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }
        .navbar__hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background: #F8FAFC;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .navbar__hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .navbar__hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .navbar__hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Mobile Menu */
        .navbar__mobile {
          display: none;
          flex-direction: column;
          padding: 0 2rem 1.5rem;
          gap: 0;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.4s ease;
          background: rgba(11, 17, 32, 0.95);
        }
        .navbar__mobile--open {
          max-height: 300px;
          padding-bottom: 1.5rem;
        }
        .navbar__mobile a {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #94A3B8;
          padding: 0.85rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: color 0.2s ease;
        }
        .navbar__mobile a:last-child {
          border-bottom: none;
        }
        .navbar__mobile a:hover {
          color: #F8FAFC;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .navbar__links {
            display: none;
          }
          .navbar__mobile-right {
            display: flex;
          }
          .navbar__hamburger {
            display: flex;
          }
          .navbar__mobile {
            display: flex;
          }
          .navbar__logo img {
            height: 38px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
