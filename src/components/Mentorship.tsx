import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Calendar, Star, MessageSquare, Video, BookOpen } from 'lucide-react';

interface MentorshipProps {
  darkMode: boolean;
}

const Mentorship: React.FC<MentorshipProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMentor, setSelectedMentor] = useState(0);

  const mentors = [
    {
      name: "Alex Thompson",
      title: "Principal DevOps Engineer",
      company: "Google",
      experience: "12+ years",
      specialties: ["Kubernetes", "Cloud Architecture", "Site Reliability"],
      rating: 4.9,
      sessions: 250,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Former Netflix and Uber engineer specializing in large-scale distributed systems and cloud-native architectures.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Maria Garcia",
      title: "Senior Platform Engineer",
      company: "Microsoft",
      experience: "10+ years",
      specialties: ["Azure", "Infrastructure as Code", "Security"],
      rating: 4.8,
      sessions: 180,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Expert in enterprise cloud migrations and security-first DevOps practices with Fortune 500 experience.",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "David Kim",
      title: "DevOps Architect",
      company: "Amazon",
      experience: "15+ years",
      specialties: ["AWS", "Microservices", "CI/CD"],
      rating: 4.9,
      sessions: 320,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "AWS certified solutions architect with deep expertise in serverless architectures and DevOps automation.",
      color: "from-green-500 to-teal-500"
    }
  ];

  const mentorshipPrograms = [
    {
      title: "1-on-1 Mentorship",
      description: "Personalized guidance from industry experts tailored to your career goals and learning pace.",
      icon: <User className="w-8 h-8" />,
      features: ["Weekly 1-hour sessions", "Personalized learning plan", "Career roadmap", "Project reviews"],
      price: "$150/month",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Group Mentorship",
      description: "Learn alongside peers in small groups led by experienced DevOps professionals.",
      icon: <MessageSquare className="w-8 h-8" />,
      features: ["Bi-weekly group sessions", "Peer collaboration", "Group projects", "Community access"],
      price: "$75/month",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Workshop Series",
      description: "Intensive hands-on workshops covering specific DevOps tools and methodologies.",
      icon: <BookOpen className="w-8 h-8" />,
      features: ["Monthly workshops", "Hands-on labs", "Certification prep", "Resource library"],
      price: "$50/month",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section 
      id="mentorship" 
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
              Expert Mentorship
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Accelerate your DevOps journey with personalized guidance from industry leaders 
              who have built and scaled systems at the world's top tech companies.
            </p>
          </motion.div>

          {/* Mentorship Programs */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mentorshipPrograms.map((program, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-2xl ${
                  darkMode 
                    ? 'bg-gray-800/50 border border-gray-700 hover:border-gray-600' 
                    : 'bg-white/50 border border-gray-200 hover:border-gray-300'
                } backdrop-blur-sm transition-all duration-300 group`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${program.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {program.title}
                </h3>
                
                <p className={`mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {program.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color} mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-bold bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}>
                    {program.price}
                  </span>
                  <motion.button
                    className={`px-6 py-2 bg-gradient-to-r ${program.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Mentors */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className={`text-3xl font-bold text-center mb-12 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Meet Our Expert Mentors
            </h3>

            {/* Mentor Selection */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-4">
                {mentors.map((mentor, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedMentor(index)}
                    className={`p-2 rounded-full border-2 transition-all duration-300 ${
                      selectedMentor === index
                        ? `border-blue-500 scale-110`
                        : darkMode
                        ? 'border-gray-600 hover:border-gray-500'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    whileHover={{ scale: selectedMentor === index ? 1.1 : 1.05 }}
                  >
                    <img 
                      src={mentor.avatar} 
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Selected Mentor Details */}
            <motion.div
              key={selectedMentor}
              className={`p-8 rounded-2xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700' 
                  : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200'
              } backdrop-blur-sm`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <img 
                    src={mentors[selectedMentor].avatar} 
                    alt={mentors[selectedMentor].name}
                    className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0 mb-6"
                  />
                  <h4 className={`text-2xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {mentors[selectedMentor].name}
                  </h4>
                  <p className={`text-lg mb-2 bg-gradient-to-r ${mentors[selectedMentor].color} bg-clip-text text-transparent font-semibold`}>
                    {mentors[selectedMentor].title}
                  </p>
                  <p className={`mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {mentors[selectedMentor].company} • {mentors[selectedMentor].experience}
                  </p>
                  
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {mentors[selectedMentor].rating}
                      </span>
                    </div>
                    <div className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {mentors[selectedMentor].sessions} sessions completed
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className={`text-lg font-semibold mb-4 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Specialties
                  </h5>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {mentors[selectedMentor].specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${mentors[selectedMentor].color} text-white`}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <p className={`mb-6 leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {mentors[selectedMentor].bio}
                  </p>

                  <div className="flex gap-4">
                    <motion.button
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${mentors[selectedMentor].color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Calendar size={20} />
                      Book Session
                    </motion.button>
                    <motion.button
                      className={`flex items-center gap-2 px-6 py-3 border-2 font-semibold rounded-xl transition-all duration-300 ${
                        darkMode 
                          ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700' 
                          : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Video size={20} />
                      Free Consultation
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Success Metrics */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Mentorship Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "95%", label: "Career Advancement" },
                { number: "3x", label: "Faster Learning" },
                { number: "85%", label: "Salary Increase" },
                { number: "1,500+", label: "Success Stories" }
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

export default Mentorship;