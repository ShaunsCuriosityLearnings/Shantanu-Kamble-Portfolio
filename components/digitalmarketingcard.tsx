"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { digitalMarketingData } from "@/lib/data";

/* Derive type directly from data */
type DigitalMarketingItem = (typeof digitalMarketingData)[number];

type DigitalMarketingRowProps = {
  data: DigitalMarketingItem;
};

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

export default function DigitalMarketingRow({
  data,
}: DigitalMarketingRowProps) {
  const { company, subtitle, dashboardImage, posts, points } = data;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hasPosts = posts.length > 0;
  const hasDashboard = typeof dashboardImage === "string";

  const [viewMode, setViewMode] = useState<"creative" | "dashboard">(
    hasPosts ? "creative" : "dashboard",
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCreative = () => {
    if (!hasPosts) return;
    setActiveIndex((prev) => (prev + 1) % posts.length);
  };

  /* Load Instagram embed safely */
  useEffect(() => {
    if (!hasPosts || viewMode !== "creative") return;

    const processEmbeds = () => {
      window.instgrm?.Embeds?.process();
    };

    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = processEmbeds;
      document.body.appendChild(script);
    } else {
      processEmbeds();
    }
  }, [viewMode, activeIndex, hasPosts]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{company}</h3>
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          </div>

          <ul className="space-y-3">
            {points.map((point, index) => (
              <li
                key={index}
                className="text-sm leading-relaxed text-gray-700 dark:text-white/70"
              >
                — {point}
              </li>
            ))}
          </ul>

          {/* CONTROLS */}
          <div className="flex flex-wrap gap-3 pt-2">
            {hasPosts && (
              <button
                onClick={() => setViewMode("creative")}
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  viewMode === "creative"
                    ? "bg-black text-white border-black"
                    : "border-black/20 dark:border-white/20"
                }`}
              >
                Creatives
              </button>
            )}

            {hasDashboard && (
              <a
                href={dashboardImage!}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-sm border border-black/20 dark:border-white/20 hover:bg-black/5 transition"
              >
                View Ads Dashboard ↗
              </a>
            )}

            {viewMode === "creative" && hasPosts && posts.length > 1 && (
              <button
                onClick={nextCreative}
                className="px-4 py-2 rounded-full text-sm border border-black/20 dark:border-white/20 hover:bg-black/5 transition"
              >
                Next →
              </button>
            )}
          </div>
        </div>

        {/* RIGHT MEDIA */}
        <motion.div
          key={`${viewMode}-${activeIndex}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-[420px]"
        >
          {viewMode === "creative" && hasPosts ? (
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={posts[activeIndex]}
              data-instgrm-version="14"
              style={{ margin: 0 }}
            />
          ) : (
            hasDashboard && (
              <div className="text-sm text-gray-400">
                Dashboard opens in a new tab
              </div>
            )
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
