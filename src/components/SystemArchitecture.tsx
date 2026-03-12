import { motion } from 'motion/react';
import { Database, Server, Cpu, Globe, Link } from 'lucide-react';

export default function SystemArchitecture() {
  return (
    <section id="architecture" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4 font-heading tracking-tight">System Architecture Showcase</h2>
          <p className="text-lg text-text-silver/70 max-w-2xl mx-auto">Visualizing the high-level design of scalable and intelligent platforms.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl glass-panel p-8 lg:p-16 overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 max-w-5xl mx-auto">
            
            {/* Frontend */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-2xl bg-bg-dark/80 border border-white/10 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:border-primary-royal/50 transition-colors duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1 font-heading">Frontend</h3>
              <p className="text-xs text-text-silver/60 uppercase tracking-wider">User Interface</p>
            </div>

            {/* Connection Desktop */}
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent via-primary-royal/50 to-transparent relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-royal shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            </div>
            
            {/* Connection Mobile */}
            <div className="md:hidden w-px h-8 bg-gradient-to-b from-transparent via-primary-royal/50 to-transparent relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-royal shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            </div>

            {/* Backend & Automation */}
            <div className="flex flex-col items-center">
              <div className="relative p-6 rounded-3xl bg-white/5 border border-primary-royal/30 backdrop-blur-sm shadow-[0_0_40px_rgba(212,175,55,0.05)] flex flex-col items-center">
                <div className="flex gap-6 mb-6">
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-xl bg-bg-dark/80 border border-white/10 flex items-center justify-center mb-3 group-hover:border-primary-royal/50 transition-colors duration-300">
                      <Server className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-white font-heading">Backend</h3>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-xl bg-bg-dark/80 border border-white/10 flex items-center justify-center mb-3 group-hover:border-primary-royal/50 transition-colors duration-300">
                      <Cpu className="w-6 h-6 text-accent-light" />
                    </div>
                    <h3 className="text-sm font-semibold text-accent-light font-heading">Automation Engine</h3>
                  </div>
                </div>
                <div className="w-full h-px bg-white/10 mb-6" />
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 rounded-xl bg-bg-dark/80 border border-white/10 flex items-center justify-center mb-3 group-hover:border-primary-royal/50 transition-colors duration-300">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white font-heading">Database</h3>
                </div>
              </div>
            </div>

            {/* Connection Desktop */}
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent via-primary-royal/50 to-transparent relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-royal shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            </div>
            
            {/* Connection Mobile */}
            <div className="md:hidden w-px h-8 bg-gradient-to-b from-transparent via-primary-royal/50 to-transparent relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-royal shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            </div>

            {/* External APIs */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-2xl bg-bg-dark/80 border border-white/10 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:border-primary-royal/50 transition-colors duration-300">
                <Link className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1 font-heading">External APIs</h3>
              <p className="text-xs text-text-silver/60 uppercase tracking-wider">Third-Party Services</p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
