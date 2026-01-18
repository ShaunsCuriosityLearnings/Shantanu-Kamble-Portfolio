import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaBullhorn } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import deeptiImg from "@/public/deepti.png";
import brandeurImg from "@/public/brandeur.png";
import bollywoodblinkImg from "@/public/bollywoodblink.png";
import growlcommunicationImg from "@/public/growlcommunication.png";
import researchalertImg from "@/public/researchalert.png";
import bizz2loanImg from "@/public/bizz2loan.png";
import secureloanconsultantImg from "@/public/secureloanconsultant.png";
import vitalvaultsImg from "@/public/vitalvaults.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

// Navigation Links
export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Marketing", hash: "#digital-marketing" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
] as const;

// =============================
// EXPERIENCE DATA
// =============================
export const experiencesData = [
  {
    title: "B.Tech – Information Technology",
    location: "A.C. Patil College of Engineering, Navi Mumbai",
    description:
      "Completed B.Tech in Information Technology. Built strong foundations in programming, databases, software engineering, and problem solving. Actively worked on AI, app development, and automation projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 – 2024",
  },
  {
    title: "Intern – Bluepen.co.in",
    location: "Mumbai",
    description:
      "Managed multiple client projects across web, Android, and API development. Coordinated freelancers, ensured quality checks, handled client communication, and delivered projects on time and within budget.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 – Mar 2023",
  },
  {
    title: "Assistant Manager – Employpreneurs",
    location: "Navi Mumbai",
    description:
      "Designed high-converting websites and landing pages, built automation workflows, and managed YouTube, Google, and Instagram ad campaigns. Improved lead generation by over 30% through funnel optimization and targeted outreach.",
    icon: React.createElement(FaBullhorn),
    date: "Jul 2024 – Nov 2024",
  },
  {
    title: "Digital Marketing Executive – Growl Communications",
    location: "Navi Mumbai",
    description:
      "Managed Google Ads and Meta Ads campaigns with monthly budget of ₹2L. Optimized lead funnels, improved UX/SEO, reduced CPL, and worked on Growl Communications, Research Alert, and Wealthy Ways websites.",
    icon: React.createElement(FaBullhorn),
    date: "Dec 2024 – Feb 2025",
  },
  {
    title: "Digital Marketing Head – Invictus Outsourcing Solutions",
    location: "Navi Mumbai",
    description:
      "Led international sales calls, closed digital marketing and development deals, executed SEO and social strategies, and delivered websites for Biz2Loan, BizNext, and BizNext Media.",
    icon: React.createElement(FaBullhorn),
    date: "Feb 2025 – Apr 2025",
  },
  {
    title: "Software Developer & Digital Strategist – Brandeur Studios",
    location: "Mumbai",
    description:
      "Core technical and creative contributor handling MERN, PHP, WordPress development, AI chatbots, automation workflows, performance marketing, podcast direction, and brand strategy. Working on DeeptiSadhwani, Bollywood Blink, DS Couture, and multiple client brands.",
    icon: React.createElement(FaReact),
    date: "Apr 2025 – Present",
  },
] as const;

// =============================
// PROJECTS DATA
// =============================
export const projectsData = [
  {
    title: "DeeptiSadhwani.com",
    description:
      "Celebrity portfolio website built using WordPress and Elementor for strong personal brand positioning.",
    tags: ["WordPress", "Elementor", "UI/UX", "Branding"],
    imageUrl: deeptiImg,
    url: "https://deeptisadhwani.com",
  },
  {
    title: "BrandeurStudios.com",
    description:
      "Corporate website for Brandeur Studios built using PHP with backend optimization and UI integration.",
    tags: ["PHP", "Backend", "Performance Optimization"],
    imageUrl: brandeurImg,
    url: "https://brandeurstudios.com",
  },
  {
    title: "Bollywood Blink",
    description:
      "MERN-based news and blogging platform with CMS, SEO architecture, and content workflows.",
    tags: ["MERN", "SEO", "CMS"],
    imageUrl: bollywoodblinkImg,
    url: "https://bollywoodblink.com",
  },
  {
    title: "DS Couture",
    description:
      "Fashion eCommerce platform built using MERN stack and microservices architecture.",
    tags: ["MERN", "Microservices", "Kafka", "eCommerce"],
    imageUrl: corpcommentImg,
    url: "https://dscouture.in",
  },
  {
    title: "Growl Communications",
    description:
      "Financial advisory website optimized for lead generation, UX, SEO, and marketing funnels.",
    tags: ["UX", "SEO", "Funnels", "Finance"],
    imageUrl: growlcommunicationImg,
    url: "https://growlcommunications.com",
  },
  {
    title: "Research Alert",
    description:
      "Investment research platform focused on improved user experience and lead conversion.",
    tags: ["Finance", "UX", "Analytics"],
    imageUrl: researchalertImg,
    url: "https://researchalert.in",
  },
  {
    title: "Biz2Loan",
    description:
      "Business loan platform with website optimization and lead funnel strategies.",
    tags: ["FinTech", "Lead Funnels", "Branding"],
    imageUrl: bizz2loanImg,
    url: "https://biz2loan.com",
  },
  {
    title: "Secure Loan Consultants",
    description:
      "Loan consultancy website with chatbot and WhatsApp automation for lead capture.",
    tags: ["Chatbot", "WhatsApp Automation", "FinTech"],
    imageUrl: secureloanconsultantImg,
    url: "https://secureloanconsultants.com",
  },
  {
    title: "Vital Vaults",
    description:
      "Health-tech website and app prototype with Figma UI and automation workflows.",
    tags: ["Figma", "UI/UX", "HealthTech"],
    imageUrl: vitalvaultsImg,
    url: "https://www.figma.com/proto/iNqswsNOi8lWVztcOgkCFT/Untitled?node-id=1-3&t=zcG2J3LzDZZSonjL-1",
  },
] as const;

export const digitalMarketingData = [
  {
    company: "Employpreneurs",
    subtitle: "Career Coaching & Employability Brand",
    dashboardImage: "/employpr.png",
    posts: ["https://www.instagram.com/p/DFu0GHqyFkz/"],
    points: [
      "Supported digital marketing initiatives and campaign execution",
      "Assisted in lead generation flows and marketing automation support",
    ],
  },
  {
    company: "Growl Communication Pvt. Ltd.",
    subtitle: "Health Insurance & Personal Loan Sector",
    dashboardImage: "/GrowlsFBleads.png",
    posts: [
      "https://www.instagram.com/p/DFH4N5bzCAR/",
      "https://www.instagram.com/p/DDzATpjtyjI/",
      "https://www.instagram.com/p/DDokVpuzH6M/",
    ],
    points: [
      "Managed Facebook & Google Ads campaigns",
      "Contributed to website promotion strategies",
      "Supported research-based content platforms",
      "Research Alert Website & Research Buzz Website",
    ],
  },
  {
    company: "Invictus Outsourcing Solutions",
    subtitle: "Multi-niche Digital Marketing Agency",
    dashboardImage: null, // ✅ REQUIRED
    posts: [
      "https://www.instagram.com/gadkaricars/",
      "https://www.instagram.com/biz2loan/",
      "https://www.instagram.com/biznext__official/",
      "https://www.instagram.com/biznextmedia/",
    ],
    points: [
      "Social media management",
      "Meta Ads execution",
      "Profile optimization & brand positioning",
    ],
  },
  {
    company: "House of Aanchal",
    subtitle: "Fashion Brand – Designer Wear",
    dashboardImage: null, // ✅ REQUIRED
    posts: [
      "https://www.instagram.com/houseofaanchal_?igsh=OG5rajliMnAxbWJs",
      "https://www.instagram.com/reel/DSchSFLjD7F/?igsh=NzNmcjJsMXFsdDFq",
      "https://www.instagram.com/reel/DSC5TxwDA8-/?igsh=MTlkeGhkbGx4Z25jcg==",
    ],
    points: [
      "Planned and executed organic + inorganic growth strategy",
      "Ran Meta Ads campaigns for brand visibility",
      "Improved engagement and reach",
    ],
  },
  {
    company: "Deep Tea with Deepti",
    subtitle: "Podcast & Personal Brand",
    dashboardImage: "/deepteawtthdeeptiads.png",
    posts: [
      "https://www.instagram.com/deepteawithdeepti/",
      "https://www.instagram.com/reel/DQop0mNiEtj/",
      "https://www.instagram.com/reel/DRmLJVEiJHX/",
      "https://www.instagram.com/reel/DRt9FfcCEYg/",
    ],
    points: [
      "Ran Meta Ads & YouTube Ads campaigns",
      "Built pitching strategy and brand positioning",
      "Created motivational and narrative video concepts",
      "Handled organic and paid growth strategies",
    ],
  },
  {
    company: "Paps and Pasta",
    subtitle: "Food & Lifestyle Brand",
    dashboardImage: null, // ✅ REQUIRED
    posts: ["https://www.instagram.com/papsandpasta/"],
    points: [
      "Implemented SEO strategy for blogs",
      "Managed blog posting & content optimization",
      "Targeted traffic growth through search engines",
    ],
  },
  {
    company: "Brandeur Studios (Agency Brand)",
    subtitle: "Creative & Branding Agency",
    dashboardImage: null, // ✅ REQUIRED
    posts: [
      "https://www.instagram.com/brandeurstudiosofficial/",
      "https://www.instagram.com/reel/DRUR4f1jazv/",
      "https://www.instagram.com/p/DRUV1PTAd6-/",
    ],
    points: [
      "Creative strategist for daily initiatives",
      "Designed professional brand page structure",
      "Curated pitch decks industry-wise and niche-wise",
      "Planned content calendars and campaign themes",
    ],
  },
] as const;

// =============================
// SKILLS DATA
// =============================
export const skillsData = [
  // Frontend
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Figma",
  "Shadcn UI",
  "Framer Motion",
  // Backend
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "MERN Stack",
  "PHP",
  "WordPress",
  "Microservices",
  "Kafka",
  "REST APIs",
  // AI & Automation
  "Python",
  "AI / ML",
  "Chatbots",
  "Botpress",
  "Voiceflow",
  "WhatsApp Automation",
  // Marketing & SEO
  "Google Ads",
  "Meta Ads",
  "YouTube Ads",
  "SEO",
  "UX",
  "Lead Funnels",
  "Performance Marketing",
] as const;
