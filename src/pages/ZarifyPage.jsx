import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ZarifyDeepDive from '../components/ZarifyDeepDive';
import ContactCTA from '../components/ContactCTA';

const ZarifyPage = () => {
  // Ensure we start at the top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="zarify-page">
      <Helmet>
        <title>Zarify | Reduce Landed Costs | Global Buying Solutions</title>
        <meta name="description" content="Stop overpaying on customs exchange rates. Zarify eliminates Customs exchange rate uplifts, reducing your landed costs on every shipment." />
      </Helmet>
      <ZarifyDeepDive />
      <ContactCTA title="Ready to reduce your Duties and VAT?" />
      <style>{`
        .zarify-page {
          padding-top: 0; /* Navbar is fixed */
        }
      `}</style>
    </main>
  );
};


export default ZarifyPage;
