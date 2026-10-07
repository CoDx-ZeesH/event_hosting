import Image from "next/image";

export default function Chapter05_WhyThisGuy() {
  return (
    <section className="relative min-h-screen w-full bg-cream py-24 px-4 md:px-8 border-b-[4px] border-black overflow-hidden flex items-center">
      
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* Title */}
        <div className="absolute top-0 left-0 md:left-10 z-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none bg-yellow p-4 brutal-border rotate-[-3deg] shadow-[6px_8px_0_#0A0809]">
            Why <br/> This Guy?
          </h2>
        </div>

        {/* Central Composition */}
        <div className="relative w-full max-w-4xl mx-auto h-[80vh] flex justify-center items-center mt-20 md:mt-0">
          
          {/* Portrait polaroid */}
          <div className="relative w-[300px] md:w-[400px] h-[400px] md:h-[500px] bg-white p-4 pb-16 brutal-border shadow-[12px_12px_0_#0A0809] rotate-[2deg] z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm border-2 border-black/10 rotate-[-4deg] z-20"></div>
            <div className="relative w-full h-full bg-black brutal-border">
              <Image src="/assets/IMG_1835.JPG" alt="The Human Behind The Mic" fill className="object-cover" />
            </div>
            <div className="absolute bottom-4 left-0 w-full text-center font-display font-bold text-xl uppercase">
              The Human Behind The Mic
            </div>
          </div>

          {/* Floating Scrapbook Elements */}
          
          <div className="absolute top-[10%] right-[5%] md:right-[15%] rotate-[10deg] bg-magenta text-white px-4 py-2 text-xl font-black uppercase brutal-border z-20 shadow-[4px_4px_0_#000]">
            Strong Stage Presence
          </div>

          <div className="absolute bottom-[20%] right-0 md:right-[10%] rotate-[-5deg] bg-white text-black px-4 py-2 text-xl font-black uppercase brutal-border z-20 shadow-[4px_4px_0_#000]">
            Fast Improvisation
          </div>

          <div className="absolute top-[20%] left-0 md:left-[10%] rotate-[-15deg] bg-blue text-white px-4 py-2 text-xl font-black uppercase brutal-border z-20 shadow-[4px_4px_0_#000]">
            Audience Interaction
          </div>
          
          <div className="absolute bottom-[30%] left-[5%] md:left-[15%] rotate-[8deg] bg-orange text-black px-4 py-2 text-xl font-black uppercase brutal-border z-20 shadow-[4px_4px_0_#000]">
            High-Energy Delivery
          </div>

          <div className="absolute top-[45%] -right-[5%] md:right-[5%] rotate-[-90deg] md:rotate-[-10deg] text-2xl font-bold uppercase tracking-widest bg-black text-white px-3 py-1 z-0 opacity-80">
            Storytelling
          </div>

          {/* Annotations */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[60%] flex gap-4 z-20 whitespace-nowrap">
            <span className="font-display font-black text-xl italic underline underline-offset-4 rotate-[-3deg]">
              NO SCRIPT.
            </span>
            <span className="font-display font-black text-xl italic underline underline-offset-4 rotate-[2deg]">
              KEEP WATCHING.
            </span>
          </div>

          {/* Small labels */}
          <div className="absolute top-[-20px] md:top-20 left-[20%] md:left-[30%] brutal-badge !bg-white rotate-[-12deg] z-30">
            MIC ON = GAME ON
          </div>
          
          <div className="absolute bottom-10 right-[20%] md:right-[30%] brutal-badge !bg-yellow rotate-[15deg] z-30">
            HAT ON = SHOW ON
          </div>

        </div>
      </div>
    </section>
  );
}
