import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        message: ''
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, company, message } = formData;
        const subject = encodeURIComponent(`Inquiry from ${name}${company ? ` - ${company}` : ''}`);
        const body = encodeURIComponent(`${message}\n\nFrom:\n${name}\n${company ? company : ''}`);

        window.location.href = `mailto:inquiry@globalbuying.solutions?subject=${subject}&body=${body}`;
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <h3>Get in Touch</h3>
                <p className="modal-subtitle">We'd love to hear from you. Send us a message below.</p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company (Optional)"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-primary submit-btn">
                        Send Message
                    </button>
                </form>
            </div>

            <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: #1e1e24; /* Darker version of bg-secondary */
          border: 1px solid var(--border-color, #333);
          padding: 2.5rem;
          border-radius: 1rem;
          width: 90%;
          max-width: 500px;
          position: relative;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s ease;
          max-height: 90vh;
          overflow-y: auto;
        }

        @media (max-width: 600px) {
          .modal-content {
            width: 95%;
            padding: 2rem 1.5rem;
            max-height: 95vh;
          }

          h3 {
            font-size: 1.5rem;
          }
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
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
        }
        
        .close-btn:hover {
          color: white;
        }

        h3 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: white;
        }

        .modal-subtitle {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
          text-align: left;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        input, textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid #444;
          color: white;
          font-family: inherit;
          transition: border-color 0.2s;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: var(--primary-color, #3b82f6);
          background: rgba(0, 0, 0, 0.3);
        }

        .submit-btn {
          width: 100%;
          margin-top: 1rem;
          padding: 1rem 2rem;
          font-weight: 600;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: linear-gradient(135deg, #14B8A6, #2dd4bf);
          color: white;
          border: none;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(20, 184, 166, 0.4), 0 0 20px rgba(20, 184, 166, 0.3);
          background: linear-gradient(135deg, #2dd4bf, #14B8A6);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

export default ContactModal;
