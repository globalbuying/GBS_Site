import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ZarifyPage from './pages/ZarifyPage';
import CapifyPage from './pages/CapifyPage';
import YuanifyPage from './pages/YuanifyPage';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('gbs-theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gbs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className="app">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/zarify" element={<ZarifyPage />} />
          <Route path="/capify" element={<CapifyPage />} />
          <Route path="/yuanify" element={<YuanifyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
