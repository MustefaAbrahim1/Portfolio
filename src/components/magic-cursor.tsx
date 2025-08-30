"use client";

import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function MagicCursor() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const mouse = {
    x: useSpring(0, springConfig),
    y: useSpring(0, springConfig),
  };

  useEffect(() => {
    if (!isClient) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isClient, mouse.x, mouse.y]);

  if (!isClient) {
    return null;
  }

  return (
    <motion.div
      style={{
        left: mouse.x,
        top: mouse.y,
      }}
      className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-[9999] h-8 w-8 rounded-full bg-primary/20 backdrop-blur-sm hidden md:block"
    />
  );
}
