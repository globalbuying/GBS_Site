import React, { useEffect } from 'react';
import ContactCTA from '../components/ContactCTA';

const YuanifyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="yuanify-page">
            <section className="coming-soon">
                <div className="container">
                    <h1 className="coming-soon__brand">
                        <span className="brand-yuan">Yuan</span><span className="brand-ify">ify</span>
                    </h1>
                    <h2 className="coming-soon__title">Global Trade, Local Currency.</h2>
                    <p className="coming-soon__text">
                        We are currently preparing the Yuanify platform to enable seamless local currency trade.
                        Yuanify will eliminate the need for suppliers to uplift invoices to mitigate USD volatility.
                    </p>
                    <div className="coming-soon__badge">Coming Q3 2026</div>
                </div>
            </section>

            <ContactCTA />

            <style>{`
                .yuanify-page {
                    padding-top: 80px; /* navbar offset */
                }
                .coming-soon {
                    padding: 10rem 0;
                    text-align: center;
                    background: var(--bg-primary);
                }
                .coming-soon__brand {
                    font-size: 4rem;
                    margin-bottom: 2rem;
                    font-weight: 700;
                }
                .brand-yuan { color: var(--color-yuanify); }
                .brand-ify { color: var(--color-yuanify-ify); }
                
                .coming-soon__title {
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                    color: var(--text-primary);
                }
                .coming-soon__text {
                    font-size: 1.2rem;
                    color: var(--text-secondary);
                    max-width: 600px;
                    margin: 0 auto 3rem;
                    line-height: 1.7;
                }
                .coming-soon__badge {
                    display: inline-block;
                    padding: 0.5rem 1.5rem;
                    background: var(--color-yuanify-glow);
                    color: var(--color-yuanify);
                    border: 1px solid var(--color-yuanify);
                    border-radius: 50px;
                    font-weight: 600;
                }
            `}</style>
        </main>
    );
};

export default YuanifyPage;
