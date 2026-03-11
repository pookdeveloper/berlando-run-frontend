"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (!targets.length) {
      return;
    }

    gsap.fromTo(
      targets,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out"
      }
    );
  }, []);

  return null;
}
