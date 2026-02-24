import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import WhyGBS from '../components/WhyGBS';
import ImplementationSection from '../components/ImplementationSection';
import ComplianceSection from '../components/ComplianceSection';
import Technology from '../components/Technology';
import ContactCTA from '../components/ContactCTA';

const HomePage = () => {
    return (
        <main>
            <Helmet>
                <title>Global Buying Solutions | South African Import Optimization</title>
                <meta name="description" content="Global Buying Solutions specializes in optimizing imports for South African businesses. Save on currency buffers, capture discounts, and streamline your supply chain with Yuanify, Zarify, and Capify." />
            </Helmet>
            <Hero />
            <WhyGBS />
            <ImplementationSection />
            <ComplianceSection />
            <Technology />
            <ContactCTA />
        </main>
    );
};


export default HomePage;
