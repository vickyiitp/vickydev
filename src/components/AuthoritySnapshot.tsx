import { motion } from 'motion/react';
import { Code, Workflow, Zap, Briefcase } from 'lucide-react';

const metrics = [
  {
    icon: <Briefcase className="w-6 h-6 text-primary-royal" />,
    value: '20+',
    label: 'Projects Built',
    description: 'Automation systems designed for startups and businesses.',
  },
  {
    icon: <Workflow className="w-6 h-6 text-primary-royal" />,
    value: '35+',
    label: 'Automation Workflows',
    description: 'Streamlining operations and reducing manual tasks.',
  },
  {
    icon: <Zap className="w-6 h-6 text-primary-royal" />,
    value: '15+',
    label: 'API Integrations',
    description: 'Connecting third-party services and AI tools seamlessly.',
  },
  {
    icon: <Code className="w-6 h-6 text-primary-royal" />,
    value: 'Multiple',
    label: 'Startup Collaborations',
    description: 'Building MVP platforms and scalable architectures.',
  },
];

export default function AuthoritySnapshot() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-transparent border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-panel hover:border-primary-royal/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {metric.icon}
              </div>
              <h3 className="text-4xl font-bold text-text-white mb-2 font-heading tracking-tight">{metric.value}</h3>
              <p className="text-lg font-medium text-primary-royal mb-3">{metric.label}</p>
              <p className="text-sm text-text-silver/70 leading-relaxed">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
