import React from 'react';
import { Link } from 'react-router-dom';

const WhyGBS = () => {
  return (
    <section className="why-gbs">
      <div className="container">
        <div className="why-gbs__header">
          <h2 className="why-gbs__title">Why Importers Partner with GBS</h2>
          <p className="why-gbs__intro">
            South African trade is hindered by structural inefficiencies that drain cash flow. GBS provides the infrastructure to bridge these gaps—refining trade structures to protect margins and build global leverage.
          </p>
        </div>

        <div className="why-gbs__grid">
          {/* Zarify Column */}
          <div className="why-gbs__card">
            <h3 className="product-brand zarify-brand">
              <span className="brand-main">Zar</span><span className="brand-ify">ify</span>
            </h3>
            <div className="why-gbs__content">
              <div className="why-gbs__block">
                <h4>Challenge</h4>
                <p>Customs converts foreign invoices to ZAR using a higher exchange rate driving up duties, VAT and total landed costs.</p>
              </div>
              <div className="why-gbs__block">
                <h4>Solution – Reduce Landed Costs</h4>
                <p>A ZAR denominated invoices that eliminates the inflated exchange rate to reduce Duties and VAT.</p>
              </div>
            </div>
            <Link to="/zarify" className="btn-learn-more why-gbs__cta zarify-card-btn">Learn more about Zarify</Link>
          </div>

          {/* Capify Column */}
          <div className="why-gbs__card">
            <h3 className="product-brand capify-brand">
              <span className="brand-main">Cap</span><span className="brand-ify">ify</span>
            </h3>
            <div className="why-gbs__content">
              <div className="why-gbs__block">
                <h4>Challenge</h4>
                <p>Exchange control regulations limit the movement of capital offshore – slowing supplier payments and straining liquidity.</p>
              </div>
              <div className="why-gbs__block">
                <h4>Solution – Build Capital Reserves</h4>
                <p>Build offshore reserves within a regulatory framework to mitigate these risks.</p>
              </div>
            </div>
            <Link to="/capify" className="btn-learn-more why-gbs__cta capify-card-btn">Learn more about Capify</Link>
          </div>

          {/* Yuanify Column */}
          <div className="why-gbs__card">
            <h3 className="product-brand yuanify-brand">
              <span className="brand-main">Yuan</span><span className="brand-ify">ify</span>
            </h3>
            <div className="why-gbs__content">
              <div className="why-gbs__block">
                <h4>Challenge</h4>
                <p>Chinese suppliers invoicing in USD uplift their invoices to mitigate USD volatility.</p>
              </div>
              <div className="why-gbs__block">
                <h4>Solution</h4>
                <p>Enable suppliers to invoice and receive payment in their local currency, eliminating the need for them to uplift invoices to mitigate USD volatility.</p>
              </div>
            </div>
            <Link to="/yuanify" className="btn-learn-more why-gbs__cta yuanify-card-btn">Learn more about Yuanify</Link>
          </div>
        </div>
      </div>

      <style>{`
        .why-gbs {
          padding: var(--section-spacing) 0;
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 50%, var(--bg-primary) 100%);
          position: relative;
        }

        .why-gbs__header {
          max-width: 1000px;
          margin-bottom: 4rem;
        }

        .why-gbs__title {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, var(--gradient-heading-start), var(--gradient-heading-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .why-gbs__intro {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .why-gbs__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        @media (max-width: 900px) {
          .why-gbs__grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .why-gbs__card {
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2.5rem 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .why-gbs__card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        /* Branded Headings */
        .product-brand {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          font-weight: 700;
        }
        
        .brand-ify {
          /* font-style is italic from index.css */
        }
        
        .zarify-brand .brand-main { color: var(--color-zarify); }
        .zarify-brand .brand-ify { color: var(--color-zarify-ify); }

        .capify-brand .brand-main { color: var(--color-capify); }
        .capify-brand .brand-ify { color: var(--color-capify-ify); }

        .yuanify-brand .brand-main { color: var(--color-yuanify); }
        .yuanify-brand .brand-ify { color: var(--color-yuanify-ify); }

        .why-gbs__block {
          margin-bottom: 2rem;
        }

        .why-gbs__block h4 {
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
          font-weight: 600;
          font-family: var(--font-display);
        }

        .why-gbs__block p {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 1rem;
        }

        /* Buttons — site-consistent btn-learn-more pattern */
        .why-gbs__cta {
          margin-top: auto;
          width: fit-content;
          text-decoration: none;
          color: white;
          padding: 0.85rem 2rem;
        }

        .zarify-card-btn {
          background: var(--color-zarify);
          box-shadow: 0 4px 20px var(--color-zarify-glow);
        }
        .zarify-card-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px var(--color-zarify-glow);
          filter: brightness(1.1);
        }

        .capify-card-btn {
          background: var(--color-capify);
          box-shadow: 0 4px 20px var(--color-capify-glow);
        }
        .capify-card-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px var(--color-capify-glow);
          filter: brightness(1.1);
        }

        .yuanify-card-btn {
          background: var(--color-yuanify);
          box-shadow: 0 4px 20px var(--color-yuanify-glow);
        }
        .yuanify-card-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px var(--color-yuanify-glow);
          filter: brightness(1.1);
        }
      `}</style>
    </section>
  );
};

export default WhyGBS;
