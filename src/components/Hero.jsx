import React from 'react';
import deskmanImg from '../assets/hero-deskman2.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__main container">
        <div className="hero__content">
          <h1 className="hero__title">
            The Procurement Engine Fueling Lower Landed Costs and Higher Liquidity.
          </h1>

          <div className="hero__sub">
            <p>We help importers to</p>
            <ul className="hero__list">
              <li>significantly reduce landed costs</li>
              <li>build offshore reserves</li>
              <li>unlock cash tied up in working capital</li>
            </ul>
          </div>

          <a href="#contact" className="hero__cta">
            Explore GBS Solutions <span>&gt;</span>
          </a>
        </div>

        <div className="hero__visual">
          <div className="hero__image-container">
            <img src={deskmanImg} alt="Business Professional working on laptop" className="hero__image" />
          </div>
        </div>
      </div>

      <div className="hero__banner">
        <div className="container">
          <p>
            Global Buying Solutions partners with South African import business owners to redesign their trade
            structures—lowering total import costs while creating offshore capital reserves that can be
            deployed to extend supplier terms, protect margins, and increase financial control.
          </p>
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: 80px; /* Navbar height */
          background: var(--bg-primary);
          color: var(--text-primary);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .hero__main {
          flex: 1;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 4rem;
          padding: 40px 2rem;
          align-items: center;
          max-width: var(--max-width);
          margin: 0 auto;
        }

        .hero__content {
          max-width: 650px;
        }

        .hero__title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .hero__sub {
          font-size: 1.15rem;
          margin-bottom: 2rem;
          color: var(--text-secondary);
        }

        .hero__sub p {
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .hero__list {
          list-style: none;
          padding: 0;
        }

        .hero__list li {
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1.5rem;
          font-weight: 400;
        }

        .hero__list li::before {
          content: '-';
          position: absolute;
          left: 0;
          font-weight: 600;
        }

        .hero__cta {
          display: inline-block;
          padding: 0.8rem 2rem;
          border: 2px solid #000;
          background: #fff;
          color: #000;
          font-weight: 700;
          border-radius: 6px;
          transition: all 0.3s ease;
          font-size: 1.05rem;
          font-family: var(--font-display);
        }

        .hero__cta span {
          margin-left: 8px;
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .hero__cta:hover {
          background: #000;
          color: #fff;
          transform: translateY(-2px);
        }

        .hero__cta:hover span {
          transform: translateX(4px);
        }

        /* Hero Image */
        .hero__visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero__image-container {
          width: 100%;
          max-width: 550px;
          position: relative;
        }

        .hero__image {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 15px 35px rgba(0,0,0,0.1));
          transition: transform 0.5s ease;
        }

        /* Bottom Banner - Condensed to ensure fold visibility */
        .hero__banner {
          background: #0B3041;
          color: #fff;
          padding: 3rem 0;
          text-align: center;
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .hero__banner p {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
          font-size: 1.1rem;
          line-height: 1.7;
          opacity: 0.95;
          font-weight: 400;
        }

        @media (max-width: 1024px) {
          .hero__main {
            gap: 2rem;
          }
        }

        @media (max-width: 900px) {
          .hero {
            height: auto;
            min-height: auto;
          }
          .hero__main {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 40px 2rem;
          }
          .hero__visual {
            order: -1;
            margin-bottom: 2rem;
          }
          .hero__content {
             margin: 0 auto;
          }
          .hero__list {
            display: inline-block;
            text-align: left;
          }
          .hero__banner {
            padding: 2.5rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
