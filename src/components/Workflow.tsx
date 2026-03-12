import { motion } from 'motion/react';
import { Search, PenTool, Code, Cpu, TestTube, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6 text-accent-light" />,
    title: 'Project Understanding',
    description: 'Analyzing requirements and defining the scope.',
  },
  {
    icon: <PenTool className="w-6 h-6 text-accent-light" />,
    title: 'System Architecture Planning',
    description: 'Designing the technical foundation and data flow.',
  },
  {
    icon: <Code className="w-6 h-6 text-accent-light" />,
    title: 'Prototype Development',
    description: 'Building the core MVP and user interface.',
  },
  {
    icon: <Cpu className="w-6 h-6 text-accent-light" />,
    title: 'AI & Automation Integration',
    description: 'Implementing intelligent workflows and APIs.',
  },
  {
    icon: <TestTube className="w-6 h-6 text-accent-light" />,
    title: 'Testing and Optimization',
    description: 'Ensuring performance, security, and reliability.',
  },
  {
    icon: <Rocket className="w-6 h-6 text-accent-light" />,
    title: 'Deployment',
    description: 'Launching the platform and monitoring systems.',
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-charcoal/30 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4 font-heading tracking-tight">Development Workflow</h2>
          <p className="text-lg text-text-silver/70 max-w-2xl mx-auto">A structured approach to building scalable and intelligent systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-bg-dark/50 border border-white/5 hover:border-primary-royal/30 transition-all duration-300 group relative"
            >
              <div className="absolute top-6 right-6 text-6xl font-heading font-bold text-white/5 group-hover:text-primary-royal/10 transition-colors duration-300 pointer-events-none">
                {index + 1}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-primary-deep/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-white mb-3 font-heading">{step.title}</h3>
              <p className="text-text-silver/70 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
