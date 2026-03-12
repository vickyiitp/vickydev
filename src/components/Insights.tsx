import { motion } from 'motion/react';
import { BookOpen, ArrowRight } from 'lucide-react';

const insights = [
  {
    title: 'How AI automation improves business efficiency',
    category: 'AI Systems',
    readTime: '5 min read',
  },
  {
    title: 'Why automation systems scale startups',
    category: 'Startup Growth',
    readTime: '4 min read',
  },
  {
    title: 'Future of AI workflow systems',
    category: 'Technology Trends',
    readTime: '6 min read',
  },
  {
    title: 'Building scalable MVP platforms',
    category: 'Development',
    readTime: '7 min read',
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-charcoal/30 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4 font-heading tracking-tight">Insights</h2>
          <p className="text-lg text-text-silver/70 max-w-2xl mx-auto">Knowledge and perspectives on AI, automation, and modern web development.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <motion.a
              href="#"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-bg-dark/50 border border-white/5 hover:border-primary-royal/30 transition-all duration-300 group flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary-deep/20 text-xs text-accent-light font-mono uppercase tracking-wider">
                    {insight.category}
                  </span>
                  <BookOpen className="w-5 h-5 text-text-silver/40 group-hover:text-accent-light transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-text-white mb-4 font-heading leading-tight group-hover:text-accent-light transition-colors duration-300">
                  {insight.title}
                </h3>
              </div>
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                <span className="text-sm text-text-silver/60">{insight.readTime}</span>
                <ArrowRight className="w-5 h-5 text-text-silver/40 group-hover:text-accent-light transition-colors duration-300 transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
