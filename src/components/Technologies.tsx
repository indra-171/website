import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Server, 
  Cloud, 
  Database, 
  Shield, 
  GitBranch, 
  Container,
  Monitor,
  Zap,
  Settings,
  Network
} from 'lucide-react';

interface TechnologiesProps {
  darkMode: boolean;
}

const Technologies: React.FC<TechnologiesProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const techCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "AWS", description: "Amazon Web Services - Complete cloud ecosystem", proficiency: 95 },
        { name: "Azure", description: "Microsoft Azure - Enterprise cloud solutions", proficiency: 90 },
        { name: "GCP", description: "Google Cloud Platform - AI/ML focused cloud", proficiency: 85 },
        { name: "DigitalOcean", description: "Developer-friendly cloud infrastructure", proficiency: 88 }
      ]
    },
    {
      title: "Container Orchestration",
      icon: <Container className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "Kubernetes", description: "Container orchestration at scale", proficiency: 92 },
        { name: "Docker", description: "Containerization platform", proficiency: 95 },
        { name: "Helm", description: "Kubernetes package manager", proficiency: 88 },
        { name: "OpenShift", description: "Enterprise Kubernetes platform", proficiency: 80 }
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      technologies: [
        { name: "Terraform", description: "Multi-cloud infrastructure provisioning", proficiency: 95 },
        { name: "Ansible", description: "Configuration management and automation", proficiency: 90 },
        { name: "CloudFormation", description: "AWS native infrastructure as code", proficiency: 85 },
        { name: "Pulumi", description: "Modern infrastructure as code", proficiency: 78 }
      ]
    },
    {
      title: "CI/CD & GitOps",
      icon: <GitBranch className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "Jenkins", description: "Extensible automation server", proficiency: 90 },
        { name: "GitLab CI", description: "Integrated DevOps platform", proficiency: 95 },
        { name: "GitHub Actions", description: "Native GitHub automation", proficiency: 92 },
        { name: "ArgoCD", description: "GitOps continuous delivery", proficiency: 88 }
      ]
    },
    {
      title: "Monitoring & Observability",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      technologies: [
        { name: "Prometheus", description: "Systems monitoring and alerting", proficiency: 92 },
        { name: "Grafana", description: "Analytics and interactive visualization", proficiency: 95 },
        { name: "ELK Stack", description: "Elasticsearch, Logstash, and Kibana", proficiency: 88 },
        { name: "Jaeger", description: "Distributed tracing system", proficiency: 82 }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      technologies: [
        { name: "Vault", description: "Secrets management", proficiency: 88 },
        { name: "Falco", description: "Runtime security monitoring", proficiency: 85 },
        { name: "OPA", description: "Open Policy Agent", proficiency: 80 },
        { name: "Twistlock", description: "Container security platform", proficiency: 82 }
      ]
    }
  ];

  return (
    <section 
      id="technologies" 
      ref={ref}
      className={`py-20 ${
        darkMode ? 'bg-gray-800/30' : 'bg-gray-50/30'
      }`}
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
              Technology Ecosystem
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Master the complete DevOps toolchain with hands-on experience across cloud platforms, 
              automation tools, and modern infrastructure technologies.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className={`p-6 rounded-2xl ${
                  darkMode 
                    ? 'bg-gray-800/50 border border-gray-700 hover:border-gray-600' 
                    : 'bg-white/50 border border-gray-200 hover:border-gray-300'
                } backdrop-blur-sm transition-all duration-300`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        darkMode 
                          ? 'bg-gray-700/50 hover:bg-gray-700' 
                          : 'bg-gray-100/50 hover:bg-gray-100'
                      }`}
                      onHoverStart={() => setHoveredTech(categoryIndex * 10 + techIndex)}
                      onHoverEnd={() => setHoveredTech(null)}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className={`font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {tech.name}
                        </h4>
                        <span className={`text-sm font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {tech.proficiency}%
                        </span>
                      </div>
                      
                      <motion.div
                        className={`w-full h-2 rounded-full mb-2 ${
                          darkMode ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                      >
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${tech.proficiency}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + techIndex * 0.1 }}
                        />
                      </motion.div>

                      <motion.p
                        className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={
                          hoveredTech === categoryIndex * 10 + techIndex 
                            ? { opacity: 1, height: 'auto' } 
                            : { opacity: 0, height: 0 }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        {tech.description}
                      </motion.p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Tech Stack Visualization */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Complete DevOps Pipeline
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                { icon: <GitBranch className="w-6 h-6" />, label: "Source Control", color: "text-orange-500" },
                { icon: <Zap className="w-6 h-6" />, label: "CI/CD", color: "text-yellow-500" },
                { icon: <Container className="w-6 h-6" />, label: "Containerization", color: "text-blue-500" },
                { icon: <Settings className="w-6 h-6" />, label: "Orchestration", color: "text-purple-500" },
                { icon: <Monitor className="w-6 h-6" />, label: "Monitoring", color: "text-green-500" },
                { icon: <Shield className="w-6 h-6" />, label: "Security", color: "text-red-500" }
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    className={`flex flex-col items-center p-4 rounded-xl ${
                      darkMode ? 'bg-gray-800/50' : 'bg-white/50'
                    } backdrop-blur-sm border ${
                      darkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className={step.color}>
                      {step.icon}
                    </div>
                    <span className={`text-sm font-medium mt-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {step.label}
                    </span>
                  </motion.div>
                  
                  {index < 5 && (
                    <motion.div
                      className={`hidden md:block w-8 h-0.5 ${
                        darkMode ? 'bg-gray-600' : 'bg-gray-300'
                      }`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;