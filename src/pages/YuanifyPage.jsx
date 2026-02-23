import React, { useEffect } from 'react';
import YuanifyDeepDive from '../components/YuanifyDeepDive';
import ContactCTA from '../components/ContactCTA';

const YuanifyPage = () => {
    // Ensure we start at the top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="yuanify-page">
            <YuanifyDeepDive />
            <ContactCTA />
            <style>{`
        .yuanify-page {
          padding-top: 0; /* Navbar is fixed */
        }
      `}</style>
        </main>
    );
};

export default YuanifyPage;
