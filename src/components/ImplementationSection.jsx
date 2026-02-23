import React from 'react';

const ImplementationSection = () => {
  return (
    <section className="implementation">
      <div className="container">
        <div className="implementation__header">
          <h2 className="implementation__title">Ease of Implementation</h2>
          <div className="implementation__quote-box">
            <p className="implementation__quote">
              "You always know how value is created, <span className="highlight-text">where savings originate</span>, and how liquidity is unlocked."
            </p>
          </div>
          <p className="implementation__intro">
            Implementing GBS is intentionally simple. Our processes are designed to integrate seamlessly into your existing operations with minimal disruption and maximum clarity.
          </p>
        </div>

        <div className="implementation__grid">
          <div className="implementation__card">
            <div className="card-icon">01</div>
            <h3>Tried & Tested Onboarding</h3>
            <p>A proven framework developed through years of working with South African importers. We handle the complexity so your team doesn't have to.</p>
          </div>

          <div className="implementation__card">
            <div className="card-icon">02</div>
            <h3>Lightest Touch Possible</h3>
            <p>Our model requires no structural changes. You continue importing as usual—GBS slots in with the smallest operational footprint.</p>
          </div>

          <div className="implementation__card">
            <div className="card-icon">03</div>
            <h3>Aligned to Workflows</h3>
            <p>Built to work with your current procurement, finance, and supply chain processes. No new systems. No additional headcount.</p>
          </div>

          <div className="implementation__card">
            <div className="card-icon">04</div>
            <h3>Logistics Partnerships</h3>
            <p>We collaborate directly with your existing logistics providers and clearing agents, ensuring zero interruption to shipment flows.</p>
          </div>

          <div className="implementation__card">
            <div className="card-icon">05</div>
            <h3>Fully Transparent</h3>
            <p>Transparency is core to our approach—every transaction, rate, and cost component is completely visible and auditable.</p>
          </div>
        </div>
      </div>

      <style>{`
        .implementation {
          padding: var(--section-spacing) 0;
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .implementation::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
        }

        .implementation__header {
          max-width: 1000px;
          margin-bottom: 6rem;
        }

        .implementation__title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          color: var(--text-primary);
          margin-bottom: 2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .implementation__quote-box {
          margin-bottom: 3rem;
          position: relative;
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-left: 4px solid var(--color-zarify);
          border-radius: 0 16px 16px 0;
          box-shadow: 20px 0 50px -20px var(--color-zarify-glow);
        }

        .implementation__quote {
          font-size: clamp(1.4rem, 3vw, 2rem);
          line-height: 1.4;
          font-weight: 600;
          color: var(--text-primary);
          font-style: italic;
          opacity: 0.95;
        }

        .highlight-text {
          background: linear-gradient(120deg, var(--color-zarify), var(--color-capify-ify));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-style: normal;
          font-weight: 800;
        }

        .implementation__intro {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 800px;
          margin-top: 2rem;
          border-left: 1px solid var(--border);
          padding-left: 1.5rem;
        }

        .implementation__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .implementation__card {
          background: var(--bg-secondary);
          padding: 3rem 2.5rem;
          border-radius: 16px;
          border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .implementation__card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .card-icon {
          font-family: var(--font-display);
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          font-weight: 700;
          opacity: 0.5;
        }

        .implementation__card h3 {
          font-size: 1.5rem;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .implementation__card p {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .implementation__header {
            margin-bottom: 3.5rem;
          }
          
          .implementation__quote {
            font-size: 2.25rem;
          }

          .implementation__card {
            padding: 2.5rem 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ImplementationSection;
