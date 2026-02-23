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

  const steps = [
    {
      num: '01',
      title: 'Jurisdictional Strategy',
      desc: 'We identify the optimal stable jurisdiction (typically the UK) and banking structures to suit your specific trade requirements.',
    },
    {
      num: '02',
      title: 'Entity Setup & Governance',
      desc: 'We handle end-to-end establishment of your offshore entity, including corporate governance, regulatory alignment, and segregated IBAN accounts.',
    },
    {
      num: '03',
      title: 'Supplier Migration',
      desc: 'We onboard your existing international suppliers under the new offshore buying office structure, ensuring zero disruption to your goods flow.',
    },
    {
      num: '04',
      title: 'Ongoing Management',
      desc: 'Continuous support for annual filings, tax compliance, and automated reporting keeps your global structure audit-ready and fully SARS/SARB compliant.',
    },
  ];

  const nextSteps = [
    {
      num: '1',
      title: 'Strategic Assessment',
      desc: "We evaluate your trade flows, supplier relationships, and FX exposure to model your offshore profit potential and optimal jurisdiction.",
      icon: '🔍',
    },
    {
      num: '2',
      title: 'Entity Structuring',
      desc: 'We establish and operationalise your dedicated buying office, including banking, governance, and supplier onboarding.',
      icon: '🏗️',
    },
    {
      num: '3',
      title: 'Go Live & Build Capital',
      desc: 'Start trading through your offshore entity and building hard-currency reserves from your very first transaction.',
      icon: '🚀',
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

  return (
    <section className="cdd-section">

      {/* ── Hero: Headline Stat + Image ── */}
      <div className="cdd-hero capify-hero-bg">
        <div className="container">
          <div className="cdd-hero-layout">
            <div className="cdd-hero-text">
              <h2 className="cdd-hero-title">
                <span className="product-brand capify-brand">
                  <span className="brand-main">Cap</span><span className="brand-ify">ify</span>
                </span>
              </h2>
              <div className="cdd-headline-stat">
                <span className="cdd-headline-prefix">Returns up to</span>
                <span className="cdd-headline-number">3%</span>
                <span className="cdd-headline-label">of Import Value as Offshore Capital</span>
              </div>
              <p className="cdd-hero-sub">
                What if every import transaction you processed didn't just cost you money — but built it? Capify gives sophisticated South African importers a permanent structural advantage: your own offshore buying office that earns, holds, and grows hard-currency reserves on every trade.
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

      {/* ── The Challenge ── */}
      <div className="cdd-block cdd-challenge-block">
        <div className="container">
          <div className="cdd-two-col">
            <div className="cdd-col-text">
              <h3 className="cdd-section-heading">The Challenge</h3>
              <h4 className="cdd-sub-heading">The Burdensome Nature of South African Exchange Controls</h4>
              <p className="cdd-body">
                South African forex controls can be described as the regulatory framework that, while designed to protect the country’s financial stability, often feels burdensome to ordinary South Africans because it imposes strict limits, documentation requirements, and approval processes whenever they try to move their own money abroad.
              </p>
              <p className="cdd-body" style={{ marginTop: '1rem' }}>
                For businesses, this translates into high friction, eroded margins, and a lack of structural autonomy. Your most profitable trade routes end up funding everyone in the chain — <strong>except you</strong>.
              </p>
            </div>
            <div className="cdd-col-callout">
              <div className="cdd-callout-card">
                <span className="cdd-callout-icon">⚠</span>
                <p>South African importers spend billions offshore each year but have <strong>no structural mechanism</strong> to retain hard-currency value from the trade flows they already manage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── The Solution ── */}
      <div className="cdd-block cdd-solution-block">
        <div className="container">
          <div className="cdd-two-col reverse">
            <div className="cdd-col-text">
              <h3 className="cdd-section-heading">The Solution</h3>
              <h4 className="cdd-sub-heading">Your Own Offshore Office</h4>
              <p className="cdd-body">
                <strong>Capify</strong> establishes a dedicated offshore buying entity — typically in the UK — that sits between your South African company and your international suppliers. This entity purchases goods from your suppliers and resells them to your SA operation, earning a <strong>legitimate commercial margin</strong> on every transaction.
              </p>
              <p className="cdd-body" style={{ marginTop: '1rem' }}>
                That margin stays offshore. Over time, it accumulates into a <strong>hard-currency reserve</strong> you own and control — capital that can be used for supplier deposits, trade finance, or reinvestment. Your trade activity stops being a pure cost centre and starts building a global financial position.
              </p>
            </div>
            <div className="cdd-col-callout">
              <div className="cdd-stat-badge">
                <span className="cdd-stat-prefix">Up to</span>
                <span className="cdd-stat-number">3%</span>
                <span className="cdd-stat-label">of import value retained offshore as hard-currency capital</span>
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
              Capify solves the deep structural barriers that limit the growth and resilience of South African businesses.
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

      {/* ── Next Steps ── */}
      <div className="cdd-block cdd-nextsteps-block">
        <div className="container">
          <div className="cdd-center-header">
            <h3 className="cdd-section-heading">Next Steps</h3>
            <p className="cdd-body" style={{ maxWidth: 600, margin: '0 auto' }}>
              Building your offshore buying office is a structured, fully managed process. Here is what happens next.
            </p>
          </div>

          <div className="cdd-nextsteps-grid">
            {nextSteps.map((s) => (
              <div className="cdd-nextstep-card" key={s.num}>
                <span className="cdd-nextstep-icon">{s.icon}</span>
                <span className="cdd-nextstep-num">Step {s.num}</span>
                <h4 className="cdd-nextstep-title">{s.title}</h4>
                <p className="cdd-nextstep-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="cdd-nextsteps-zarify-note">
            <p>
              Not at scale yet? Start with <strong className="product-brand zarify-brand"><span className="brand-main">Zar</span><span className="brand-ify">ify</span></strong> — our tactical on-ramp that delivers immediate savings. As your business grows, Capify becomes the natural strategic upgrade.
              <Link to="/zarify" className="cdd-zarify-link"> Discover Zarify →</Link>
            </p>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="cdd-block cdd-faq-block">
        <div className="container">
          <h3 className="cdd-section-heading cdd-center-header">Common Questions</h3>
          <div className="cdd-faq-list">
            {faqs.map((f, i) => (
              <FAQItem key={i} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="cdd-block cdd-cta-block">
        <div className="container cdd-center-header">
          <p className="cdd-cta-tagline">Empowering South Africa's mid-market with the tools to thrive in a volatile global economy.</p>
          <a href="#contact" className="btn-learn-more capify-btn cdd-cta-btn">Enquire About Capify</a>
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
          .cdd-headline-stat {
            align-items: center;
          }
        }
        .cdd-hero-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
        }
        .product-brand {
          font-weight: 700;
        }
        .capify-brand .brand-main { color: var(--color-capify); }
        .capify-brand .brand-ify { color: var(--color-capify-ify); }
        .zarify-brand .brand-main { color: var(--color-zarify); }
        .zarify-brand .brand-ify { color: var(--color-zarify-ify); }

        /* ── Headline stat ── */
        .cdd-headline-stat {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.5rem;
        }
        .cdd-headline-prefix {
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .cdd-headline-number {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 7vw, 5.5rem);
          font-weight: 800;
          color: var(--color-capify);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .cdd-headline-label {
          font-size: clamp(1rem, 2vw, 1.3rem);
          color: var(--text-primary);
          font-weight: 600;
          margin-top: 0.35rem;
          letter-spacing: 0.01em;
        }

        .cdd-hero-sub {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 520px;
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
        .capify-glow {
          box-shadow: 0 0 60px -20px var(--color-capify-glow);
        }

        /* ── Buttons ── */
        .capify-btn {
          background: var(--color-capify);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 20px var(--color-capify-glow);
          color: #fff;
        }
        .capify-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 30px var(--color-capify-glow);
          filter: brightness(1.2);
        }

        /* ── Shared typography ── */
        .cdd-section-heading {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 0.75rem;
          color: var(--color-capify);
        }
        .cdd-sub-heading {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-weight: 600;
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

        /* ── Two-column layout ── */
        .cdd-two-col {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .cdd-two-col.reverse .cdd-col-text { order: 2; }
        .cdd-two-col.reverse .cdd-col-callout { order: 1; }

        @media (max-width: 900px) {
          .cdd-two-col {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .cdd-two-col.reverse .cdd-col-text,
          .cdd-two-col.reverse .cdd-col-callout {
            order: unset;
          }
        }

        /* ── Callout card ── */
        .cdd-callout-card {
          background: var(--color-capify-glow);
          border-left: 3px solid var(--color-capify);
          border-radius: 0 10px 10px 0;
          padding: 2rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          opacity: 0.85;
        }
        .cdd-callout-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .cdd-callout-card p {
          color: var(--text-primary);
          line-height: 1.7;
          font-size: 1rem;
        }
        .cdd-callout-card strong {
          color: var(--color-capify);
        }

        /* ── Stat badge ── */
        .cdd-stat-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(145deg, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0.04) 100%);
          border: 1px solid var(--color-capify-glow);
          border-radius: 16px;
          padding: 3rem 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .cdd-stat-badge:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px var(--color-capify-glow);
        }
        .cdd-stat-prefix {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        .cdd-stat-number {
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 700;
          color: var(--color-capify);
          line-height: 1;
          margin-bottom: 0.75rem;
        }
        .cdd-stat-label {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 240px;
        }

        /* ── Backgrounds ── */
        .cdd-challenge-block { background: var(--bg-primary); }
        .cdd-solution-block { background: var(--bg-secondary); }
        .cdd-advantages-block { background: var(--bg-primary); }
        .cdd-how-block { background: var(--bg-secondary); }
        .cdd-nextsteps-block { background: var(--bg-primary); }
        .cdd-faq-block { background: var(--bg-secondary); }
        .cdd-cta-block {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          border-bottom: none;
        }

        /* ── Advantages grid ── */
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

        /* ── Next Steps ── */
        .cdd-nextsteps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 768px) {
          .cdd-nextsteps-grid { grid-template-columns: 1fr; }
        }
        .cdd-nextstep-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .cdd-nextstep-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-capify);
          box-shadow: 0 12px 40px var(--color-capify-glow);
        }
        .cdd-nextstep-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 1rem;
        }
        .cdd-nextstep-num {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-capify);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: 1px solid var(--color-capify);
          border-radius: 4px;
          padding: 0.2rem 0.7rem;
          margin-bottom: 1rem;
        }
        .cdd-nextstep-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .cdd-nextstep-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .cdd-nextsteps-zarify-note {
          text-align: center;
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem 2.5rem;
          max-width: 750px;
          margin: 0 auto;
        }
        .cdd-nextsteps-zarify-note p {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .cdd-zarify-link {
          color: var(--color-zarify);
          font-weight: 600;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .cdd-zarify-link:hover {
          opacity: 0.8;
        }

        /* ── FAQ ── */
        .cdd-faq-block { background: var(--bg-secondary); }
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
