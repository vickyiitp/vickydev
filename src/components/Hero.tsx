import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(circle 800px at ${springX}px ${springY}px, rgba(76, 29, 149, 0.25) 0%, rgba(30, 27, 75, 0.25) 40%, transparent 80%)`;

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent"
    >
      {/* Dynamic Mouse-tracking Violet Gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-primary-royal/30 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <ShieldCheck className="w-4 h-4 text-primary-royal" />
            <span className="text-xs font-medium tracking-widest uppercase text-text-silver">Verified Developer & Architect</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-heading tracking-tighter mb-6 leading-tight">
            Engineering <br />
            <span className="gold-gradient-text">Digital Excellence.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-text-silver/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            I build antique, ultra-professional web platforms and AI automation tools that scale businesses and establish absolute trust.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-royal text-bg-dark font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Explore My Work</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#ratings" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full glass-panel text-text-white hover:bg-white/5 transition-colors border border-white/10 hover:border-white/20"
            >
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-primary-royal fill-primary-royal drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]" />
                ))}
              </div>
              <span className="text-sm font-medium">View Client Ratings</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-royal/50 to-transparent shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
    </section>
  );
}
