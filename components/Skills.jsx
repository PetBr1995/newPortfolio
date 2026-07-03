"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangProvider";

const CIRC = 264;
const ICON_COLOR = "31e1ff"; // ciano do tema
// Apenas as tecnologias (badges visuais iguais). slug = Simple Icons.
const GAUGES = [
  { name: "React", slug: "react", d: "" },
  { name: "React Native", slug: "react", d: "d1" },
  { name: "Node.js", slug: "nodedotjs", d: "d2" },
  { name: "TypeScript", slug: "typescript", d: "d3" },
  { name: "MongoDB", slug: "mongodb", d: "d4" },
  { name: "Express", slug: "express", d: "d4" },
];

const CHIPS = [
  ["React", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3", "Vite", "Tailwind", "Material UI"],
  ["Node.js", "Express", "APIs REST", "JWT", "Python", "Flask", "Axios"],
  ["MongoDB", "SQL", "Git", "GitHub", "Postman", "Figma", "Notion"],
];
const DOTS = [3, 2, 1];
const HX = ["01", "02", "03"];
const DELAY = ["", "d1", "d2"];

function Gauge({ name, slug, d }) {
  const ref = useRef(null);
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

  // anel decorativo: todos iguais (desenha completo ao entrar na tela)
  const offset = inView ? 0 : CIRC;

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="g-ico"
          src={`https://cdn.simpleicons.org/${slug}/${ICON_COLOR}`}
          alt={name}
          loading="lazy"
        />
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
