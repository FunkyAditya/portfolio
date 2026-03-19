import { motion } from "motion/react";
import { ExternalLink, Github, Code, Gamepad, Shield, Mic, BarChart } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Zunix OS",
      description: "Built my own operating system using SYSLINUX and BUSYBOX, exploring the depths of systems programming and kernel development.",
      icon: <Code size={24} />,
      color: "from-dream-purple/20 to-dream-purple/10",
      textColor: "text-dream-purple",
      github: "https://github.com/FunkyAditya",
      tags: ["SYSLINUX", "BUSYBOX", "C", "OS Dev"],
    },
    {
      title: "Infinite Runner",
      description: "A fast-paced 3D game using Three.js, featuring procedurally generated obstacles and smooth animations.",
      icon: <Gamepad size={24} />,
      color: "from-dream-blue/20 to-dream-blue/10",
      textColor: "text-dream-blue",
      github: "https://github.com/FunkyAditya",
      tags: ["Three.js", "JavaScript", "3D"],
    },
    {
      title: "Safety Platform",
      description: "A tech-driven assistance platform to help people feel safer in real life through real-time alerts and location tracking.",
      icon: <Shield size={24} />,
      color: "from-dream-pink/20 to-dream-pink/10",
      textColor: "text-dream-pink",
      github: "https://github.com/FunkyAditya",
      tags: ["React", "Firebase", "Geolocation"],
    },
    {
      title: "Voice Assistant",
      description: "A Python-based assistant that listens, understands, and responds to voice commands, automating daily tasks.",
      icon: <Mic size={24} />,
      color: "from-dream-cyan/20 to-dream-cyan/10",
      textColor: "text-dream-cyan",
      github: "https://github.com/FunkyAditya",
      tags: ["Python", "NLP", "Automation"],
    },
    {
      title: "Scraper Dashboard",
      description: "Turning messy web data into clean, actionable insights with a custom scraping engine and visualization dashboard.",
      icon: <BarChart size={24} />,
      color: "from-white/10 to-white/5",
      textColor: "text-white/60",
      github: "https://github.com/FunkyAditya",
      tags: ["Python", "Django", "Data Visualization"],
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-dream-purple mb-4"
        >
          <Code size={20} />
          <span className="uppercase tracking-widest text-sm font-semibold">The Portfolio</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Selected <span className="text-gradient">Creations</span>
        </h2>
        <p className="text-white/60 max-w-xl mx-auto font-light">
          A showcase of my favorite projects, from low-level systems to high-level web applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative glass p-8 rounded-[2.5rem] border-white/5 bg-gradient-to-br ${project.color} hover:scale-[1.03] transition-all duration-500 overflow-hidden`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white/5 ${project.textColor} group-hover:scale-110 transition-transform`}>
              {project.icon}
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
            <p className="text-white/60 font-light leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 rounded-full glass text-[10px] uppercase tracking-widest font-bold text-white/40 border-white/5">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <ExternalLink size={18} />
              </motion.a>
            </div>

            {/* Decorative Gradient Overlay */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 blur-[40px] rounded-full group-hover:bg-white/10 transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
