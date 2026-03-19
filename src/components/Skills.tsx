import { motion } from "motion/react";
import { Cpu, Code, Shield, Database, Terminal, Layers } from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      icon: <Code size={20} />,
      skills: ["Python", "C++", "JavaScript", "TypeScript"],
      color: "from-dream-purple/20 to-dream-purple/10",
      textColor: "text-dream-purple",
    },
    {
      title: "Frameworks",
      icon: <Layers size={20} />,
      skills: ["Django", "DRF", "Three.js", "React"],
      color: "from-dream-blue/20 to-dream-blue/10",
      textColor: "text-dream-blue",
    },
    {
      title: "Infrastructure",
      icon: <Terminal size={20} />,
      skills: ["Linux", "Git", "SQLite", "PostgreSQL"],
      color: "from-dream-cyan/20 to-dream-cyan/10",
      textColor: "text-dream-cyan",
    },
    {
      title: "Specializations",
      icon: <Shield size={20} />,
      skills: ["Cybersecurity", "Backend Dev", "System Programming"],
      color: "from-dream-pink/20 to-dream-pink/10",
      textColor: "text-dream-pink",
    },
    {
      title: "Hardware",
      icon: <Cpu size={20} />,
      skills: ["ESP32", "Raspberry Pi Pico", "Arduino"],
      color: "from-white/10 to-white/5",
      textColor: "text-white/60",
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-dream-cyan mb-4"
        >
          <Database size={20} />
          <span className="uppercase tracking-widest text-sm font-semibold">The Toolkit</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          My <span className="text-gradient">Creative Arsenal</span>
        </h2>
        <p className="text-white/60 max-w-xl mx-auto font-light">
          A collection of tools and technologies I've mastered to bring ideas to life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.1 }}
            className={`glass p-8 rounded-3xl border-white/5 bg-gradient-to-br ${group.color} group hover:scale-[1.02] transition-all duration-500`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white/5 ${group.textColor} group-hover:scale-110 transition-transform`}>
              {group.icon}
            </div>
            <h3 className="text-xl font-bold mb-6 text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 rounded-xl glass text-sm font-medium text-white/80 border-white/5 hover:border-white/20 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dream-purple/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
