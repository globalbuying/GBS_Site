import React, { useState } from 'react';

const complianceItems = [
    {
        icon: '🏛',
        title: 'Aligned With SARS and SARB Requirements',
        body: 'All GBS processes, financial structures, and supporting documentation are built to comply fully with SARS customs regulations and SARB Exchange Control requirements. Our models work within the legislative framework—never around it—ensuring regulatory certainty and long-term sustainability.',
    },
    {
        icon: '🌐',
        title: 'International Procurement & Shipping Best Practice',
        body: 'GBS structures follow globally recognised procurement, logistics, and shipping documentation standards, ensuring seamless alignment with overseas suppliers, freight forwarders, and inspection authorities. Every transaction follows established industry protocols.',
    },
    {
        icon: '✅',
        title: 'Importer Sign-Off on All Payment Pathways',
        body: 'We enforce strict importer approval on every financial movement. Nothing moves without explicit sign-off from the importer, ensuring full control, full visibility, and zero ambiguity in how funds are routed.',
    },
    {
        icon: '📊',
        title: 'Adherence to Generally Accepted Accounting Principles (GAAP)',
        body: 'All accounting treatments, financial flows, and supporting documents are structured in line with GAAP-compliant principles. This ensures clean reconciliation, audit readiness, and total financial integrity.',
    },
    {
        icon: '🔍',
        title: 'Certificates of Inspection When Required',
        body: 'Where applicable, GBS supports or facilitates the issuance of Certificates of Inspection (COI) and other pre-shipment documentation to ensure product, process, and compliance assurance—reducing risk at origin and arrival.',
    },
];

const ComplianceSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (i) => {
        setOpenIndex(prev => (prev === i ? -1 : i));
    };

    return (
        <section className="compliance-section">
            <div className="container">
                <div className="compliance__header">
                    <h2 className="compliance__title">Compliance First</h2>
                    <p className="compliance__tagline">Engineered for Trust</p>
                    <p className="compliance__intro">
                        GBS operates with an uncompromising commitment to regulatory, financial, and operational compliance. Every structure we deploy is engineered to protect the importer, support clean audit trails, and meet both South African and international standards.
                    </p>
                </div>

                <div className="compliance__accordion">
                    {complianceItems.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className={`accordion-item ${isOpen ? 'accordion-item--open' : ''}`}
                            >
                                <button
                                    className="accordion-trigger"
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                >
                                    <span className="accordion-icon">{item.icon}</span>
                                    <span className="accordion-label">{item.title}</span>
                                    <span className="accordion-chevron">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                                <div className="accordion-panel">
                                    <div className="accordion-body">
                                        <p>{item.body}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
        .compliance-section {
          padding: var(--section-spacing) 0;
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          position: relative;
        }

        .compliance__header {
          max-width: 800px;
          margin-bottom: 3.5rem;
        }

        .compliance__title {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 0.5rem;
          background: linear-gradient(to right, var(--gradient-heading-start), var(--gradient-heading-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .compliance__tagline {
          font-size: 1rem;
          color: var(--color-zarify);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1.5rem;
          font-family: var(--font-display);
        }

        .compliance__intro {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        /* Accordion */
        .compliance__accordion {
          max-width: 900px;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .accordion-item {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .accordion-item:hover {
          border-color: rgba(20, 184, 166, 0.3);
        }

        .accordion-item--open {
          border-color: rgba(20, 184, 166, 0.4);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
        }

        .accordion-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-display);
          color: var(--text-primary);
          font-size: 1.05rem;
          font-weight: 600;
          transition: background 0.2s ease;
        }

        .accordion-trigger:hover {
          background: rgba(20, 184, 166, 0.04);
        }

        .accordion-icon {
          font-size: 1.4rem;
          flex-shrink: 0;
          width: 2rem;
          text-align: center;
        }

        .accordion-label {
          flex: 1;
        }

        .accordion-chevron {
          flex-shrink: 0;
          color: var(--text-muted);
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
        }

        .accordion-item--open .accordion-chevron {
          transform: rotate(180deg);
          color: var(--color-zarify);
        }

        /* Expand / collapse */
        .accordion-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .accordion-item--open .accordion-panel {
          max-height: 300px;
        }

        .accordion-body {
          padding: 0 1.5rem 1.5rem 4.5rem; /* align with text after icon */
        }

        .accordion-body p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 1rem;
        }

        @media (max-width: 600px) {
          .accordion-trigger {
            padding: 1rem 1.25rem;
            font-size: 0.95rem;
            gap: 0.75rem;
          }

          .accordion-body {
            padding: 0 1.25rem 1.25rem 1.25rem;
          }

          .accordion-icon {
            display: none;
          }
        }
      `}</style>
        </section>
    );
};

export default ComplianceSection;
