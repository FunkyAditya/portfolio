import { motion } from "motion/react";
import { Briefcase, Trophy, Star, GraduationCap, Code } from "lucide-react";

export default function Journey() {
  const experiences = [
    {
      title: "Django Intern",
      company: "Tech Startup",
      period: "2025 Jan - April",
      description: "Working on backend systems, optimizing API endpoints, and implementing secure authentication flows.",
      icon: <Briefcase size={20} />,
    },
    {
      title: "Self-Learning Journey",
      company: "Cybersecurity & Systems",
      period: "2022 - Present",
      description: "Deep diving into Linux internals, network security, and low-level programming to build Zunix OS.",
      icon: <Code size={20} />,
    },
    {
      title: "Class 12 Student",
      company: "Science Stream",
      period: "2026 - Present",
      description: "Balancing academic excellence with a passion for creative technology and problem-solving.",
      icon: <GraduationCap size={20} />,
    },
  ];

  const achievements = [
    { title: "Chess Rating ~1700", description: "Competitive player with a strategic mindset.", icon: <Trophy size={20} /> },
    { title: "OS Developer", description: "Built Zunix OS from scratch.", icon: <Star size={20} /> },
    { title: "Project Architect", description: "Multiple self-built projects across various domains.", icon: <Star size={20} /> },
  ];

  return (
    <section id="journey" className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-dream-purple mb-4">
            <Briefcase size={20} />
            <span className="uppercase tracking-widest text-sm font-semibold">The Journey</span>
          </div>
          <h2 className="text-4xl font-bold mb-12">Experience & <span className="text-gradient">Growth</span></h2>
          
          <div className="space-y-8 relative">
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/10" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-16 group"
              >
                <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl glass flex items-center justify-center text-dream-purple group-hover:scale-110 transition-transform z-10">
                  {exp.icon}
                </div>
                <div className="glass p-8 rounded-3xl border-white/5 group-hover:bg-white/10 transition-all">
                  <span className="text-xs text-white/40 uppercase tracking-widest mb-2 block font-semibold">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-white">{exp.title}</h3>
                  <p className="text-dream-purple text-sm font-medium mb-4">{exp.company}</p>
                  <p className="text-white/60 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements & Future */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-dream-pink mb-4">
              <Trophy size={20} />
              <span className="uppercase tracking-widest text-sm font-semibold">The Wins</span>
            </div>
            <h2 className="text-4xl font-bold mb-12">Milestones & <span className="text-gradient">Achievements</span></h2>
            
            <div className="grid gap-4">
              {achievements.map((ach, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="glass p-6 rounded-2xl border-white/5 flex items-center gap-6 group transition-all hover:bg-white/10"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-dream-pink group-hover:scale-110 transition-transform">
                    {ach.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{ach.title}</h3>
                    <p className="text-white/40 text-sm font-light">{ach.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 glass p-8 rounded-3xl border-white/5 bg-gradient-to-br from-dream-cyan/10 to-transparent">
            <h3 className="text-2xl font-bold mb-4 text-white">Future Direction</h3>
            <p className="text-white/60 font-light leading-relaxed">
              I'm constantly exploring, building, and improving. My goal is to dive deeper into cybersecurity and systems programming, building meaningful technology that actually helps people and solves real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
