"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const timerRef = useRef(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);

      if (latest > 150) {
        timerRef.current = setTimeout(() => {
          setHidden(true);
        }, 2500);
      }
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-lilac-cream/95 backdrop-blur-sm border-b border-lilac-text/10 px-8 py-6 text-lilac-text"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-serif font-medium tracking-wide">
          Lilac Template
        </div>

        <div className="space-x-8 font-sans text-sm tracking-widest uppercase">
          <Link href="/blog" className="hover:opacity-70 transition-opacity">
            Blog
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
