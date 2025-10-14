import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaPhp,
  FaLaravel,
  FaGit,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiMysql,
} from "react-icons/si";

const TechMarquee = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);

  const speed = 0.5; // pixels per frame

  // tech icons for marquee rows
  // tech icons for marquee rows
  const techStackRow1 = [
    { name: "HTML", icon: <FaHtml5 className="w-6 h-6 mr-2 text-green-100" /> },
    {
      name: "CSS",
      icon: <FaCss3Alt className="w-6 h-6 mr-2 text-green-100" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="w-6 h-6 mr-2 text-green-100" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-6 h-6 mr-2 text-green-100" />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="w-6 h-6 mr-2 text-green-100" />,
    },
    {
      name: "React",
      icon: <FaReact className="w-6 h-6 mr-2 text-green-100" />,
    },
    {
      name: "React Native",
      icon: <FaReact className="w-6 h-6 mr-2 text-green-100" />,
    },
  ];

  const techStackRow2 = [
    {
      name: "Python",
      icon: <FaPython className="w-6 h-6 mr-2 text-green-100" />,
    },
    { name: "PHP", icon: <FaPhp className="w-6 h-6 mr-2 text-green-100" /> },
    {
      name: "Laravel",
      icon: <FaLaravel className="w-6 h-6 mr-2 text-green-100" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="w-6 h-6 mr-2 text-green-100" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="w-6 h-6 mr-2 text-green-100" />,
    },
    { name: "Git", icon: <FaGit className="w-6 h-6 mr-2 text-green-100" /> },
    {
      name: "GitHub",
      icon: <FaGithub className="w-6 h-6 mr-2 text-green-100" />,
    },
    {
      name: "Docker",
      icon: <FaDocker className="w-6 h-6 mr-2 text-green-100" />,
    },
  ];

  // map tech name -> icon component (for background use)
  const techIcons = {
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    JavaScript: FaJs,
    TypeScript: SiTypescript,
    TailwindCSS: SiTailwindcss,
    React: FaReact,
    "React Native": FaReact,
    Python: FaPython,
    PHP: FaPhp,
    Laravel: FaLaravel,
    MySQL: SiMysql,
    Postman: SiPostman,
    Git: FaGit,
    GitHub: FaGithub,
    Docker: FaDocker,
  };

  const renderMarqueeItems = (items) =>
    items.map((tech, index) => (
      <div
        key={`${tech.name}-${index}`}
        className="tech-badge-premium mx-5 flex items-center px-4 py-2 rounded-xl border border-green-500/40 text-white/90 shadow-[0_0_15px_rgba(0,255,100,0.3)] hover:shadow-[0_0_25px_rgba(0,255,100,0.5)] hover:text-white transition-all duration-300 cursor-default"
        onMouseEnter={() => setHoveredTech(tech.name)}
        onMouseLeave={() => setHoveredTech(null)}
      >
        {tech.icon}
        {tech.name}
      </div>
    ));

  useEffect(() => {
    let pos1 = 0;
    let pos2 = 0;
    const marquee1 = marqueeRef1.current;
    const marquee2 = marqueeRef2.current;
    if (!marquee1 || !marquee2) return;

    const rowWidth1 = marquee1.scrollWidth / 2;
    const rowWidth2 = marquee2.scrollWidth / 2;

    const animate = () => {
      pos1 -= speed;
      if (Math.abs(pos1) >= rowWidth1) pos1 = 0;
      marquee1.style.transform = `translateX(${pos1}px)`;

      pos2 += speed;
      if (pos2 >= 0) pos2 = -rowWidth2;
      marquee2.style.transform = `translateX(${pos2}px)`;

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const BackgroundIcon = hoveredTech ? techIcons[hoveredTech] : null;

  return (
    <section className="py-20 bg-dark-100/30 relative max-w-screen-xl mx-auto px-10 overflow-hidden">
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-white/90 mb-12 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="hero-text-gradient">Tech Stack</span>
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl font-light italic text-white/80 mb-14 leading-relaxed max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        These are the tools and technologies I work with to bring ideas to life
        — from front-end interfaces to back-end systems. Each framework,
        language, and library plays a role in building fast, secure, and
        scalable applications.
      </motion.p>

      {/* White background icon on hover */}
      <motion.div
        key={hoveredTech}
        className="absolute top-[28%] left-[39%] transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        initial={{ opacity: 0.2, scale: 0.9 }}
        animate={{
          opacity: hoveredTech ? 0.3 : 0,
          scale: hoveredTech ? 1 : 0.8,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {BackgroundIcon && (
          <BackgroundIcon className="w-[280px] h-[280px] text-green-100" />
        )}
      </motion.div>

      {/* Top row */}
      <div className="overflow-hidden relative">
        <div
          ref={marqueeRef1}
          className="flex whitespace-nowrap"
          style={{ transform: "translateX(0px)" }}
        >
          {renderMarqueeItems([...techStackRow1, ...techStackRow1])}
        </div>
      </div>

      {/* Bottom row */}
      <div className="overflow-hidden relative mt-10">
        <div
          ref={marqueeRef2}
          className="flex whitespace-nowrap"
          style={{ transform: "translateX(0px)" }}
        >
          {renderMarqueeItems([...techStackRow2, ...techStackRow2])}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
