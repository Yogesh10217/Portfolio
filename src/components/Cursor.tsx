"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 500, mass: 0.5 };
  const ringConfig  = { damping: 20, stiffness: 200, mass: 0.8 };

  const ringX = useSpring(dotX, ringConfig);
  const ringY = useSpring(dotY, ringConfig);
  const dotXS = useSpring(dotX, springConfig);
  const dotYS = useSpring(dotY, springConfig);

  const scale = useMotionValue(1);
  const ringScale = useSpring(scale, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleEnter = () => scale.set(1.8);
    const handleLeave = () => scale.set(1);

    window.addEventListener("mousemove", moveCursor);

    const interactables = document.querySelectorAll("a, button, [data-cursor]");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: dotXS,
          y: dotYS,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Ring */}
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          scale: ringScale,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
