import React from 'react';
import zarifyImg from '../assets/zarify.png';

const ZarifySection = () => {
  return (
    <section id="zarify" className="product-section zarify-bg">
      <div className="container">
        <div className="product-layout">
          <div className="product-content">
            <h2 className="product-title">
              <span className="zarify-text">Zarify</span>
              <span className="product-tagline">Intelligent Procurement</span>
            </h2>
            <p className="product-description">
              The gateway to compliant, cost-effective global trade. Zarify empowers South African importers to settle foreign invoices in ZAR while optimizing customs and compliance.
            </p>

            <div className="process-box">
              <h4 className="process-title">How It Works</h4>
              <div className="process-step">
                <span className="step-number">01</span>
                <p>We invoice your local entity in ZAR.</p>
              </div>
              <div className="process-step">
                <span className="step-number">02</span>
                <p>We settle your foreign supplier in their currency.</p>
              </div>
              <div className="process-step">
                <span className="step-number">03</span>
                <p>Goods ship directly to you, fully compliant.</p>
              </div>
            </div>

            <ul className="feature-list">
              <li><span className="check">✓</span> <span className="text">Avoid SARS Exchange Rate Uplifts</span></li>
              <li><span className="check">✓</span> <span className="text">Simplify Foreign Payments</span></li>
              <li><span className="check">✓</span> <span className="text">No Extensive KYC Required</span></li>
            </ul>

            <a href="#contact" className="btn-learn-more zarify-btn">Enquire About Zarify</a>
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
           .process-box {
            text-align: left;
           }
        }

        .product-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
        }

        .zarify-text {
          color: var(--color-zarify);
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
          margin-bottom: 2rem;
          max-width: 500px;
        }
        
        .process-box {
          background: rgba(20, 184, 166, 0.05);
          border-left: 3px solid var(--color-zarify);
          padding: 1.5rem;
          margin-bottom: 2rem;
          border-radius: 0 8px 8px 0;
        }
        
        .process-title {
          color: var(--color-zarify);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.9rem;
        }
        
        .process-step {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.8rem;
          align-items: baseline;
        }
        .process-step:last-child { margin-bottom: 0; }
        
        .step-number {
          font-family: var(--font-display);
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        .feature-list {
          list-style: none;
          margin: 0 0 2rem 0;
        }

        .feature-list li {
          margin-bottom: 0.8rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1rem;
          color: var(--text-secondary);
        }

        .check {
          color: var(--color-zarify);
          font-weight: bold;
        }

        .btn-learn-more {
          display: inline-block;
          padding: 1rem 2.5rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 4px;
          transition: all 0.3s;
          color: var(--bg-primary);
          text-align: center;
        }

        .zarify-btn {
          background: var(--color-zarify);
          box-shadow: 0 4px 20px var(--color-zarify-glow);
        }

        .zarify-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px var(--color-zarify-glow);
          filter: brightness(1.1);
        }

        .image-wrapper {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(20, 184, 166, 0.2);
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
           box-shadow: 0 0 60px -20px var(--color-zarify-glow);
        }
      `}</style>
    </section>
  );
};

export default ZarifySection;
