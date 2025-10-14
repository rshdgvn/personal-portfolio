import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,  
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden">
      {/* Premium corner light effects */}
      <div className="corner-light-premium"></div>
      <div
        className="corner-light-premium"
        style={{ right: 0, left: "auto", transform: "rotate(90deg)" }}
      ></div>

      {/* Light rays */}
      <div
        className="light-ray-premium opacity-30"
        style={{
          top: "10%",
          left: "-10%",
          width: "80%",
          transform: "rotate(25deg)",
        }}
      ></div>
      <div
        className="light-ray-premium opacity-20"
        style={{
          top: "30%",
          left: "-5%",
          width: "60%",
          transform: "rotate(15deg)",
        }}
      ></div>
      <div
        className="light-ray-premium opacity-10"
        style={{
          top: "60%",
          left: "-15%",
          width: "70%",
          transform: "rotate(-10deg)",
        }}
      ></div>

      {/* Central premium glow effect */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-radial-glow-premium opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-glow-pulse"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h1
          className="hero-heading relative font-extrabold italic mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="absolute -inset-x-10 -inset-y-6 bg-white/5 rounded-3xl blur-3xl -z-10"></span>

          <motion.span
            className="block text-5xl md:text-7xl"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
          >
            Hi, I'm <span className="hero2-text-gradient px-2">Rasheed Gavin</span>
          </motion.span>

          <motion.span
            className="block text-4xl md:text-6xl hero-text-gradient mt-2 p-2"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
          >
            I bring ideas to life through code.
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-light text-white/80 mb-10 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          I'm an aspiring software engineer and cybersecurity enthusiast driven
          by a passion for building secure and efficient systems. I love turning
          ideas into reality through code, design, and innovation—creating
          solutions that are both powerful and reliable
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="#projects"
            className="cta-button-premium group inline-flex items-center gap-2 text-green-200"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
