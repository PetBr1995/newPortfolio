"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangProvider";

const CIRC = 264;
const GAUGES = [
  { name: "React", pct: 95, d: "" },
  { name: "React Native", pct: 88, d: "d1" },
  { name: "TypeScript", pct: 85, d: "d2" },
  { name: "Node.js", pct: 87, d: "d3" },
  { name: "MongoDB", pct: 82, d: "d4" },
  { name: "Express", pct: 82, d: "d4" },
];

const CHIPS = [
  ["React", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3", "Vite", "Tailwind", "Material UI"],
  ["Node.js", "Express", "APIs REST", "JWT", "Python", "Flask", "Axios"],
  ["MongoDB", "SQL", "Git", "GitHub", "Postman", "Figma", "Notion"],
];
const DOTS = [3, 2, 1];
const HX = ["01", "02", "03"];
const DELAY = ["", "d1", "d2"];

function Gauge({ name, pct, d }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const t = setInterval(() => {
      n += 2;
      if (n >= pct) {
        n = pct;
        clearInterval(t);
      }
      setVal(n);
    }, 22);
    return () => clearInterval(t);
  }, [inView, pct]);

  const offset = inView ? CIRC - (CIRC * pct) / 100 : CIRC;

  return (
    <div className={`gauge rv ${d}`} ref={ref}>
      <div className="g-wrap">
        <svg viewBox="0 0 100 100">
          <circle className="track" cx="50" cy="50" r="42" />
          <circle
            className="prog"
            cx="50"
            cy="50"
            r="42"
            style={{ strokeDashoffset: offset }}
          />
        </svg>
        <span className="g-val">{val}%</span>
      </div>
      <div className="g-name">{name}</div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLang();
  const s = t.skills;
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-label rv">
          <span className="idx">{s.idx}</span> {s.label}
        </div>
        <h2 className="sec-title rv d1">
          {s.title.a}
          <span className="g">{s.title.hl}</span>
        </h2>
        <p className="sec-lead rv d1">{s.lead}</p>

        <div className="gauge-grid" style={{ marginTop: "38px" }}>
          {GAUGES.map((g) => (
            <Gauge key={g.name} {...g} />
          ))}
        </div>

        <div className="stack-cols">
          {s.cols.map((col, i) => (
            <div className={`panel stack-col rv ${DELAY[i]}`} key={i}>
              <div className="p-head">
                <span>{col.head}</span>
                <span className="dotgrp">
                  {[0, 1, 2].map((dot) => (
                    <i key={dot} className={dot < DOTS[i] ? "on" : undefined} />
                  ))}
                </span>
              </div>
              <h3>
                <span className="hx">{HX[i]}</span> {col.title}
              </h3>
              <p>{col.p}</p>
              <div className="chips">
                {CHIPS[i].map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
