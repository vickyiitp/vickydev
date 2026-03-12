import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Terminal, Database, Code2, Cpu, GitBranch, Server, Box, Layers, MonitorPlay } from 'lucide-react';

const tools = [
  { name: 'Python', icon: <Terminal className="w-8 h-8" />, color: '#3776AB', level: 'Master' },
  { name: 'VS Code', icon: <Code2 className="w-8 h-8" />, color: '#007ACC', level: 'Expert' },
  { name: 'AI APIs', icon: <Cpu className="w-8 h-8" />, color: '#FF6C37', level: 'Master' },
  { name: 'GitHub', icon: <GitBranch className="w-8 h-8" />, color: '#181717', level: 'Expert' },
  { name: 'MongoDB', icon: <Database className="w-8 h-8" />, color: '#47A248', level: 'Advanced' },
  { name: 'PostgreSQL', icon: <Database className="w-8 h-8" />, color: '#4169E1', level: 'Advanced' },
  { name: 'SQL', icon: <Server className="w-8 h-8" />, color: '#F29111', level: 'Expert' },
  { name: 'Docker', icon: <Box className="w-8 h-8" />, color: '#2496ED', level: 'Advanced' },
  { name: 'React', icon: <Layers className="w-8 h-8" />, color: '#61DAFB', level: 'Master' },
];

export default function GamingTools() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const triggerConfetti = (e: React.MouseEvent<HTMLDivElement>, color: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 30,
      spread: 60,
      origin: { x, y },
      colors: [color, '#FFFFFF', '#D4AF37'],
      disableForReducedMotion: true,
      zIndex: 100,
    });
  };

  return (
    <section id="tools" className="py-24 px-6 sm:px-12 lg:px-24 bg-transparent border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <MonitorPlay className="w-4 h-4 text-primary-royal" />
            <span className="text-xs font-medium tracking-widest uppercase text-text-silver">Interactive Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-white mb-4 font-heading tracking-tight">Tech Stack & Tools</h2>
          <p className="text-lg text-text-silver/70 max-w-2xl mx-auto font-light">
            Hover over the tools to see my proficiency level. Built for performance, designed for scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, type: 'spring', stiffness: 100 }}
              onMouseEnter={() => setHoveredTool(tool.name)}
              onMouseLeave={() => setHoveredTool(null)}
              onClick={(e) => triggerConfetti(e, tool.color)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  triggerConfetti(e as any, tool.color);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`${tool.name} - Proficiency: ${tool.level}`}
              className="relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-royal rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" style={{ backgroundColor: tool.color }} />
              
              <div className="relative p-8 rounded-3xl glass-panel border border-white/5 flex flex-col items-center justify-center gap-4 group-hover:-translate-y-2 transition-transform duration-300 ease-out h-full">
                <div 
                  className="p-4 rounded-2xl transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: hoveredTool === tool.name ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255,255,255,0.05)',
                    color: hoveredTool === tool.name ? 'var(--color-primary-royal)' : '#E0E0E0',
                    boxShadow: hoveredTool === tool.name ? '0 0 25px rgba(212, 175, 55, 0.4)' : 'none'
                  }}
                >
                  {tool.icon}
                </div>
                
                <h3 className="text-sm font-bold text-white font-heading tracking-wider uppercase text-center">{tool.name}</h3>
                
                <AnimatePresence>
                  {hoveredTool === tool.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-2 text-[10px] font-mono tracking-widest uppercase"
                      style={{ color: tool.color }}
                    >
                      {tool.level}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
