import OpeningReveal from "@/components/OpeningReveal";
import Chapter01_Intro from "@/components/Chapter01_Intro";
import Chapter02_WhatIDo from "@/components/Chapter02_WhatIDo";
import Chapter03_YapArchive from "@/components/Chapter03_YapArchive";
import Chapter04_Hosting from "@/components/Chapter04_Hosting";
import Chapter05_WhyThisGuy from "@/components/Chapter05_WhyThisGuy";
import Chapter06_LetsWork from "@/components/Chapter06_LetsWork";

export default function Home() {
  return (
    <main className="min-h-screen">
      <OpeningReveal>
        <Chapter01_Intro />
        <Chapter02_WhatIDo />
        <Chapter03_YapArchive />
        <Chapter04_Hosting />
        <Chapter05_WhyThisGuy />
        <Chapter06_LetsWork />
      </OpeningReveal>
    </main>
  );
}
