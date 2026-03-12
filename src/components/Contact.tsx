import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Youtube, ArrowRight, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-24 bg-transparent border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-white mb-6 font-heading tracking-tight">Let's Build Something Extraordinary</h2>
          <p className="text-xl text-text-silver/70 max-w-2xl mx-auto mb-12">Ready to automate your workflows, scale your startup, or develop custom AI tools?</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:vickyykumar14@gmail.com" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-primary-royal hover:bg-[#B8962E] text-bg-dark font-semibold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] group">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="https://wa.me/918102099678" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg transition-all duration-300 glass-panel">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me
            </a>
          </div>
        </motion.div>

        <div className="mt-24 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 font-heading">Vicky Kumar</h3>
            <p className="text-primary-royal font-mono text-sm tracking-widest uppercase mb-6">vickyiitp</p>
            <p className="text-text-silver/60 max-w-md">AI Automation Engineer & Full Stack Developer building intelligent systems and modern web platforms.</p>
          </div>
          
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a href="mailto:vickyykumar14@gmail.com" aria-label="Email Vicky Kumar" className="w-12 h-12 rounded-xl glass-panel hover:border-primary-royal/50 flex items-center justify-center text-text-silver/80 hover:text-primary-royal transition-all duration-300 hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://wa.me/918102099678" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-12 h-12 rounded-xl glass-panel hover:border-primary-royal/50 flex items-center justify-center text-text-silver/80 hover:text-primary-royal transition-all duration-300 hover:scale-110">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/vickyiitp" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="w-12 h-12 rounded-xl glass-panel hover:border-primary-royal/50 flex items-center justify-center text-text-silver/80 hover:text-primary-royal transition-all duration-300 hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/vickyiitp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="w-12 h-12 rounded-xl glass-panel hover:border-primary-royal/50 flex items-center justify-center text-text-silver/80 hover:text-primary-royal transition-all duration-300 hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/vickyiitp" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="w-12 h-12 rounded-xl glass-panel hover:border-primary-royal/50 flex items-center justify-center text-text-silver/80 hover:text-primary-royal transition-all duration-300 hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/@vickyiitp" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel" className="w-12 h-12 rounded-xl glass-panel hover:border-primary-royal/50 flex items-center justify-center text-text-silver/80 hover:text-primary-royal transition-all duration-300 hover:scale-110">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-text-silver/40">
          <p>&copy; {new Date().getFullYear()} Vicky Kumar (vickyiitp). All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
