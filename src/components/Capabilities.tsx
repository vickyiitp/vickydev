import { motion } from 'motion/react';
import { Cpu, Rocket, Wrench, Link } from 'lucide-react';

const capabilities = [
  {
    title: 'AI Automation Systems',
    icon: <Cpu className="w-8 h-8 text-accent-light" />,
    items: ['Workflow Automation', 'AI-Powered Operations', 'Business Automation Tools'],
    description: 'Designing intelligent systems that streamline operations and reduce manual tasks.',
  },
  {
    title: 'Startup Platforms',
    icon: <Rocket className="w-8 h-8 text-accent-light" />,
    items: ['MVP Platforms', 'Dashboard Systems', 'Web Applications'],
    description: 'Building scalable, high-performance web platforms for startups and digital businesses.',
  },
  {
    title: 'AI Tools Development',
    icon: <Wrench className="w-8 h-8 text-accent-light" />,
    items: ['Productivity Tools', 'Automation Utilities', 'AI Content Systems'],
    description: 'Creating custom AI tools and utilities to enhance productivity and efficiency.',
  },
  {
    title: 'API Integration',
    icon: <Link className="w-8 h-8 text-accent-light" />,
    items: ['Payment Systems', 'Messaging APIs', 'AI APIs', 'Third-Party Services'],
    description: 'Connecting external services and APIs seamlessly to build robust ecosystems.',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4 font-heading tracking-tight">Capabilities</h2>
          <p className="text-lg text-text-silver/70 max-w-2xl mx-auto">What I build and how I can help your business scale.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-bg-charcoal/40 border border-white/5 hover:border-primary-royal/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary-deep/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-white mb-4 font-heading">{cap.title}</h3>
                <p className="text-text-silver/70 mb-6 leading-relaxed">{cap.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cap.items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-text-silver/90 backdrop-blur-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
