import React from "react";

import { FaReact, FaBullhorn, FaRobot, FaChartLine } from "react-icons/fa";

import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
import sellphonecashImg from "@/public/sellphonecashcom.png";
import sellyourphone24Img from "@/public/sellyourphone24.png";
import tibroImg from "@/public/tibro.png";
import ipvsImg from "@/public/ipvs.png";

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
    title: "SellPhoneCash.com",
    description:
      "UAE-based instant mobile and electronics buyback platform offering real-time device valuation, doorstep pickup across Dubai & UAE, and instant payouts.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Buyback Portal", "Fintech"],
    imageUrl: sellphonecashImg,
    url: "https://sellphonecash.com",
  },
  {
    title: "SellYourPhone24.com",
    description:
      "High-converting electronics trade-in and device valuation portal across Dubai & UAE with instant quotes, multi-device catalog, and 24h pickup workflows.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Trade-In", "Automation"],
    imageUrl: sellyourphone24Img,
    url: "https://sellyourphone24.com",
  },
  {
    title: "Tibro.in",
    description:
      "Curated international trade fair tours, luxury holidays, executive corporate travel, and knowledge journey platform for Indian travellers across 150+ countries.",
    tags: ["Travel Tech", "UI/UX", "Corporate Tours", "Web Platform"],
    imageUrl: tibroImg,
    url: "https://tibro.in",
  },
  {
    title: "IPVS 2026",
    description:
      "India's premier industrial exhibition portal for pumps, valves, and process systems at HITEX Hyderabad with visitor registration and exhibitor management.",
    tags: ["React", "Tailwind CSS", "B2B Exhibition", "Event Portal"],
    imageUrl: ipvsImg,
    url: "https://www.ipvs.in/",
  },
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
    company: "Tibro Tours (Tibro.in)",
    subtitle: "Luxury Corporate & Trade Fair Delegations",
    dashboardImage: "/Tibro meta ads .png",
    dashboards: [
      { label: "Meta (2.1M+ Impr)", url: "/Tibro meta ads .png" },
      { label: "LinkedIn (₹4.24L)", url: "/Tibro Linkedin Ads.png" },
      { label: "Google (97% Opt)", url: "/Tibro google Ads part1.png" },
    ],
    channels: ["LinkedIn B2B", "Meta Ads", "Google Ads"],
    posts: ["https://tibro.in"],
    points: [
      "₹4.24L+ spent on LinkedIn Ads generating 760K+ impressions and 6,646 qualified clicks from CXOs & business leaders",
      "2.1M+ Meta impressions with 990K+ reach; produced 1,300+ leads (including 730 HNI leads at ₹36/lead for Luxury Cruise)",
      "Multi-expo Google Ads funnels across Medica, ITMA Asia, and Gulfood with 92%–97.5% optimization scores",
    ],
  },
  {
    company: "IPVS 2026 Exhibition",
    subtitle: "Premier Industrial Pumps & Valves Expo (HITEX)",
    dashboardImage: "/IPVS google Ads .png",
    dashboards: [
      { label: "Meta Leads (4,877 Leads)", url: "/IPVS google Ads .png" },
      { label: "LinkedIn B2B (252 Leads)", url: "/IPVS Linkedin Ads.png" },
      { label: "Google PMax (1.1M+ Impr)", url: "/IPVS google Ads.png" },
    ],
    channels: ["Meta Lead Forms", "LinkedIn B2B", "Google PMax"],
    posts: ["https://www.ipvs.in/"],
    points: [
      "Generated 4,877 verified form leads at an ultra-efficient ₹25.19 per lead across 1.72M+ impressions",
      "LinkedIn B2B decision-maker targeting: 252 leads at $4.03/lead (96.45% below industry benchmark) engaging Directors & CXOs",
      "Over 1.1M Google Ads impressions with 791K+ interactions at an astonishing ₹1.15 Avg. CPC",
    ],
  },
  {
    company: "SellPhoneCash.com",
    subtitle: "Electronics Buyback & ReCommerce (Dubai & UAE)",
    dashboardImage: "/Sellphonecash google metric.png",
    dashboards: [
      { label: "Google Ads (AED 170K+ Value)", url: "/Sellphonecash google metric.png" },
    ],
    channels: ["Google Search", "High-Intent Search", "FinTech"],
    posts: ["https://sellphonecash.com"],
    points: [
      "Generated AED 170,566+ in total conversion value with 62 high-intent buyback conversions in 30 days",
      "Achieved an exceptional 18.26% Click-Through Rate (CTR) and 10.65% Conversion Rate",
      "Optimized cost per acquisition to AED 47.53 on AED 2,946 total monthly ad spend (~57.8x ROAS)",
    ],
  },
  {
    company: "SellYourPhone24.com",
    subtitle: "Mobile Trade-In & Doorstep Pickup (Dubai & Abu Dhabi)",
    dashboardImage: "/Sellyourphone24 google metrics.png",
    dashboards: [
      { label: "Google Ads (Dubai & Abu Dhabi)", url: "/Sellyourphone24 google metrics.png" },
    ],
    channels: ["Google Ads", "Local UAE Search", "Trade-In"],
    posts: ["https://sellyourphone24.com"],
    points: [
      "Targeted high-intent search campaigns across Dubai and Abu Dhabi for immediate electronics valuation",
      "Maintained an efficient AED 7.07 Average CPC with 2,596 targeted impressions and 340 qualified clicks",
      "Delivered 20+ direct conversion actions with 24-hour doorstep inspection and instant payout workflows",
    ],
  },
  {
    company: "Employpreneurs",
    subtitle: "Career Coaching & Employability Brand",
    dashboardImage: "/employpr.png",
    channels: ["Marketing Automation", "Lead Gen"],
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
    channels: ["Meta Ads", "Google Ads", "Finance"],
    posts: [
      "https://www.instagram.com/p/DFH4N5bzCAR/",
      "https://www.instagram.com/p/DDzATpjtyjI/",
      "https://www.instagram.com/p/DDokVpuzH6M/",
    ],
    points: [
      "Managed Facebook & Google Ads campaigns driving high-intent financial leads",
      "Contributed to website promotion strategies and lead conversion funnels",
      "Supported research-based content platforms (Research Alert & Research Buzz)",
    ],
  },
  {
    company: "Invictus Outsourcing Solutions",
    subtitle: "Multi-niche Digital Marketing Agency",
    dashboardImage: null,
    channels: ["Meta Ads", "Social Positioning"],
    posts: [
      "https://www.instagram.com/gadkaricars/",
      "https://www.instagram.com/biz2loan/",
      "https://www.instagram.com/biznext__official/",
      "https://www.instagram.com/biznextmedia/",
    ],
    points: [
      "Social media management and profile optimization",
      "Meta Ads execution and cross-niche campaign strategy",
      "Brand positioning for automotive and financial clients",
    ],
  },
  {
    company: "House of Aanchal",
    subtitle: "Fashion Brand – Designer Wear",
    dashboardImage: null,
    channels: ["Meta Ads", "Organic Growth"],
    posts: [
      "https://www.instagram.com/houseofaanchal_?igsh=OG5rajliMnAxbWJs",
      "https://www.instagram.com/reel/DSchSFLjD7F/?igsh=NzNmcjJsMXFsdDFq",
      "https://www.instagram.com/reel/DSC5TxwDA8-/?igsh=MTlkeGhkbGx4Z25jcg==",
    ],
    points: [
      "Planned and executed organic + inorganic growth strategy",
      "Ran Meta Ads campaigns for luxury brand visibility and sales",
      "Improved engagement rates, viral reach, and influencer traction",
    ],
  },
  {
    company: "Deep Tea with Deepti",
    subtitle: "Podcast & Celebrity Personal Brand",
    dashboardImage: "/deepteawtthdeeptiads.png",
    channels: ["Meta Ads", "YouTube Ads", "Branding"],
    posts: [
      "https://www.instagram.com/deepteawithdeepti/",
      "https://www.instagram.com/reel/DQop0mNiEtj/",
      "https://www.instagram.com/reel/DRmLJVEiJHX/",
      "https://www.instagram.com/reel/DRt9FfcCEYg/",
    ],
    points: [
      "Ran Meta Ads & YouTube Ads campaigns for podcast reach",
      "Built pitching strategy, narrative video concepts, and brand positioning",
      "Handled organic and paid audience acquisition strategies",
    ],
  },
  {
    company: "Paps and Pasta",
    subtitle: "Food & Lifestyle Brand",
    dashboardImage: null,
    channels: ["SEO", "Content Marketing"],
    posts: ["https://www.instagram.com/papsandpasta/"],
    points: [
      "Implemented SEO strategy and on-page optimization for blogs",
      "Managed editorial calendar and food content scheduling",
      "Targeted organic traffic growth through search engines",
    ],
  },
  {
    company: "Brandeur Studios (Agency Brand)",
    subtitle: "Creative & Branding Agency",
    dashboardImage: null,
    channels: ["Creative Strategy", "Pitch Decks"],
    posts: [
      "https://www.instagram.com/brandeurstudiosofficial/",
      "https://www.instagram.com/reel/DRUR4f1jazv/",
      "https://www.instagram.com/p/DRUV1PTAd6-/",
    ],
    points: [
      "Creative strategist for daily branding and client initiatives",
      "Designed professional pitch decks industry-wise and niche-wise",
      "Planned content calendars and high-converting campaign themes",
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
