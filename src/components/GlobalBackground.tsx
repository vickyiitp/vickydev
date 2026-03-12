import { motion } from 'motion/react';

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-bg-dark pointer-events-none">
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none z-10"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      
      {/* Animated Orbs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-royal/10 blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-900/15 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, 50, -100, 0],
          scale: [0.8, 1.1, 1, 0.8],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-accent-light/5 blur-[100px]"
      />
    </div>
  );
}
