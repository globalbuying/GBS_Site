import React, { useState, useEffect } from 'react';
import gbsLogo from '../assets/gbs-logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src={gbsLogo} alt="Global Buying Solutions" />
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          <li><a href="#zarify" onClick={(e) => handleNav(e, 'zarify')}>Zarify</a></li>
          <li><a href="#capify" onClick={(e) => handleNav(e, 'capify')}>Capify</a></li>
          <li><a href="#technology" onClick={(e) => handleNav(e, 'technology')}>Technology</a></li>
          <li><a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="navbar__cta">Get in Touch</a></li>
        </ul>

        {/* Mobile Toggle */}
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

      {/* Mobile Menu */}
      <div className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`}>
        <a href="#zarify" onClick={(e) => handleNav(e, 'zarify')}>Zarify</a>
        <a href="#capify" onClick={(e) => handleNav(e, 'capify')}>Capify</a>
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
          height: 50px;
          width: auto;
          display: block;
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
          color: var(--text-secondary);
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
          background: var(--color-zarify);
          transition: width 0.3s ease;
          border-radius: 1px;
        }

        .navbar__links a:hover {
          color: var(--text-primary);
        }
        .navbar__links a:hover::after {
          width: 100%;
        }

        /* CTA Button */
        .navbar__cta {
          padding: 0.55rem 1.25rem !important;
          border: 1px solid var(--color-zarify) !important;
          border-radius: 4px;
          color: var(--color-zarify) !important;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
        }
        .navbar__cta::after {
          display: none !important;
        }
        .navbar__cta:hover {
          background: var(--color-zarify) !important;
          color: var(--bg-primary) !important;
          box-shadow: 0 0 20px var(--color-zarify-glow);
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
          background: var(--text-primary);
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
          color: var(--text-secondary);
          padding: 0.85rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: color 0.2s ease;
        }
        .navbar__mobile a:last-child {
          border-bottom: none;
        }
        .navbar__mobile a:hover {
          color: var(--text-primary);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .navbar__links {
            display: none;
          }
          .navbar__hamburger {
            display: flex;
          }
          .navbar__mobile {
            display: flex;
          }
          .navbar__logo img {
            height: 34px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
