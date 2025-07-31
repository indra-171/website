import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import LearningPaths from './components/LearningPaths';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Community from './components/Community';
import Mentorship from './components/Mentorship';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 3D assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            DevOps Ascent
          </h2>
          <p className="text-gray-400 mt-2">Loading the future of DevOps learning...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <Header darkMode={darkMode} />
      <AnimatePresence>
        <main>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <LearningPaths darkMode={darkMode} />
          <Technologies darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Community darkMode={darkMode} />
          <Mentorship darkMode={darkMode} />
          <Career darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
      </AnimatePresence>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;