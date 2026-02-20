import React, { useEffect } from 'react';
import CapifyDeepDive from '../components/CapifyDeepDive';
import ContactCTA from '../components/ContactCTA';

const CapifyPage = () => {
    // Ensure we start at the top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="capify-page">
            <CapifyDeepDive />
            <ContactCTA />
            <style>{`
        .capify-page {
          padding-top: 0; /* Navbar is fixed */
        }
      `}</style>
        </main>
    );
};

export default CapifyPage;
