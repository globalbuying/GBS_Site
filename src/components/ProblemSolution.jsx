import React from 'react';

const ProblemSolution = () => {
    const problems = [
        {
            title: "The Friction",
            items: [
                "Inflated Customs Duties",
                "Unhedged Currency Risk",
                "Limited Access to Offshore Finance",
                "Administrative Complexity"
            ]
        },
        {
            title: "The GBS Solution",
            items: [
                "Structured Trade Flows",
                "UK-Based Buying Office",
                "Hard Currency Reserves",
                "Automated Compliance"
            ]
        }
    ];

    return (
        <section className="problem-solution-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">The Trade Gap</h2>
                    <p className="section-subtitle">
                        South African importers face a volatile environment. We provide the infrastructure to bridge the gap between compliance and efficiency.
                    </p>
                </div>

                <div className="comparison-grid">
                    <div className="grid-col problem">
                        <h3>Current Reality</h3>
                        <ul>
                            {problems[0].items.map((item, idx) => (
                                <li key={idx} className="problem-item">
                                    <span className="icon">✕</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid-divider">
                        <div className="line"></div>
                        <div className="arrow-box">➜</div>
                        <div className="line"></div>
                    </div>

                    <div className="grid-col solution">
                        <h3>GBS Advantage</h3>
                        <ul>
                            {problems[1].items.map((item, idx) => (
                                <li key={idx} className="solution-item">
                                    <span className="icon">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <style>{`
        .problem-solution-section {
          padding: var(--section-spacing) 0;
          background: var(--bg-primary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2rem, 3vw, 2.5rem);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 2rem;
          align-items: center;
          max-width: 900px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .comparison-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .grid-divider {
            transform: rotate(90deg);
          }
        }

        .grid-col {
          background: var(--bg-tertiary);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border);
        }

        .grid-col h3 {
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          color: white;
        }

        .grid-col ul {
          list-style: none;
        }

        .grid-col li {
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .problem .icon { color: #f87171; }
        .solution .icon { color: #4ade80; }

        .solution {
          border-color: rgba(20, 184, 166, 0.3);
          box-shadow: 0 0 30px rgba(0,0,0,0.2);
        }

        .grid-divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--text-muted);
        }
        
        .arrow-box {
          background: var(--bg-secondary);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid var(--border);
        }
      `}</style>
        </section>
    );
};

export default ProblemSolution;
