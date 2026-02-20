import React, { useState } from 'react';
import zarifyImg from '../assets/zarify.png';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`zdd-faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="zdd-faq-q">
        <span>{question}</span>
        <span className="zdd-faq-chevron">{open ? '−' : '+'}</span>
      </div>
      <div className="zdd-faq-a">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const ZarifyDeepDive = () => {
  const steps = [
    {
      num: '01',
      title: 'Analyse & Calculate',
      desc: 'Our FX engine and landed cost calculator determine the optimal settlement path for each specific invoice.',
    },
    {
      num: '02',
      title: 'Structured Trade Flow',
      desc: 'Zarify purchases the goods from your international supplier and sells them to your South African entity, issuing a Rand-denominated invoice that reflects the true market value.',
    },
    {
      num: '03',
      title: 'Automated Compliance',
      desc: 'Our Smart Document Hub generates SARS-ready documentation and maintains a single-source audit trail for every transaction.',
    },
    {
      num: '04',
      title: 'Instant Cash Flow',
      desc: 'By reducing duty exposure and streamlining the ordering process, we free up critical working capital to help your business scale.',
    },
  ];

  const faqs = [
    {
      q: 'Does Zarify work with any currency against the ZAR?',
      a: 'Yes. While Zarify works with all major currencies, the "pricing layer" applied by Customs varies. Our system identifies exactly where the savings are highest for your specific trade routes.',
    },
    {
      q: 'Do I have to change my existing shipping agent?',
      a: 'No. We prefer to work with your existing freight agents and brokers, as they already understand your specific logistics requirements. We provide the infrastructure; they continue to move the boxes.',
    },
    {
      q: 'Is this structure fully legal and compliant?',
      a: 'Absolutely. Zarify is built on an extensive legal framework reviewed by major institutions like Standard Bank and ABSA. We are fully SARS and SARB compliant, ensuring all transactions are executed within a framework that satisfies both local and international standards.',
    },
    {
      q: 'Can I speak to my accountant about this?',
      a: 'We actively encourage it. It is vital that your financial team understands the technicalities of the Rand-based invoicing model to ensure it is integrated correctly into your accounting systems.',
    },
    {
      q: 'What does the software cost?',
      a: 'The Zarify platform is free to use. We operate on a performance-based model, earning a 30% share of the actual savings we generate on your import invoices. If we don\'t save you money, you don\'t pay.',
    },
  ];

  return (
    <section id="zarify" className="zdd-section">

      {/* ── Hero: Image + Intro ── */}
      <div className="zdd-hero zarify-bg">
        <div className="container">
          <div className="zdd-hero-layout">
            <div className="zdd-hero-text">
              <h2 className="zdd-hero-title">
                <span className="zarify-text">Zarify</span>
                <span className="zdd-hero-tagline">Save Every Time You Trade</span>
              </h2>
              <p className="zdd-hero-sub">
                Stop overpaying for your imports. Unlock immediate savings and streamline your trade execution with a solution purpose-built for the South African middle market.
              </p>
              <p className="zdd-hero-intro">
                Zarify is the gateway product for Global Buying Solutions—a fully compliant trade execution solution that enables South African importers to reduce landed costs, simplify regulatory alignment, and regain control over their foreign transactions without the need for an offshore presence.
              </p>

              <ul className="zdd-feature-list">
                <li><span className="zdd-check">✓</span> <span>Avoid SARS Exchange Rate Uplifts</span></li>
                <li><span className="zdd-check">✓</span> <span>Simplify Foreign Payments</span></li>
                <li><span className="zdd-check">✓</span> <span>No Extensive KYC Required</span></li>
              </ul>

              <a href="#contact" className="btn-learn-more zarify-btn">Enquire About Zarify</a>
            </div>

            <div className="zdd-hero-visual">
              <div className="zdd-image-wrapper zarify-glow">
                <img src={zarifyImg} alt="Zarify Secure Trade Flow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── The Challenge ── */}
      <div className="zdd-block zdd-challenge-block">
        <div className="container">
          <div className="zdd-two-col">
            <div className="zdd-col-text">
              <h3 className="zdd-section-heading">The Challenge</h3>
              <h4 className="zdd-sub-heading">The Hidden Cost of Importing</h4>
              <p className="zdd-body">
                South African importers face a significant and opaque cost burden due to the South African Revenue Service's (SARS) practice of <strong>uplifting the spot exchange rate</strong> when calculating import VAT and customs duties. By applying an artificially higher rate, SARS inflates the taxable value of your goods, leading to excessive duty payments and distorted cash flow.
              </p>
            </div>
            <div className="zdd-col-callout">
              <div className="zdd-callout-card">
                <span className="zdd-callout-icon">⚠</span>
                <p>SARS applies an <strong>artificially inflated exchange rate</strong>, meaning you pay duties and VAT on values higher than the real cost of your goods.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── The Solution ── */}
      <div className="zdd-block zdd-solution-block">
        <div className="container">
          <div className="zdd-two-col reverse">
            <div className="zdd-col-text">
              <h3 className="zdd-section-heading">The Solution</h3>
              <h4 className="zdd-sub-heading">Rand-Based Invoicing</h4>
              <p className="zdd-body">
                <strong>Zarify</strong> converts your foreign-currency supplier invoices into <strong>Rand-denominated invoices</strong>. By settling in ZAR, you eliminate the artificial exchange rate uplift, ensuring that duties and VAT are paid on real, not artificial, values.
              </p>
            </div>
            <div className="zdd-col-callout">
              <div className="zdd-stat-badge">
                <span className="zdd-stat-number">2–5%</span>
                <span className="zdd-stat-label">Reduction in total landed costs per shipment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── How It Works ── */}
      <div className="zdd-block zdd-how-block">
        <div className="container">
          <div className="zdd-center-header">
            <h3 className="zdd-section-heading">How It Works</h3>
            <p className="zdd-body" style={{ maxWidth: 700, margin: '0 auto' }}>
              Our proprietary trade execution platform, <strong>SC Trader</strong>, automates the three mission-critical layers of your shipment: documents, goods, and capital.
            </p>
          </div>

          <div className="zdd-steps-grid">
            {steps.map((s) => (
              <div className="zdd-step-card" key={s.num}>
                <span className="zdd-step-num">{s.num}</span>
                <h4 className="zdd-step-title">{s.title}</h4>
                <p className="zdd-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Ideal For ── */}
      <div className="zdd-block zdd-ideal-block">
        <div className="container">
          <h3 className="zdd-section-heading zdd-center-header">Ideal For</h3>
          <div className="zdd-metrics-row">
            <div className="zdd-metric-card">
              <span className="zdd-metric-value">R10M – R100M</span>
              <span className="zdd-metric-label">Annual foreign purchases</span>
            </div>
            <div className="zdd-metric-card">
              <span className="zdd-metric-value">&gt;10%</span>
              <span className="zdd-metric-label">Duty exposure on imports</span>
            </div>
            <div className="zdd-metric-card">
              <span className="zdd-metric-value">Recurring</span>
              <span className="zdd-metric-label">Trade activity with international suppliers</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="zdd-block zdd-faq-block">
        <div className="container">
          <h3 className="zdd-section-heading zdd-center-header">Common Questions</h3>
          <div className="zdd-faq-list">
            {faqs.map((f, i) => (
              <FAQItem key={i} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Pathway Banner ── */}
      <div className="zdd-block zdd-pathway-block">
        <div className="container">
          <div className="zdd-pathway-card">
            <div className="zdd-pathway-text">
              <h3 className="zdd-section-heading">The Staged Pathway to Global Autonomy</h3>
              <p className="zdd-body">
                Zarify is your on-ramp—solving immediate inefficiencies and lowering costs. As your business grows in scale and complexity, we offer a strategic upgrade to <strong className="capify-accent">Capify</strong>, helping you establish your own dedicated offshore buying office to build hard currency reserves and access global finance.
              </p>
            </div>
            <a href="#capify" className="btn-learn-more zdd-pathway-btn">Discover Capify →</a>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="zdd-block zdd-cta-block">
        <div className="container zdd-center-header">
          <p className="zdd-cta-tagline">The future of global trade systems is here. Don't just move money—reshape how you trade.</p>
          <a href="#contact" className="btn-learn-more zarify-btn zdd-cta-btn">Calculate Your Savings Today</a>
        </div>
      </div>

      <style>{`
        /* ── Section wrapper ── */
        .zdd-section {
          background: var(--bg-primary);
        }

        .zdd-block {
          padding: 5rem 0;
          border-bottom: 1px solid var(--border);
        }

        /* ── Hero layout (merged from ZarifySection) ── */
        .zdd-hero {
          padding: var(--section-spacing) 0;
          position: relative;
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }
        .zdd-hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .zdd-hero-layout {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
        .zdd-hero-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .zarify-text {
          color: var(--color-capify);
        }
        .zdd-hero-tagline {
          font-size: 0.5em;
          color: var(--text-muted);
          font-family: var(--font-body);
          margin-top: 0.5rem;
        }
        .zdd-hero-sub {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 500px;
          line-height: 1.7;
        }
        .zdd-hero-intro {
          font-size: 1rem;
          color: var(--text-muted);
          max-width: 500px;
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        /* Feature checklist (from original ZarifySection) */
        .zdd-feature-list {
          list-style: none;
          margin: 0 0 2rem 0;
        }
        .zdd-feature-list li {
          margin-bottom: 0.8rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1rem;
          color: var(--text-secondary);
        }
        .zdd-check {
          color: var(--color-capify);
          font-weight: bold;
        }

        /* Image (from original ZarifySection) */
        .zdd-image-wrapper {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          position: relative;
        }
        .zdd-image-wrapper img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }
        .zdd-image-wrapper:hover img {
          transform: scale(1.03);
        }
        .zarify-glow {
          box-shadow: 0 0 60px -20px var(--color-capify-glow);
        }

        .zarify-btn {
          background: var(--color-capify);
          box-shadow: 0 4px 20px var(--color-capify-glow);
        }
        .zarify-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px var(--color-capify-glow);
          filter: brightness(1.1);
        }

        /* ── Shared typography ── */
        .zdd-section-heading {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 0.75rem;
          color: var(--color-capify);
        }
        .zdd-sub-heading {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .zdd-body {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.75;
        }
        .zdd-body strong {
          color: var(--text-primary);
        }
        .zdd-center-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        /* ── Two-column layout ── */
        .zdd-two-col {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .zdd-two-col.reverse .zdd-col-text { order: 2; }
        .zdd-two-col.reverse .zdd-col-callout { order: 1; }

        @media (max-width: 900px) {
          .zdd-two-col {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .zdd-two-col.reverse .zdd-col-text,
          .zdd-two-col.reverse .zdd-col-callout {
            order: unset;
          }
        }

        /* ── Callout card ── */
        .zdd-callout-card {
          background: var(--color-capify-glow);
          border-left: 3px solid var(--color-capify);
          border-radius: 0 10px 10px 0;
          padding: 2rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          opacity: 0.8;
        }
        .zdd-callout-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .zdd-callout-card p {
          color: var(--text-primary);
          line-height: 1.7;
          font-size: 1rem;
        }
        .zdd-callout-card strong {
          color: var(--color-capify);
        }

        /* ── Stat badge ── */
        .zdd-stat-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(145deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.04) 100%);
          border: 1px solid var(--color-capify-glow);
          border-radius: 16px;
          padding: 3rem 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .zdd-stat-badge:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px var(--color-capify-glow);
        }
        .zdd-stat-number {
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 700;
          color: var(--color-capify);
          line-height: 1;
          margin-bottom: 0.75rem;
        }
        .zdd-stat-label {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 240px;
        }

        /* ── Backgrounds ── */
        .zdd-challenge-block { background: var(--bg-primary); }
        .zdd-solution-block { background: var(--bg-secondary); }
        .zdd-how-block { background: var(--bg-primary); }
        .zdd-ideal-block { background: var(--bg-secondary); }
        .zdd-faq-block { background: var(--bg-primary); }
        .zdd-pathway-block { background: var(--bg-secondary); }
        .zdd-cta-block {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          border-bottom: none;
        }

        /* ── Steps grid ── */
        .zdd-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .zdd-steps-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .zdd-steps-grid { grid-template-columns: 1fr; }
        }
        .zdd-step-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem 1.5rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .zdd-step-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-capify);
        }
        .zdd-step-num {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 0.8rem;
          color: var(--color-capify);
          border: 1px solid var(--color-capify);
          border-radius: 4px;
          padding: 0.15rem 0.5rem;
          margin-bottom: 1rem;
        }
        .zdd-step-title {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }
        .zdd-step-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* ── Metric cards ── */
        .zdd-metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .zdd-metrics-row { grid-template-columns: 1fr; }
        }
        .zdd-metric-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2.5rem 1.5rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .zdd-metric-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-capify);
        }
        .zdd-metric-value {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-capify);
          margin-bottom: 0.5rem;
        }
        .zdd-metric-label {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        /* ── FAQ ── */
        .zdd-faq-list {
          max-width: 750px;
          margin: 0 auto;
        }
        .zdd-faq-item {
          border: 1px solid var(--border);
          border-radius: 10px;
          margin-bottom: 1rem;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s ease;
          background: var(--bg-tertiary);
        }
        .zdd-faq-item:hover,
        .zdd-faq-item.open {
          border-color: var(--color-capify);
        }
        .zdd-faq-q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          font-weight: 600;
          font-size: 1rem;
          color: var(--text-primary);
          user-select: none;
        }
        .zdd-faq-chevron {
          font-size: 1.4rem;
          color: var(--color-capify);
          flex-shrink: 0;
          margin-left: 1rem;
          transition: transform 0.3s ease;
        }
        .zdd-faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.4s ease;
          padding: 0 1.5rem;
        }
        .zdd-faq-item.open .zdd-faq-a {
          max-height: 300px;
          padding: 0 1.5rem 1.25rem;
        }
        .zdd-faq-a p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        /* ── Pathway ── */
        .zdd-pathway-card {
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
          .zdd-pathway-card {
            flex-direction: column;
            text-align: center;
          }
        }
        .zdd-pathway-text { flex: 1; }
        .zdd-pathway-text .zdd-body { margin-top: 0.5rem; }
        .capify-accent { color: var(--color-capify); }
        .zdd-pathway-btn {
          background: var(--color-capify) !important;
          box-shadow: 0 4px 20px var(--color-capify-glow);
          flex-shrink: 0;
          white-space: nowrap;
        }
        .zdd-pathway-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px var(--color-capify-glow);
          filter: brightness(1.1);
        }

        /* ── CTA ── */
        .zdd-cta-tagline {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-style: italic;
        }
        .zdd-cta-btn {
          font-size: 1.1rem;
          padding: 1.1rem 3rem;
        }
      `}</style>
    </section>
  );
};

export default ZarifyDeepDive;
