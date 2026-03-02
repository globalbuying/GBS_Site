import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import YuanifyDeepDive from '../components/YuanifyDeepDive';
import ContactCTA from '../components/ContactCTA';

const YuanifyPage = () => {
  // Ensure we start at the top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="yuanify-page">
      <Helmet>
        <title>Yuanify | Save 3% on Chinese Imports | Global Buying Solutions</title>
        <meta name="description" content="Eliminate 4% USD volatility premiums by paying Chinese suppliers in Yuan. Yuanify helps South African businesses negotiate discounts and build offshore capital." />
      </Helmet>
      <YuanifyDeepDive />
      <ContactCTA title="Ready to reduce your Landed Costs?" />
      <style>{`
        .yuanify-page {
          padding-top: 0; /* Navbar is fixed */
        }
      `}</style>
    </main>
  );
};


export default YuanifyPage;
