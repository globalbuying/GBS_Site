import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Technology from './components/Technology';
import ZarifySection from './components/ZarifySection';
import CapifySection from './components/CapifySection';
import ContactCTA from './components/ContactCTA';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('gbs-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gbs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-container">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <ProblemSolution />
      <ZarifySection />
      <Technology />
      <CapifySection />
      <ContactCTA />
    </div>
  );
}

export default App;
