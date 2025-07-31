import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Lightbulb, Rocket } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Engineering",
      description: "Every line of code, every infrastructure decision, crafted with surgical precision and strategic thinking.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Growth",
      description: "Building communities where knowledge flows freely and every engineer can reach their full potential.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "Pushing boundaries with cutting-edge technologies and methodologies that define tomorrow's standards.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Accelerated Learning",
      description: "Transforming complex DevOps concepts into digestible, actionable knowledge that drives real results.",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 ${
        darkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
              Redefining DevOps Education
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              DevOps Ascent isn't just another learning platform—it's a transformative experience designed 
              to elevate engineers from practitioners to architects of scalable, resilient systems.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            className={`mb-16 p-8 rounded-2xl ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700' 
                : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200'
            } backdrop-blur-sm`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center">
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Mission
              </h3>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                To bridge the gap between theoretical knowledge and real-world application by creating 
                immersive, hands-on learning experiences that prepare engineers for the challenges of 
                modern cloud-native infrastructure.
              </p>
            </div>
          </motion.div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-2xl ${
                  darkMode 
                    ? 'bg-gray-800/50 border border-gray-700 hover:border-gray-600' 
                    : 'bg-white/50 border border-gray-200 hover:border-gray-300'
                } backdrop-blur-sm transition-all duration-300 group`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h4 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {value.title}
                </h4>
                <p className={`leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Impact by Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '10,000+', label: 'Engineers Trained' },
                { number: '500+', label: 'Companies Transformed' },
                { number: '95%', label: 'Job Placement Rate' },
                { number: '24/7', label: 'Community Support' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;