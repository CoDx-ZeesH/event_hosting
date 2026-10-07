import Image from "next/image";

export default function Chapter04_Hosting() {
  return (
    <section id="hosting" className="relative w-full bg-black text-white py-24 px-4 md:px-8 border-b-[4px] border-cream overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between mb-20 gap-8">
          <h2 className="text-6xl md:text-[8vw] leading-none font-black uppercase text-cream">
            Put Me <br/> <span className="text-orange outline-text">On Stage.</span>
          </h2>
          <div className="bg-yellow text-black p-6 brutal-border rotate-[3deg] shadow-[6px_6px_0_#F5EFDF] text-center shrink-0">
            <div className="text-6xl font-black">30+</div>
            <div className="text-xl font-bold uppercase mt-2">Events Hosted</div>
          </div>
        </div>

        {/* Film Strip / Ticket Visual System */}
        <div className="relative w-full flex gap-6 overflow-x-auto pb-12 snap-x hide-scrollbar">
          
          {/* Ticket 1 */}
          <div className="min-w-[300px] md:min-w-[400px] shrink-0 bg-cream text-black p-6 brutal-border rotate-[-1deg] snap-center">
            <div className="flex justify-between items-center border-b-[3px] border-black pb-4 mb-4">
              <span className="font-bold text-lg">STEP 01</span>
              <span className="brutal-badge">ACCESS</span>
            </div>
            <h3 className="text-4xl font-black uppercase mb-6 text-magenta">Backstage</h3>
            <div className="relative w-full aspect-[4/3] bg-black brutal-border">
              <Image src="/assets/event-01.jpg" alt="Backstage" fill className="object-cover" />
            </div>
            <p className="mt-4 font-bold uppercase text-sm">Pre-show alignment and energy building.</p>
          </div>

          {/* Ticket 2 */}
          <div className="min-w-[300px] md:min-w-[400px] shrink-0 bg-cream text-black p-6 brutal-border rotate-[2deg] snap-center mt-8">
            <div className="flex justify-between items-center border-b-[3px] border-black pb-4 mb-4">
              <span className="font-bold text-lg">STEP 02</span>
              <span className="brutal-badge !bg-yellow">SOUND</span>
            </div>
            <h3 className="text-4xl font-black uppercase mb-6 text-blue">Mic Check</h3>
            <div className="relative w-full aspect-[4/3] bg-black brutal-border">
              <Image src="/assets/event-02.jpg" alt="Mic Check" fill className="object-cover" />
            </div>
            <p className="mt-4 font-bold uppercase text-sm">Testing the room, setting the frequency.</p>
          </div>

          {/* Ticket 3 */}
          <div className="min-w-[300px] md:min-w-[400px] shrink-0 bg-cream text-black p-6 brutal-border rotate-[-2deg] snap-center">
            <div className="flex justify-between items-center border-b-[3px] border-black pb-4 mb-4">
              <span className="font-bold text-lg">STEP 03</span>
              <span className="brutal-badge !bg-red-500 !text-white">LIVE</span>
            </div>
            <h3 className="text-4xl font-black uppercase mb-6 text-orange">On Stage</h3>
            <div className="relative w-full aspect-[4/3] bg-black brutal-border">
              <Image src="/assets/zeeshan-stage-01.jpg" alt="On Stage" fill className="object-cover" />
            </div>
            <p className="mt-4 font-bold uppercase text-sm">Commanding attention, flawless delivery.</p>
          </div>

          {/* Ticket 4 */}
          <div className="min-w-[300px] md:min-w-[400px] shrink-0 bg-cream text-black p-6 brutal-border rotate-[1deg] snap-center mt-8">
            <div className="flex justify-between items-center border-b-[3px] border-black pb-4 mb-4">
              <span className="font-bold text-lg">STEP 04</span>
              <span className="brutal-badge !bg-magenta !text-white">IMPACT</span>
            </div>
            <h3 className="text-4xl font-black uppercase mb-6">The Crowd</h3>
            <div className="relative w-full aspect-[4/3] bg-black brutal-border">
              <Image src="/assets/event-03.jpg" alt="Crowd" fill className="object-cover" />
            </div>
            <p className="mt-4 font-bold uppercase text-sm">Interactive, engaged, and unforgettable.</p>
          </div>
        </div>

        {/* Supporting Blocks */}
        <div className="mt-16 flex flex-wrap gap-4 justify-center">
          <div className="bg-white text-black px-4 py-2 font-black uppercase text-xl brutal-border rotate-[-2deg]">Live Audience Experience</div>
          <div className="bg-yellow text-black px-4 py-2 font-black uppercase text-xl brutal-border rotate-[1deg]">Public Speaking</div>
          <div className="bg-magenta text-white px-4 py-2 font-black uppercase text-xl brutal-border rotate-[3deg]">On-Stage Improvisation</div>
          <div className="bg-blue text-white px-4 py-2 font-black uppercase text-xl brutal-border rotate-[-1deg]">Crowd Interaction</div>
          <div className="bg-orange text-black px-4 py-2 font-black uppercase text-xl brutal-border rotate-[2deg]">High-Energy Delivery</div>
        </div>

      </div>
    </section>
  );
}
