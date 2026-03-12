import { motion } from 'motion/react';
import { User, GraduationCap, Target, TerminalSquare } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-charcoal/30 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4 font-heading tracking-tight">About Me</h2>
              <p className="text-lg text-text-silver/70 leading-relaxed">
                I am a system architect and full-stack developer dedicated to building intelligent, scalable platforms and automation workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-bg-dark/50 border border-white/5 backdrop-blur-sm">
                <User className="w-6 h-6 text-accent-light mb-4" />
                <h3 className="text-xl font-semibold text-text-white mb-2">Profile</h3>
                <p className="text-text-silver/80 font-medium">Vicky Kumar</p>
                <p className="text-sm text-text-silver/60 font-mono mt-1">@vickyiitp</p>
              </div>

              <div className="p-6 rounded-2xl bg-bg-dark/50 border border-white/5 backdrop-blur-sm">
                <TerminalSquare className="w-6 h-6 text-accent-light mb-4" />
                <h3 className="text-xl font-semibold text-text-white mb-2">Roles</h3>
                <ul className="space-y-1 text-sm text-text-silver/80">
                  <li>AI Automation Engineer</li>
                  <li>Full Stack Developer</li>
                  <li>System Architect</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-bg-dark/50 border border-white/5 backdrop-blur-sm">
                <GraduationCap className="w-6 h-6 text-accent-light mb-4" />
                <h3 className="text-xl font-semibold text-text-white mb-2">Education</h3>
                <p className="text-sm text-text-silver/80 leading-relaxed">
                  College Student with focus on computer science and software development.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-bg-dark/50 border border-white/5 backdrop-blur-sm">
                <Target className="w-6 h-6 text-accent-light mb-4" />
                <h3 className="text-xl font-semibold text-text-white mb-2">Focus Areas</h3>
                <ul className="space-y-1 text-sm text-text-silver/80">
                  <li>AI Automation Systems</li>
                  <li>Startup Platforms</li>
                  <li>Workflow Automation</li>
                  <li>Modern Web Apps</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary-deep/20 to-bg-dark flex items-center justify-center group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="text-center z-10 p-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-primary-royal/20 border border-primary-light/30 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(109,40,217,0.2)]">
                <span className="text-4xl font-heading font-bold text-white">VK</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">vickyiitp</h3>
              <p className="text-accent-light font-mono text-sm tracking-widest uppercase">System Architect</p>
            </div>
            
            {/* Decorative code blocks floating */}
            <div className="absolute top-10 left-10 p-4 rounded-xl bg-black/40 border border-white/5 backdrop-blur-md text-xs font-mono text-text-silver/50 hidden md:block">
              {`const buildSystem = async () => {
  await integrateAI();
  return deploy();
};`}
            </div>
            <div className="absolute bottom-10 right-10 p-4 rounded-xl bg-black/40 border border-white/5 backdrop-blur-md text-xs font-mono text-text-silver/50 hidden md:block">
              {`<AutomationFlow
  trigger="webhook"
  action="processAI"
/>`}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
