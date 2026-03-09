import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    honeypot: '', // Hidden field to catch bots
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [openTime, setOpenTime] = useState(0); // Timestamp when modal opened
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Focus trap & Escape key
  useEffect(() => {
    if (!isOpen) return;

    // Capture the time the modal was opened
    setOpenTime(Date.now());

    // Save the previously focused element
    previousFocusRef.current = document.activeElement;

    // Focus the first input when modal opens
    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
        return;
      }

      // Trap focus
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'input, textarea, button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      // Restore focus
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  const handleClose = () => {
    setFormData({ name: '', email: '', company: '', message: '', honeypot: '' });
    setStatus('idle');
    setErrorMsg('');
    onClose();
  };

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    // 1. Honeypot check: If this hidden field is filled, it's a bot
    if (formData.honeypot) {
      console.warn('Bot detected via honeypot');
      setStatus('success');
      return;
    }

    // 2. Time-based check: Humans take > 3 seconds to fill this form
    const timeToSubmit = Date.now() - openTime;
    if (timeToSubmit < 3000) {
      console.warn('Submission too fast:', timeToSubmit, 'ms');
      setStatus('success');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // 3. Environment Variable Validation
    if (!serviceId || !templateId || !publicKey) {
      const missing = [];
      if (!serviceId) missing.push('SERVICE_ID');
      if (!templateId) missing.push('TEMPLATE_ID');
      if (!publicKey) missing.push('PUBLIC_KEY');

      const error = `Missing EmailJS configuration: ${missing.join(', ')}`;
      console.error(error);
      setErrorMsg('Configuration error. Please contact us directly via email.');
      setStatus('error');
      return;
    }

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      company: formData.company || 'Not provided',
      message: formData.message,
    };

    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '', honeypot: '' });
    } catch (err) {
      console.error('EmailJS Error Details:', {
        status: err.status,
        text: err.text,
        error: err
      });
      setErrorMsg(err.text || 'Failed to send message. Please try again or email us.');
      setStatus('error');
    }
  };

  return (
    <div className="cm-overlay" onClick={handleClose}>
      <div
        className="cm-content"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cm-heading"
      >
        <button className="cm-close" onClick={handleClose} aria-label="Close dialog">
          &times;
        </button>

        {status === 'success' ? (
          <div className="cm-success">
            <div className="cm-success-icon">✓</div>
            <h3 id="cm-heading">Message Sent</h3>
            <p className="cm-subtitle">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <button className="cm-btn cm-btn-done" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 id="cm-heading">Get in Touch</h3>
            <p className="cm-subtitle">
              We'd love to hear from you. Fill in the form below and we'll respond within 24 hours.
            </p>

            {status === 'error' && (
              <div className="cm-error-banner">
                {errorMsg || 'Something went wrong.'} Please try again or email us directly at{' '}
                <a href="mailto:inquiry@globalbuying.solutions">inquiry@globalbuying.solutions</a>.
              </div>
            )}

            <form onSubmit={handleSubmit} className="cm-form" noValidate>
              {/* HONEYPOT FIELD - Hidden from humans, tempting for bots */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="cm-hp">Do not fill this field</label>
                <input
                  type="text"
                  id="cm-hp"
                  name="honeypot"
                  autoComplete="off"
                  tabIndex="-1"
                  value={formData.honeypot}
                  onChange={handleChange}
                />
              </div>

              <div className="cm-group">
                <label htmlFor="cm-name">Name *</label>

                <input
                  ref={firstInputRef}
                  type="text"
                  id="cm-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  disabled={status === 'sending'}
                />
              </div>

              <div className="cm-group">
                <label htmlFor="cm-email">Email *</label>
                <input
                  type="email"
                  id="cm-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  disabled={status === 'sending'}
                />
              </div>

              <div className="cm-group">
                <label htmlFor="cm-company">Company</label>
                <input
                  type="text"
                  id="cm-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company (optional)"
                  disabled={status === 'sending'}
                />
              </div>

              <div className="cm-group">
                <label htmlFor="cm-message">Message *</label>
                <textarea
                  id="cm-message"
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  disabled={status === 'sending'}
                ></textarea>
              </div>

              <button
                type="submit"
                className="cm-btn cm-btn-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span className="cm-spinner-wrap">
                    <span className="cm-spinner"></span> Sending…
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </>
        )}
      </div>

      <style>{`
        /* ── Overlay ── */
        .cm-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(6px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
          animation: cmFadeIn 0.25s ease;
          padding: 1rem;
        }

        /* ── Modal ── */
        .cm-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          padding: 2rem 2rem 1.5rem;
          border-radius: 16px;
          width: 100%;
          max-width: 420px;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: cmSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          max-height: 85vh;
          overflow-y: auto;
        }

        /* ── Close ── */
        .cm-close {
          position: absolute;
          top: 0.75rem;
          right: 1rem;
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 2rem;
          cursor: pointer;
          line-height: 1;
          padding: 0.5rem;
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .cm-close:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.06);
        }

        /* ── Typography ── */
        .cm-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.35rem;
          color: var(--text-primary);
          font-family: var(--font-display);
        }

        .cm-subtitle {
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* ── Form ── */
        .cm-form {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .cm-group {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .cm-group label {
          display: block;
          margin-bottom: 0.3rem;
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 500;
          font-family: var(--font-display);
        }

        .cm-group input,
        .cm-group textarea {
          width: 100%;
          padding: 0.65rem 0.85rem;
          border-radius: 8px;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .cm-group input::placeholder,
        .cm-group textarea::placeholder {
          color: var(--text-muted);
        }

        .cm-group input:focus,
        .cm-group textarea:focus {
          outline: none;
          border-color: var(--color-capify);
          box-shadow: 0 0 0 3px var(--color-capify-glow);
        }

        .cm-group input:disabled,
        .cm-group textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ── Buttons ── */
        .cm-btn {
          width: 100%;
          padding: 0.75rem 2rem;
          font-weight: 600;
          font-size: 0.95rem;
          font-family: var(--font-display);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #fff;
        }

        .cm-btn-submit {
          background: var(--color-capify);
          box-shadow: 0 4px 15px var(--color-capify-glow);
          margin-top: 0.5rem;
        }
        .cm-btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px var(--color-capify-glow);
          filter: brightness(1.1);
        }
        .cm-btn-submit:active:not(:disabled) {
          transform: translateY(0);
        }
        .cm-btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .cm-btn-done {
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          color: var(--text-primary);
          margin-top: 1.5rem;
        }
        .cm-btn-done:hover {
          background: var(--border);
        }

        /* ── Spinner ── */
        .cm-spinner-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .cm-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: cmSpin 0.6s linear infinite;
        }

        /* ── Success State ── */
        .cm-success {
          text-align: center;
          padding: 2rem 0 1rem;
        }

        .cm-success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-capify), #60A5FA);
          color: #fff;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          animation: cmPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* ── Error Banner ── */
        .cm-error-banner {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #FCA5A5;
          padding: 0.85rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .cm-error-banner a {
          color: #93C5FD;
          text-decoration: underline;
        }

        /* ── Animations ── */
        @keyframes cmFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes cmSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cmSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes cmPop {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .cm-content {
            padding: 1.5rem 1.25rem;
            max-height: 90vh;
            border-radius: 12px;
          }
          .cm-content h3 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactModal;
