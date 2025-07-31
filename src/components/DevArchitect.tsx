import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Server, Database, Cloud, GitBranch, Shield, Zap } from 'lucide-react';

interface DevArchitectProps {
  darkMode: boolean;
}

const DevArchitect: React.FC<DevArchitectProps> = ({ darkMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        mouseX.set((e.clientX - centerX) * 0.1);
        mouseY.set((e.clientY - centerY) * 0.1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const techIcons = [
    { icon: <Server className="w-8 h-8" />, color: 'text-blue-500', delay: 0 },
    { icon: <Database className="w-8 h-8" />, color: 'text-green-500', delay: 0.2 },
    { icon: <Cloud className="w-8 h-8" />, color: 'text-purple-500', delay: 0.4 },
    { icon: <GitBranch className="w-8 h-8" />, color: 'text-orange-500', delay: 0.6 },
    { icon: <Shield className="w-8 h-8" />, color: 'text-red-500', delay: 0.8 },
    { icon: <Zap className="w-8 h-8" />, color: 'text-yellow-500', delay: 1.0 },
  ];

  return (
    <div ref={containerRef} className="relative w-96 h-96 mx-auto">
      {/* Central Character */}
      <motion.div
        className={`absolute inset-0 rounded-full border-4 ${
          darkMode 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-blue-500/30' 
            : 'bg-gradient-to-br from-gray-100 to-gray-200 border-blue-500/50'
        } shadow-2xl flex items-center justify-center`}
        style={{ x: springX, y: springY }}
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        {/* Character Face */}
        <motion.div
          className="text-6xl"
          animate={{ 
            rotateY: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          🤖
        </motion.div>
      </motion.div>

      {/* Orbiting Tech Icons */}
      {techIcons.map((tech, index) => {
        const angle = (index * 60) * (Math.PI / 180);
        const radius = 150;
        
        return (
          <motion.div
            key={index}
            className={`absolute w-16 h-16 ${
              darkMode 
                ? 'bg-gray-800/80 border-gray-700' 
                : 'bg-white/80 border-gray-300'
            } border rounded-xl backdrop-blur-sm flex items-center justify-center shadow-lg`}
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-32px',
              marginTop: '-32px',
            }}
            animate={{
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
              rotate: 360,
            }}
            transition={{
              x: { duration: 10, repeat: Infinity, ease: "linear" },
              y: { duration: 10, repeat: Infinity, ease: "linear" },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            }}
            whileHover={{ scale: 1.2, zIndex: 10 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: tech.delay, duration: 0.5 }}
          >
            <div className={tech.color}>
              {tech.icon}
            </div>
          </motion.div>
        );
      })}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {techIcons.map((_, index) => {
          const angle = (index * 60) * (Math.PI / 180);
          const radius = 150;
          const x = 192 + Math.cos(angle) * radius;
          const y = 192 + Math.sin(angle) * radius;
          
          return (
            <motion.line
              key={index}
              x1="192"
              y1="192"
              x2={x}
              y2={y}
              stroke={darkMode ? '#374151' : '#D1D5DB'}
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ delay: tech.delay + 0.5, duration: 1 }}
            />
          );
        })}
      </svg>

      {/* Pulse Effect */}
      <motion.div
        className={`absolute inset-0 rounded-full border-2 ${
          darkMode ? 'border-blue-500/30' : 'border-blue-500/50'
        }`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default DevArchitect;