import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, TrendingUp, Award, MapPin, Clock, DollarSign, Filter } from 'lucide-react';

interface CareerProps {
  darkMode: boolean;
}

const Career: React.FC<CareerProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedFilter, setSelectedFilter] = useState('all');

  const jobCategories = [
    { id: 'all', label: 'All Positions', count: 150 },
    { id: 'devops', label: 'DevOps Engineer', count: 45 },
    { id: 'sre', label: 'Site Reliability', count: 32 },
    { id: 'platform', label: 'Platform Engineer', count: 28 },
    { id: 'cloud', label: 'Cloud Architect', count: 25 },
    { id: 'security', label: 'DevSecOps', count: 20 }
  ];

  const featuredJobs = [
    {
      title: "Senior DevOps Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$140k - $180k",
      experience: "5+ years",
      category: "devops",
      skills: ["Kubernetes", "AWS", "Terraform", "Docker"],
      description: "Lead DevOps initiatives for a high-growth fintech company serving millions of users.",
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Site Reliability Engineer",
      company: "CloudScale",
      location: "Remote",
      type: "Full-time",
      salary: "$160k - $200k",
      experience: "4+ years",
      category: "sre",
      skills: ["Prometheus", "Grafana", "Go", "Python"],
      description: "Ensure 99.99% uptime for critical infrastructure serving global customers.",
      logo: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Platform Engineer",
      company: "InnovateLabs",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$130k - $170k",
      experience: "3+ years",
      category: "platform",
      skills: ["Kubernetes", "GitOps", "Helm", "ArgoCD"],
      description: "Build and maintain developer platforms that accelerate software delivery.",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Security Engineer",
      company: "SecureCloud",
      location: "New York, NY",
      type: "Full-time",
      salary: "$150k - $190k",
      experience: "4+ years",
      category: "security",
      skills: ["AWS Security", "Vault", "OPA", "Falco"],
      description: "Implement zero-trust security frameworks for enterprise cloud environments.",
      logo: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=100",
      color: "from-red-500 to-orange-500"
    }
  ];

  const careerResources = [
    {
      title: "Resume Review",
      description: "Get your resume reviewed by industry experts and hiring managers.",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Interview Prep",
      description: "Practice technical interviews with real DevOps scenarios and questions.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Salary Negotiation",
      description: "Learn how to negotiate competitive compensation packages.",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Career Roadmap",
      description: "Get personalized career guidance and progression planning.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const filteredJobs = selectedFilter === 'all' 
    ? featuredJobs 
    : featuredJobs.filter(job => job.category === selectedFilter);

  return (
    <section 
      id="career" 
      ref={ref}
      className={`py-20 ${
        darkMode ? 'bg-gray-800/30' : 'bg-gray-50/30'
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
              Career Progression Hub
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Accelerate your DevOps career with curated job opportunities, expert guidance, 
              and comprehensive resources designed to help you land your dream role.
            </p>
          </motion.div>

          {/* Career Resources */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {careerResources.map((resource, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl ${
                  darkMode 
                    ? 'bg-gray-800/50 border border-gray-700 hover:border-gray-600' 
                    : 'bg-white/50 border border-gray-200 hover:border-gray-300'
                } backdrop-blur-sm transition-all duration-300 group cursor-pointer`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${resource.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {resource.icon}
                </div>
                <h3 className={`text-lg font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {resource.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {resource.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Job Filters */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Filter className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Filter by Category:
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {jobCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedFilter(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedFilter === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label} ({category.count})
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Featured Jobs */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl ${
                  darkMode 
                    ? 'bg-gray-800/50 border border-gray-700 hover:border-gray-600' 
                    : 'bg-white/50 border border-gray-200 hover:border-gray-300'
                } backdrop-blur-sm transition-all duration-300 group cursor-pointer`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={job.logo} 
                    alt={job.company}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-1 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {job.title}
                    </h3>
                    <p className={`font-semibold bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}>
                      {job.company}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700'
                  }`}>
                    {job.type}
                  </span>
                </div>

                <p className={`mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {job.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {job.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {job.salary}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {job.experience}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <motion.button
                  className={`w-full py-3 bg-gradient-to-r ${job.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Career Stats */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Career Success Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "95%", label: "Job Placement Rate" },
                { number: "$165k", label: "Average Salary" },
                { number: "3 weeks", label: "Average Time to Hire" },
                { number: "500+", label: "Partner Companies" }
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

export default Career;