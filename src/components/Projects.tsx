import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Play, X, Calendar, Users, TrendingUp } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Cloud-Native E-Commerce Platform",
      category: "Microservices Architecture",
      description: "Built a scalable e-commerce platform using microservices architecture on Kubernetes, handling 100K+ concurrent users.",
      fullDescription: "This project involved designing and implementing a complete cloud-native e-commerce solution using modern DevOps practices. The platform was built with a microservices architecture deployed on Kubernetes, featuring automated CI/CD pipelines, comprehensive monitoring, and advanced security measures.",
      technologies: ["Kubernetes", "Docker", "Istio", "Prometheus", "Grafana", "ArgoCD"],
      metrics: [
        { label: "Uptime", value: "99.99%" },
        { label: "Response Time", value: "<100ms" },
        { label: "Cost Reduction", value: "40%" }
      ],
      timeline: "6 months",
      team: "8 engineers",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Cloud Infrastructure Automation",
      category: "Infrastructure as Code",
      description: "Automated infrastructure provisioning across AWS, Azure, and GCP using Terraform and GitOps workflows.",
      fullDescription: "Developed a comprehensive multi-cloud infrastructure automation solution that enables seamless deployment and management of resources across multiple cloud providers. The solution includes automated cost optimization, security compliance, and disaster recovery capabilities.",
      technologies: ["Terraform", "Ansible", "GitLab CI", "Vault", "Consul", "Packer"],
      metrics: [
        { label: "Deployment Time", value: "15 min" },
        { label: "Infrastructure Drift", value: "0%" },
        { label: "Security Score", value: "98%" }
      ],
      timeline: "4 months",
      team: "5 engineers",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Powered DevOps Assistant",
      category: "Machine Learning Operations",
      description: "Created an intelligent DevOps assistant using ML to predict system failures and optimize resource allocation.",
      fullDescription: "Developed an AI-powered DevOps assistant that leverages machine learning algorithms to predict system failures, optimize resource allocation, and automate routine maintenance tasks. The system processes thousands of metrics in real-time to provide actionable insights.",
      technologies: ["Python", "TensorFlow", "Kubernetes", "Kafka", "InfluxDB", "Jupyter"],
      metrics: [
        { label: "Prediction Accuracy", value: "94%" },
        { label: "MTTR Reduction", value: "60%" },
        { label: "Resource Optimization", value: "35%" }
      ],
      timeline: "8 months",
      team: "12 engineers",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Zero-Trust Security Framework",
      category: "Security & Compliance",
      description: "Implemented enterprise-grade zero-trust security framework with automated compliance monitoring.",
      fullDescription: "Designed and implemented a comprehensive zero-trust security framework for enterprise environments. The solution includes identity verification, device compliance, network segmentation, and continuous monitoring with automated threat response capabilities.",
      technologies: ["Istio", "OPA", "Falco", "Vault", "Keycloak", "Cilium"],
      metrics: [
        { label: "Security Incidents", value: "-90%" },
        { label: "Compliance Score", value: "100%" },
        { label: "Detection Time", value: "<5 sec" }
      ],
      timeline: "10 months",
      team: "6 engineers",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
              Real-World Projects
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Explore comprehensive case studies of production-grade DevOps implementations 
              that have transformed businesses and accelerated development workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`group cursor-pointer rounded-2xl overflow-hidden ${
                  darkMode 
                    ? 'bg-gray-800/50 border border-gray-700 hover:border-gray-600' 
                    : 'bg-white/50 border border-gray-200 hover:border-gray-300'
                } backdrop-blur-sm transition-all duration-300`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedProject(index)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <motion.div
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play size={20} />
                    </motion.div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`mb-4 leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'
                      }`}>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {metric.value}
                        </div>
                        <div className={`text-xs ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject !== null && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                  onClick={() => setSelectedProject(null)}
                />
                
                <motion.div
                  className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } shadow-2xl`}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
                      darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                    } hover:scale-110 transition-transform`}
                  >
                    <X size={20} />
                  </button>

                  <div className="relative h-64 overflow-hidden rounded-t-2xl">
                    <img 
                      src={projects[selectedProject].image} 
                      alt={projects[selectedProject].title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${projects[selectedProject].color} opacity-60`} />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${projects[selectedProject].color} text-white`}>
                        {projects[selectedProject].category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={16} />
                        {projects[selectedProject].timeline}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users size={16} />
                        {projects[selectedProject].team}
                      </div>
                    </div>

                    <h3 className={`text-3xl font-bold mb-4 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {projects[selectedProject].title}
                    </h3>

                    <p className={`text-lg mb-6 leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {projects[selectedProject].fullDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className={`text-lg font-semibold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className={`px-3 py-1 text-sm font-medium rounded-full ${
                              darkMode 
                                ? 'bg-gray-700 text-gray-300' 
                                : 'bg-gray-200 text-gray-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="mb-6">
                      <h4 className={`text-lg font-semibold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Results
                      </h4>
                      <div className="grid grid-cols-3 gap-6">
                        {projects[selectedProject].metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <div className={`text-2xl font-bold bg-gradient-to-r ${projects[selectedProject].color} bg-clip-text text-transparent mb-1`}>
                              {metric.value}
                            </div>
                            <div className={`text-sm ${
                              darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={projects[selectedProject].liveUrl}
                        className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${projects[selectedProject].color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                        View Live Demo
                      </motion.a>
                      <motion.a
                        href={projects[selectedProject].githubUrl}
                        className={`flex items-center gap-2 px-6 py-3 border-2 font-semibold rounded-xl transition-all duration-300 ${
                          darkMode 
                            ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700' 
                            : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;