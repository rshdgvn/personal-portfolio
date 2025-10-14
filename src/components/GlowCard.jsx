import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const GlowCard = ({ children, className = "", delayIndex = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`glow-card ${className} border rounded-2xl relative overflow-hidden`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.4, delay: delayIndex * 0.1, ease: "easeOut" }
      }
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        boxShadow: "0 0 12px rgba(0,255,100,0.15)",
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
      }}
      whileHover={{
        borderColor: "rgba(0,255,100,0.4)",
        boxShadow: "0 0 18px rgba(0,255,100,0.3)",
        scale: 1.01,
        transition: { duration: 0.25 },
      }}
    >
      {/* Glow border (static for performance) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-900/10" />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 h-full"
        style={{
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;
