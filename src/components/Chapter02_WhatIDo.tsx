export default function Chapter02_WhatIDo() {
  return (
    <section id="what-i-do" className="relative min-h-screen w-full bg-cream py-24 px-4 md:px-8 border-b-[4px] border-black overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black uppercase mb-16 relative z-10">
          What <br/> <span className="text-blue">I Do.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
          
          {/* Card 1 */}
          <div className="brutal-card bg-yellow rotate-[-2deg] hover:rotate-0 transition-transform duration-300 md:translate-y-12">
            <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-2 py-1 uppercase">01</div>
            <h3 className="text-4xl md:text-5xl font-black uppercase mb-4 mt-6">Emcee</h3>
            <p className="font-body text-lg md:text-xl font-bold leading-relaxed border-t-4 border-black pt-4">
              I don't just hold the mic. I own the room. From corporate summits to massive festivals, I dictate the energy, keeping crowds engaged, entertained, and on their toes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="brutal-card bg-white rotate-[3deg] hover:rotate-0 transition-transform duration-300 border-l-[12px] border-l-magenta">
            <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-2 py-1 uppercase">02</div>
            <h3 className="text-4xl md:text-5xl font-black uppercase mb-4 mt-6">Event Host</h3>
            <p className="font-body text-lg md:text-xl font-bold leading-relaxed border-t-4 border-black pt-4">
              Seamless transitions, sharp improvisation, and an undeniable stage presence. I turn generic agendas into unforgettable live experiences. 
            </p>
            <div className="mt-6 flex gap-2">
              <span className="brutal-badge !bg-cream !text-xs">No Scripts</span>
              <span className="brutal-badge !bg-cream !text-xs">Just Vibes</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="brutal-card bg-orange rotate-[1deg] hover:rotate-0 transition-transform duration-300 md:-translate-y-8">
            <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-2 py-1 uppercase">03</div>
            <h3 className="text-4xl md:text-5xl font-black uppercase mb-4 mt-6">Content Creator</h3>
            <p className="font-body text-lg md:text-xl font-bold leading-relaxed border-t-4 border-black pt-4">
              Building a community one yap at a time. I bring my live-show energy to the digital screen, crafting commentary and stories that hook the timeline.
            </p>
            <div className="mt-4 border-2 border-black inline-block px-3 py-1 bg-white font-bold transform rotate-[-5deg]">
              @ZEESHAN
            </div>
          </div>

          {/* Card 4 */}
          <div className="brutal-card bg-blue text-white rotate-[-3deg] hover:rotate-0 transition-transform duration-300 border-[6px] md:translate-y-4">
            <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-2 py-1 uppercase">04</div>
            <h3 className="text-4xl md:text-5xl font-black uppercase mb-4 mt-6">Personality</h3>
            <p className="font-body text-lg md:text-xl font-bold leading-relaxed border-t-4 border-white pt-4">
              More than a host. A full-stack entertainment personality. Whether it's a brand activation or a live broadcast, I bring character, charm, and a bit of chaos.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
