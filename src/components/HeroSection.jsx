import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 relative overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-green-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full" />

      {/* Matrix lines background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          className="font-extrabold leading-tight mb-6 tracking-tight"
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="block text-5xl md:text-7xl"
            variants={textVariants}
            custom={0}
          >
            I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 drop-shadow-[0_0_10px_rgba(0,255,150,0.3)]">
              Rasheed Gavin
            </span>
          </motion.span>

          <motion.span
            className="block text-3xl md:text-5xl mt-3 text-white/80 font-light"
            variants={textVariants}
            custom={1}
          >
            Turning ideas into reality through{" "}
            <span className="text-emerald-300">code.</span>
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Aspiring software engineer & cybersecurity enthusiast. I love crafting
          secure, efficient, and visually stunning systems that blend creativity
          with precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-green-400/50 text-green-200 hover:bg-green-500/10 transition-all group"
          >
            <span className="font-medium">View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
