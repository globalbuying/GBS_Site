import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import CapifyDeepDive from '../components/CapifyDeepDive';
import ContactCTA from '../components/ContactCTA';

const CapifyPage = () => {
  // Ensure we start at the top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="capify-page">
      <Helmet>
        <title>Capify | Bridge the Capital Gap | Global Buying Solutions</title>
        <meta name="description" content="Unlock working capital and bridge the funding gap for your imports. Capify provides structured finance solutions for South African businesses." />
      </Helmet>
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
