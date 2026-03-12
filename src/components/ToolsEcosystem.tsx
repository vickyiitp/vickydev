import { motion } from 'motion/react';
import { Layers, Database, Cloud, Terminal, Cpu, Blocks } from 'lucide-react';

const categories = [
  {
    title: 'Programming Languages',
    icon: <Terminal className="w-5 h-5 text-accent-light" />,
    items: ['Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend Frameworks',
    icon: <Layers className="w-5 h-5 text-accent-light" />,
    items: ['Flask', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: <Database className="w-5 h-5 text-accent-light" />,
    items: ['MongoDB', 'Cloud Databases'],
  },
  {
    title: 'AI & Automation Tools',
    icon: <Cpu className="w-5 h-5 text-accent-light" />,
    items: ['AI APIs', 'Automation Engines', 'Workflow Systems', 'Chatbot Systems'],
  },
  {
    title: 'Cloud & Integrations',
    icon: <Cloud className="w-5 h-5 text-accent-light" />,
    items: ['Google Cloud APIs', 'Cloud Deployment', 'External API Integrations'],
  },
  {
    title: 'Development Tools',
    icon: <Blocks className="w-5 h-5 text-accent-light" />,
    items: ['VS Code', 'Git', 'Automation Platforms'],
  },
];

export default function ToolsEcosystem() {
  return (
    <section id="tools" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4 font-heading tracking-tight">Tools & Technology Ecosystem</h2>
          <p className="text-lg text-text-silver/70 max-w-2xl">A curated stack of modern technologies and AI tools used to build scalable, high-performance systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-bg-charcoal/50 border border-white/5 hover:border-primary-royal/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary-deep/20 flex items-center justify-center group-hover:bg-primary-deep/40 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-white">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-silver/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-light/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
