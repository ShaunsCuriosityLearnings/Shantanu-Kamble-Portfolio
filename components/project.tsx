"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl?: StaticImageData | string | null;
  url: string;
};

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
        {/* CONTAINER */}
        <div className="flex flex-col gap-4 p-5 h-full justify-between">
          {/* IMAGE / PREVIEW */}
          {imageUrl && url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative
                w-full
                aspect-[16/10]
                rounded-lg
                overflow-hidden
                group
                bg-zinc-100 dark:bg-zinc-900
                border border-black/5 dark:border-white/10
              "
            >
              <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="
                  object-cover object-top
                  transition duration-500 ease-out
                  group-hover:scale-[1.05]
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/0 group-hover:bg-black/25
                  transition
                  flex items-center justify-center
                "
              >
                <span
                  className="
                    opacity-0 group-hover:opacity-100
                    text-white text-xs font-semibold
                    tracking-wider uppercase
                    bg-black/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/20
                    transition duration-200
                  "
                >
                  Visit Website ↗
                </span>
              </div>
            </a>
          ) : url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative
                w-full
                min-h-[140px]
                rounded-lg
                border border-dashed border-black/10 dark:border-white/10
                bg-black/[0.02] dark:bg-white/[0.04]
                hover:bg-black/[0.06] dark:hover:bg-white/[0.08]
                hover:border-cyan-400/50 dark:hover:border-cyan-400/50
                flex flex-col items-center justify-center gap-2
                p-6
                transition duration-300
                group
              "
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 flex items-center justify-center text-lg group-hover:scale-110 transition">
                <BsArrowUpRight />
              </div>
              <span className="text-xs font-semibold text-gray-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition">
                Visit Live Website ↗
              </span>
              <span className="text-[11px] text-gray-500 dark:text-white/50 truncate max-w-[200px]">
                {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            </a>
          ) : null}

          {/* CONTENT */}
          <div className="flex flex-col flex-1 justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-500 dark:hover:text-cyan-400 transition inline-flex items-center gap-1.5"
                  >
                    {title}
                    <BsArrowUpRight className="text-sm opacity-60 hover:opacity-100" />
                  </a>
                ) : (
                  title
                )}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
                {description}
              </p>
            </div>

            <div className="mt-4">
              <ul className="flex flex-wrap gap-2">
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
        </div>
      </section>
    </motion.div>
  );
}
