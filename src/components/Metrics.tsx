import { motion } from 'motion/react';
import { Users, Eye, MousePointerClick, Star } from 'lucide-react';

export default function Metrics() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Client Ratings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-12 rounded-3xl bg-bg-charcoal/40 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-text-white mb-4 font-heading tracking-tight">Client Ratings</h2>
              <p className="text-text-silver/70 mb-8 max-w-md">Based on feedback from startup founders and business owners.</p>
              
              <div className="flex items-center gap-6 mb-10">
                <div className="text-6xl font-bold text-white font-heading">4.8</div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`w-6 h-6 ${star <= 4 ? 'text-accent-light fill-accent-light' : 'text-accent-light/30 fill-accent-light/30'}`} />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-text-silver/60 uppercase tracking-wider">Average Rating</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Portfolio Quality', score: 98 },
                  { label: 'Technical Capability', score: 95 },
                  { label: 'Project Quality', score: 96 },
                ].map((metric, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-text-silver/90">{metric.label}</span>
                      <span className="text-accent-light font-mono">{metric.score}%</span>
                    </div>
                    <div className="w-full h-2 bg-bg-dark rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="h-full bg-gradient-to-r from-primary-royal to-accent-light rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visitor Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 lg:p-12 rounded-3xl bg-bg-charcoal/40 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-primary-deep/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-text-white mb-4 font-heading tracking-tight">Visitor Metrics</h2>
              <p className="text-text-silver/70 mb-12 max-w-md">Real-time engagement and visibility statistics.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-bg-dark/50 border border-white/5">
                  <Users className="w-8 h-8 text-accent-light mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-1 font-heading">12,000+</h3>
                  <p className="text-sm text-text-silver/60 uppercase tracking-wider">Website Visitors</p>
                </div>
                <div className="p-6 rounded-2xl bg-bg-dark/50 border border-white/5">
                  <Eye className="w-8 h-8 text-accent-light mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-1 font-heading">4,300+</h3>
                  <p className="text-sm text-text-silver/60 uppercase tracking-wider">Projects Viewed</p>
                </div>
                <div className="p-6 rounded-2xl bg-bg-dark/50 border border-white/5 sm:col-span-2">
                  <MousePointerClick className="w-8 h-8 text-accent-light mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-1 font-heading">High</h3>
                  <p className="text-sm text-text-silver/60 uppercase tracking-wider">Project Engagement</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
