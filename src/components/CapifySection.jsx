import React from 'react';
import capifyImg from '../assets/capify.png';

const CapifySection = () => {
  return (
    <section id="capify" className="product-section capify-bg">
      <div className="container">
        <div className="product-layout reverse">
          <div className="product-content">
            <h2 className="product-title">
              <span className="capify-text">Capify</span>
              <span className="product-tagline">Global Financial Operations</span>
            </h2>
            <p className="product-description">
              For businesses ready to scale. Capify establishes your dedicated UK buying office, unlocking access to global finance and hard currency reserves.
            </p>

            <div className="process-box capify-box">
              <h4 className="process-title">Ideal For</h4>
              <div className="process-step">
                <span className="icon">🏢</span>
                <p>Large Importers (R50M+ annual spend)</p>
              </div>
              <div className="process-step">
                <span className="icon">💷</span>
                <p>Companies seeking hard currency reserves</p>
              </div>
            </div>

            <ul className="feature-list">
              <li><span className="check">✓</span> <span className="text">Establish Legitimate Offshore Presence</span></li>
              <li><span className="check">✓</span> <span className="text">Access International Trade Finance</span></li>
              <li><span className="check">✓</span> <span className="text">Centralize FX Strategy</span></li>
            </ul>

            <a href="#contact" className="btn-learn-more capify-btn">Enquire About Capify</a>
          </div>

          <div className="product-visual">
            <div className="image-wrapper capify-glow">
              <img src={capifyImg} alt="Capify Global Network" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .capify-bg {
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
        }

        .reverse {
          direction: ltr; /* Ensure text direction is standard */
        }
        
        .reverse .product-content {
          order: 2;
        }
        
        .reverse .product-visual {
          order: 1;
        }

        @media (max-width: 900px) {
          .reverse .product-content {
            order: 1;
          }
          .reverse .product-visual {
            order: 2;
          }
        }

        .capify-text {
          color: var(--color-capify);
        }

        .check {
          color: var(--color-capify); 
        }

        .capify-btn {
          background: var(--color-capify);
          box-shadow: 0 4px 20px var(--color-capify-glow);
        }

        .capify-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px var(--color-capify-glow);
          filter: brightness(1.1);
        }

        .capify-glow {
          box-shadow: 0 0 60px -20px var(--color-capify-glow);
          border-color: rgba(59, 130, 246, 0.2);
        }
        
        .capify-box {
           border-color: var(--color-capify);
           background: rgba(59, 130, 246, 0.05);
        }
        .capify-box .process-title {
           color: var(--color-capify);
        }
        
        .icon {
          font-size: 1.2rem;
        }
      `}</style>
    </section>
  );
};

export default CapifySection;
