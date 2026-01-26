import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Technology from './components/Technology';
import ZarifySection from './components/ZarifySection';
import CapifySection from './components/CapifySection';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="app-container">
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
