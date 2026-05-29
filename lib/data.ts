import React from "react";

import { FaReact, FaBullhorn, FaRobot, FaChartLine } from "react-icons/fa";

import { CgWorkAlt } from "react-icons/cg";
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

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
  { name: "Marketing", hash: "#digital-marketing" },
  { name: "Automation", hash: "#automation" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Lead Qualification Chatbots",
    location: "AI Automation Systems",
    description:
      "Built intelligent lead qualification chatbots capable of handling 24/7 communication, customer support, service catalog exploration, and automated lead segmentation from Meta and Google Ads. Integrated CRM and database systems to improve ad optimization and automate lead conversions without manual cold calling.",
    icon: React.createElement(FaRobot),
    date: "AI Automation",
  },
  {
    title: "Marketing & Sales Automation Bots",
    location: "Business Automation",
    description:
      "Developed AI-powered marketing chatbots that function as virtual sales and support representatives. Created automated customer journeys, lead nurturing systems, appointment booking workflows, WhatsApp automations, and conversational sales funnels to improve customer engagement and retention.",
    icon: React.createElement(FaBullhorn),
    date: "Automation Workflows",
  },
  {
    title: "AI Education & Student Management Systems",
    location: "EdTech Automation",
    description:
      "Designed AI educational chatbots with secure login systems, AI-based doubt solving using LLMs, quiz management, attendance tracking, performance analytics, payment integrations, and parent dashboards. Enabled institutions to provide 24/7 support and automated student management.",
    icon: React.createElement(LuGraduationCap),
    date: "AI + Education",
  },
  {
    title: "Survey & Market Research Chatbots",
    location: "Research Automation",
    description:
      "Created conversational survey systems that replace traditional forms with interactive chatbot experiences. Automated data collection, customer feedback analysis, lead capture, segmentation, and reporting workflows to improve response rates and market research efficiency.",
    icon: React.createElement(FaChartLine),
    date: "Conversational AI",
  },
  {
    title: "AI Workflow & Business Automation",
    location: "Custom Integrations",
    description:
      "Built scalable AI automation workflows integrating APIs, CRMs, WhatsApp systems, databases, dashboards, and third-party platforms. Automated repetitive business operations, customer communication, lead management, and internal processes across multiple industries.",
    icon: React.createElement(FaReact),
    date: "System Automation",
  },
  {
    title: "AI Chatbot Development & Integrations",
    location: "Full Stack AI Systems",
    description:
      "Developed end-to-end AI chatbot systems using MERN, APIs, LLM integrations, Botpress, WhatsApp Cloud API, and custom backend architectures. Focused on creating scalable conversational systems capable of handling business operations, customer engagement, and intelligent automation workflows.",
    icon: React.createElement(CgWorkAlt),
    date: "AI Engineering",
  },
] as const;

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
    dashboardImage: null,
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
    dashboardImage: null,
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
    dashboardImage: null,
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
    dashboardImage: null,
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

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Figma",
  "Shadcn UI",
  "Framer Motion",
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
  "Python",
  "AI / ML",
  "Chatbots",
  "WhatsApp Automation",
  "Google Ads",
  "Meta Ads",
  "YouTube Ads",
  "SEO",
  "UX",
  "Lead Funnels",
  "Performance Marketing",
] as const;
