"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OpeningReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<
    "idle" | "pressed" | "lights" | "camera" | "action" | "clap" | "clap_slam" | "zooming" | "circle" | "revealed"
  >("idle");
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleRoll = () => {
    if (phase !== "idle") return;
    
    if (prefersReducedMotion) {
      setPhase("revealed");
      return;
    }
    
    setPhase("pressed");
    
    // Timeline Choreography
    setTimeout(() => setPhase("lights"), 200);
    setTimeout(() => setPhase("camera"), 900);
    setTimeout(() => setPhase("action"), 1600);
    setTimeout(() => setPhase("clap"), 2300);
    setTimeout(() => setPhase("clap_slam"), 2850); // Slams down (150ms animation) -> Hits at 3000ms
    setTimeout(() => setPhase("zooming"), 3150); // 150ms pause after hit, zoom begins
    setTimeout(() => setPhase("circle"), 3800); // 650ms zoom duration
    setTimeout(() => setPhase("revealed"), 4300); // 500ms circular reveal
  };

  useEffect(() => {
    if (phase === "revealed") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    }
  }, [phase]);

  return (
    <>
      {phase !== "revealed" && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-cream font-display selection:bg-black selection:text-white pointer-events-none">
          
          {/* SLIDE 00: PRE-ROLL */}
          <AnimatePresence>
            {(phase === "idle" || phase === "pressed") && (
              <motion.div
                key="preroll"
                initial={{ opacity: 1 }}
                exit={{ opacity: 1, y: "-100%" }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-[#080808] text-cream pointer-events-auto"
              >
                {/* HUD */}
                <div className="absolute top-8 left-8 flex items-center gap-3 font-bold text-xl tracking-[0.2em]">
                  <div className="flex items-center gap-2">
                    <span className={`w-4 h-4 rounded-full brutal-border ${isHovered || phase === "pressed" ? "bg-red-500 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.8)]" : "bg-black"}`}></span>
                    <span className={isHovered || phase === "pressed" ? "text-red-500" : "text-gray-500"}>REC</span>
                  </div>
                </div>
                <div className="absolute top-8 right-8 text-xl font-bold tracking-widest text-gray-500 flex items-center gap-3">
                  MIC LIVE: 
                  <span className={`px-2 py-1 brutal-border ${isHovered ? "bg-yellow text-black" : "bg-transparent text-gray-600 border-gray-600"}`}>
                    {isHovered ? "LIVE" : "WAITING"}
                  </span>
                </div>
                <div className="absolute bottom-8 left-8 text-xl font-bold tracking-widest text-gray-500">
                  TAKE 01
                </div>
                <div className="absolute bottom-8 right-8 text-xl font-bold tracking-widest text-orange opacity-70">
                  YAP MODE: READY
                </div>

                <div className="mb-12 text-center">
                  <div className="text-gray-500 text-sm tracking-[0.5em] mb-4 uppercase">Camera Control</div>
                  <h1 className="text-2xl md:text-4xl font-bold tracking-widest text-cream uppercase">
                    READY TO MEET ZEESHAN?
                  </h1>
                </div>

                {/* Main Control */}
                <div 
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={handleRoll}
                >
                  <div className="absolute inset-0 bg-yellow transform translate-x-[8px] translate-y-[10px] brutal-border" />
                  <motion.div 
                    animate={{ 
                      x: phase === "pressed" ? 8 : 0, 
                      y: phase === "pressed" ? 10 : 0 
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="relative bg-magenta text-cream px-16 py-8 text-5xl md:text-6xl font-black brutal-border uppercase tracking-widest flex flex-col items-center gap-2 transition-transform"
                    style={{ transform: isHovered && phase !== "pressed" ? "translate(-4px, -4px)" : "none" }}
                  >
                    <span>ROLL IT.</span>
                    {isHovered && <span className="absolute -top-3 -right-3 text-xs bg-yellow text-black px-2 py-1 brutal-border rotate-[10deg]">● REC</span>}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SLIDE 01: LIGHTS */}
          <AnimatePresence>
            {phase === "lights" && (
              <motion.div
                key="lights"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-yellow flex items-center justify-center overflow-hidden"
              >
                {/* Graphic Lights */}
                <motion.div 
                  initial={{ y: "-100%" }} animate={{ y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute top-0 left-[10%] w-32 h-64 border-x-4 border-b-4 border-black bg-cream"
                />
                <motion.div 
                  initial={{ x: "100%" }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.2 }}
                  className="absolute top-[20%] right-0 w-64 h-32 border-y-4 border-l-4 border-black bg-cream"
                />
                
                {/* Beams */}
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                  className="absolute top-64 left-[10%] w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[300px] border-b-black opacity-10 rotate-[20deg]"
                />

                <h1 className="text-[18vw] font-black text-black uppercase tracking-tighter mix-blend-multiply z-10">
                  LIGHTS
                </h1>

                {/* Annotations */}
                <div className="absolute top-[15%] left-[25%] font-bold text-2xl rotate-[-10deg] border-2 border-black px-2 bg-white">
                  LIGHTS ON.
                </div>
                <div className="absolute bottom-[20%] right-[15%] font-bold text-3xl rotate-[5deg] bg-black text-yellow px-4 py-1">
                  LOOK ALIVE.
                </div>
                
                <div className="absolute bottom-8 left-8 font-bold flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span> REC
                </div>
                <div className="absolute top-8 right-8 font-bold border-2 border-black px-2 bg-white">SCENE 01</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SLIDE 02: CAMERA */}
          <AnimatePresence>
            {phase === "camera" && (
              <motion.div
                key="camera"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-blue flex items-center justify-center overflow-hidden"
              >
                <h1 className="text-[15vw] font-black text-cream uppercase tracking-tighter absolute top-[10%] z-0 opacity-20">
                  CAMERA
                </h1>

                {/* Flat Graphic Camera */}
                <motion.div 
                  initial={{ x: "-50vw" }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.1 }}
                  className="relative z-10 flex items-center"
                >
                  {/* Body */}
                  <div className="w-64 h-48 bg-black brutal-border shadow-[12px_12px_0_#FAD30C] relative flex items-center justify-center">
                    <div className="absolute top-4 left-4 text-yellow font-bold">CAM 01</div>
                    <div className="absolute top-4 right-4 flex items-center gap-1">
                      <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                    </div>
                    <div className="text-white font-black text-2xl tracking-widest rotate-[-5deg]">ROLLING</div>
                  </div>
                  {/* Lens */}
                  <motion.div 
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3 }}
                    className="w-32 h-32 bg-cream brutal-border border-l-0 origin-left flex items-center justify-center relative"
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1 }}
                      className="w-16 h-16 bg-black rounded-full"
                    />
                  </motion.div>
                </motion.div>

                <div className="absolute bottom-[25%] left-[20%] font-bold text-2xl rotate-[-5deg] bg-cream border-2 border-black px-2">
                  YES, THAT'S A CAMERA.
                </div>
                <div className="absolute top-[20%] right-[15%] font-bold text-xl rotate-[10deg] underline">
                  HE TALKS A LOT.
                </div>

                <div className="absolute bottom-8 left-8 font-bold text-cream flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span> REC
                </div>
                <div className="absolute top-8 right-8 font-bold text-cream border-2 border-cream px-2">TAKE 01</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SLIDE 03: ACTION */}
          <AnimatePresence>
            {phase === "action" && (
              <motion.div
                key="action"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-magenta flex items-center justify-center overflow-hidden"
              >
                <motion.div
                  initial={{ y: "-100vh", rotate: -10 }}
                  animate={{ y: 0, rotate: 2 }}
                  transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                  className="bg-yellow brutal-border shadow-[20px_20px_0_#0A0809] p-8 md:p-16 z-10"
                >
                  <h1 className="text-[20vw] md:text-[15vw] font-black text-black leading-none uppercase tracking-tighter">
                    ACTION
                  </h1>
                </motion.div>

                {/* Kinetic typography and shapes */}
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} className="absolute top-[10%] left-[10%] z-0">
                  <svg width="100" height="100" viewBox="0 0 100 100" className="fill-cream stroke-black stroke-[4]">
                    <polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40" />
                  </svg>
                </motion.div>

                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} className="absolute bottom-[15%] right-[10%] z-0 font-black text-6xl text-cream rotate-[-15deg] brutal-border bg-black px-4">
                  GO.
                </motion.div>

                <div className="absolute top-[20%] right-[20%] font-bold text-2xl rotate-[15deg] bg-white border-2 border-black px-3 py-1">
                  JUST TALK.
                </div>

                <div className="absolute bottom-[20%] left-[15%] font-bold text-3xl rotate-[-8deg] underline text-black">
                  LET HIM COOK.
                </div>

                <div className="absolute bottom-8 left-8 font-bold text-black flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse border border-black"></span> REC
                </div>
                <div className="absolute top-8 right-8 font-bold text-black border-2 border-black bg-yellow px-2">ROLLING</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SLIDE 04: CLAPPER / ZOOM */}
          <AnimatePresence>
            {(phase === "clap" || phase === "clap_slam" || phase === "zooming" || phase === "circle") && (
              <motion.div
                key="clap"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-orange flex items-center justify-center overflow-hidden"
              >
                {/* Camera Zoom Container */}
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  animate={{ scale: phase === "zooming" || phase === "circle" ? 25 : 1 }}
                  transition={{ duration: 0.65, ease: "easeIn" }}
                >
                  {/* Clapperboard */}
                  <div className="relative w-[300px] md:w-[500px] h-[250px] md:h-[400px] z-10 rotate-[-2deg]">
                    {/* Bottom Board */}
                    <div className="absolute bottom-0 w-full h-[80%] bg-cream brutal-border shadow-[16px_16px_0_#0A0809] p-6 flex flex-col justify-between overflow-hidden">
                      {/* Zoom Target Center */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0"></div>
                      <div>
                        <div className="font-black text-4xl uppercase border-b-4 border-black pb-2 mb-2">ZEESHAN</div>
                        <div className="flex justify-between font-bold text-xl uppercase border-b-4 border-black pb-2">
                          <span>Scene 01</span>
                          <span>Take 01</span>
                        </div>
                      </div>
                      <div className="text-right font-black text-2xl uppercase">PROD. 001</div>
                    </div>
                    {/* Top Bar (Hinged) */}
                    <motion.div 
                      initial={{ rotate: -35 }}
                      animate={{ rotate: phase === "clap_slam" || phase === "zooming" || phase === "circle" ? 0 : -35 }}
                      transition={{ duration: 0.15, ease: "easeIn" }}
                      className="absolute top-0 w-full h-[20%] bg-black origin-bottom-left brutal-border flex"
                    >
                      <div className="w-[10%] h-full bg-cream border-r-[4px] border-black skew-x-12"></div>
                      <div className="w-[20%] h-full bg-black"></div>
                      <div className="w-[10%] h-full bg-cream border-x-[4px] border-black skew-x-12"></div>
                      <div className="w-[20%] h-full bg-black"></div>
                      <div className="w-[10%] h-full bg-cream border-x-[4px] border-black skew-x-12"></div>
                      <div className="w-[30%] h-full bg-black"></div>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* HUD Elements fade out on zoom */}
                <motion.div 
                  animate={{ opacity: phase === "zooming" || phase === "circle" ? 0 : 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <div className="absolute bottom-8 left-8 font-bold text-black flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full border border-black"></span> 
                  </div>
                  <div className="absolute top-8 left-8 font-bold text-black border-2 border-black bg-cream px-2">ON AIR</div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      )}

      {/* YELLOW PORTAL RING */}
      <AnimatePresence>
        {phase === "circle" && (
          <motion.div
            className="fixed inset-0 bg-yellow z-[55] pointer-events-none"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "circIn" }}
          />
        )}
      </AnimatePresence>

      {/* BACKGROUND WEBSITE */}
      {/* We render the website behind the intro. At "circle" phase, a circular mask expands from center to reveal it. */}
      <motion.div 
        className={`min-h-screen relative bg-cream ${phase === "circle" || phase === "revealed" ? "z-[60]" : "z-0"}`}
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={
          phase === "circle" || phase === "revealed"
            ? { clipPath: "circle(150% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
        transition={{ duration: 0.5, ease: "circIn" }}
        style={{ 
          display: phase === "idle" || phase === "pressed" ? "none" : "block",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
