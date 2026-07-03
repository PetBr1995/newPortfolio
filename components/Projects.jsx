"use client";
import { useEffect, useState } from "react";
import { useLang } from "./LangProvider";

// Dados que NÃO traduzem (links, imagens, chips, ids)
const STATIC = [
  {
    feat: true,
    id: "M-01",
    chips: ["React Native", "Node.js", "MongoDB", "JWT", "QR Code", "PWA"],
    href: "https://github.com/PetBr1995/AppDiaconato-FrontEnd",
  },
  {
    id: "M-02",
    chips: ["React", "Material UI", "React Router", "Recharts", "Axios"],
    img: "https://i.imgur.com/vE08ex1.jpeg",
    imgAlt: "Digital Educa",
    href: "https://github.com/PetBr1995/Digital-Educa---Painel-Administrativo",
  },
  {
    id: "M-03",
    chips: ["Next.js", "React", "SEO", "Performance"],
    img: "https://dsx.com.vc/banners/banner-teatro-amazonas-1920.webp",
    imgAlt: "DSX 2026",
    live: "https://dsx.com.vc/",
  },
  {
    id: "M-04",
    chips: ["React", "Landing Page", "SEO", "Responsivo"],
    img: "https://sintoniademulher.com.br/HeroBanner.png?v=20260417",
    imgAlt: "Sintonia de Mulher",
    live: "https://sintoniademulher.com.br/",
  },
];
const TITLES = ["App Diaconato", "Digital Educa", "DSX 2026", "Sintonia de Mulher"];
const DELAY = ["", "d1", "d2", "d1"];

function Wave() {
  const [bars, setBars] = useState([]);
  useEffect(() => {
    setBars(Array.from({ length: 28 }, () => 12 + Math.random() * 70));
  }, []);
  return (
    <div className="wave">
      {bars.map((h, i) => (
        <i key={i} style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}

function Project({ p, btnCode, btnLive }) {
  return (
    <article className={`panel proj${p.feat ? " feat" : ""} rv ${p.delay}`}>
      <div className={`p-scan${p.img ? " shot" : ""}`}>
        {p.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="p-shot" src={p.img} alt={p.imgAlt} loading="lazy" />
        ) : (
          <Wave />
        )}
        <div className="sweep" />
      </div>
      <span className="p-tag">{p.tag}</span>
      <span className="p-status">
        <i />
        {p.statusBadge}
      </span>
      <div className="p-body">
        <h3>
          {p.title} <span className="arw">↗</span>
        </h3>
        <div className="meta">
          {p.meta.map(([k, v]) => (
            <span key={k}>
              {k} · <b>{v}</b>
            </span>
          ))}
        </div>
        <p>{p.desc}</p>
        {p.impact && (
          <div className="p-impact">
            <b>{p.impactLabel} ·</b> {p.impact}
          </div>
        )}
        <div className="chips">
          {p.chips.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        <div className="p-links">
          {p.live ? (
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="pbtn solid">
              ◉ {btnLive}
            </a>
          ) : (
            <a href={p.href} target="_blank" rel="noopener noreferrer" className="pbtn solid">
              ▲ {btnCode}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useLang();
  const P = t.projects;

  const projects = STATIC.map((s, i) => {
    const it = P.items[i];
    const meta = [
      [P.meta.id, s.id],
      [P.meta.type, it.type],
    ];
    if (s.feat) meta.push([P.meta.status, P.statusActive]);
    return { ...s, ...it, title: TITLES[i], delay: DELAY[i], meta };
  });

  return (
    <section id="projetos">
      <div className="wrap">
        <div className="sec-label rv">
          <span className="idx">{P.idx}</span> {P.label}
        </div>
        <h2 className="sec-title rv d1">
          {P.title.a}
          <span className="g">{P.title.hl}</span>
        </h2>
        <p className="sec-lead rv d1">{P.lead}</p>

        <div className="proj-grid" style={{ marginTop: "38px" }}>
          {projects.map((p, i) => (
            <Project key={i} p={p} btnCode={P.btnCode} btnLive={P.btnLive} />
          ))}
        </div>
      </div>
    </section>
  );
}
