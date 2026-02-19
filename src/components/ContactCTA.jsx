import React, { useState } from 'react';
import ContactModal from './ContactModal';

const ContactCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer id="contact" className="contact-section">
      <div className="container center-content">
        <h2 className="cta-title">Ready to transform your import structure?</h2>
        <p className="cta-description">
          Join leading businesses transforming their global engagement with Global Buying Solutions.
        </p>

        <button
          className="btn-primary cta-btn"
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
          background: linear-gradient(to right, #fff, #94A3B8);
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
          padding: 1rem 3rem;
          font-size: 1.1rem;
          margin-bottom: 6rem;
        }

        .footer-bottom {
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 2rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default ContactCTA;
