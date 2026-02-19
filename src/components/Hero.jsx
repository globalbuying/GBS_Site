import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="ambient-light"></div>
      <div className="grid-overlay"></div>

      <div className="container hero-content">
        <h1 className="hero-title">
          <span className="block-reveal">Turn Your Import Structure</span>
          <span className="block-reveal delay-1">Into a Strategic Asset</span>
        </h1>

        <div className="hero-subheadline">
          Reduce landed costs. Build offshore reserves. Strengthen your cash position.
        </div>

        <p className="hero-body">
          Global Buying Solutions partners with South African import business owners to redesign their trade
          structures—lowering total import costs while creating offshore capital reserves
          that can be deployed to extend supplier terms, protect margins, and increase financial control.
        </p>

        <div className="hero-actions">
          <a href="#zarify" className="btn btn-primary glow-zarify">Explore Zarify</a>
          <a href="#capify" className="btn btn-secondary glow-capify">Discover Capify</a>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 4rem; /* For navbar space */
        }

        .ambient-light {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 80vw;
          height: 80vh;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(11, 17, 32, 0) 70%);
          z-index: 1;
          pointer-events: none;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: white;
        }

        .block-reveal {
          display: block;
          opacity: 0;
          animation: fadeSlideUp 0.8s ease-out forwards;
        }
        .delay-1 { animation-delay: 0.2s; }

        .hero-subheadline {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-zarify);
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeSlideUp 0.8s ease-out 0.4s forwards;
        }

        .hero-body {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 800px;
          margin: 0 auto 3rem;
          opacity: 0;
          animation: fadeSlideUp 0.8s ease-out 0.6s forwards;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          opacity: 0;
          animation: fadeSlideUp 0.8s ease-out 0.8s forwards;
        }

        .btn {
          padding: 1rem 2rem;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-radius: 4px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .btn-primary {
          background: var(--text-primary);
          color: var(--bg-primary);
        }
        .btn-primary:hover {
          background: white;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          border-color: var(--text-muted);
          color: var(--text-primary);
        }
        .btn-secondary:hover {
          border-color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-2px);
        }
        
        .glow-zarify:hover {
           box-shadow: 0 0 20px var(--color-zarify-glow);
           border-color: var(--color-zarify);
        }
        .glow-capify:hover {
           box-shadow: 0 0 20px var(--color-capify-glow);
           border-color: var(--color-capify);
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
