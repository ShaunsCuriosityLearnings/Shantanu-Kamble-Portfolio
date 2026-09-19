import About from "@/components/about";
import Contact from "@/components/contact";
import DigitalMarketingSection from "@/components/digitalmarketing";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6">
      {/* FLOATING V2 REDESIGN PREVIEW TOGGLE */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link
          href="/v2"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/80 hover:bg-red-950/80 border border-red-500/40 text-xs font-bold text-red-400 hover:text-white backdrop-blur-md shadow-2xl transition duration-300"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>View Editorial Redesign (V2) →</span>
        </Link>
      </div>

      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Projects />
      <DigitalMarketingSection />
      <Experience />
      <Contact />
    </main>
  );
}
