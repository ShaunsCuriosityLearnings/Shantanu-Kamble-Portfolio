"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { digitalMarketingData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsInstagram, BsBarChartFill } from "react-icons/bs";

export default function DigitalMarketing() {
  const { ref } = useSectionInView("Marketing", 0.5);

  return (
    <section
      ref={ref}
      id="digital-marketing"
      className="scroll-mt-28 py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="mb-12">
          <SectionHeading>Digital Marketing</SectionHeading>

          <h2 className="text-4xl sm:text-5xl font-bold mt-4 leading-tight text-gray-950 dark:text-white">
            Creative Campaigns &
            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Performance Marketing
            </span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-white/60 max-w-2xl leading-7">
            Ads, content systems, growth campaigns, SEO, social media
            positioning, and brand scaling strategies.
          </p>
        </div>

        {/* GRID */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5">
          {digitalMarketingData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{ y: -4 }}
              className="
                group
                rounded-[1.8rem]
                border
                border-black/5
                dark:border-white/10
                bg-white/70
                dark:bg-white/[0.03]
                backdrop-blur-xl
                overflow-hidden
                hover:border-purple-400/20
                transition-all
                duration-300
                shadow-lg
              "
            >
              {/* IMAGE */}
              <div className="relative h-[180px] overflow-hidden">
                {item.dashboardImage ? (
                  <Image
                    src={item.dashboardImage}
                    alt={item.company}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1a1f35] to-[#111827] flex items-center justify-center">
                    <BsBarChartFill className="text-4xl text-gray-400 dark:text-white/20" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* DASHBOARD LINK */}
                {item.dashboardImage && (
                  <a
                    href={item.dashboardImage}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      absolute
                      top-4
                      right-4
                      w-10
                      h-10
                      rounded-full
                      bg-white/80
                      dark:bg-black/40
                      backdrop-blur-md
                      border
                      border-black/10
                      dark:border-white/10
                      flex
                      items-center
                      justify-center
                      text-gray-950
                      dark:text-white
                      hover:scale-110
                      transition
                    "
                  >
                    <BsArrowUpRight />
                  </a>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-5">
                {/* TITLE */}
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-purple-500 dark:text-purple-300">
                    {item.subtitle}
                  </p>

                  <h3 className="text-2xl font-semibold mt-2 leading-tight text-gray-950 dark:text-white">
                    {item.company}
                  </h3>
                </div>

                {/* POINTS */}
                <div className="space-y-2">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />

                      <p className="text-sm text-gray-600 dark:text-white/65 leading-6">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CREATIVE LINKS */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.posts.slice(0, 3).map((post, i) => (
                    <a
                      key={i}
                      href={post}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-black/10
                        dark:border-white/10
                        bg-black/[0.03]
                        dark:bg-white/[0.03]
                        px-3
                        py-2
                        text-xs
                        text-gray-700
                        dark:text-white/70
                        hover:bg-black/[0.06]
                        dark:hover:bg-white/[0.08]
                        hover:text-gray-950
                        dark:hover:text-white
                        transition
                      "
                    >
                      <BsInstagram />
                      Creative
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
