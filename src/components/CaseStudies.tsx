import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const caseStudies = [
  {
    title: 'Automated Response System',
    problem: 'High volume of customer inquiries leading to delayed responses and decreased satisfaction.',
    techStack: ['Node.js', 'OpenAI API', 'MongoDB', 'Webhooks'],
    outcome: 'Reduced response time by 80% and handled 60% of tier-1 support tickets automatically.',
    flow: [
      'User Input (Webhook)',
      'Backend Processing (Node.js)',
      'Database Storage (MongoDB)',
      'Automation Engine (AI API)',
      'Automated Response Output',
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-charcoal/30 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4 font-heading tracking-tight">Project Case Studies</h2>
          <p className="text-lg text-text-silver/70 max-w-2xl mx-auto">Deep dives into the architecture and outcomes of complex automation systems.</p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 lg:p-12 rounded-3xl bg-bg-dark/50 border border-white/5 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-text-white mb-8 font-heading">{study.title}</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-accent-light uppercase tracking-wider mb-2">Problem</h4>
                      <p className="text-text-silver/80 leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-accent-light uppercase tracking-wider mb-2">Outcome</h4>
                      <p className="text-text-silver/80 leading-relaxed font-medium text-white">{study.outcome}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-accent-light uppercase tracking-wider mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.techStack.map((tech, i) => (
                          <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-text-silver/90">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-charcoal/50 p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center">
                  <h4 className="text-sm font-semibold text-accent-light uppercase tracking-wider mb-6 w-full text-center">Automation Flow</h4>
                  <div className="flex flex-col items-center space-y-4 w-full max-w-xs">
                    {study.flow.map((step, i) => (
                      <div key={i} className="flex flex-col items-center w-full">
                        <div className="w-full p-4 rounded-xl bg-primary-deep/20 border border-primary-royal/30 text-center text-sm font-mono text-white shadow-[0_0_15px_rgba(109,40,217,0.1)]">
                          {step}
                        </div>
                        {i < study.flow.length - 1 && (
                          <ArrowDown className="w-5 h-5 text-accent-light/50 my-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
