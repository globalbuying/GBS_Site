import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import capifyImg from '../assets/capify.png';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`cdd-faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="cdd-faq-q">
        <span>{question}</span>
        <span className="cdd-faq-chevron">{open ? '−' : '+'}</span>
      </div>
      <div className="cdd-faq-a">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const CapifyDeepDive = () => {
  const steps = [
    {
      num: '01',
      title: 'Jurisdictional Strategy',
      desc: 'We identify the optimal stable jurisdiction (typically the UK) and banking structures to suit your specific trade requirements.',
    },
    {
      num: '02',
      title: 'Entity Setup & Governance',
      desc: 'We handle the end-to-end establishment of your offshore entity, including corporate governance, regulatory alignment, and the opening of segregated IBAN accounts.',
    },
    {
      num: '03',
      title: 'Supplier Migration',
      desc: 'We assist in onboarding your existing international suppliers under the new offshore buying office structure, ensuring no disruption to your goods flow.',
    },
    {
      num: '04',
      title: 'Ongoing Management',
      desc: 'Our platform provides continuous support for annual filings, tax compliance, and automated reporting, keeping your global structure audit-ready and fully compliant with SARS and SARB standards.',
    },
  ];

  const faqs = [
    {
      q: 'Who is Capify aimed at?',
      a: 'Capify is designed for South African businesses managing significant foreign trade volumes who want to protect profits from Rand depreciation and need offshore liquidity to support global expansion. Typically, this includes sophisticated importers with an annual offshore spend exceeding R50 million.',
    },
    {
      q: 'Where is the buying office usually located?',
      a: 'Offshore buying offices are typically established in the United Kingdom or similar stable global jurisdictions that offer the greatest commercial and financial benefit to your specific operations.',
    },
    {
      q: 'Is this structure compliant with South African regulations?',
      a: 'Yes. Compliance is at the core of our value proposition. Capify is built on a robust legal framework reviewed and endorsed by major financial institutions, including Standard Bank and ABSA, to ensure full SARS and SARB compliance.',
    },
    {
      q: 'What are the costs involved?',
      a: 'The Capify model involves setup and structuring fees for establishing the entity, followed by ongoing administration and platform licensing fees. Our model is designed to be margin-accretive, often converting a percentage of your import value into offshore profit.',
    },
    {
      q: 'Can I move from Zarify to Capify?',
      a: "Absolutely. We offer a staged client journey. Zarify is often the tactical \"on-ramp\" used to establish trust and immediate savings, while Capify is the natural evolution for businesses ready to become fully capitalised global traders.",
    },
  ];

  const advantages = [
    {
      icon: '💱',
      title: 'Build Hard Currency Reserves',
      desc: 'Establish and hold capital reserves offshore in stable currencies (GBP, USD, EUR) to create a robust buffer against Rand volatility.',
    },
    {
      icon: '🏦',
      title: 'Unlock Offshore Finance',
      desc: 'Gain access to cheaper offshore trade finance and equity capital, closing the funding gap often caused by domestic regulatory constraints.',
    },
    {
      icon: '🤝',
      title: 'Reduced Supplier Friction',
      desc: 'Make direct offshore payments to international suppliers in hard currency, strengthening relationships and increasing your purchasing power.',
    },
    {
      icon: '🌍',
      title: 'Global Autonomy',
      desc: 'Transition from reacting to market shocks to managing trade from a position of global leverage and financial agility.',
    },
    {
      icon: '📊',
      title: 'Centralised Visibility',
      desc: 'Maintain full command over your end-to-end supply chain, including FX exposure, landed costs, and documentation flows.',
    },
  ];

  return (
    <section className="cdd-section">

      {/* ── Hero ── */}
      <div className="cdd-hero capify-hero-bg">
        <div className="container">
          <div className="cdd-hero-layout">
            <div className="cdd-hero-text">
              <h2 className="cdd-hero-title">
                <span className="product-brand capify-brand">
                  <span className="brand-main">Cap</span><span className="brand-ify">ify</span>
                </span>
                <span className="cdd-hero-tagline">Build a Global Trade Backbone</span>
              </h2>
              <p className="cdd-hero-sub">
                Transform your business from a local importer into a globally resilient enterprise. Gain strategic leverage, build hard currency reserves, and unlock international finance.
              </p>
              <p className="cdd-hero-intro">
                Capify is our premium strategic upgrade for sophisticated South African importers and exporters. While tactical solutions solve immediate cost issues, Capify provides a permanent structural advantage by helping you establish, operationalise, and manage your own dedicated offshore buying office in a stable jurisdiction, such as the United Kingdom.
              </p>

              <a href="#contact" className="btn-learn-more capify-btn">Enquire About Capify</a>
            </div>

            <div className="cdd-hero-visual">
              <div className="cdd-image-wrapper capify-glow">
                <img src={capifyImg} alt="Capify Global Network" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Strategic Advantages ── */}
      <div className="cdd-block cdd-advantages-block">
        <div className="container">
          <div className="cdd-center-header">
            <h3 className="cdd-section-heading">Strategic Advantages</h3>
            <p className="cdd-body" style={{ maxWidth: 700, margin: '0 auto' }}>
              Capify is designed to solve deep structural barriers that limit the growth of South African businesses.
            </p>
          </div>

          <div className="cdd-advantages-grid">
            {advantages.map((a, i) => (
              <div className="cdd-advantage-card" key={i}>
                <span className="cdd-advantage-icon">{a.icon}</span>
                <h4 className="cdd-advantage-title">{a.title}</h4>
                <p className="cdd-advantage-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── How It Works ── */}
      <div className="cdd-block cdd-how-block">
        <div className="container">
          <div className="cdd-center-header">
            <h3 className="cdd-section-heading">How It Works</h3>
            <p className="cdd-body" style={{ maxWidth: 700, margin: '0 auto' }}>
              We provide the platform and infrastructure-as-a-service to move your business through a compliant global evolution.
            </p>
          </div>

          <div className="cdd-steps-grid">
            {steps.map((s) => (
              <div className="cdd-step-card" key={s.num}>
                <span className="cdd-step-num">{s.num}</span>
                <h4 className="cdd-step-title">{s.title}</h4>
                <p className="cdd-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="cdd-ideal-callout">
            <span className="cdd-ideal-icon">🏢</span>
            <p className="cdd-ideal-text">
              <strong>Ideal for:</strong> Sophisticated importers spending R50M+ annually offshore who require greater treasury control and global scale.
            </p>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="cdd-block cdd-faq-block">
        <div className="container">
          <h3 className="cdd-section-heading cdd-center-header">Some Common Questions</h3>
          <div className="cdd-faq-list">
            {faqs.map((f, i) => (
              <FAQItem key={i} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Pathway Banner ── */}
      <div className="cdd-block cdd-pathway-block">
        <div className="container">
          <div className="cdd-pathway-card">
            <div className="cdd-pathway-text">
              <h3 className="cdd-section-heading">Start with Zarify, Scale with Capify</h3>
              <p className="cdd-body">
                <strong className="product-brand zarify-brand"><span className="brand-main">Zar</span><span className="brand-ify">ify</span></strong> is the tactical on-ramp—solving immediate cost inefficiencies for South African importers. As your business grows in scale and complexity, <strong className="product-brand capify-brand"><span className="brand-main">Cap</span><span className="brand-ify">ify</span></strong> is the natural strategic upgrade to build a fully capitalised global trade operation.
              </p>
            </div>
            <Link to="/zarify" className="btn-learn-more cdd-pathway-btn">Discover Zarify →</Link>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="cdd-block cdd-cta-block">
        <div className="container cdd-center-header">
          <p className="cdd-cta-tagline">Empowering South Africa's mid-market with the tools to thrive in a volatile global economy.</p>
          <a href="#contact" className="btn-learn-more capify-btn cdd-cta-btn">Enquire About Capify: Build Your Global Backbone</a>
        </div>
      </div>

      <style>{`
        /* ── Section wrapper ── */
        .cdd-section {
          background: var(--bg-primary);
        }

        .cdd-block {
          padding: 5rem 0;
          border-bottom: 1px solid var(--border);
        }

        /* ── Hero ── */
        .capify-hero-bg {
          padding: var(--section-spacing) 0;
          position: relative;
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
        }
        .cdd-hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .cdd-hero-layout {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
        .cdd-hero-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .product-brand {
          font-weight: 700;
        }
        .capify-brand .brand-main { color: var(--color-capify); }
        .capify-brand .brand-ify { color: var(--color-capify-ify); }
        .cdd-hero-tagline {
          font-size: 0.5em;
          color: var(--text-muted);
          font-family: var(--font-body);
          margin-top: 0.5rem;
        }
        .cdd-hero-sub {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 500px;
          line-height: 1.7;
        }
        .cdd-hero-intro {
          font-size: 1rem;
          color: var(--text-muted);
          max-width: 500px;
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        /* Image wrapper */
        .cdd-image-wrapper {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          position: relative;
        }
        .cdd-image-wrapper img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }
        .cdd-image-wrapper:hover img {
          transform: scale(1.03);
        }

        /* ── Shared typography ── */
        .cdd-section-heading {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 0.75rem;
          color: var(--color-capify);
        }
        .cdd-body {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.75;
        }
        .cdd-body strong {
          color: var(--text-primary);
        }
        .cdd-center-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        /* ── Advantages grid ── */
        .cdd-advantages-block {
          background: var(--bg-primary);
        }
        .cdd-advantages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .cdd-advantages-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .cdd-advantages-grid { grid-template-columns: 1fr; }
        }
        .cdd-advantage-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem 1.5rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .cdd-advantage-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-capify);
        }
        .cdd-advantage-icon {
          font-size: 1.8rem;
          display: block;
          margin-bottom: 1rem;
        }
        .cdd-advantage-title {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .cdd-advantage-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* ── How It Works ── */
        .cdd-how-block { background: var(--bg-secondary); }
        .cdd-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 900px) {
          .cdd-steps-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .cdd-steps-grid { grid-template-columns: 1fr; }
        }
        .cdd-step-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem 1.5rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .cdd-step-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-capify);
        }
        .cdd-step-num {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 0.8rem;
          color: var(--color-capify);
          border: 1px solid var(--color-capify);
          border-radius: 4px;
          padding: 0.15rem 0.5rem;
          margin-bottom: 1rem;
        }
        .cdd-step-title {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }
        .cdd-step-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Ideal For callout */
        .cdd-ideal-callout {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: var(--color-capify-glow);
          border-left: 3px solid var(--color-capify);
          border-radius: 0 10px 10px 0;
          padding: 2rem;
        }
        .cdd-ideal-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .cdd-ideal-text {
          color: var(--text-primary);
          line-height: 1.7;
          font-size: 1rem;
        }
        .cdd-ideal-text strong {
          color: var(--color-capify);
        }

        /* ── FAQ ── */
        .cdd-faq-block { background: var(--bg-primary); }
        .cdd-faq-list {
          max-width: 750px;
          margin: 0 auto;
        }
        .cdd-faq-item {
          border: 1px solid var(--border);
          border-radius: 10px;
          margin-bottom: 1rem;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s ease;
          background: var(--bg-tertiary);
        }
        .cdd-faq-item:hover,
        .cdd-faq-item.open {
          border-color: var(--color-capify);
        }
        .cdd-faq-q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          font-weight: 600;
          font-size: 1rem;
          color: var(--text-primary);
          user-select: none;
        }
        .cdd-faq-chevron {
          font-size: 1.4rem;
          color: var(--color-capify);
          flex-shrink: 0;
          margin-left: 1rem;
          transition: transform 0.3s ease;
        }
        .cdd-faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.4s ease;
          padding: 0 1.5rem;
        }
        .cdd-faq-item.open .cdd-faq-a {
          max-height: 300px;
          padding: 0 1.5rem 1.25rem;
        }
        .cdd-faq-a p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        /* ── Pathway ── */
        .cdd-pathway-block { background: var(--bg-secondary); }
        .cdd-pathway-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 3rem;
        }
        @media (max-width: 768px) {
          .cdd-pathway-card {
            flex-direction: column;
            text-align: center;
          }
        }
        .cdd-pathway-text { flex: 1; }
        .cdd-pathway-text .cdd-body { margin-top: 0.5rem; }
        .cdd-pathway-btn {
          background: var(--color-capify) !important;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 20px var(--color-capify-glow);
          flex-shrink: 0;
          white-space: nowrap;
        }
        .cdd-pathway-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 30px var(--color-capify-glow);
          filter: brightness(1.2);
        }

        /* ── Backgrounds ── */
        .cdd-cta-block {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          border-bottom: none;
        }

        /* ── Buttons ── */
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
        .capify-btn {
          background: var(--color-capify);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 20px var(--color-capify-glow);
        }
        .capify-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 30px var(--color-capify-glow);
          filter: brightness(1.2);
        }

        /* ── CTA ── */
        .cdd-cta-tagline {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-style: italic;
        }
        .cdd-cta-btn {
          font-size: 1.1rem;
          padding: 1.1rem 3rem;
        }
      `}</style>
    </section>
  );
};

export default CapifyDeepDive;
