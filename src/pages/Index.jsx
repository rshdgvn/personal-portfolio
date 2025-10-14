import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import ProjectsSection from "@/components/ProjectsSection";
import EducationTimeline from "@/components/EducationTimeline";
import CompetitiveStats from "@/components/CompetitiveStats";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "../components/AboutSection";

const Index = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-dark min-h-screen relative"
      >
        {/* Enhanced premium light source effects */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {/* Main light source */}
          <div className="absolute -top-[30vh] -left-[30vh] w-[80vh] h-[80vh] rounded-full bg-radial-glow-premium opacity-60 animate-glow-pulse"></div>
          <div className="matrix-grid"></div>

          {/* Secondary light source */}
          <div
            className="absolute top-[70vh] -right-[20vh] w-[50vh] h-[50vh] rounded-full bg-radial-glow-premium opacity-40 animate-glow-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Premium light rays */}
          <div
            className="light-ray-premium"
            style={{
              top: "15vh",
              left: 0,
              width: "40vw",
              transform: "rotate(30deg)",
              opacity: 0.2,
            }}
          ></div>

          <div
            className="light-ray-premium"
            style={{
              top: "35vh",
              left: 0,
              width: "60vw",
              transform: "rotate(15deg)",
              opacity: 0.15,
              animationDelay: "1s",
            }}
          ></div>

          <div
            className="light-ray-premium"
            style={{
              top: "65vh",
              left: 0,
              width: "50vw",
              transform: "rotate(-10deg)",
              opacity: 0.12,
              animationDelay: "2s",
            }}
          ></div>

          {/* Floating glow orbs */}
          <div
            className="absolute w-[100px] h-[100px] rounded-full bg-white/5 blur-xl animate-float"
            style={{
              top: "20vh",
              left: "30vw",
              animationDelay: "0s",
            }}
          ></div>

          <div
            className="absolute w-[80px] h-[80px] rounded-full bg-white/5 blur-xl animate-float"
            style={{
              top: "60vh",
              right: "25vw",
              animationDelay: "1.5s",
            }}
          ></div>
        </div>

        <header className="fixed w-full top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-green-500/20 shadow-[0_0_20px_rgba(0,255,100,0.1)]">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-5">
              <img
                src="favicon.ico"
                className="h-8 w-8 object-contain"
                alt="Logo"
              />
              <h1 className="text-2xl font-extrabold italic tracking-wider text-green-400 select-none relative">
                <span className="relative z-10">
                  rshdgvn
                </span>
                <span className="absolute inset-0 blur-md opacity-40 bg-green-500/30 animate-pulse"></span>
              </h1>
            </div>

            {/* nav */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8 text-sm font-medium">
                {[
                  { name: "Projects", href: "#projects" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="relative text-white/70 hover:text-green-400 transition-all duration-300 group"
                    >
                      {item.name}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-green-400 to-white/40 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/resume.pdf"
                    className="relative overflow-hidden border border-green-500/40 text-green-400 hover:text-black hover:bg-green-400 px-4 py-1.5 rounded-md transition-all duration-300 group"
                  >
                    <span className="relative z-10">Resume</span>
                    <span className="absolute inset-0 bg-green-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* subtle glowing line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-pulse"></div>
        </header>

        <main className="pt-16 relative z-10">
          <HeroSection />
          <AboutSection />
          <TechMarquee />
          <ProjectsSection />
          <EducationTimeline />
          <CompetitiveStats />
          <BlogSection />
          <ContactSection />
        </main>

        <footer className="py-12 px-4 border-t border-white/10 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/60">
              © {new Date().getFullYear()} ./rshdgvn. All rights reserved.
            </p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
