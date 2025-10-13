import React from "react"
import { motion } from "framer-motion"

const EducationTimeline = () => {
  const educationData = [
    {
      id: 1,
      years: "202X–202X",
      degree: "B.Tech, Computer Science",
      institution: "IIT Dholakpur",
      grade: "GPA: X/10"
    },
    {
      id: 2,
      years: "202X–202X",
      degree: "Higher Secondary Education",
      institution: "XX School",
      grade: "Percentage: XX%"
    },
    {
      id: 3,
      years: "201X–202X",
      degree: "Secondary Education",
      institution: "Delhi Public School",
      grade: "CGPA: XX/10"
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

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
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)"
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
  )
}

export default EducationTimeline
