"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const reduce = useReducedMotion();

  const mx = useMotionValue(-500);
  const my = useMotionValue(-500);
  const sx = useSpring(mx, { stiffness: 120, damping: 24, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 120, damping: 24, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || reduce) return;
    const enableRaf = requestAnimationFrame(() => setEnabled(true));

    let moveRaf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(moveRaf);
      moveRaf = requestAnimationFrame(() => {
        mx.set(e.clientX);
        my.set(e.clientY);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(enableRaf);
      cancelAnimationFrame(moveRaf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [mx, my, reduce]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-[1] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 overflow-hidden"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_62%)] opacity-[0.055] blur-2xl dark:opacity-[0.09]" />
    </motion.div>
  );
}