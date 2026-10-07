"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OpeningReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<"idle" | "pressed" | "shutter" | "cut" | "revealed">("idle");
  const [isHovered, setIsHovered] = useState(false);

  const handleRoll = () => {
    if (phase !== "idle") return;
    
    // Sequence
    setPhase("pressed");
    
    setTimeout(() => {
      setPhase("shutter");
    }, 200);
    
    setTimeout(() => {
      setPhase("cut");
    }, 450);

    setTimeout(() => {
      setPhase("revealed");
    }, 900);
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
      <AnimatePresence>
        {phase !== "revealed" && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] text-cream font-display overflow-hidden"
          >
            {/* Base Idle Interface */}
            <AnimatePresence>
              {(phase === "idle" || phase === "pressed") && (
                <motion.div 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex flex-col items-center justify-center w-full h-full p-8"
                >
                  
                  {/* Top Bar HUD */}
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
                      {isHovered ? "Ready?" : "Standby"}
                    </h1>
                  </div>

                  {/* Main Control */}
                  <div 
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleRoll}
                  >
                    {/* The physical base */}
                    <div className="absolute inset-0 bg-yellow transform translate-x-[8px] translate-y-[10px] brutal-border" />
                    
                    {/* The button */}
                    <motion.div 
                      animate={{ 
                        x: phase === "pressed" ? 8 : 0, 
                        y: phase === "pressed" ? 10 : 0 
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="relative bg-magenta text-cream px-16 py-8 text-5xl md:text-6xl font-black brutal-border uppercase tracking-widest flex flex-col items-center gap-2 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform"
                    >
                      <span>ROLL IT.</span>
                      {isHovered && <span className="absolute -top-3 -right-3 text-xs bg-yellow text-black px-2 py-1 brutal-border rotate-[10deg]">● REC</span>}
                    </motion.div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

            {/* Shutter / Flash Sequence */}
            {phase === "shutter" && (
              <motion.div 
                className="absolute inset-0 bg-white z-20"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              />
            )}

            {/* CUT sequence */}
            <AnimatePresence>
              {phase === "cut" && (
                <motion.div
                  className="absolute inset-0 z-30 flex items-center justify-center bg-yellow"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                >
                  {/* Film strip graphics */}
                  <div className="absolute top-0 bottom-0 left-4 w-8 border-x-4 border-black border-dashed opacity-50"></div>
                  <div className="absolute top-0 bottom-0 right-4 w-8 border-x-4 border-black border-dashed opacity-50"></div>
                  
                  <h1 className="text-[15vw] font-black text-black tracking-tighter uppercase drop-shadow-[-8px_8px_0_#fff]">
                    CUT.
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="min-h-screen relative"
        initial={{ opacity: 0, y: "100vh" }}
        animate={
          phase === "revealed"
            ? { opacity: 1, y: 0 }
            : phase === "cut" 
            ? { opacity: 1, y: "100vh" } 
            : { opacity: 0, y: "100vh" }
        }
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
