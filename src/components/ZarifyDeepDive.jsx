import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      desc: 'Our FX engine and landed cost calculator pinpoint the optimal settlement path for every invoice you raise.',
    },
    {
      num: '02',
      title: 'Structured Trade Flow',
      desc: 'Zarify purchases from your international supplier and invoices your SA entity in Rand—reflecting true market value, not an inflated rate.',
    },
    {
      num: '03',
      title: 'Automated Compliance',
      desc: 'The Smart Document Hub generates SARS-ready paperwork and maintains a single-source audit trail automatically.',
    },
    {
      num: '04',
      title: 'Instant Cash Flow',
      desc: 'Lower duty exposure and a streamlined ordering process free up working capital so your business can scale.',
    },
  ];

  const nextSteps = [
    {
      num: '1',
      title: 'Request a Free Cost Analysis',
      desc: "Share your recent import invoices and we'll run them through Zarify's engine to show your exact savings potential.",
      icon: '📊',
    },
    {
      num: '2',
      title: 'Review Your Savings Report',
      desc: 'Receive a personalised breakdown of duty reductions, exchange rate gains, and projected annual savings.',
      icon: '📋',
    },
    {
      num: '3',
      title: 'Go Live & Start Saving',
      desc: 'Onboard in days, not months. Start saving from your very first shipment with zero upfront cost.',
      icon: '🚀',
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
      a: 'The Zarify platform is free to use. We operate on a performance-based model, earning a share of the actual savings we generate on your import invoices. If we don\'t save you money, you don\'t pay.',
    },
  ];

  return (
    <section id="zarify" className="zdd-section">

      {/* ── Hero: Headline Stat + Image ── */}
      <div className="zdd-hero zarify-bg">
        <div className="container">
          <div className="zdd-hero-layout">
            <div className="zdd-hero-text">
              <h2 className="zdd-hero-title">
                <span className="product-brand zarify-brand">
                  <span className="brand-main">Zar</span><span className="brand-ify">ify</span>
                </span>
              </h2>
              <div className="zdd-headline-stat">
                <span className="zdd-headline-number">1%</span>
                <span className="zdd-headline-label">Reduction in Landed Cost</span>
              </div>
              <p className="zdd-hero-sub">
                Customs converts foreign invoices to ZAR using a higher exchange rate driving up duties, VAT and total landed costs. Zarify changes that—automatically, compliantly, and from your very first transaction.
              </p>

              <ul className="zdd-feature-list">
                <li><span className="zdd-check">✓</span> <span>Avoid SARS Exchange Rate Uplifts</span></li>
                <li><span className="zdd-check">✓</span> <span>Simplify Foreign Payments</span></li>
                <li><span className="zdd-check">✓</span> <span>No Extensive KYC Required</span></li>
              </ul>

              <a href="#contact" className="btn-learn-more zarify-btn">Calculate Your Savings</a>
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
              <h4 className="zdd-sub-heading">A Cost You Never Agreed To</h4>
              <p className="zdd-body">
                Picture this: you've negotiated the best possible price with your overseas supplier, arranged shipping, and processed your order. Then SARS applies its own exchange rate—one that's <strong>artificially higher than the market rate</strong>—to calculate your import duties and VAT. Overnight, your carefully negotiated deal just got more expensive, and there's nothing in the current process you can do about it.
              </p>
              <p className="zdd-body" style={{ marginTop: '1rem' }}>
                For mid-market importers processing <strong>R10 million to R100 million</strong> in foreign purchases annually, this hidden uplift compounds into hundreds of thousands of rands lost every year—money that should be fuelling growth, not inflating a tax base.
              </p>
            </div>
            <div className="zdd-col-callout">
              <div className="zdd-callout-card">
                <span className="zdd-callout-icon">⚠</span>
                <p>SARS applies an <strong>artificially inflated exchange rate</strong>, meaning you pay duties and VAT on values higher than the real cost of your goods—eroding your margins on every single shipment.</p>
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
              <h4 className="zdd-sub-heading">Here's What Changes When You Zarify</h4>
              <p className="zdd-body">
                Instead of paying your supplier in foreign currency and letting SARS mark up the rate, <strong>Zarify</strong> steps into the trade flow. We purchase the goods from your international supplier and issue a <strong>Rand-denominated invoice</strong> to your South African entity. Because the transaction is now in ZAR, there's no foreign exchange for SARS to "uplift."
              </p>
              <p className="zdd-body" style={{ marginTop: '1rem' }}>
                The result? Duties and VAT are calculated on the <strong>real value</strong> of your goods—not an inflated fiction. Your landed cost drops, your cash flow improves, and your compliance is handled automatically.
              </p>
            </div>
            <div className="zdd-col-callout">
              <div className="zdd-stat-badge">
                <span className="zdd-stat-number">1%</span>
                <span className="zdd-stat-label">Average reduction in total landed cost per shipment</span>
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
              Our proprietary platform, <strong>SC Trader</strong>, automates the three mission-critical layers of every shipment: documents, goods, and capital.
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

      {/* ── Next Steps ── */}
      <div className="zdd-block zdd-nextsteps-block">
        <div className="container">
          <div className="zdd-center-header">
            <h3 className="zdd-section-heading">Next Steps</h3>
            <p className="zdd-body" style={{ maxWidth: 600, margin: '0 auto' }}>
              Getting started is straightforward. No lengthy onboarding, no change to your freight or brokerage partners.
            </p>
          </div>

          <div className="zdd-nextsteps-grid">
            {nextSteps.map((s) => (
              <div className="zdd-nextstep-card" key={s.num}>
                <span className="zdd-nextstep-icon">{s.icon}</span>
                <span className="zdd-nextstep-num">Step {s.num}</span>
                <h4 className="zdd-nextstep-title">{s.title}</h4>
                <p className="zdd-nextstep-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="zdd-nextsteps-capify-note">
            <p>
              As your business scales, Zarify is also your on-ramp to <strong className="product-brand capify-brand"><span className="brand-main">Cap</span><span className="brand-ify">ify</span></strong>—our dedicated offshore buying office solution for building hard currency reserves and accessing global trade finance.
              <Link to="/capify" className="zdd-capify-link"> Discover Capify →</Link>
            </p>
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

        /* ── Hero layout ── */
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
          .zdd-headline-stat {
            align-items: center;
          }
        }
        .zdd-hero-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
        }
        .product-brand {
          font-weight: 700;
        }
        .zarify-brand .brand-main { color: var(--color-zarify); }
        .zarify-brand .brand-ify { color: var(--color-zarify-ify); }
        .capify-brand .brand-main { color: var(--color-capify); }
        .capify-brand .brand-ify { color: var(--color-capify-ify); }

        /* ── Headline stat ── */
        .zdd-headline-stat {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.5rem;
        }
        .zdd-headline-number {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 7vw, 5.5rem);
          font-weight: 800;
          color: var(--color-zarify);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .zdd-headline-label {
          font-size: clamp(1rem, 2vw, 1.3rem);
          color: var(--text-primary);
          font-weight: 600;
          margin-top: 0.35rem;
          letter-spacing: 0.01em;
        }

        .zdd-hero-sub {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 500px;
          line-height: 1.7;
        }

        /* Feature checklist */
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
          color: var(--color-zarify);
          font-weight: bold;
        }

        /* Image */
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
          box-shadow: 0 0 60px -20px var(--color-zarify-glow);
        }

        .zarify-btn {
          background: var(--color-zarify);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 20px var(--color-zarify-glow);
          color: #fff;
        }
        .zarify-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 30px var(--color-zarify-glow);
          filter: brightness(1.2);
        }

        /* ── Shared typography ── */
        .zdd-section-heading {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 0.75rem;
          color: var(--color-zarify);
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
          background: var(--color-zarify-glow);
          border-left: 3px solid var(--color-zarify);
          border-radius: 0 10px 10px 0;
          padding: 2rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          opacity: 0.85;
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
          color: var(--color-zarify);
        }

        /* ── Stat badge ── */
        .zdd-stat-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(145deg, rgba(189, 75, 22, 0.12) 0%, rgba(189, 75, 22, 0.04) 100%);
          border: 1px solid var(--color-zarify-glow);
          border-radius: 16px;
          padding: 3rem 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .zdd-stat-badge:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px var(--color-zarify-glow);
        }
        .zdd-stat-number {
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 700;
          color: var(--color-zarify);
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
        .zdd-nextsteps-block { background: var(--bg-primary); }
        .zdd-faq-block { background: var(--bg-secondary); }
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
          border-color: var(--color-zarify);
        }
        .zdd-step-num {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 0.8rem;
          color: var(--color-zarify);
          border: 1px solid var(--color-zarify);
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
          border-color: var(--color-zarify);
        }
        .zdd-metric-value {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-zarify);
          margin-bottom: 0.5rem;
        }
        .zdd-metric-label {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        /* ── Next Steps ── */
        .zdd-nextsteps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 768px) {
          .zdd-nextsteps-grid { grid-template-columns: 1fr; }
        }
        .zdd-nextstep-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }
        .zdd-nextstep-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-zarify);
          box-shadow: 0 12px 40px var(--color-zarify-glow);
        }
        .zdd-nextstep-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 1rem;
        }
        .zdd-nextstep-num {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-zarify);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: 1px solid var(--color-zarify);
          border-radius: 4px;
          padding: 0.2rem 0.7rem;
          margin-bottom: 1rem;
        }
        .zdd-nextstep-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .zdd-nextstep-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .zdd-nextsteps-capify-note {
          text-align: center;
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem 2.5rem;
          max-width: 750px;
          margin: 0 auto;
        }
        .zdd-nextsteps-capify-note p {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .zdd-capify-link {
          color: var(--color-capify);
          font-weight: 600;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .zdd-capify-link:hover {
          opacity: 0.8;
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
          border-color: var(--color-zarify);
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
          color: var(--color-zarify);
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
