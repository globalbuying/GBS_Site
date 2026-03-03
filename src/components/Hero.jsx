import React from 'react';
import heroVisionImg from '../assets/hero-vision.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__main container">
        <div className="hero__content">
          <h1 className="hero__title">
            We help importers to
          </h1>

          <div className="hero__pillars">
            <div className="hero__pillar">
              <div className="hero__pillar-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 6l-9.5 9.5-5-5L1 18" />
                  <path d="M17 6h6v6" />
                </svg>
              </div>
              <span>Significantly reduce landed costs</span>
            </div>
            <div className="hero__pillar">
              <div className="hero__pillar-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span>Build offshore reserves</span>
            </div>
            <div className="hero__pillar">
              <div className="hero__pillar-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.778-7.778z" />
                  <path d="M12 12l8.5 8.5M20 10l2 2m-2 0l2-2" />
                </svg>
              </div>
              <span>Unlock cash tied up in working capital</span>
            </div>
          </div>

          <p className="hero__tagline">
            The Procurement Engine Fueling Lower Landed Costs and Higher Liquidity.
          </p>

          <a href="#why-gbs" className="hero__cta">
            Explore GBS Solutions <span>&gt;</span>
          </a>
        </div>

        <div className="hero__visual">
          <div className="hero__image-container">
            <img src={heroVisionImg} alt="GBS Global Trade Vision" className="hero__image" />
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

        .hero__intro {
          font-size: 1.1rem;
          font-weight: 600;
          color: #E2AD2C; /* Gold/Primary accent */
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }

        .hero__title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 850;
          line-height: 1.05;
          margin-bottom: 2.5rem;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          background: var(--hero-title-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .hero__pillars {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 3rem;
        }

        .hero__pillar {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--hero-pillar-text);
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .hero__pillar:nth-child(1) { animation-delay: 0.4s; }
        .hero__pillar:nth-child(2) { animation-delay: 0.5s; }
        .hero__pillar:nth-child(3) { animation-delay: 0.6s; }

        .hero__pillar-icon-box {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--hero-pillar-icon-bg);
          color: #E2AD2C;
          border-radius: 12px;
          flex-shrink: 0;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .hero__pillar:hover .hero__pillar-icon-box {
          background: #E2AD2C;
          color: #fff;
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 8px 20px rgba(226, 173, 44, 0.3);
        }

        .hero__pillar-icon-box svg {
          width: 22px;
          height: 22px;
        }

        .hero__tagline {
          font-size: 1.15rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 520px;
          margin-bottom: 2.5rem;
          padding-left: 1.5rem;
          border-left: 3px solid var(--hero-tagline-border);
          opacity: 0;
          animation: fadeIn 1s ease-out 0.8s forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .hero__cta {
          display: inline-block;
          padding: 0.8rem 2rem;
          border: 2px solid var(--hero-cta-border);
          background: var(--hero-cta-bg);
          color: var(--hero-cta-text);
          font-weight: 700;
          border-radius: 6px;
          transition: all 0.3s ease;
          font-size: 1.05rem;
          font-family: var(--font-display);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .hero__cta span {
          margin-left: 8px;
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .hero__cta:hover {
          background: #000;
          color: #fff;
          border-color: #000;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
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
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(226, 173, 44, 0.2);
          box-shadow: 0 0 50px -10px rgba(226, 173, 44, 0.15);
          transition: all 0.5s ease;
        }

        .hero__image-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 60px -15px rgba(226, 173, 44, 0.3);
          border-color: rgba(226, 173, 44, 0.4);
        }

        .hero__image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .hero__image-container:hover .hero__image {
          transform: scale(1.04);
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
