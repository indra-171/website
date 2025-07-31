import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, MessageCircle, Trophy, Calendar, Star, TrendingUp } from 'lucide-react';

interface CommunityProps {
  darkMode: boolean;
}

const Community: React.FC<CommunityProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const communityStats = [
    { icon: <Users className="w-8 h-8" />, number: "25,000+", label: "Active Members", color: "from-blue-500 to-cyan-500" },
    { icon: <MessageCircle className="w-8 h-8" />, number: "150K+", label: "Discussions", color: "from-purple-500 to-pink-500" },
    { icon: <Trophy className="w-8 h-8" />, number: "500+", label: "Success Stories", color: "from-green-500 to-teal-500" },
    { icon: <Calendar className="w-8 h-8" />, number: "100+", label: "Events/Year", color: "from-orange-500 to-red-500" }
  ];

  const features = [
    {
      title: "Expert-Led Discussions",
      description: "Join conversations with industry leaders and experienced practitioners sharing real-world insights.",
      icon: <Star className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Peer Learning Groups",
      description: "Connect with engineers at your level for collaborative learning and project partnerships.",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Career Advancement",
      description: "Access job opportunities, resume reviews, and career guidance from community mentors.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-blue-500"
    },
    {
      title: "24/7 Support Network",
      description: "Get help anytime with our global community spanning all time zones and expertise levels.",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior DevOps Engineer at Netflix",
      content: "The DevOps Ascent community transformed my career. The mentorship and real-world projects gave me the confidence to tackle enterprise-scale challenges.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Marcus Rodriguez",
      role: "Platform Engineer at Spotify",
      content: "From junior developer to platform engineer in 18 months. The structured learning paths and community support made all the difference.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Priya Patel",
      role: "Cloud Architect at Microsoft",
      content: "The hands-on projects and expert feedback helped me master cloud architecture. Now I'm leading digital transformation initiatives.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section 
      id="community" 
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
              Thriving Community
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Join a vibrant ecosystem of DevOps professionals, from beginners to experts, 
              all committed to continuous learning and mutual growth.
            </p>
          </motion.div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                className={`text-center p-6 rounded-2xl ${
                  darkMode 
                    ? 'bg-gray-800/50 border border-gray-700' 
                    : 'bg-white/50 border border-gray-200'
                } backdrop-blur-sm`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4`}>
                  {stat.icon}
                </div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className={`text-sm font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Community Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl ${
                  darkMode 
                    ? 'bg-gray-800/50 border border-gray-700 hover:border-gray-600' 
                    : 'bg-white/50 border border-gray-200 hover:border-gray-300'
                } backdrop-blur-sm transition-all duration-300 group`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Success Stories */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className={`text-3xl font-bold text-center mb-12 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Success Stories
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl ${
                    darkMode 
                      ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700' 
                      : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200'
                  } backdrop-blur-sm`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {testimonial.name}
                      </h4>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className={`leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    "{testimonial.content}"
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Join Community CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Community
            </motion.button>
            <p className={`mt-4 text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Free to join • 25,000+ members • Available 24/7
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;