import { motion } from 'motion/react';
import { Cpu, Rocket, Link, Wrench } from 'lucide-react';

const services = [
  {
    title: 'AI Automation Development',
    icon: <Cpu className="w-8 h-8 text-accent-light" />,
    items: ['Custom Workflow Automation', 'AI-Powered Systems', 'Business Automation'],
  },
  {
    title: 'Startup MVP Development',
    icon: <Rocket className="w-8 h-8 text-accent-light" />,
    items: ['Web Platforms', 'Dashboards', 'Product Prototypes'],
  },
  {
    title: 'API Integration',
    icon: <Link className="w-8 h-8 text-accent-light" />,
    items: ['Payment APIs', 'AI APIs', 'Third-Party Services'],
  },
  {
    title: 'Custom AI Tools',
    icon: <Wrench className="w-8 h-8 text-accent-light" />,
    items: ['Automation Utilities', 'AI Productivity Tools', 'Content Systems'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-charcoal/30 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4 font-heading tracking-tight">Services</h2>
          <p className="text-lg text-text-silver/70 max-w-2xl mx-auto">Professional services designed to scale your business and automate operations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-bg-dark/50 border border-white/5 hover:border-primary-royal/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-deep/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-text-white mb-6 font-heading">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-silver/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-royal" />
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
