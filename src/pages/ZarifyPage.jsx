import React, { useEffect } from 'react';
import ZarifyDeepDive from '../components/ZarifyDeepDive';
import ContactCTA from '../components/ContactCTA';

const ZarifyPage = () => {
    // Ensure we start at the top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="zarify-page">
            <ZarifyDeepDive />
            <ContactCTA />
            <style>{`
        .zarify-page {
          padding-top: 0; /* Navbar is fixed */
        }
      `}</style>
        </main>
    );
};

export default ZarifyPage;
