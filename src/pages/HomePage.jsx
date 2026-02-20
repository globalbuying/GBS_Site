import React from 'react';
import Hero from '../components/Hero';
import ZarifySection from '../components/ZarifySection';
import Technology from '../components/Technology';
import CapifySection from '../components/CapifySection';
import ContactCTA from '../components/ContactCTA';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <ZarifySection />
            <Technology />
            <CapifySection />
            <ContactCTA />
        </main>
    );
};

export default HomePage;
