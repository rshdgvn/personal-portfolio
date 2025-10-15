import React from "react";
import { motion } from "framer-motion";

const EducationTimeline = () => {
  const educationData = [
    {
      id: 1,
      years: "2023–current",
      degree: "BS, Information Systems",
      institution: "La Verdad Christian College",
    },
    {
      id: 1,
      years: "March-2025–July-2025",
      degree: "Freelance",
      institution: "Develop a Mobile App",
    },
    {
      id: 2,
      years: "2021–2023",
      degree: "Higher Secondary Education",
      institution: "Liliw Senior High School",
    },
    {
      id: 3,
      years: "2017–2021",
      degree: "Secondary Education",
      institution: "Liliw National High School",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center hero-text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Education and Experience
        </motion.h2>
        <motion.p
          className="text-center text-white/70 max-w-2xl mx-auto mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A timeline of where I’ve been — and where I’m heading next.
        </motion.p>

        <div className="relative pl-10">
          {/* Timeline line with glow effect */}
          <div className="timeline-line"></div>

          {/* Timeline items */}
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot with glow */}
              <div
                className="absolute -left-10 w-4 h-4 rounded-full bg-white/20 border border-white/40"
                style={{
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                }}
              ></div>

              <div className="glow-card p-6">
                <span className="text-white/60 block mb-1">{item.years}</span>
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <p className="text-white/80 mb-1">{item.institution}</p>
                <p className="text-white/60">{item.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
