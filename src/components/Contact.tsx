import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send, ExternalLink } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#a855f7", "#3b82f6", "#ec4899", "#06b6d4"],
    });
  };

  const socials = [
    { icon: <Github size={24} />, label: "GitHub", href: "https://github.com/FunkyAditya", color: "hover:text-white" },
    { icon: <Linkedin size={24} />, label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-prakash-bb636b340/", color: "hover:text-dream-blue" },
    { icon: <Mail size={24} />, label: "Email", href: "mailto:adityaprakash7887@gmail.com", color: "hover:text-dream-purple" },
  ];

  return (
    <section id="contact" className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-dream-purple mb-4"
        >
          <Send size={20} />
          <span className="uppercase tracking-widest text-sm font-semibold">The Connection</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-gradient">Build Something</span> Together
        </h2>
        <p className="text-white/60 max-w-xl mx-auto font-light">
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="glass p-12 rounded-[3rem] border-white/5 bg-gradient-to-br from-dream-purple/10 to-transparent relative overflow-hidden group">
            <h3 className="text-3xl font-bold mb-6 text-white">Get in Touch</h3>
            <p className="text-white/60 font-light leading-relaxed mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className={`flex items-center gap-6 group/item transition-all ${social.color}`}
                >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white/40 group-hover/item:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-widest mb-1 block font-semibold">
                      {social.label}
                    </span>
                    <span className="text-lg font-bold text-white group-hover/item:text-inherit transition-colors">
                      {social.label === "Email" ? "adityaprakash7887@gmail.com" : social.label === "GitHub" ? "@FunkyAditya" : "Aditya Prakash"}
                    </span>
                  </div>
                  <ExternalLink size={16} className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-dream-purple/5 blur-[40px] rounded-full group-hover:bg-dream-purple/10 transition-colors" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass p-12 rounded-[3rem] border-white/5 text-center">
            <div className="w-20 h-20 bg-dream-purple/20 rounded-3xl flex items-center justify-center text-dream-purple mx-auto mb-8 animate-bounce">
              <SparklesIcon />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-white">Fun Fact!</h3>
            <p className="text-white/60 font-light leading-relaxed mb-12">
              I've built my own operating system from scratch. It's called <span className="text-white font-medium">Zunix</span>. Ask me about it!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleConfetti}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-dream-purple to-dream-blue text-white font-semibold hover:glow-purple transition-all"
            >
              Celebrate Creativity!
            </motion.button>
          </div>

          {/* Hidden Easter Egg */}
          <div className="absolute -bottom-8 right-8 text-[10px] text-white/10 font-mono select-none hover:text-white/40 transition-colors cursor-help">
            {"<!-- You found the secret message! Keep building. -->"}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SparklesIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
