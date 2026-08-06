"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const LETTERS = ["Z", "I", "G", "O"];

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const sweepRef = useRef<HTMLDivElement>(null);
  const sloganRef = useRef<HTMLParagraphElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDone(true);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => setDone(true),
      });

      // Letters appear one by one: Z, ZI, ZIG, ZIGO
      tl.set(letterRefs.current, { opacity: 0, y: 18, filter: "blur(6px)" });
      letterRefs.current.forEach((el) => {
        tl.to(
          el,
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.22 },
          "+=0.03"
        );
      });

      // Burgundy headlight sweep across the wordmark — metallic reflection
      tl.fromTo(
        sweepRef.current,
        { xPercent: -160, opacity: 0 },
        { xPercent: 160, opacity: 1, duration: 0.65, ease: "power2.inOut" },
        "-=0.05"
      ).to(sweepRef.current, { opacity: 0, duration: 0.15 }, "-=0.1");

      // Slight settle of the wordmark after the sweep
      tl.to(
        wordmarkRef.current,
        { scale: 1.03, duration: 0.18, ease: "power1.out" },
        "-=0.55"
      ).to(wordmarkRef.current, { scale: 1, duration: 0.25 });

      // Slogan reveal
      tl.fromTo(
        sloganRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35 },
        "-=0.05"
      );

      // Brief pause, then exit
      tl.to({}, { duration: 0.35 });
      tl.to(rootRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
      aria-hidden
    >
      {/* faint industrial grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="flex flex-col items-center gap-5">
        <div ref={wordmarkRef} className="relative overflow-hidden px-2">
          <div className="flex font-display text-6xl font-bold tracking-tight text-white md:text-7xl">
            {LETTERS.map((letter, i) => (
              <span
                key={letter + i}
                ref={(el) => {
                  letterRefs.current[i] = el;
                }}
                className={i === LETTERS.length - 1 ? "text-gold" : ""}
              >
                {letter}
              </span>
            ))}
          </div>
          <div
            ref={sweepRef}
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 opacity-0"
            style={{
              background:
                "linear-gradient(100deg, transparent 0%, rgba(200,167,106,0) 30%, rgba(200,167,106,0.85) 50%, rgba(255,255,255,0.6) 52%, rgba(106,16,32,0) 70%, transparent 100%)",
              mixBlendMode: "screen",
              filter: "blur(2px)",
            }}
          />
        </div>

        <p
          ref={sloganRef}
          className="text-center text-xs font-medium uppercase tracking-[0.25em] text-white/60 opacity-0 md:text-sm"
        >
          Get A Truck In 2 Min. Not 2 Days.
        </p>
      </div>
    </div>
  );
}
