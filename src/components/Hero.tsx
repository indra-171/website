import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Rocket, Code, Cloud } from 'lucide-react';
import DevArchitect from './DevArchitect';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLearning = () => {
    const element = document.getElementById('learning-paths');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className={`absolute inset-0 ${
          darkMode 
            ? 'bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20' 
            : 'bg-gradient-to-br from-blue-100/50 via-white to-purple-100/50'
        }`}
        style={{ y }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 ${
              darkMode ? 'bg-blue-500/10' : 'bg-blue-500/20'
            } rounded-full blur-xl`}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        style={{ opacity }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1 
                  className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
                    DevOps
                  </span>
                  <br />
                  <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                    Ascent
                  </span>
                </motion.h1>
                
                <motion.p 
                  className={`text-xl md:text-2xl mb-8 leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Elevate your engineering journey through immersive learning experiences, 
                  expert mentorship, and cutting-edge DevOps practices that shape the future.
                </motion.p>

                {/* Stats */}
                <motion.div 
                  className="grid grid-cols-3 gap-6 mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  {[
                    { icon: <Rocket className="w-6 h-6" />, number: '10K+', label: 'Engineers Trained' },
                    { icon: <Code className="w-6 h-6" />, number: '500+', label: 'Projects Built' },
                    { icon: <Cloud className="w-6 h-6" />, number: '99.9%', label: 'Success Rate' }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex justify-center mb-2 text-blue-500">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-blue-500 mb-1">{stat.number}</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <motion.button
                    onClick={scrollToLearning}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your Journey
                  </motion.button>
                  <motion.button
                    onClick={scrollToAbout}
                    className={`px-8 py-4 border-2 font-semibold rounded-xl transition-all duration-300 ${
                      darkMode 
                        ? 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white' 
                        : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Platform
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - 3D Character */}
            <div className="flex justify-center lg:justify-end">
              <DevArchitect darkMode={darkMode} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-colors ${
          darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
        }`}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;