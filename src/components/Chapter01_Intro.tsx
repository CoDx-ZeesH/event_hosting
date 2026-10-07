import Image from "next/image";
import { ArrowDownRight, Play } from "lucide-react";

export default function Chapter01_Intro() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-cream border-b-[4px] border-black">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 hidden lg:block group">
        <div className="brutal-badge rotate-[-5deg] group-hover:rotate-0 transition-transform">YAP LEVEL™</div>
      </div>
      <div className="absolute top-10 right-10 hidden lg:flex items-center gap-2 font-display font-bold text-xl group">
        <span className="w-4 h-4 bg-red-500 rounded-full animate-pulse brutal-border group-hover:scale-125 transition-transform"></span>
        ON CAMERA
      </div>
      <div className="absolute bottom-20 left-10 hidden lg:block transform rotate-[-15deg] group">
        <div className="bg-yellow px-4 py-2 brutal-border font-display text-lg shadow-[4px_4px_0_#000] group-hover:rotate-6 transition-transform">
          MIC CHECK
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Main Title - Huge & Brutal */}
        <h1 className="text-[15vw] md:text-[12vw] leading-none font-black text-center tracking-tighter uppercase mb-4 relative z-0 mix-blend-multiply">
          ZEESHAN
        </h1>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-xl font-bold font-display uppercase tracking-widest text-center max-w-3xl mx-auto mb-12 z-20">
          <span>Emcee</span>
          <span className="text-magenta">•</span>
          <span>Event Host</span>
          <span className="text-magenta">•</span>
          <span>Content Creator</span>
          <span className="text-magenta">•</span>
          <span>Yapper</span>
        </div>

        {/* Center Editorial Composition */}
        <div className="relative w-full max-w-2xl h-[50vh] md:h-[60vh] mt-[-5vh] md:mt-[-10vh] flex justify-center items-end z-10">
          
          <div className="absolute top-1/4 right-0 md:right-[-10%] translate-x-4 md:translate-x-0 rotate-[10deg] z-40 group cursor-pointer">
            <div className="bg-orange brutal-border p-3 shadow-[4px_6px_0_#000] flex flex-col items-center justify-center group-hover:rotate-[-5deg] transition-transform">
              <span className="text-4xl md:text-5xl font-black">30+</span>
              <span className="text-xs md:text-sm font-bold uppercase text-center leading-tight">Events<br/>Hosted</span>
            </div>
          </div>

          {/* Doodles & Personality Annotations */}

          {/* THAT'S HIM (Arrow to Face) */}
          <div className="absolute top-[20%] left-[-15%] md:left-[-25%] rotate-[-5deg] z-30 group flex items-end gap-2">
            <div className="font-display font-black text-xl md:text-2xl uppercase tracking-widest text-blue whitespace-nowrap group-hover:rotate-3 transition-transform">
              THAT'S HIM.
            </div>
            <svg width="40" height="40" viewBox="0 0 100 100" className="stroke-blue stroke-[4px] fill-none group-hover:-translate-y-2 transition-transform">
              <path d="M10,90 Q50,10 90,50" />
              <polygon points="90,50 75,45 80,65" className="fill-blue" />
            </svg>
          </div>

          {/* YAPS HERE (Arrow to Mouth) */}
          <div className="absolute top-[45%] right-[-5%] md:right-[-20%] rotate-[15deg] z-30 group flex items-center gap-2">
            <svg width="60" height="40" viewBox="0 0 100 100" className="stroke-magenta stroke-[4px] fill-none group-hover:-translate-x-2 transition-transform">
              <path d="M90,50 Q40,40 10,60" />
              <polygon points="10,60 25,50 20,75" className="fill-magenta" />
            </svg>
            <div className="font-display font-black text-lg md:text-xl uppercase bg-cream px-2 rotate-2 group-hover:scale-110 transition-transform whitespace-nowrap brutal-border">
              YAPS HERE.
            </div>
          </div>

          {/* Small Speech Bubble */}
          <div className="absolute top-[5%] right-[10%] md:right-[5%] rotate-[8deg] z-40 group">
            <div className="bg-white brutal-border p-2 shadow-[2px_2px_0_#000] font-display font-bold text-xs md:text-sm whitespace-nowrap group-hover:scale-110 group-hover:rotate-0 transition-transform">
              "JUST ONE MORE STORY."
            </div>
            <div className="w-3 h-3 bg-white brutal-border border-t-0 border-l-0 rotate-45 ml-4 -mt-2 group-hover:scale-110 transition-transform" />
          </div>

          {/* Hat Easter Egg & Label */}
          <div className="absolute bottom-[20%] left-[-10%] md:left-[-15%] rotate-[-12deg] z-30 group flex flex-col items-center">
            {/* Tiny Hat Doodle */}
            <svg width="30" height="20" viewBox="0 0 100 60" className="fill-black stroke-black stroke-[3px] group-hover:translate-y-[-4px] transition-transform">
              <path d="M20,50 C20,20 40,10 50,10 C60,10 80,20 80,50 Z" className="fill-orange" />
              <rect x="5" y="50" width="90" height="10" />
            </svg>
            <div className="mt-1 font-bold text-xs uppercase tracking-widest bg-yellow border-2 border-black px-2 py-0.5 group-hover:rotate-6 transition-transform whitespace-nowrap">
              MIC ON = SHOW ON
            </div>
          </div>

          {/* Tiny scribbled badge */}
          <div className="absolute top-[35%] left-[5%] rotate-[-20deg] z-40 group cursor-pointer">
            <div className="font-display font-black text-sm italic border-b-2 border-black group-hover:border-b-4 transition-all whitespace-nowrap">
              NO SCRIPT.
            </div>
          </div>

          <Image 
            src="/assets/zeeshan-hero.png" 
            alt="Zeeshan Portrait"
            fill
            className="object-contain object-bottom pointer-events-none sticker-shadow"
            priority
          />
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-6 mt-12 z-20">
          <a href="#contact" className="brutal-btn w-full sm:w-auto hover:bg-magenta hover:text-white transition-colors group">
            Book Me <ArrowDownRight className="ml-2 w-6 h-6 stroke-[3] group-hover:translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#archive" className="brutal-btn w-full sm:w-auto !bg-white hover:!bg-blue hover:text-white transition-colors text-black group">
            <Play className="mr-2 w-6 h-6 fill-current stroke-[3] group-hover:scale-110 transition-transform" /> Watch Me Yap
          </a>
        </div>
      </div>
    </section>
  );
}
