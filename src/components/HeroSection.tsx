import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import Scene3D from "./Scene3D";

// === Your lines here ===
const LINES = [
  "Passionate software developer",
  "Am an full-stack engineer",
  "crafting innovative DApps",
  "solving real-world problems with impactful solutions."
];

// Animation speed settings
const WORD_STAGGER = 0.15; // delay between each word
const LINE_WAIT = 2000;    // wait time after each line (ms)
const LOOP_WAIT = 2000;    // wait time after last line before restarting (ms)

function WordLine({ text, start, onDone }) {
  const controls = useAnimation();
  const doneRef = useRef(false);

  useEffect(() => {
    if (start) controls.start("visible");
  }, [start, controls]);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: WORD_STAGGER }
    }
  };

  const word = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="leading-relaxed"
      variants={container}
      initial="hidden"
      animate={controls}
      onAnimationComplete={() => {
        if (start && !doneRef.current) {
          doneRef.current = true;
          setTimeout(() => {
            onDone?.();
          }, LINE_WAIT);
        }
      }}
      style={{ display: start ? "block" : "none" }}
    >
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          style={{ display: "inline-block", marginRight: 6 }}
        >
          {w}
        </motion.span>
      ))}
    </motion.div>
  );
}

const HeroSection = () => {
  const [activeLine, setActiveLine] = useState(0);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Gradient Background Blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="text-hero gradient-text-purple font-extrabold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Adithiyan M
          </motion.h1>

          {/* Sequential line animation with loop */}
          <div className="text-subhero max-w-3xl mx-auto mb-8">
            {LINES.map((line, index) => (
              <WordLine
                key={index}
                text={line}
                start={index === activeLine}
                onDone={() => {
                  if (index === activeLine) {
                    if (activeLine < LINES.length - 1) {
                      setActiveLine((v) => v + 1);
                    } else {
                      // Last line → restart after LOOP_WAIT
                      setTimeout(() => {
                        setActiveLine(0);
                      }, LOOP_WAIT);
                    }
                  }
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button asChild variant="hero" size="lg" className="group">
            <a href="#contact">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Hire Me
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="group">
            <a href="/AADHI RESUME.docx" download>
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
