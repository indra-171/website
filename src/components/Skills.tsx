import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 95 },
        { name: "Azure", level: 85 },
        { name: "Google Cloud", level: 80 },
        { name: "DigitalOcean", level: 90 }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", level: 95 },
        { name: "CloudFormation", level: 85 },
        { name: "Ansible", level: 90 },
        { name: "Pulumi", level: 75 }
      ]
    },
    {
      title: "CI/CD & Automation",
      skills: [
        { name: "Jenkins", level: 90 },
        { name: "GitLab CI", level: 95 },
        { name: "GitHub Actions", level: 90 },
        { name: "Azure DevOps", level: 80 }
      ]
    },
    {
      title: "Containers & Orchestration",
      skills: [
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 90 },
        { name: "Helm", level: 85 },
        { name: "OpenShift", level: 75 }
      ]
    },
    {
      title: "Monitoring & Logging",
      skills: [
        { name: "Prometheus", level: 90 },
        { name: "Grafana", level: 95 },
        { name: "ELK Stack", level: 85 },
        { name: "DataDog", level: 80 }
      ]
    },
    {
      title: "Programming & Scripting",
      skills: [
        { name: "Python", level: 85 },
        { name: "Bash", level: 95 },
        { name: "Go", level: 75 },
        { name: "YAML/JSON", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit for modern DevOps practices, from cloud infrastructure to deployment automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-6 text-white">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-white">Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "AWS Solutions Architect",
                "Kubernetes Administrator",
                "Azure DevOps Engineer",
                "HashiCorp Terraform"
              ].map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-900/30 to-teal-900/30 p-4 rounded-lg border border-blue-500/20">
                  <div className="text-sm font-medium text-gray-300">{cert}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;