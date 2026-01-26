import React from 'react';

const Technology = () => {
  return (
    <section className="tech-section">
      <div className="container">
        <div className="tech-content">
          <div className="tech-text">
            <h2 className="tech-title">Powered by <span className="highlight">SC Trader</span></h2>
            <p className="tech-description">
              Our proprietary platform digitizes and orchestrates the three critical flows of global trade:
            </p>
            <div className="flow-steps">
              <div className="step">
                <span className="step-num">01</span>
                <span className="step-text">Documents</span>
              </div>
              <div className="line"></div>
              <div className="step">
                <span className="step-num">02</span>
                <span className="step-text">Goods</span>
              </div>
              <div className="line"></div>
              <div className="step">
                <span className="step-num">03</span>
                <span className="step-text">Capital</span>
              </div>
            </div>
            <p className="tech-note">
              Automated compliance. Real-time visibility. Risk mitigation.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .tech-section {
          padding: 6rem 0;
          background: linear-gradient(to right, var(--bg-secondary), var(--bg-primary));
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .tech-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .tech-title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          margin-bottom: 1.5rem;
        }

        .highlight {
          color: var(--color-capify); /* Use existing brand color or a tech-specific one */
        }

        .tech-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }

        .flow-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        @media (max-width: 600px) {
          .flow-steps {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .line {
            width: 1px;
            height: 30px;
            transform: rotate(90deg);
          }
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .step-num {
          font-family: var(--font-display);
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .step-text {
          font-weight: 600;
          font-size: 1.2rem;
        }

        .line {
          height: 1px;
          width: 50px;
          background: var(--border);
        }

        .tech-note {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
      `}</style>
    </section>
  );
};

export default Technology;
