"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="w-full"
    >
      <section
        className="
          bg-gray-100 dark:bg-white/10
          border border-black/5
          rounded-xl
          overflow-hidden
          transition
          hover:bg-gray-200 dark:hover:bg-white/20
          h-full
        "
      >
        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_18rem] gap-6 p-6">
          {/* IMAGE – TOP on mobile, RIGHT on desktop */}
          {imageUrl && url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative
                order-1 xl:order-2
                w-full
                rounded-lg
                overflow-hidden
                group
              "
            >
              <Image
                src={imageUrl}
                alt={title}
                quality={95}
                className="
                  w-full h-auto
                  rounded-lg
                  shadow-xl
                  transition duration-300
                  group-hover:scale-[1.05]
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/0 group-hover:bg-black/30
                  transition
                  flex items-center justify-center
                "
              >
                <span
                  className="
                    opacity-0 group-hover:opacity-100
                    text-white text-sm font-medium
                    tracking-wide
                  "
                >
                  Visit Website ↗
                </span>
              </div>
            </a>
          )}

          {/* CONTENT */}
          <div className="order-2 xl:order-1 flex flex-col h-full">
            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>

            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="
                    bg-black/[0.7]
                    px-3 py-1
                    text-[0.7rem]
                    uppercase tracking-wider
                    text-white rounded-full
                    dark:text-white/70
                  "
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
