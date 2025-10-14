import React from "react";
import { motion } from "framer-motion";
import { Terminal, User } from "lucide-react";

const typingLines = [
  { cmd: "whoami", out: "rshdgvn" },
  {
    cmd: "cat profile.txt",
    out: 'name: "Rasheed Gavin Esponga"\nlocation: "Philippines"\ncurrent: "BSIS Student | CTF Player"\ngoal: "Aspiring Software Engineer | Cybersecurity" ',
  },
  {
    cmd: "echo $fun-fact",
    out: '"I debug at 3 AM and somehow it works."',
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full py-24 px-6 md:px-16 flex flex-col items-center overflow-hidden"
    >
      {/* Background glow and grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,179,0.04)_0%,transparent_65%)]"></div>
      <div className="absolute inset-0 bg-grid-small text-green-400/[0.03]"></div>

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-white mb-32 hero-text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl relative z-10 w-full">
        {/* Left: story card */}
        <motion.div
          className="bg-white/5 border border-white/8 rounded-2xl p-6 backdrop-blur-sm text-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <User className="w-5 h-5 text-green-300" />
            <h3 className="text-lg font-semibold text-green-300">./rshdgvn</h3>
          </div>

          <p className="leading-relaxed text-white/80 mb-4">
            My name is{" "}
            <span className="text-green-400 font-medium">
              Rasheed Gavin M. Esponga
            </span>{" "}
            — A curious learner with a growing passion for software development
            and cybersecurity. I spend my time building systems, tackling
            Capture the Flag (CTF) challenges, and exploring the art of ethical
            hacking.
          </p>

          <p className="leading-relaxed text-white/80 mb-4">
            My goal is to design secure, efficient, and scalable applications —
            the kind that can withstand real-world attacks while delivering
            great user experiences. Whether I’m debugging backend logic or
            analyzing packets in Wireshark, I enjoy understanding what’s really
            happening under the hood.
          </p>

          <p className="leading-relaxed text-green-300 italic text-center mt-4">
            “Building systems is one thing. Protecting them is where true
            mastery begins.”
          </p>
        </motion.div>

        {/* Right: Kali-inspired terminal panel */}
        <motion.div
          className="relative bg-black/85 border border-green-800/30 rounded-2xl p-0 overflow-hidden shadow-[0_10px_40px_rgba(0,255,100,0.05)]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-b from-black/80 to-black/70 border-b border-green-800/20">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_6px_rgba(255,0,0,0.2)]" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-[0_0_6px_rgba(255,200,0,0.08)]" />
              <span className="w-3 h-3 rounded-full bg-green-400/80 shadow-[0_0_6px_rgba(0,255,150,0.08)]" />
            </div>

            <div className="flex items-center gap-3 text-xs text-green-200/60 font-mono">
              <Terminal className="w-4 h-4" />
              <span>kali@rshdgvn ~</span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-5 md:p-6">
            <div className="font-mono text-sm text-green-300/95 leading-relaxed">
              {typingLines.map((line, idx) => (
                <div key={idx} className="mb-3">
                  <div className="flex items-start gap-3">
                    <div className="text-green-400/90 font-mono select-none">{`rshdgvn@kali:$`}</div>
                    <div className="flex-1">
                      <span className="inline-block bg-black/0 px-1 py-0.5 rounded text-green-200">
                        <span className="font-mono">{line.cmd}</span>
                      </span>
                    </div>
                  </div>

                  <div className="ml-[100px] mt-2 text-green-200/70 text-sm">
                    <pre className="whitespace-pre-wrap font-mono text-sm">
                      {line.out}
                    </pre>
                  </div>
                </div>
              ))}

              <div className="mt-4 border-t border-green-800/20 pt-4 flex flex-wrap gap-3 text-xs text-green-200/60">
                <span className="px-2 py-1 bg-green-900/20 rounded">
                  OS: Kali (Inspired)
                </span>
                <span className="px-2 py-1 bg-green-900/20 rounded">
                  Focus: Full-stack & Security
                </span>
              </div>
            </div>

            {/* Fake terminal cursor */}
            <div className="mt-5 flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-green-400/10 flex items-center justify-center">
                <div className="w-2 h-4 bg-green-400 animate-pulse"></div>
              </div>
              <div className="text-xs text-green-200/70 font-mono">
                Last login: {new Date().toLocaleString()}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
