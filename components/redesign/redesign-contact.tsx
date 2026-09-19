"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight, FiSend } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

interface RedesignContactProps {
  headingFontClass: string;
}

export default function RedesignContact({
  headingFontClass,
}: RedesignContactProps) {
  const [isPending, setIsPending] = useState(false);
  const contactLinks = [
    {
      label: "shantanukamble.org@gmail.com",
      href: "mailto:shantanukamble.org@gmail.com",
      icon: <FiMail />,
      type: "Direct Email",
    },
    {
      label: "linkedin.com/in/shantanukamble",
      href: "https://linkedin.com",
      icon: <FiLinkedin />,
      type: "LinkedIn",
    },
    {
      label: "github.com/shantanukamble",
      href: "https://github.com",
      icon: <FiGithub />,
      type: "GitHub",
    },
    {
      label: "shantanukamble.com",
      href: "#home",
      icon: <BsGlobe />,
      type: "Portfolio Home",
    },
  ];

  return (
    <footer id="contact" className="w-full px-[4%] sm:px-[5%] pt-8 pb-12 border-t border-zinc-900 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: HEADLINE & CONTACT FORM */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <h2
                className={`${headingFontClass} text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none`}
              >
                LET'S WORK TOGETHER
              </h2>
              <span className="text-red-500 text-2xl sm:text-3xl animate-pulse">
                ✦
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
              Have a project in mind, need custom AI automation workflows, or want to scale
              your business with high-converting performance ads? Send a direct message below.
            </p>
          </div>

          {/* WORKING CONTACT FORM */}
          <form
            action={async (formData) => {
              setIsPending(true);
              const { data, error } = await sendEmail(formData);
              setIsPending(false);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!");
            }}
            className="space-y-3.5 rounded-xl border border-zinc-800 bg-[#101014] p-5 sm:p-6"
          >
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                Your Email Address
              </label>
              <input
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-800 bg-zinc-950 text-white text-xs sm:text-sm placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                Message or Project Scope
              </label>
              <textarea
                name="message"
                required
                maxLength={5000}
                rows={4}
                placeholder="Tell me about your project, timeline, or objectives..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-800 bg-zinc-950 text-white text-xs sm:text-sm placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="group w-full py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isPending ? (
                <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white" />
              ) : (
                <>
                  <span>SEND MESSAGE</span>
                  <FiSend className="text-xs group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* SOCIAL / CONTACT PILLS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 p-2.5 rounded-lg border border-zinc-800/80 bg-[#101014] hover:border-red-500/40 hover:bg-zinc-900 transition-all duration-200"
              >
                <div className="w-7 h-7 rounded-md bg-zinc-900 group-hover:bg-red-950/60 border border-zinc-800 group-hover:border-red-500/40 text-red-400 flex items-center justify-center text-xs shrink-0 transition-colors">
                  {link.icon}
                </div>
                <div className="truncate">
                  <p className="text-[9px] uppercase font-mono text-zinc-500 tracking-wider">
                    {link.type}
                  </p>
                  <p className="text-xs font-medium text-zinc-200 group-hover:text-white truncate">
                    {link.label}
                  </p>
                </div>
                <FiArrowUpRight className="ml-auto text-zinc-600 group-hover:text-red-400 text-xs transition-colors shrink-0" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-900 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>&copy; {new Date().getFullYear()} Shantanu Kamble. All rights reserved.</span>
            <span className="text-red-500 font-mono text-[11px]">CRAFTED WITH PRECISION</span>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D PERSPECTIVE LAPTOP DISPLAY */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[360px] sm:max-w-[400px] flex flex-col items-center select-none"
          >
            {/* Laptop Screen Frame */}
            <div className="w-full aspect-[16/10] bg-[#1a1a1f] p-2 rounded-t-xl border-t-2 border-x-2 border-zinc-700 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-800" />
              
              <div className="w-full h-full bg-[#09090c] rounded overflow-hidden relative border border-zinc-800/80 p-2.5 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-white/5 pb-1">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  </div>
                  <span className="text-[7px] text-zinc-500 font-mono">portfolio.v2</span>
                </div>

                <div className="relative text-center my-auto">
                  <span className="text-xl font-black text-[#8b1424] uppercase tracking-tighter opacity-80 block">
                    PORTFOLIO
                  </span>
                  <p className="text-[8px] font-bold text-white uppercase tracking-wider -mt-1">
                    SHANTANU KAMBLE
                  </p>
                  <p className="text-[6px] text-red-400 uppercase tracking-widest font-mono">
                    SOFTWARE & AI
                  </p>
                </div>

                <div className="grid grid-cols-5 gap-0.5">
                  <div className="h-3 rounded-xs bg-emerald-950/40 border border-emerald-500/20" />
                  <div className="h-3 rounded-xs bg-orange-950/40 border border-orange-500/20" />
                  <div className="h-3 rounded-xs bg-blue-950/40 border border-blue-500/20" />
                  <div className="h-3 rounded-xs bg-purple-950/40 border border-purple-500/20" />
                  <div className="h-3 rounded-xs bg-red-950/40 border border-red-500/20" />
                </div>
              </div>
            </div>

            {/* Laptop Base */}
            <div className="w-[110%] h-3.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-b-lg shadow-2xl relative flex items-center justify-center">
              <div className="w-14 h-1 bg-zinc-600 rounded-full" />
            </div>

            <div className="w-[90%] h-3 bg-red-600/10 blur-xl rounded-full mt-1" />
          </motion.div>
        </div>

      </div>
    </footer>
  );
}
