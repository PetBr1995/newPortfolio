"use client";
import { useEffect } from "react";

/**
 * Observador global que adiciona a classe ".in" aos elementos ".rv"
 * quando entram na viewport (anima o reveal ao rolar).
 */
export default function Reveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
