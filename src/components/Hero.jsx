import React from 'react';
import deskmanImg from '../assets/hero-deskman.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__main container">
        <div className="hero__content">
          <h1 className="hero__title">
            The Financial Engine Fueling Lower Landed Costs and Higher Liquidity.
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
            Call to action <span>&gt;</span>
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
          background: #F5F5F5; /* Professional light gray background */
          color: #000;
          overflow: hidden;
        }

        .hero__main {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 4rem;
          padding: 80px 2rem;
          min-height: 60vh;
          align-items: center;
        }

        .hero__content {
          max-width: 650px;
        }

        .hero__title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 2rem;
          color: #111;
        }

        .hero__sub {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          color: #333;
        }

        .hero__sub p {
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .hero__list {
          list-style: none;
          padding: 0;
        }

        .hero__list li {
          margin-bottom: 0.6rem;
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
          padding: 0.85rem 2.25rem;
          border: 2px solid #000;
          background: #fff;
          color: #000;
          font-weight: 700;
          border-radius: 6px;
          transition: all 0.3s ease;
          font-size: 1.1rem;
          font-family: var(--font-display);
        }

        .hero__cta span {
          margin-left: 10px;
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

        /* Hero Image - Matching the grayscale professional aesthetic */
        .hero__visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero__image-container {
          width: 100%;
          max-width: 600px;
          position: relative;
        }

        .hero__image {
          width: 100%;
          height: auto;
          display: block;
          /* If the user wants to mimic the PNG opacity/layering of the reference */
          filter: drop-shadow(0 20px 50px rgba(0,0,0,0.1));
          transition: transform 0.5s ease;
        }

        .hero__image:hover {
          transform: scale(1.02);
        }

        /* Bottom Banner */
        .hero__banner {
          background: #0D212A; /* Dark premium teal */
          color: #fff;
          padding: 4.5rem 0;
          text-align: center;
        }

        .hero__banner p {
          max-width: 1050px;
          margin: 0 auto;
          font-size: 1.2rem;
          line-height: 1.8;
          opacity: 0.95;
          font-weight: 400;
        }

        @media (max-width: 1024px) {
          .hero__main {
            gap: 2rem;
          }
        }

        @media (max-width: 900px) {
          .hero__main {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 60px 2rem;
          }
          .hero__visual {
            order: -1;
            margin-bottom: 3rem;
          }
          .hero__content {
             margin: 0 auto;
          }
          .hero__list {
            display: inline-block;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
