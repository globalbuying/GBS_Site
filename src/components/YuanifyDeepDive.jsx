import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import yuanifyImg from '../assets/yuanify.webp';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`ydd-faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="ydd-faq-q">
        <span>{question}</span>
        <span className="ydd-faq-chevron">{open ? '−' : '+'}</span>
      </div>
      <div className="ydd-faq-a">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const YuanifyDeepDive = () => {
  const steps = [
    {
      num: '01',
      title: 'Analyse Your Supply Chain',
      desc: 'We identify which Chinese suppliers currently invoice in USD and quantify the hidden volatility premium embedded in their pricing.',
    },
    {
      num: '02',
      title: 'Negotiate Yuan Pricing',
      desc: 'Armed with data, we help you approach suppliers with a compelling offer: pay in their home currency and remove the USD buffer—sharing the saving as a discount.',
    },
    {
      num: '03',
      title: 'Structured Payment Flow',
      desc: 'Yuanify processes payments in CNY through fully compliant banking channels, ensuring your supplier receives Yuan directly without conversion risk.',
    },
    {
      num: '04',
      title: 'Capture the Discount',
      desc: 'Lower invoice values flow straight to your bottom line. Over time, the accumulated savings compound into meaningful offshore capital reserves.',
    },
  ];

  const nextSteps = [
    {
      num: '1',
      title: 'Request a Free Discount Analysis',
      desc: "Share your recent purchase orders from Chinese suppliers and we'll calculate the exact premium you're currently paying on USD invoices.",
      icon: '📊',
    },
    {
      num: '2',
      title: 'Review Your Savings Report',
      desc: 'Receive a personalised breakdown showing the discount potential for each supplier and your projected annual savings.',
      icon: '📋',
    },
    {
      num: '3',
      title: 'Go Live & Start Saving',
      desc: 'Onboard in days, not months. Start capturing discounts from your very first Yuan-denominated purchase order.',
      icon: '🚀',
    },
  ];

  const faqs = [
    {
      q: 'Is paying Chinese suppliers in Yuan legal for South African businesses?',
      a: 'Absolutely. Yuan payments are processed through fully compliant banking channels that satisfy both SARB regulations and Chinese foreign exchange requirements. Our structure has been reviewed and approved by major financial institutions.',
    },
    {
      q: 'Will my suppliers actually accept Yuan and offer a discount?',
      a: 'Chinese suppliers overwhelmingly prefer receiving Yuan. USD payments expose them to conversion costs and exchange rate risk, which is exactly why they add the 4% buffer. Removing that risk makes the discount a straightforward negotiation.',
    },
    {
      q: 'How does this help me build offshore capital?',
      a: 'By reducing your cost base on Chinese imports, you free up working capital that can be strategically deployed. The savings accumulate over time, and the Yuanify structure also positions you to access broader trade finance opportunities through our partner network.',
    },
    {
      q: 'Do I need to change my freight or brokerage partners?',
      a: 'No. Yuanify operates at the payment layer, not the logistics layer. Your existing shipping agents, customs brokers, and supply chain remain exactly as they are.',
    },
    {
      q: 'What does the Yuanify platform cost?',
      a: 'Yuanify is free to use. We operate on a performance-based model, earning a share of the actual savings we generate on your import invoices. If we don\'t save you money, you don\'t pay.',
    },
  ];

  return (
    <section id="yuanify" className="ydd-section">

      {/* ── Hero: Headline Stat + Image ── */}
      <div className="ydd-hero yuanify-bg">
        <div className="container">
          <div className="ydd-hero-layout">
            <div className="ydd-hero-text">
              <h2 className="ydd-hero-title">
                <span className="product-brand yuanify-brand">
                  <span className="brand-main">Yuan</span><span className="brand-ify">ify</span>
                </span>
              </h2>
              <div className="ydd-headline-stat">
                <span className="ydd-headline-number">Up to 3%</span>
                <span className="ydd-headline-label">Discount on Every Shipment</span>
              </div>
              <p className="ydd-hero-sub">
                Your Chinese suppliers are charging you a 4% USD volatility premium. Yuanify removes it—automatically, compliantly, and from your very first transaction.
              </p>

              <ul className="ydd-feature-list">
                <li><span className="ydd-check">✓</span> <span>Eliminate USD Volatility Premiums</span></li>
                <li><span className="ydd-check">✓</span> <span>Pay Suppliers in Their Preferred Currency</span></li>
                <li><span className="ydd-check">✓</span> <span>Build Offshore Capital Reserves</span></li>
              </ul>

              <a href="#contact" className="btn-learn-more yuanify-btn">Calculate Your Savings</a>
            </div>

            <div className="ydd-hero-visual">
              <div className="ydd-image-wrapper yuanify-glow">
                <img src={yuanifyImg} alt="Yuanify Secure Trade Flow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── The Challenge ── */}
      <div className="ydd-block ydd-challenge-block">
        <div className="container">
          <div className="ydd-two-col">
            <div className="ydd-col-text">
              <h3 className="ydd-section-heading">The Challenge</h3>
              <h4 className="ydd-sub-heading">The Hidden 4% Uplift on Every Purchase Order</h4>
              <p className="ydd-body">
                Picture this: you've negotiated the best possible price with your Chinese supplier, agreed on terms, and placed your order. But there's a cost you never see on the invoice—a <strong>4% uplift baked into every USD price</strong> to protect the supplier against USD/CNY exchange rate swings.
              </p>
              <p className="ydd-body" style={{ marginTop: '1rem' }}>
                Your supplier doesn't want dollars. They want <strong>Yuan</strong>—to pay their workers, their raw material vendors, their landlords. Every time you pay in USD, they're forced to convert, absorbing the risk of currency fluctuation. To cover that risk, they quietly inflate your price. It's an invisible tax that compounds across every purchase order, every supplier, every year.
              </p>
            </div>
            <div className="ydd-col-callout">
              <div className="ydd-callout-card">
                <span className="ydd-callout-icon">⚠</span>
                <p>Chinese suppliers add an estimated <strong>4% premium</strong> to USD invoices to hedge against exchange rate volatility—a hidden cost that erodes your margins on every single shipment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── The Solution ── */}
      <div className="ydd-block ydd-solution-block">
        <div className="container">
          <div className="ydd-two-col reverse">
            <div className="ydd-col-text">
              <h3 className="ydd-section-heading">The Solution</h3>
              <h4 className="ydd-sub-heading">Here's What Changes When You Yuanify</h4>
              <p className="ydd-body">
                Instead of paying in USD and absorbing the hidden mark-up, <strong>Yuanify</strong> enables your Chinese suppliers to invoice and be paid in their home currency—<strong>Chinese Yuan (CNY)</strong>. When a supplier knows they'll receive Yuan directly, the need for a volatility buffer disappears entirely.
              </p>
              <p className="ydd-body" style={{ marginTop: '1rem' }}>
                The result? Suppliers willingly pass the saving back as a <strong>discount of up to 3%</strong> on your purchase orders. Over the course of a year, across multiple suppliers, that discount compounds into significant capital—capital that stays in your business and fuels growth.
              </p>
            </div>
            <div className="ydd-col-callout">
              <div className="ydd-stat-badge">
                <span className="ydd-stat-number">Up to 3%</span>
                <span className="ydd-stat-label">Discount negotiated back from supplier pricing per shipment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── How It Works ── */}
      <div className="ydd-block ydd-how-block">
        <div className="container">
          <div className="ydd-center-header">
            <h3 className="ydd-section-heading">How It Works</h3>
            <p className="ydd-body" style={{ maxWidth: 700, margin: '0 auto' }}>
              Our proprietary platform, <strong>SC Trader</strong>, orchestrates the end-to-end payment flow—from supplier negotiation to compliant Yuan settlement.
            </p>
          </div>

          <div className="ydd-steps-grid">
            {steps.map((s) => (
              <div className="ydd-step-card" key={s.num}>
                <span className="ydd-step-num">{s.num}</span>
                <h4 className="ydd-step-title">{s.title}</h4>
                <p className="ydd-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* ── Next Steps ── */}
      <div className="ydd-block ydd-nextsteps-block">
        <div className="container">
          <div className="ydd-center-header">
            <h3 className="ydd-section-heading">Next Steps</h3>
            <p className="ydd-body" style={{ maxWidth: 600, margin: '0 auto' }}>
              Getting started is straightforward. No change to your logistics, no lengthy onboarding.
            </p>
          </div>

          <div className="ydd-nextsteps-grid">
            {nextSteps.map((s) => (
              <div className="ydd-nextstep-card" key={s.num}>
                <span className="ydd-nextstep-icon">{s.icon}</span>
                <span className="ydd-nextstep-num">Step {s.num}</span>
                <h4 className="ydd-nextstep-title">{s.title}</h4>
                <p className="ydd-nextstep-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="ydd-nextsteps-zarify-note">
            <p>
              Already importing with Rand-denominated invoicing? <strong className="product-brand zarify-brand"><span className="brand-main">Zar</span><span className="brand-ify">ify</span></strong> reduces your landed cost even further by eliminating SARS exchange rate uplifts.
              <Link to="/zarify" className="ydd-zarify-link"> Discover Zarify →</Link>
            </p>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="ydd-block ydd-faq-block">
        <div className="container">
          <h3 className="ydd-section-heading ydd-center-header">Common Questions</h3>
          <div className="ydd-faq-list">
            {faqs.map((f, i) => (
              <FAQItem key={i} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="ydd-block ydd-cta-block">
        <div className="container ydd-center-header">
          <p className="ydd-cta-tagline">Stop subsidising currency risk. Start capturing the discount your business deserves.</p>
          <a href="#contact" className="btn-learn-more yuanify-btn ydd-cta-btn">Calculate Your Savings Today</a>
        </div>
      </div>

      <style>{`
        /* ── Section wrapper ── */
        .ydd-section {
          background: var(--bg-primary);
        }

        .ydd-block {
          padding: 5rem 0;
          border-bottom: 1px solid var(--border);
        }

        /* ── Hero layout ── */
        .ydd-hero {
          padding: var(--section-spacing) 0;
          position: relative;
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }
        .ydd-hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .ydd-hero-layout {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .ydd-headline-stat {
            align-items: center;
          }
        }
        .ydd-hero-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
        }
        .yuanify-brand .brand-main { color: var(--color-yuanify); }
        .yuanify-brand .brand-ify { color: var(--color-yuanify-ify); }

        /* ── Headline stat ── */
        .ydd-headline-stat {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.5rem;
        }
        .ydd-headline-number {
          font-family: var(--font-display);
          font-size: clamp(3rem, 7vw, 5rem);
          font-weight: 800;
          color: var(--color-yuanify);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .ydd-headline-label {
          font-size: clamp(1rem, 2vw, 1.3rem);
          color: var(--text-primary);
          font-weight: 600;
          margin-top: 0.35rem;
          letter-spacing: 0.01em;
        }

        .ydd-hero-sub {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 500px;
          line-height: 1.7;
        }

        /* Feature checklist */
        .ydd-feature-list {
          list-style: none;
          margin: 0 0 2rem 0;
        }
        .ydd-feature-list li {
          margin-bottom: 0.8rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1rem;
          color: var(--text-secondary);
        }
        .ydd-check {
          color: var(--color-yuanify);
          font-weight: bold;
        }

        /* Image / Placeholder */
        .ydd-image-wrapper {
          width: 100%;
          max-width: 520px;
          margin-left: auto;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          position: relative;
        }
        .ydd-image-wrapper img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }
        .ydd-image-wrapper:hover img {
          transform: scale(1.03);
        }
        .yuanify-glow {
          box-shadow: 0 0 60px -20px var(--color-yuanify-glow);
        }

        .yuanify-btn {
          background: var(--color-yuanify);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 20px var(--color-yuanify-glow);
          color: #fff;
        }
        .yuanify-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 30px var(--color-yuanify-glow);
          filter: brightness(1.2);
        }

        /* ── Shared typography ── */
        .ydd-section-heading {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 0.75rem;
          color: var(--color-yuanify);
        }
        .ydd-sub-heading {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .ydd-body {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.75;
        }
        .ydd-body strong {
          color: var(--text-primary);
        }
        .ydd-center-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        /* ── Two-column layout ── */
        .ydd-two-col {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .ydd-two-col.reverse .ydd-col-text { order: 2; }
        .ydd-two-col.reverse .ydd-col-callout { order: 1; }

        @media (max-width: 900px) {
          .ydd-two-col {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .ydd-two-col.reverse .ydd-col-text,
          .ydd-two-col.reverse .ydd-col-callout {
            order: unset;
          }
        }

        /* ── Callout card ── */
        .ydd-callout-card {
          background: var(--color-yuanify-glow);
          border-left: 3px solid var(--color-yuanify);
          border-radius: 0 10px 10px 0;
          padding: 2rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          opacity: 0.85;
        }
        .ydd-callout-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .ydd-callout-card p {
          color: var(--text-primary);
          line-height: 1.7;
          font-size: 1rem;
        }
        .ydd-callout-card strong {
          color: var(--color-yuanify);
        }

        /* ── Stat badge ── */
        .ydd-stat-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(145deg, rgba(61, 122, 52, 0.12) 0%, rgba(61, 122, 52, 0.04) 100%);
          border: 1px solid var(--color-yuanify-glow);
          border-radius: 16px;
          padding: 3rem 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .ydd-stat-badge:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px var(--color-yuanify-glow);
        }
        .ydd-stat-number {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: var(--color-yuanify);
          line-height: 1;
          margin-bottom: 0.75rem;
        }
        .ydd-stat-label {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 240px;
        }

        /* ── Backgrounds ── */
        .ydd-challenge-block { background: var(--bg-primary); }
        .ydd-solution-block { background: var(--bg-secondary); }
        .ydd-how-block { background: var(--bg-primary); }
        .ydd-ideal-block { background: var(--bg-secondary); }
        .ydd-nextsteps-block { background: var(--bg-primary); }
        .ydd-faq-block { background: var(--bg-secondary); }
        .ydd-cta-block {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          border-bottom: none;
        }

        /* ── Steps grid ── */
        .ydd-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .ydd-steps-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .ydd-steps-grid { grid-template-columns: 1fr; }
        }
        .ydd-step-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem 1.5rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .ydd-step-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-yuanify);
        }
        .ydd-step-num {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 0.8rem;
          color: var(--color-yuanify);
          border: 1px solid var(--color-yuanify);
          border-radius: 4px;
          padding: 0.15rem 0.5rem;
          margin-bottom: 1rem;
        }
        .ydd-step-title {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }
        .ydd-step-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }



        /* ── Next Steps ── */
        .ydd-nextsteps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 768px) {
          .ydd-nextsteps-grid { grid-template-columns: 1fr; }
        }
        .ydd-nextstep-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }
        .ydd-nextstep-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-yuanify);
          box-shadow: 0 12px 40px var(--color-yuanify-glow);
        }
        .ydd-nextstep-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 1rem;
        }
        .ydd-nextstep-num {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-yuanify);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: 1px solid var(--color-yuanify);
          border-radius: 4px;
          padding: 0.2rem 0.7rem;
          margin-bottom: 1rem;
        }
        .ydd-nextstep-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .ydd-nextstep-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .ydd-nextsteps-zarify-note {
          text-align: center;
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem 2.5rem;
          max-width: 750px;
          margin: 0 auto;
        }
        .ydd-nextsteps-zarify-note p {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .ydd-zarify-link {
          color: var(--color-zarify);
          font-weight: 600;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .ydd-zarify-link:hover {
          opacity: 0.8;
        }

        /* ── FAQ ── */
        .ydd-faq-list {
          max-width: 750px;
          margin: 0 auto;
        }
        .ydd-faq-item {
          border: 1px solid var(--border);
          border-radius: 10px;
          margin-bottom: 1rem;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s ease;
          background: var(--bg-tertiary);
        }
        .ydd-faq-item:hover,
        .ydd-faq-item.open {
          border-color: var(--color-yuanify);
        }
        .ydd-faq-q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          font-weight: 600;
          font-size: 1rem;
          color: var(--text-primary);
          user-select: none;
        }
        .ydd-faq-chevron {
          font-size: 1.4rem;
          color: var(--color-yuanify);
          flex-shrink: 0;
          margin-left: 1rem;
          transition: transform 0.3s ease;
        }
        .ydd-faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.4s ease;
          padding: 0 1.5rem;
        }
        .ydd-faq-item.open .ydd-faq-a {
          max-height: 300px;
          padding: 0 1.5rem 1.25rem;
        }
        .ydd-faq-a p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        /* ── CTA ── */
        .ydd-cta-tagline {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-style: italic;
        }
        .ydd-cta-btn {
          font-size: 1.1rem;
          padding: 1.1rem 3rem;
        }
      `}</style>
    </section>
  );
};

export default YuanifyDeepDive;
