"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { digitalMarketingData } from "@/lib/data";
import Image from "next/image";
import {
  BsInstagram,
  BsArrowUpRight,
  BsGraphUpArrow,
  BsGlobe,
  BsLinkedin,
  BsX,
  BsZoomIn,
  BsZoomOut,
  BsShieldLock,
  BsArrowsFullscreen,
} from "react-icons/bs";

interface RedesignDigitalMarketingProps {
  headingFontClass: string;
}

type MarketingItem = (typeof digitalMarketingData)[number];

interface ImageModalData {
  url: string;
  title: string;
  subtitle: string;
  points: readonly string[];
}

function MarketingCard({
  item,
  index,
  onOpenImage,
}: {
  item: MarketingItem;
  index: number;
  onOpenImage: (data: ImageModalData) => void;
}) {
  const dashboards = "dashboards" in item && item.dashboards ? item.dashboards : null;
  const [activeDashboardIndex, setActiveDashboardIndex] = useState(0);

  const currentDashboardUrl = dashboards
    ? dashboards[activeDashboardIndex]?.url || item.dashboardImage
    : item.dashboardImage;

  const currentDashboardLabel = dashboards
    ? dashboards[activeDashboardIndex]?.label || item.subtitle
    : item.subtitle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 4) * 0.05 }}
      whileHover={{ y: -4 }}
      onContextMenu={(e) => {
        e.preventDefault();
        return false;
      }}
      className="group rounded-xl border border-zinc-800/90 bg-[#101014] overflow-hidden flex flex-col justify-between hover:border-red-500/40 hover:shadow-[0_10px_30px_rgba(225,29,72,0.14)] transition-all duration-300 select-none"
    >
      {/* TOP DASHBOARD PREVIEW / HERO */}
      <div
        className="relative h-44 w-full overflow-hidden bg-zinc-950 border-b border-zinc-800 flex flex-col justify-between"
        onContextMenu={(e) => {
          e.preventDefault();
          return false;
        }}
      >
        {currentDashboardUrl ? (
          <>
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() =>
                onOpenImage({
                  url: currentDashboardUrl,
                  title: item.company,
                  subtitle: `${item.company} • ${currentDashboardLabel}`,
                  points: item.points,
                })
              }
            >
              <Image
                key={currentDashboardUrl}
                src={encodeURI(currentDashboardUrl)}
                alt={`${item.company} dashboard`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                draggable={false}
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none protected-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent pointer-events-none" />
              {/* Invisible click shield */}
              <div className="absolute inset-0 z-10" />
            </div>

            {/* OPEN MODAL PREVIEW BUTTON */}
            <button
              type="button"
              onClick={() =>
                onOpenImage({
                  url: currentDashboardUrl,
                  title: item.company,
                  subtitle: `${item.company} • ${currentDashboardLabel}`,
                  points: item.points,
                })
              }
              className="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white flex items-center justify-center text-xs opacity-80 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg cursor-pointer"
              title="Inspect Verified Dashboard (Protected View)"
            >
              <BsArrowUpRight />
            </button>

            {/* MULTI-DASHBOARD SWITCHER TABS */}
            {dashboards && dashboards.length > 1 && (
              <div className="absolute top-2 left-2 z-20 flex flex-wrap gap-1 max-w-[80%]">
                {dashboards.map((dash, dIdx) => (
                  <button
                    key={dIdx}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveDashboardIndex(dIdx);
                    }}
                    className={`text-[8px] font-mono px-2 py-0.5 rounded-full transition-all backdrop-blur-md border cursor-pointer ${
                      activeDashboardIndex === dIdx
                        ? "bg-red-600 text-white border-red-500 font-bold shadow-sm"
                        : "bg-black/75 text-zinc-300 border-white/10 hover:text-white hover:bg-black/90"
                    }`}
                  >
                    {dash.label}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a080c] via-zinc-950 to-black flex items-center justify-center p-4 text-center">
            <div className="space-y-1">
              <BsGraphUpArrow className="text-2xl text-red-500/40 mx-auto mb-1" />
              <p className="text-xs font-bold text-zinc-300">
                Performance Marketing
              </p>
              <p className="text-[9px] text-zinc-500 font-mono">
                Meta • Google • Funnels
              </p>
            </div>
          </div>
        )}

        {/* SUBTITLE OVERLAY PILL */}
        <div className="relative z-10 p-2.5 mt-auto flex items-center justify-between pointer-events-none">
          <span className="text-[8px] font-mono uppercase tracking-wider font-bold text-red-400 bg-black/85 border border-red-500/30 px-2 py-0.5 rounded-full backdrop-blur-md truncate max-w-full">
            {item.subtitle}
          </span>
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* TITLE & CHANNELS */}
          <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors tracking-tight">
            {item.company}
          </h3>

          {"channels" in item && item.channels && (
            <div className="flex flex-wrap gap-1 mt-1.5 mb-2.5">
              {item.channels.map((ch, cIdx) => (
                <span
                  key={cIdx}
                  className="text-[8px] font-mono font-medium px-1.5 py-0.5 rounded bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                >
                  {ch}
                </span>
              ))}
            </div>
          )}

          {/* BULLET METRICS */}
          <ul className="mt-2 space-y-1.5">
            {item.points.map((point, i) => (
              <li
                key={i}
                className="text-[11px] text-zinc-300 flex items-start gap-1.5 leading-relaxed"
              >
                <span className="text-red-500 font-bold leading-none mt-1 shrink-0">
                  +
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* LINKS / CREATIVE PILLS */}
        {item.posts.length > 0 && (
          <div className="mt-4 pt-2.5 border-t border-zinc-900 flex flex-wrap gap-1.5">
            {item.posts.slice(0, 3).map((post, i) => {
              const isInstagram = post.includes("instagram.com");
              const isLinkedin = post.includes("linkedin.com");

              return (
                <a
                  key={i}
                  href={post}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-zinc-800 bg-zinc-950 text-[9px] font-mono text-zinc-400 hover:text-white hover:border-red-500/40 hover:bg-red-950/20 transition-colors"
                >
                  {isInstagram ? (
                    <>
                      <BsInstagram className="text-pink-500 text-[10px]" />
                      <span>Creative {i + 1} ↗</span>
                    </>
                  ) : isLinkedin ? (
                    <>
                      <BsLinkedin className="text-blue-500 text-[10px]" />
                      <span>Campaign ↗</span>
                    </>
                  ) : (
                    <>
                      <BsGlobe className="text-cyan-400 text-[10px]" />
                      <span>Live Site ↗</span>
                    </>
                  )}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function RedesignDigitalMarketing({
  headingFontClass,
}: RedesignDigitalMarketingProps) {
  const [activeImageModal, setActiveImageModal] = useState<ImageModalData | null>(null);

  // Zoom & Pan state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isObfuscated, setIsObfuscated] = useState(false);

  // Reset zoom & pan when opening a modal or changing images
  useEffect(() => {
    if (activeImageModal) {
      setZoom(1);
      setPan({ x: 0, y: 0 });
      setIsDragging(false);
      setIsObfuscated(false);
    }
  }, [activeImageModal]);

  // Keyboard navigation & anti-download / anti-screenshot event handlers
  useEffect(() => {
    if (!activeImageModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveImageModal(null);
        return;
      }

      // Block Save Shortcut (Ctrl+S / Cmd+S)
      if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // Block Print Shortcut (Ctrl+P / Cmd+P)
      if ((e.ctrlKey || e.metaKey) && (e.key === "p" || e.key === "P")) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // Block View Source / Devtools Inspect Shortcut
      if ((e.ctrlKey || e.metaKey) && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
    };

    // When window loses focus (e.g. Snipping tool, screen recording, or tab switch), obfuscate image
    const handleBlur = () => setIsObfuscated(true);
    const handleFocus = () => setIsObfuscated(false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, [activeImageModal]);

  // Lock body scroll
  useEffect(() => {
    if (activeImageModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeImageModal]);

  // Zoom handlers
  const handleZoomIn = () => {
    setZoom((prev) => Math.min(3, Math.round((prev + 0.5) * 10) / 10));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const next = Math.max(1, Math.round((prev - 0.5) * 10) / 10);
      if (next <= 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleDoubleClick = () => {
    if (zoom === 1) {
      setZoom(2);
    } else {
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom((prev) => Math.min(3, Math.round((prev + 0.25) * 10) / 10));
    } else {
      setZoom((prev) => {
        const next = Math.max(1, Math.round((prev - 0.25) * 10) / 10);
        if (next <= 1) setPan({ x: 0, y: 0 });
        return next;
      });
    }
  };

  // Mouse pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch pan handlers (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoom > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - pan.x,
        y: e.touches[0].clientY - pan.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && zoom > 1 && e.touches.length === 1) {
      setPan({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <section
      id="digital-marketing"
      className="w-full px-[4%] sm:px-[5%] py-8 border-t border-zinc-900 relative"
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
            <span className="text-red-500 font-bold">₹20L+</span> Ad Spend
          </div>
          <div className="w-px h-3.5 bg-zinc-800" />
          <div>
            <span className="text-white font-bold">11+</span> Brands Scaled
          </div>
        </div>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {digitalMarketingData.map((item, index) => (
          <MarketingCard
            key={index}
            item={item}
            index={index}
            onOpenImage={(data) => setActiveImageModal(data)}
          />
        ))}
      </div>

      {/* ========================================================= */}
      {/* IN-PORTFOLIO PROTECTED IMAGE POPUP WITH ZOOM & PAN CONTROLS */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeImageModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 protected-modal select-none"
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation();
              return false;
            }}
          >
            {/* Dark Frosted Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImageModal(null)}
              className="absolute inset-0 bg-black/94 backdrop-blur-2xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl h-[90vh] bg-[#0c0c10] border border-zinc-800 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden z-10"
            >
              {/* TOP HEADER BAR WITH ZOOM CONTROLS & SECURITY BADGE */}
              <div className="px-4 py-3 bg-[#14141a] border-b border-zinc-800 flex items-center justify-between gap-3 shrink-0">
                {/* Title and Protection Pill */}
                <div className="flex items-center gap-2.5 truncate">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-950/60 border border-red-500/30 text-[10px] font-mono text-red-400 font-bold shrink-0">
                    <BsShieldLock className="text-xs text-red-500" />
                    <span>SECURE VIEW</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white truncate">
                    {activeImageModal.subtitle}
                  </span>
                </div>

                {/* ZOOM CONTROLLER TOOLBAR */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-0.5">
                    <button
                      type="button"
                      onClick={handleZoomOut}
                      disabled={zoom <= 1}
                      className="w-7 h-7 rounded flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer text-xs"
                      title="Zoom Out"
                    >
                      <BsZoomOut />
                    </button>

                    <span className="text-[11px] font-mono font-bold text-white px-1.5 min-w-[42px] text-center">
                      {Math.round(zoom * 100)}%
                    </span>

                    <button
                      type="button"
                      onClick={handleZoomIn}
                      disabled={zoom >= 3}
                      className="w-7 h-7 rounded flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer text-xs"
                      title="Zoom In"
                    >
                      <BsZoomIn />
                    </button>
                  </div>

                  {zoom > 1 && (
                    <button
                      type="button"
                      onClick={handleResetZoom}
                      className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[11px] font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
                      title="Reset Zoom to 100%"
                    >
                      <BsArrowsFullscreen className="text-[10px]" />
                      <span>Reset</span>
                    </button>
                  )}

                  {/* Close Modal Button */}
                  <button
                    type="button"
                    onClick={() => setActiveImageModal(null)}
                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-red-600 text-zinc-300 hover:text-white flex items-center justify-center text-xl transition-colors cursor-pointer ml-1"
                    title="Close preview (Esc)"
                  >
                    <BsX />
                  </button>
                </div>
              </div>

              {/* PROTECTED IMAGE VIEWPORT (INTERACTIVE ZOOM & PAN) */}
              <div
                className="relative flex-1 w-full bg-[#07070a] overflow-hidden flex items-center justify-center"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onDoubleClick={handleDoubleClick}
                onContextMenu={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  return false;
                }}
              >
                {/* TRANSFORMABLE IMAGE CONTAINER */}
                <div
                  className="relative w-full h-full flex items-center justify-center select-none"
                  style={{
                    transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
                    transformOrigin: "center center",
                    cursor:
                      zoom > 1
                        ? isDragging
                          ? "grabbing"
                          : "grab"
                        : "zoom-in",
                    transition: isDragging
                      ? "none"
                      : "transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div className="relative w-[92%] h-[82%] max-w-4xl max-h-[75vh]">
                    <Image
                      src={encodeURI(activeImageModal.url)}
                      alt={activeImageModal.title}
                      fill
                      priority
                      draggable={false}
                      sizes="95vw"
                      className="object-contain pointer-events-none select-none protected-image"
                      onContextMenu={(e) => {
                        e.preventDefault();
                        return false;
                      }}
                    />

                    {/* SUBTLE ANTI-THEFT CONFIDENTIAL WATERMARK PATTERN */}
                    <div
                      className="absolute inset-0 pointer-events-none select-none opacity-[0.07] overflow-hidden flex items-center justify-center"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='120'><text x='20' y='60' fill='%23ffffff' font-family='monospace' font-size='10' font-weight='bold' transform='rotate(-20 140 60)' letter-spacing='2'>VERIFIED • SHANTANU KAMBLE</text></svg>")`,
                        backgroundRepeat: "repeat",
                      }}
                    />

                    {/* TRANSPARENT CLICK & DRAG SHIELD LAYER */}
                    <div
                      className="absolute inset-0 z-20"
                      draggable={false}
                      onDragStart={(e) => {
                        e.preventDefault();
                        return false;
                      }}
                    />
                  </div>
                </div>

                {/* ANTI-SCREEN-CAPTURE VEIL (Triggered if window loses focus) */}
                {isObfuscated && (
                  <div className="absolute inset-0 z-30 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center">
                    <BsShieldLock className="text-4xl text-red-500 mb-2 animate-bounce" />
                    <h4 className="text-base font-bold text-white mb-1">
                      Protected Performance Asset
                    </h4>
                    <p className="text-xs text-zinc-400 font-mono max-w-sm">
                      Screen-capture deterrent active. Click back into this window to resume high-resolution zoom and inspection.
                    </p>
                  </div>
                )}

                {/* INTERACTIVE ZOOM HINT OVERLAY AT BOTTOM-LEFT */}
                <div className="absolute bottom-3 left-3 z-20 pointer-events-none hidden sm:flex items-center gap-2 text-[10px] font-mono text-zinc-400 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  <span className="text-red-400">💡</span>
                  <span>
                    {zoom > 1
                      ? "Drag to pan • Double-click to reset"
                      : "Double-click or scroll wheel to zoom • Drag to inspect"}
                  </span>
                </div>
              </div>

              {/* FOOTER METRICS SUMMARY */}
              <div className="px-4 py-2.5 bg-[#14141a] border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono shrink-0">
                <p className="text-zinc-400 truncate max-w-2xl text-[11px]">
                  {activeImageModal.points.slice(0, 2).join(" • ")}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveImageModal(null)}
                  className="px-3.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors cursor-pointer ml-auto shrink-0 text-xs"
                >
                  Close (Esc)
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
