import React from 'react';
import { Link } from 'react-router-dom';
import zarifyImg from '../assets/zarify.png';

const ZarifySection = () => {
  return (
    <section id="zarify" className="product-section zarify-bg">
      <div className="container">
        <div className="product-layout">
          <div className="product-content">
            <h2 className="product-title">
              <span className="zarify-title-text">Zarify</span>
              <span className="product-tagline">Optimise Procurement</span>
            </h2>
            <p className="product-description">
              The gateway to compliant, cost-effective global trade. Zarify empowers South African importers to settle foreign invoices in ZAR while optimizing customs and compliance.
            </p>

            <ul className="summary-benefits">
              <li><span className="bullet-check">✓</span> Avoid SARS Exchange Rate Uplifts</li>
              <li><span className="bullet-check">✓</span> Simplify ZAR-Based Settlements</li>
              <li><span className="bullet-check">✓</span> Streamlined Compliance & KYC</li>
            </ul>

            <Link to="/zarify" className="btn-learn-more zarify-btn">Learn More About Zarify</Link>
          </div>

          <div className="product-visual">
            <div className="image-wrapper zarify-glow">
              <img src={zarifyImg} alt="Zarify Secure Trade Flow" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .product-section {
          padding: var(--section-spacing) 0;
          position: relative;
        }

        .zarify-bg {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .product-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .product-layout {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

        .product-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
        }

        .zarify-title-text {
          color: var(--color-capify); /* Unify with Capify blue */
        }

        .product-tagline {
          font-size: 0.5em;
          color: var(--text-muted);
          font-family: var(--font-body);
          margin-top: 0.5rem;
        }

        .product-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 500px;
        }

        .summary-benefits {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
        }

        .summary-benefits li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .bullet-check {
          color: var(--color-capify);
          font-weight: bold;
        }

        .btn-learn-more {
          display: inline-block;
          padding: 1rem 2.5rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 4px;
          transition: all 0.3s;
          color: white;
          text-align: center;
          text-decoration: none;
        }

        .zarify-btn {
          background: var(--color-capify); /* match unified blue */
          box-shadow: 0 4px 20px var(--color-capify-glow);
        }

        .zarify-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px var(--color-capify-glow);
          filter: brightness(1.1);
        }

        .image-wrapper {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(59, 130, 246, 0.2);
          position: relative;
        }
        
        .image-wrapper img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }
        
        .image-wrapper:hover img {
          transform: scale(1.03);
        }
        
        .zarify-glow {
           box-shadow: 0 0 60px -20px var(--color-capify-glow);
        }
      `}</style>
    </section>
  );
};

export default ZarifySection;
