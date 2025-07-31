import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Clock, Users, Award, ChevronRight } from 'lucide-react';

interface LearningPathsProps {
  darkMode: boolean;
}

const LearningPaths: React.FC<LearningPathsProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPath, setSelectedPath] = useState(0);

  const learningPaths = [
    {
      title: "DevOps Fundamentals",
      level: "Beginner",
      duration: "8 weeks",
      students: "2,500+",
      description: "Master the core principles of DevOps culture, practices, and essential tools.",
      modules: [
        "DevOps Culture & Mindset",
        "Version Control with Git",
        "CI/CD Fundamentals",
        "Basic Containerization",
        "Monitoring & Logging Basics"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: darkMode ? "from-green-900/20 to-emerald-900/20" : "from-green-100/50 to-emerald-100/50"
    },
    {
      title: "Cloud Infrastructure",
      level: "Intermediate",
      duration: "12 weeks",
      students: "1,800+",
      description: "Build and manage scalable cloud infrastructure across AWS, Azure, and GCP.",
      modules: [
        "Infrastructure as Code",
        "Container Orchestration",
        "Service Mesh Architecture",
        "Cloud Security Best Practices",
        "Cost Optimization Strategies"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: darkMode ? "from-blue-900/20 to-cyan-900/20" : "from-blue-100/50 to-cyan-100/50"
    },
    {
      title: "Platform Engineering",
      level: "Advanced",
      duration: "16 weeks",
      students: "950+",
      description: "Design and implement enterprise-grade platform solutions and developer experiences.",
      modules: [
        "Platform Architecture Design",
        "Developer Experience (DX)",
        "GitOps & Progressive Delivery",
        "Observability & SRE Practices",
        "Enterprise Integration Patterns"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: darkMode ? "from-purple-900/20 to-pink-900/20" : "from-purple-100/50 to-pink-100/50"
    }
  ];

  return (
    <section 
      id="learning-paths" 
      ref={ref}
      className="py-20"
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
              Learning Pathways
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Structured learning journeys designed to take you from DevOps novice to platform architect, 
              with hands-on projects and real-world scenarios.
            </p>
          </motion.div>

          {/* Path Selection Tabs */}
          <motion.div
            className="flex flex-col md:flex-row justify-center mb-12 space-y-4 md:space-y-0 md:space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {learningPaths.map((path, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedPath(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedPath === index
                    ? `bg-gradient-to-r ${path.color} text-white shadow-lg`
                    : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {path.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Selected Path Details */}
          <motion.div
            key={selectedPath}
            className={`p-8 rounded-2xl bg-gradient-to-br ${learningPaths[selectedPath].bgColor} ${
              darkMode ? 'border border-gray-700' : 'border border-gray-200'
            } backdrop-blur-sm`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${learningPaths[selectedPath].color} text-white`}>
                    {learningPaths[selectedPath].level}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={16} />
                    {learningPaths[selectedPath].duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users size={16} />
                    {learningPaths[selectedPath].students}
                  </div>
                </div>

                <h3 className={`text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {learningPaths[selectedPath].title}
                </h3>

                <p className={`text-lg mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {learningPaths[selectedPath].description}
                </p>

                <motion.button
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${learningPaths[selectedPath].color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={20} />
                  Start Learning
                  <ChevronRight size={16} />
                </motion.button>
              </div>

              <div>
                <h4 className={`text-xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Course Modules
                </h4>
                <div className="space-y-3">
                  {learningPaths[selectedPath].modules.map((module, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        darkMode ? 'bg-gray-800/50' : 'bg-white/50'
                      } backdrop-blur-sm`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${learningPaths[selectedPath].color} flex items-center justify-center text-white font-bold text-sm`}>
                        {index + 1}
                      </div>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {module}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievement Badges */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Earn Industry-Recognized Certifications
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "DevOps Foundation Certified",
                "Cloud Infrastructure Specialist",
                "Platform Engineering Expert",
                "Site Reliability Engineer"
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                    darkMode 
                      ? 'bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30' 
                      : 'bg-gradient-to-r from-yellow-100/50 to-orange-100/50 border border-yellow-500/50'
                  } backdrop-blur-sm`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className={`text-sm font-medium ${
                    darkMode ? 'text-yellow-300' : 'text-yellow-700'
                  }`}>
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;