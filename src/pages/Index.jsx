import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import HeroSection from "@/components/HeroSection"
import TechMarquee from "@/components/TechMarquee"
import ProjectsSection from "@/components/ProjectsSection"
import EducationTimeline from "@/components/EducationTimeline"
import CompetitiveStats from "@/components/CompetitiveStats"
import BlogSection from "@/components/BlogSection"
import ContactSection from "@/components/ContactSection"

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
              opacity: 0.2
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
              animationDelay: "1s"
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
              animationDelay: "2s"
            }}
          ></div>

          {/* Floating glow orbs */}
          <div
            className="absolute w-[100px] h-[100px] rounded-full bg-white/5 blur-xl animate-float"
            style={{
              top: "20vh",
              left: "30vw",
              animationDelay: "0s"
            }}
          ></div>

          <div
            className="absolute w-[80px] h-[80px] rounded-full bg-white/5 blur-xl animate-float"
            style={{
              top: "60vh",
              right: "25vw",
              animationDelay: "1.5s"
            }}
          ></div>
        </div>

        <header className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold italic">John Doe</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a
                    href="#projects"
                    className="hover:text-white transition-colors relative group"
                  >
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors relative group"
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/resume.pdf"
                    className="cta-button-premium text-sm px-4 py-1"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="pt-16 relative z-10">
          <HeroSection />
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
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  )
}

export default Index
