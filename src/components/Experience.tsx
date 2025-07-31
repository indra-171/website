import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading DevOps initiatives for a team of 50+ developers, managing cloud infrastructure serving 1M+ users.",
      achievements: [
        "Reduced deployment time by 75% through automated CI/CD pipelines",
        "Implemented multi-cloud strategy saving $200K annually",
        "Built monitoring solutions achieving 99.99% uptime",
        "Mentored junior engineers and established DevOps best practices"
      ],
      technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Python"]
    },
    {
      title: "DevOps Engineer",
      company: "CloudFirst Inc",
      period: "2020 - 2022",
      location: "Austin, TX",
      description: "Designed and maintained scalable cloud infrastructure for SaaS applications with focus on automation and security.",
      achievements: [
        "Migrated legacy systems to containerized microservices architecture",
        "Established disaster recovery procedures reducing RTO to under 1 hour",
        "Implemented Infrastructure as Code practices across all environments",
        "Led security compliance initiatives achieving SOC 2 certification"
      ],
      technologies: ["Azure", "Docker", "Ansible", "GitLab CI", "Prometheus"]
    },
    {
      title: "Cloud Infrastructure Engineer",
      company: "StartupTech",
      period: "2019 - 2020",
      location: "Remote",
      description: "Built cloud infrastructure from ground up for a fast-growing fintech startup, focusing on scalability and cost optimization.",
      achievements: [
        "Designed auto-scaling infrastructure handling 10x traffic growth",
        "Implemented cost optimization strategies reducing cloud spend by 45%",
        "Built comprehensive logging and monitoring solutions",
        "Established security policies and compliance frameworks"
      ],
      technologies: ["AWS", "Terraform", "Docker", "ELK Stack", "Grafana"]
    },
    {
      title: "Systems Administrator",
      company: "Enterprise Solutions Ltd",
      period: "2018 - 2019",
      location: "Chicago, IL",
      description: "Managed on-premises infrastructure and initiated cloud migration projects for enterprise clients.",
      achievements: [
        "Successfully migrated 50+ servers to cloud infrastructure",
        "Automated backup and recovery processes improving reliability by 90%",
        "Implemented configuration management reducing manual errors",
        "Provided 24/7 support for critical business applications"
      ],
      technologies: ["VMware", "Linux", "Bash", "Nagios", "Puppet"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A journey through challenging projects and continuous growth in the DevOps landscape
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-gray-900 hidden md:block"></div>
                  
                  <div className="md:ml-16">
                    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-blue-400 font-semibold mb-1">{exp.company}</p>
                          <p className="text-gray-400 text-sm">{exp.location}</p>
                        </div>
                        <div className="flex items-center text-teal-400 font-medium mt-2 md:mt-0">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-orange-400 mb-3 flex items-center">
                          <Briefcase size={16} className="mr-2" />
                          KEY ACHIEVEMENTS
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm">
                              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded-full border border-blue-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;