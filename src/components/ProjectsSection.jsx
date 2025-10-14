import React from "react";
import { motion } from "framer-motion";
import GlowCard from "./GlowCard";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "LV CIS",
      description:
        "La Verdad Club Integrated System (LV-CIS) helps clubs stay organized. It includes features for tracking attendance, handling membership, and managing event tasks.",
      techStack: ["Laravel", "React", "TailwindCSS", "XAMPP", "MySQL", "ShadcnUI"],
      url: "#",
      image: "projects/LVCIS.png",
    },
    {
      id: 2,
      title: "rshdgvn",
      description:
        "A personal portfolio built to showcase my journey as a developer — highlighting my featured projects, tech stack, and growth in software engineering and cybersecurity.",
      techStack: ["React", "TailwindCSS", "Framer Motion", "ShadcnUI"],
      url: "#",
      image: "projects/rshdgvn.png",
    },
    {
      id: 3,
      title: "PEP-7",
      description:
        "Web app that helps Grade 7 students improve their Filipino vocabulary through games.",
      techStack: ["Laravel", "React", "Inertia", "React", "XAMPP", "MySQL"],
      url: "#",
      image: "projects/pep-7.png",
    },
    {
      id: 4,
      title: "AppDates",
      description:
        "Platform that keeps your projects up-to-date and on schedule with a smart, streamlined Kanban board.",
      techStack: ["Laravel", "Blade", "TailwindCSS", "XAMPP", "MySQL"],
      url: "#",
      image: "projects/app-dates.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 relative overflow-hidden bg-black"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center hero-text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        {/* Section description */}
        <motion.p
          className="text-white/70 text-center max-w-2xl mx-auto mb-32 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          As I grow as a developer, each project becomes a reflection of my
          progress — sharper ideas, cleaner code, and better design every time.
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <GlowCard
                className="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Grid background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-900/10" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full p-6">
                  {project.image && (
                    <div className="w-full aspect-video overflow-hidden rounded-xl mb-4 bg-black/30 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <h3 className="hero2-text-gradient text-3xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-white/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 hover:bg-green-400 hover:text-black transition-colors duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    className="inline-flex items-center gap-1 text-sm text-green-300 hover:text-white font-medium"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
