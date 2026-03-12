import { motion } from 'motion/react';
import { Code, Terminal, Zap, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: 'Core Skills',
    icon: <Zap className="w-5 h-5 text-accent-light" />,
    skills: ['System Architecture', 'Automation Engineering', 'Full Stack Development', 'AI Workflow Integration', 'API Integration'],
  },
  {
    title: 'Programming',
    icon: <Terminal className="w-5 h-5 text-accent-light" />,
    skills: ['Python', 'JavaScript', 'Flask', 'MongoDB', 'HTML', 'CSS'],
  },
  {
    title: 'Additional Skills',
    icon: <Lightbulb className="w-5 h-5 text-accent-light" />,
    skills: ['Content Creation', 'Technical Documentation', 'Startup Collaboration', 'Community Building', 'Product Idea Development'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-charcoal/30 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4 font-heading tracking-tight">Skills & Technologies</h2>
          <p className="text-lg text-text-silver/70 max-w-2xl">A comprehensive overview of my technical abilities and professional skills.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-bg-dark/50 border border-white/5 backdrop-blur-sm hover:border-primary-royal/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary-deep/20 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-text-silver/90 hover:bg-primary-deep/20 hover:border-primary-royal/50 transition-colors duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
