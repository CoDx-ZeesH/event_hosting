import { ArrowRight, Mail } from "lucide-react";

export default function Chapter06_LetsWork() {
  return (
    <section id="contact" className="relative w-full bg-yellow py-24 px-4 md:px-8 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Marquee */}
      <div className="absolute inset-0 flex flex-col justify-between py-10 opacity-20 pointer-events-none overflow-hidden">
        <div className="whitespace-nowrap font-black text-[10vw] uppercase leading-none">
          LET'S WORK • LET'S WORK • LET'S WORK • LET'S WORK • 
        </div>
        <div className="whitespace-nowrap font-black text-[10vw] uppercase leading-none -translate-x-[20%]">
          LET'S WORK • LET'S WORK • LET'S WORK • LET'S WORK • 
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        <h2 className="text-6xl md:text-[8vw] leading-[0.9] font-black uppercase mb-12 mix-blend-multiply">
          Need Someone <br/> Who Can <br/> <span className="bg-black text-white px-6 inline-block mt-4 rotate-[2deg] shadow-[8px_8px_0_#ED8C25]">Own The Room?</span>
        </h2>

        <div className="bg-white p-8 md:p-12 brutal-border shadow-[12px_16px_0_#0A0809] rotate-[-1deg] max-w-2xl w-full">
          <h3 className="text-4xl md:text-5xl font-black uppercase mb-8">Let's Talk.</h3>
          
          <a href="mailto:contact@zeeshan.com" className="brutal-btn !bg-black !text-white w-full hover:!bg-magenta group mb-8 flex justify-between items-center px-6">
            <span>Book Zeeshan</span>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </a>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:contact@zeeshan.com" className="flex-1 brutal-border p-4 font-bold uppercase hover:bg-cream transition-colors flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> Email
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex-1 brutal-border p-4 font-bold uppercase hover:bg-cream transition-colors flex items-center justify-center gap-2">
              IG
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex-1 brutal-border p-4 font-bold uppercase hover:bg-cream transition-colors flex items-center justify-center gap-2">
              LI
            </a>
          </div>
        </div>

        <div className="mt-24 font-display font-bold text-xl md:text-2xl tracking-[0.2em] uppercase flex items-center gap-4">
          <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-black"></span>
          The mic is still on.
        </div>

      </div>
    </section>
  );
}
