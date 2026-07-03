"use client";
import { useEffect, useRef, useState } from "react";

const CIRC = 264;
const GAUGES = [
  { name: "React", pct: 95, d: "" },
  { name: "React Native", pct: 88, d: "d1" },
  { name: "TypeScript", pct: 85, d: "d2" },
  { name: "Node.js", pct: 87, d: "d3" },
  { name: "MongoDB", pct: 82, d: "d4" },
  { name: "Express", pct: 82, d: "d4" },
];

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
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-label rv">
          <span className="idx">[02]</span> Diagnóstico de Sistema
        </div>
        <h2 className="sec-title rv d1">
          Níveis de <span className="g">proficiência</span>
        </h2>
        <p className="sec-lead rv d1">
          Leitura em tempo real da stack técnica. Cada núcleo representa uma
          tecnologia do arsenal.
        </p>

        <div className="gauge-grid" style={{ marginTop: "38px" }}>
          {GAUGES.map((g) => (
            <Gauge key={g.name} {...g} />
          ))}
        </div>

        <div className="stack-cols">
          <div className="panel stack-col rv">
            <div className="p-head">
              <span>// FRONT_END</span>
              <span className="dotgrp"><i className="on" /><i className="on" /><i className="on" /></span>
            </div>
            <h3><span className="hx">01</span> Front-End</h3>
            <p>Interfaces web e mobile modernas e responsivas, com componentes reutilizáveis e foco em UX.</p>
            <div className="chips">
              {["React","React Native","TypeScript","JavaScript","HTML5","CSS3","Vite","Tailwind","Material UI"].map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
          <div className="panel stack-col rv d1">
            <div className="p-head">
              <span>// BACK_END</span>
              <span className="dotgrp"><i className="on" /><i className="on" /><i /></span>
            </div>
            <h3><span className="hx">02</span> Back-End</h3>
            <p>APIs REST, autenticação JWT e integração entre frontend e backend. Também com Python/Flask.</p>
            <div className="chips">
              {["Node.js","Express","APIs REST","JWT","Python","Flask","Axios"].map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
          <div className="panel stack-col rv d2">
            <div className="p-head">
              <span>// DATA_TOOLS</span>
              <span className="dotgrp"><i className="on" /><i /><i /></span>
            </div>
            <h3><span className="hx">03</span> Dados &amp; Ferramentas</h3>
            <p>Modelagem de dados, versionamento e as ferramentas do meu fluxo de trabalho.</p>
            <div className="chips">
              {["MongoDB","SQL","Git","GitHub","Postman","Figma","Notion"].map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
