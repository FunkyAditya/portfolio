import { motion } from "motion/react";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#020205]">
      {/* Base Deep Layer */}
      <div className="absolute inset-0 bg-[#020205]" />
      
      {/* Fluid Organic Mesh Blobs */}
      <div className="absolute inset-[-20%] opacity-40 filter blur-[120px]">
        {/* Electric Blue / Indigo Base */}
        <motion.div
          animate={{
            x: ["-15%", "15%", "-15%"],
            y: ["-10%", "20%", "-10%"],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[85%] h-[85%] bg-[#1e3a8a] rounded-full mix-blend-screen opacity-60"
        />

        {/* Vivid Violet / Purple Flow */}
        <motion.div
          animate={{
            x: ["15%", "-15%", "15%"],
            y: ["15%", "-20%", "15%"],
            scale: [1.3, 1, 1.3],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] right-0 w-[75%] h-[75%] bg-[#6d28d9] rounded-full mix-blend-screen opacity-50"
        />

        {/* Hot Magenta / Pink Accent */}
        <motion.div
          animate={{
            x: ["-10%", "20%", "-10%"],
            y: ["25%", "-15%", "25%"],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-[5%] w-[65%] h-[65%] bg-[#be185d] rounded-full mix-blend-screen opacity-40"
        />

        {/* Bright Cyan Highlight */}
        <motion.div
          animate={{
            x: ["25%", "-25%", "25%"],
            y: ["-25%", "25%", "-25%"],
            scale: [0.7, 1.2, 0.7],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[25%] w-[45%] h-[45%] bg-[#06b6d4] rounded-full mix-blend-screen opacity-50"
        />
      </div>

      {/* Dreamy Overlay Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(2,2,5,0.8)_100%)]" />

      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Structural Depth Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_30%,transparent_100%)]" />
    </div>
  );
}
