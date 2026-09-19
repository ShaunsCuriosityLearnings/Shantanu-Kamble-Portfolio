"use client";

import React from "react";
import { motion } from "framer-motion";
import { digitalMarketingData } from "@/lib/data";
import Image from "next/image";
import { BsInstagram, BsArrowUpRight, BsGraphUpArrow } from "react-icons/bs";

interface RedesignDigitalMarketingProps {
  headingFontClass: string;
}

export default function RedesignDigitalMarketing({
  headingFontClass,
}: RedesignDigitalMarketingProps) {
  return (
    <section
      id="digital-marketing"
      className="w-full px-[4%] sm:px-[5%] py-8 border-t border-zinc-900"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <span className="text-xs uppercase tracking-widest text-red-500 font-bold">
            PAID ADS & GROWTH FUNNELS
          </span>
          <h2
            className={`${headingFontClass} text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mt-1`}
          >
            Performance Marketing
          </h2>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
          <div>
            <span className="text-red-500 font-bold">₹10L+</span> Ad Spend
          </div>
          <div className="w-px h-3.5 bg-zinc-800" />
          <div>
            <span className="text-white font-bold">7+</span> Brands Scaled
          </div>
        </div>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {digitalMarketingData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            whileHover={{ y: -4 }}
            className="group rounded-xl border border-zinc-800/90 bg-[#101014] overflow-hidden flex flex-col justify-between hover:border-red-500/40 hover:shadow-[0_10px_25px_rgba(225,29,72,0.12)] transition-all duration-300"
          >
            {/* TOP IMAGE OR GRADIENT HERO */}
            <div className="relative h-36 w-full overflow-hidden bg-zinc-950 border-b border-zinc-800">
              {item.dashboardImage ? (
                <>
                  <Image
                    src={item.dashboardImage}
                    alt={item.company}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <a
                    href={item.dashboardImage}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                    title="View Full Dashboard"
                  >
                    <BsArrowUpRight />
                  </a>
                </>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#1a080c] via-zinc-950 to-black flex items-center justify-center p-4 text-center">
                  <div className="space-y-1">
                    <BsGraphUpArrow className="text-2xl text-red-500/40 mx-auto mb-1" />
                    <p className="text-xs font-bold text-zinc-300">
                      Paid Ads & Growth
                    </p>
                    <p className="text-[9px] text-zinc-500 font-mono">
                      Meta • Google • Funnels
                    </p>
                  </div>
                </div>
              )}

              {/* Subtitle pill overlay */}
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                <span className="text-[8px] font-mono uppercase tracking-wider font-bold text-red-400 bg-red-950/80 border border-red-500/30 px-2 py-0.5 rounded-full backdrop-blur-md truncate max-w-full">
                  {item.subtitle}
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                  {item.company}
                </h3>

                <ul className="mt-2 space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i} className="text-[11px] text-zinc-400 flex items-start gap-1.5 leading-relaxed">
                      <span className="text-red-500 font-bold leading-none mt-1">+</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CREATIVE ASSET LINKS */}
              {item.posts.length > 0 && (
                <div className="mt-4 pt-2.5 border-t border-zinc-900 flex flex-wrap gap-1.5">
                  {item.posts.slice(0, 3).map((post, i) => (
                    <a
                      key={i}
                      href={post}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-zinc-800 bg-zinc-950 text-[9px] font-mono text-zinc-400 hover:text-white hover:border-red-500/40 hover:bg-red-950/20 transition-colors"
                    >
                      <BsInstagram className="text-red-500 text-[10px]" />
                      <span>Creative {i + 1} ↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
