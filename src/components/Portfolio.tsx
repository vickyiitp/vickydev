import { motion } from 'motion/react';
import { PlayCircle, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    name: 'Startup Collaboration Platform',
    problem: 'Startups lacked a unified platform for managing contributors and showcasing portfolios.',
    solution: 'Developed a comprehensive dashboard system with real-time updates and project listings.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Flask', 'MongoDB'],
    features: ['Startup Dashboard', 'Contributor Dashboard', 'Project Listing System', 'Portfolio Preview'],
    demoUrl: '#',
    tags: ['Startup Platform', 'Custom Backend'],
  },
  {
    name: 'AI Content Automation Engine',
    problem: 'Content creation was manual, time-consuming, and inconsistent across channels.',
    solution: 'Built an AI-powered pipeline that generates, formats, and schedules content automatically.',
    technologies: ['Python', 'OpenAI API', 'Node.js', 'React'],
    features: ['Automated Generation', 'Multi-channel Scheduling', 'Analytics Dashboard'],
    demoUrl: '#',
    tags: ['AI System', 'Advanced Automation'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 sm:px-12 lg:px-24 bg-transparent border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4 font-heading tracking-tight">Portfolio Projects</h2>
          <p className="text-lg text-text-silver/70 max-w-2xl">Showcasing complex systems, automation engines, and modern web platforms.</p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 lg:p-12 rounded-3xl glass-panel hover:border-primary-royal/30 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-royal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-primary-royal/30 text-xs text-primary-royal font-mono uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-text-white mb-6 font-heading">{project.name}</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-accent-light uppercase tracking-wider mb-2">Problem</h4>
                      <p className="text-text-silver/80 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-accent-light uppercase tracking-wider mb-2">Solution</h4>
                      <p className="text-text-silver/80 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <a href={project.demoUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-300">
                    <PlayCircle className="w-5 h-5 text-primary-royal" />
                    Watch Video Demo
                  </a>
                </div>

                <div className="space-y-8 lg:border-l border-white/5 lg:pl-12">
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-text-white mb-4">
                      <Code2 className="w-5 h-5 text-primary-royal" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg bg-bg-dark/50 border border-white/5 text-sm text-text-silver/90">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-text-white mb-4">
                      <ExternalLink className="w-5 h-5 text-primary-royal" />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-text-silver/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-royal" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
