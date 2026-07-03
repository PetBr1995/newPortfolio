"use client";
import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    let w, h, stars, raf;

    function init() {
      w = cv.width = window.innerWidth;
      h = cv.height = window.innerHeight;
      stars = [];
      const n = Math.min(120, Math.floor((w * h) / 14000));
      for (let i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random() * 0.8 + 0.2,
          s: Math.random() * 1.4 + 0.3,
        });
      }
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const st of stars) {
        st.y += st.z * 0.15;
        if (st.y > h) {
          st.y = 0;
          st.x = Math.random() * w;
        }
        ctx.globalAlpha = st.z;
        ctx.fillStyle = "#31e1ff";
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.s * st.z, 0, 7);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    init();
    draw();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <>
      <div className="bg-grad" />
      <canvas id="stars" ref={canvasRef} />
      <div className="bg-grid" />
      <div className="scanlines" />
      <div className="vignette" />
    </>
  );
}
