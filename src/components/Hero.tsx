import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-sm font-medium text-dream-purple border-dream-purple/20"
        >
          <Sparkles size={14} />
          <span>Exploring the Digital Mindscape</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
          Hey, I'm <span className="text-gradient">Aditya</span> 👋
        </h1>

        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          I build things, break things, and figure out how they work.
          <br />
          <span className="text-white/40 italic">Class 12 student, creative developer, and problem solver.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold overflow-hidden transition-all hover:glow-purple"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My World
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] left-[10%] p-4 glass rounded-2xl hidden lg:block"
      >
        <div className="w-12 h-12 bg-dream-purple/20 rounded-lg flex items-center justify-center text-dream-purple">
          {"{ }"}
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[10%] p-4 glass rounded-2xl hidden lg:block"
      >
        <div className="w-12 h-12 bg-dream-blue/20 rounded-lg flex items-center justify-center text-dream-blue">
          {"</>"}
        </div>
      </motion.div>
    </section>
  );
}
