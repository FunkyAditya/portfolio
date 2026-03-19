import { motion } from "motion/react";
import { User, Code, Shield, Brain, Trophy } from "lucide-react";

export default function About() {
  const stats = [
    { icon: <Brain size={20} />, label: "Mindset", value: "Problem Solver" },
    { icon: <Trophy size={20} />, label: "Chess", value: "~1700 Rating" },
    { icon: <Code size={20} />, label: "Focus", value: "Backend & Systems" },
    { icon: <Shield size={20} />, label: "Interest", value: "Cybersecurity" },
  ];

  return (
    <section id="about" className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-dream-purple mb-4">
            <User size={20} />
            <span className="uppercase tracking-widest text-sm font-semibold">The Story</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Building things from scratch, <span className="text-gradient">one line at a time.</span>
          </h2>

          <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
            <p>
              I'm a Class 12 student from India who doesn’t just use technology—I want to understand how it works from the inside out. What started as simple curiosity—tweaking things, breaking them, and figuring out why they broke—gradually pulled me deeper into the world of programming and systems.
            </p>
            <p>
              Over time, that curiosity evolved into building real things, eventually leading me to create my own operating system, <span className="text-white font-medium">Zunix</span>, and explore low-level system design.
            </p>
            <p>
              Whether it's crafting robust backends with Django, experimenting with Three.js for immersive 3D experiences, or diving into cybersecurity, I'm always looking for the next challenge. I believe the best way to learn is to build, break, and rebuild.
            </p>
            <p>
              When I'm not coding, you'll probably find me at a chessboard, where I've reached a rating of ~1700. That same strategic and competitive mindset is something I bring into every project I work on.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass p-8 rounded-3xl flex flex-col items-center justify-center text-center group transition-all hover:bg-white/10"
              >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 text-dream-purple group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <span className="text-xs text-white/40 uppercase tracking-widest mb-1 font-semibold">
                  {stat.label}
                </span>
                <span className="text-lg font-bold text-white">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Decorative Ring */}
          <div className="absolute -inset-4 border border-dream-purple/10 rounded-[40px] -z-10 animate-pulse" />
          <div className="absolute -inset-8 border border-dream-blue/5 rounded-[50px] -z-10 animate-pulse delay-75" />
        </motion.div>
      </div>
    </section>
  );
}
