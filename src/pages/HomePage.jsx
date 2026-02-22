import React from 'react';
import Hero from '../components/Hero';
import WhyGBS from '../components/WhyGBS';
import ComplianceSection from '../components/ComplianceSection';
import Technology from '../components/Technology';
import ContactCTA from '../components/ContactCTA';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <WhyGBS />
            <ComplianceSection />
            <Technology />
            <ContactCTA />
        </main>
    );
};

export default HomePage;
