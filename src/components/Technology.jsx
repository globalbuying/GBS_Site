import React from 'react';

const techSteps = [
  {
    num: '01',
    title: 'Analyse & Calculate',
    body: 'Our FX engine and landed cost calculator determine the optimal settlement path for each specific invoice, identifying hidden costs and maximizing efficiency before the shipment even leaves origin.'
  },
  {
    num: '02',
    title: 'Structured Trade Flow',
    body: 'Zarify purchases the goods from your international supplier and sells them to your South African entity, issuing a Rand-denominated invoice that reflects the true market value and simplifies your procurement chain.'
  },
  {
    num: '03',
    title: 'Automated Compliance',
    body: 'Our Smart Document Hub generates SARS-ready documentation and maintains a single-source audit trail for every transaction, ensuring you are always audit-ready with zero manual paperwork.'
  },
  {
    num: '04',
    title: 'Instant Cash Flow',
    body: 'By reducing duty exposure and streamlining the ordering process, we free up critical working capital, allowing you to deploy capital towards growth rather than inflated import costs.'
  }
];

const Technology = () => {
  return (
    <section id="technology" className="tech-section">
      <div className="container">
        <div className="tech-grid">
          {/* Left: Content & Pipeline */}
          <div className="tech-content">
            <div className="tech-header">
              <h2 className="tech-heading section-title">How It Works</h2>
              <p className="tech-platform">Powered by <span className="highlight">SC Trader</span></p>
              <p className="tech-intro">
                Our proprietary trade execution platform, SC Trader, automates the three mission-critical layers of your shipment: <strong>documents, goods, and capital</strong>.
              </p>
            </div>

            <div className="tech-pipeline">
              {techSteps.map((step, i) => (
                <div key={i} className="pipeline-step">
                  <div className="step-tracker">
                    <span className="step-number">{step.num}</span>
                    {i < techSteps.length - 1 && <div className="step-line"></div>}
                  </div>
                  <div className="step-info">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-body">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tech Visualization */}
          <div className="tech-visual">
            <div className="dashboard-frame">
              <div className="dashboard-header">
                <div className="dash-dots"><span></span><span></span><span></span></div>
                <div className="dash-title">SC TRADER ENGINE v4.2</div>
              </div>
              <div className="dashboard-content">
                <div className="chart-row">
                  <div className="small-chart">
                    <div className="chart-bar" style={{ height: '60%' }}></div>
                    <div className="chart-bar" style={{ height: '80%' }}></div>
                    <div className="chart-bar" style={{ height: '40%' }}></div>
                    <div className="chart-bar" style={{ height: '90%' }}></div>
                  </div>
                  <div className="main-stat">
                    <div className="stat-label">Landed Cost Optimization</div>
                    <div className="stat-value">-14.2%</div>
                  </div>
                </div>
                <div className="data-grid">
                  <div className="data-item">
                    <div className="data-label">FX Engine</div>
                    <div className="data-status">ACTIVE</div>
                  </div>
                  <div className="data-item">
                    <div className="data-label">Audit Trail</div>
                    <div className="data-status">SECURED</div>
                  </div>
                  <div className="data-item">
                    <div className="data-label">SARS Hub</div>
                    <div className="data-status">SYNCED</div>
                  </div>
                </div>
                <div className="glow-orb"></div>
                <div className="doc-stack">
                  <div className="doc-item"></div>
                  <div className="doc-item"></div>
                  <div className="doc-item"></div>
                </div>
              </div>
              <div className="dashboard-footer">
                SYSTEMS NOMINAL // NODE: JHB-OFFSHORE-01
              </div>
            </div>
          </div>
        </div>

        {/* Ideal For Banner */}
        <div className="ideal-banner">
          <div className="ideal-icon">🎯</div>
          <div className="ideal-content">
            <strong>Ideal for:</strong> Importers with R10M–R100M in annual foreign purchases, high duty exposure (&gt;10%), and recurring trade activity.
          </div>
        </div>
      </div>

      <style>{`
        .tech-section {
          padding: var(--section-spacing) 0;
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          border-top: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5rem;
          align-items: flex-start;
          margin-bottom: 5rem;
        }

        @media (max-width: 1024px) {
          .tech-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          
          .tech-visual {
            order: -1;
            max-width: 600px;
            margin: 0 auto;
          }
        }

        .tech-header {
          margin-bottom: 3.5rem;
        }

        .tech-heading {
          font-size: clamp(2rem, 5vw, 3.5rem);
          margin-bottom: 0.5rem;
          background: linear-gradient(to right, var(--gradient-heading-start), var(--gradient-heading-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .tech-platform {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          letter-spacing: 0.05em;
        }

        .tech-platform .highlight {
          color: var(--color-capify);
        }

        .tech-intro {
          font-size: 1.15rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 600px;
        }

        /* Pipeline */
        .tech-pipeline {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .pipeline-step {
          display: flex;
          gap: 2rem;
        }

        .step-tracker {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 0.5rem;
        }

        .step-number {
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--color-capify);
          background: var(--bg-tertiary);
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid var(--color-capify-glow);
          z-index: 2;
        }

        .step-line {
          width: 2px;
          flex: 1;
          background: linear-gradient(to bottom, var(--color-capify-glow), transparent);
          margin-top: 0.5rem;
          min-height: 40px;
        }

        .step-info {
          flex: 1;
        }

        .step-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .step-body {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        /* Dashboard Visualization */
        .tech-visual {
          position: sticky;
          top: 120px;
        }

        .dashboard-frame {
          background: #0F172A;
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.1);
          overflow: hidden;
          font-family: 'JetBrains Mono', 'Courier New', monospace;
        }

        .dashboard-header {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.75rem 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dash-dots {
          display: flex;
          gap: 6px;
        }

        .dash-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
        }

        .dash-title {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.1em;
        }

        .dashboard-content {
          padding: 2rem;
          position: relative;
          min-height: 300px;
        }

        .chart-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .small-chart {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 60px;
        }

        .chart-bar {
          width: 12px;
          background: var(--color-capify);
          border-radius: 2px 2px 0 0;
          opacity: 0.8;
          animation: barPulse 2s infinite alternate;
        }

        .main-stat {
          text-align: right;
        }

        .stat-label {
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: #fff;
          font-family: var(--font-display);
        }

        .data-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .data-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 8px;
        }

        .data-label {
          font-size: 0.6rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .data-status {
          font-size: 0.75rem;
          color: var(--color-capify);
          font-weight: 700;
        }

        .glow-orb {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 150px;
          height: 150px;
          background: var(--color-capify-glow);
          filter: blur(40px);
          opacity: 0.4;
          z-index: 0;
        }

        .doc-stack {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.05;
          pointer-events: none;
        }

        .doc-item {
          width: 100px;
          height: 130px;
          background: #fff;
          margin-bottom: -110px;
          border-radius: 4px;
        }

        .dashboard-footer {
          background: rgba(0, 0, 0, 0.3);
          padding: 0.75rem 1.25rem;
          font-size: 0.6rem;
          color: rgba(255, 255, 255, 0.3);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        @keyframes barPulse {
          from { opacity: 0.6; height: 30%; }
          to { opacity: 1; height: 90%; }
        }

        /* Ideal Banner */
        .ideal-banner {
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          max-width: 900px;
        }

        .ideal-icon {
          font-size: 2rem;
        }

        .ideal-content {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .ideal-banner {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
          }
          
          .ideal-icon {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Technology;
