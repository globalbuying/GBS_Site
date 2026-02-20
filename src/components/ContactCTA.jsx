import React, { useState } from 'react';
import ContactModal from './ContactModal';

const ContactCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer id="contact" className="contact-section">
      <div className="container center-content">
        <h2 className="cta-title">Ready to build Hard Currency Reserves You Control?</h2>
        <p className="cta-description">
          Join leading businesses transforming their global engagement with Global Buying Solutions.
        </p>

        <button
          className="cta-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Get In Touch
        </button>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Global Buying Solutions Limited. All rights reserved.</p>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <style>{`
        .contact-section {
          padding: 6rem 0 2rem;
          background: var(--bg-primary);
          border-top: 1px solid var(--bg-tertiary);
          text-align: center;
        }

        .center-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, var(--gradient-heading-start), var(--gradient-heading-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cta-description {
          color: var(--text-secondary);
          margin-bottom: 3rem;
          font-size: 1.2rem;
          max-width: 600px;
        }

        .cta-btn {
          display: inline-block;
          padding: 1.1rem 3.5rem;
          font-size: 1.15rem;
          font-weight: 700;
          background: var(--color-capify);
          color: #FFFFFF; /* High contrast white text for both modes */
          border-radius: 6px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: var(--font-display);
          box-shadow: 0 10px 25px -5px var(--color-capify-glow);
          margin-bottom: 6rem;
          cursor: pointer;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 35px -10px var(--color-capify-glow);
          filter: brightness(1.1);
          color: #FFFFFF;
        }

        .cta-btn:active {
          transform: translateY(-1px);
        }

        .footer-bottom {
          width: 100%;
          border-top: 1px solid var(--border);
          padding-top: 2rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default ContactCTA;
