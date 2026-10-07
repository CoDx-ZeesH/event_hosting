import Image from "next/image";
import { PlayCircle } from "lucide-react";

export default function Chapter03_YapArchive() {
  return (
    <section id="archive" className="relative w-full bg-cream py-24 px-4 md:px-8 border-b-[4px] border-black overflow-hidden">
      
      {/* Tape decorations */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-8 bg-white/50 backdrop-blur-sm border-2 border-black/20 rotate-[-2deg] z-20"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="brutal-badge mb-4">THE YAP ARCHIVE</div>
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-none">
              Watch <br/> Me <span className="text-magenta">Yap.</span>
            </h2>
          </div>
          <div className="bg-black text-white p-4 font-display font-bold uppercase rotate-[2deg] shadow-[4px_6px_0_#FAD30C]">
            Instagram Showcase
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8 items-center justify-center mt-12">
          
          {/* Reel 1 (Small Left) */}
          <div className="relative w-full max-w-[280px] aspect-[9/16] bg-black brutal-border shadow-[8px_8px_0_#0A0809] rotate-[-4deg] z-10 group cursor-pointer hover:rotate-[-2deg] transition-transform">
            <Image src="/assets/reel-01.jpg" alt="Reel 1" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-4 left-4 bg-yellow text-black text-xs font-bold px-2 py-1 uppercase brutal-border">
              YAP FILE #014
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-md" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white font-bold text-sm drop-shadow-md">
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>REC</span>
              <span>00:43</span>
            </div>
          </div>

          {/* Reel 2 (Featured Center) */}
          <div className="relative w-full max-w-[340px] aspect-[9/16] bg-black brutal-border shadow-[12px_12px_0_#295DDA] rotate-[2deg] z-20 md:-translate-y-12 group cursor-pointer hover:rotate-0 transition-transform">
            <div className="absolute -top-4 -right-4 bg-magenta text-white font-black text-xl px-4 py-2 brutal-border rotate-[10deg] z-30 shadow-[4px_4px_0_#0A0809]">
              FEATURED
            </div>
            <Image src="/assets/reel-02.jpg" alt="Reel 2 Featured" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-4 left-4 bg-yellow text-black text-xs font-bold px-2 py-1 uppercase brutal-border">
              YAP FILE #017
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-20 h-20 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-lg" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-bold text-xl uppercase mb-2">Storytime Commentary</h3>
              <div className="flex justify-between text-white font-bold text-sm">
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>REC</span>
                <span>01:12</span>
              </div>
            </div>
          </div>

          {/* Reel 3 (Small Right) */}
          <div className="relative w-full max-w-[280px] aspect-[9/16] bg-black brutal-border shadow-[8px_8px_0_#ED8C25] rotate-[5deg] z-10 group cursor-pointer hover:rotate-[3deg] transition-transform">
            <Image src="/assets/reel-03.jpg" alt="Reel 3" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-4 left-4 bg-yellow text-black text-xs font-bold px-2 py-1 uppercase brutal-border">
              YAP FILE #021
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-md" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white font-bold text-sm drop-shadow-md">
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>REC</span>
              <span>00:59</span>
            </div>
          </div>

        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="brutal-btn inline-flex bg-white hover:bg-magenta hover:text-white mx-auto">
            View full archive on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
