import React from "react";
import { Oswald, Caveat, Inter } from "next/font/google";
import RedesignHeader from "@/components/redesign/redesign-header";
import RedesignHero from "@/components/redesign/redesign-hero";
import RedesignSkills from "@/components/redesign/redesign-skills";
import RedesignProjects from "@/components/redesign/redesign-projects";
import RedesignDigitalMarketing from "@/components/redesign/redesign-digital-marketing";
import RedesignAutomation from "@/components/redesign/redesign-automation";
import RedesignProcessSkills from "@/components/redesign/redesign-process-skills";
import RedesignContact from "@/components/redesign/redesign-contact";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <main
      className={`
        ${inter.className}
        ${oswald.variable}
        ${caveat.variable}
        min-h-screen
        w-full
        bg-[#070709]
        text-white
        selection:bg-red-600
        selection:text-white
        relative
        z-20
        overflow-x-hidden
      `}
    >
      {/* TOP BACKGROUND VIGNETTE */}
      <div className="absolute top-0 inset-x-0 h-72 bg-gradient-to-b from-red-950/20 via-transparent to-transparent pointer-events-none -z-10" />

      {/* 1. TOP HEADER */}
      <RedesignHeader />

      {/* 2. EDITORIAL HERO SECTION */}
      <RedesignHero
        headingFontClass={oswald.className}
        scriptFontClass={caveat.className}
      />

      {/* 3. CORE TECHNICAL & MARKETING SKILLS (28+ STAGGERED TAGS) */}
      <RedesignSkills headingFontClass={oswald.className} />

      {/* 4. SELECTED PROJECTS (5 CARDS IN A ROW) */}
      <RedesignProjects headingFontClass={oswald.className} />

      {/* 5. DIGITAL MARKETING & REAL CLIENT AD CAMPAIGNS */}
      <RedesignDigitalMarketing headingFontClass={oswald.className} />

      {/* 6. AI AUTOMATION INTERACTIVE NODE TOPOLOGY (CRIMSON THEMED) */}
      <RedesignAutomation headingFontClass={oswald.className} />

      {/* 7. EDUCATION, 6-STEP METHODOLOGY & TEXTURED QUOTE BOX */}
      <RedesignProcessSkills
        headingFontClass={oswald.className}
        scriptFontClass={caveat.className}
      />

      {/* 8. CONTACT SECTION WITH WORKING SERVER-ACTION FORM & 3D LAPTOP */}
      <RedesignContact headingFontClass={oswald.className} />
    </main>
  );
}
