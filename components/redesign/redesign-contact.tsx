"use client";

import React, { useState } from "react";
import { FiMail, FiArrowUpRight, FiSend } from "react-icons/fi";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

interface RedesignContactProps {
  headingFontClass: string;
}

export default function RedesignContact({
  headingFontClass,
}: RedesignContactProps) {
  const [isPending, setIsPending] = useState(false);

  return (
    <footer id="contact" className="w-full px-[4%] sm:px-[5%] pt-10 pb-12 border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
          {/* LEFT COLUMN: HEADLINE, DESCRIPTION & DIRECT EMAIL */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <h2
                  className={`${headingFontClass} text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none`}
                >
                  LET&apos;S WORK TOGETHER
                </h2>
                <span className="text-red-500 text-2xl sm:text-3xl animate-pulse">
                  ✦
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1">
                Have a project in mind, need custom AI automation workflows, or want to scale
                your business with high-converting performance ads? Send a direct message or email directly below.
              </p>
            </div>

            {/* DIRECT EMAIL CARD */}
            <div className="pt-2">
              <a
                href="mailto:shantanukamble.org@gmail.com"
                className="group flex items-center gap-3.5 p-4 rounded-xl border border-zinc-800/80 bg-[#101014] hover:border-red-500/50 hover:bg-zinc-900 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 group-hover:bg-red-950/60 border border-zinc-800 group-hover:border-red-500/40 text-red-400 flex items-center justify-center text-base shrink-0 transition-colors">
                  <FiMail />
                </div>
                <div className="truncate">
                  <p className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider">
                    Direct Email
                  </p>
                  <p className="text-sm font-semibold text-zinc-200 group-hover:text-white truncate">
                    shantanukamble.org@gmail.com
                  </p>
                </div>
                <FiArrowUpRight className="ml-auto text-zinc-600 group-hover:text-red-400 text-sm transition-colors shrink-0" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: WORKING CONTACT FORM */}
          <div className="lg:col-span-7">
            <form
              action={async (formData) => {
                setIsPending(true);
                const { data, error } = await sendEmail(formData);
                setIsPending(false);

                if (error) {
                  toast.error(error);
                  return;
                }

                toast.success("Message sent! Shantanu will get back to you shortly.");
              }}
              className="space-y-4 rounded-2xl border border-zinc-800 bg-[#101014] p-6 sm:p-8 shadow-xl"
            >
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Your Email Address
                </label>
                <input
                  name="senderEmail"
                  type="email"
                  required
                  maxLength={500}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-white text-xs sm:text-sm placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Message or Project Scope
                </label>
                <textarea
                  name="message"
                  required
                  maxLength={5000}
                  rows={5}
                  placeholder="Tell me about your project, timeline, or objectives..."
                  className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-white text-xs sm:text-sm placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="group w-full py-3.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
          </div>
        </div>

        {/* BOTTOM COPYRIGHT STRIP */}
        <div className="pt-6 border-t border-zinc-900 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Shantanu Kamble. All rights reserved.</span>
          <span className="text-red-500 font-mono text-[11px]">CRAFTED WITH PRECISION</span>
        </div>
      </div>
    </footer>
  );
}
