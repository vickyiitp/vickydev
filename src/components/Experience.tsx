import { motion } from 'motion/react';
import { Briefcase, Shield, Rocket } from 'lucide-react';

const experiences = [
  {
    title: 'Founder',
    company: 'Team MVA',
    date: 'Present',
    description: 'Technology initiative focused on building innovative software platforms and AI systems.',
    icon: <Rocket className="w-6 h-6 text-accent-light" />,
  },
  {
    title: 'Lead Developer',
    company: 'Crimson Genius',
    date: 'Present',
    description: 'AI-driven cybersecurity initiative. Developing tools to improve digital protection.',
    icon: <Shield className="w-6 h-6 text-accent-light" />,
    flagship: 'Crimson Shield - Real-time cybersecurity monitoring system.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4 font-heading tracking-tight">Experience</h2>
          <p className="text-lg text-text-silver/70 max-w-2xl">Professional initiatives and projects I am currently leading.</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-bg-charcoal/40 border border-white/5 hover:border-primary-royal/30 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-deep/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h3 className="text-2xl font-bold text-text-white font-heading">{exp.title} <span className="text-primary-royal">—</span> {exp.company}</h3>
                    <span className="text-sm font-mono text-accent-light bg-primary-deep/20 px-3 py-1 rounded-full w-fit">{exp.date}</span>
                  </div>
                  <p className="text-text-silver/70 leading-relaxed mb-4">{exp.description}</p>
                  {exp.flagship && (
                    <div className="p-4 rounded-xl bg-bg-dark/50 border border-white/5 inline-block">
                      <p className="text-sm text-text-silver/90"><span className="font-semibold text-accent-light">Flagship System:</span> {exp.flagship}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
