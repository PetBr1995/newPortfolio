"use client";
import { useEffect, useState } from "react";

const PROJECTS = [
  {
    feat: true,
    delay: "",
    tag: "App Mobile / PWA",
    title: "App Diaconato",
    status: "DEPLOYED",
    meta: [["ID","M-01"],["TIPO","Mobile+API"],["STATUS","Ativo"]],
    desc: "Aplicativo mobile completo com backend próprio: controle de presença via QR Code, autenticação JWT, geração automática de certificados em PDF/DOCX e conversão para Progressive Web App (PWA).",
    impactLabel: "Impacto",
    impact: "Eliminou servidores locais e redes cabeadas — presença por QR Code funcionando offline e certificados gerados automaticamente.",
    chips: ["React Native","Node.js","MongoDB","JWT","QR Code","PWA"],
    href: "https://github.com/PetBr1995/AppDiaconato-FrontEnd",
  },
  {
    delay: "d1",
    tag: "Dashboard",
    title: "Digital Educa",
    status: "DEPLOYED",
    meta: [["ID","M-02"],["TIPO","Admin"]],
    desc: "Painel administrativo em React com dashboards interativos, componentes reutilizáveis, controle de acesso e integração com APIs REST.",
    impactLabel: "Impacto",
    impact: "MVP do painel entregue em 30 dias para o lançamento no DSX Summit, com cadastro e gestão de conteúdos automatizados.",
    chips: ["React","Material UI","React Router","Recharts","Axios"],
    img: "https://i.imgur.com/vE08ex1.jpeg",
    imgAlt: "Prévia do painel Digital Educa",
    href: "https://github.com/PetBr1995/Digital-Educa---Painel-Administrativo",
  },
  {
    delay: "d2",
    tag: "Landing Page",
    title: "DSX 2026",
    status: "NO AR",
    meta: [["ID","M-03"],["TIPO","Landing"],["STATUS","Online"]],
    desc: "Landing page do DSX 2026 — Digital Summit Experience, o maior evento de negócios, marketing e inovação do Norte. Página de alta conversão com contagem regressiva, seção de palestrantes, ingressos e integração com a Sympla.",
    impactLabel: "No ar",
    impact: "Landing do maior evento de negócios do Norte — mais de 3.000 participantes e 40 palestrantes.",
    chips: ["Next.js","React","SEO","Performance"],
    img: "https://dsx.com.vc/banners/banner-teatro-amazonas-1920.webp",
    imgAlt: "Prévia do site DSX 2026",
    live: "https://dsx.com.vc/",
  },
  {
    delay: "d1",
    tag: "Landing Page",
    title: "Sintonia de Mulher",
    status: "NO AR",
    meta: [["ID","M-04"],["TIPO","Landing"],["STATUS","Online"]],
    desc: "Landing page do evento Sintonia de Mulher, voltado a mulheres executivas e empreendedoras para organizar os 5 pilares da vida. Página de alta conversão, identidade visual forte e foco em captação de inscrições.",
    impactLabel: "No ar",
    impact: "Página de captação de inscrições para evento feminino em Manaus, com identidade visual própria.",
    chips: ["React","Landing Page","SEO","Responsivo"],
    img: "https://sintoniademulher.com.br/HeroBanner.png?v=20260417",
    imgAlt: "Prévia do site Sintonia de Mulher",
    live: "https://sintoniademulher.com.br/",
  },
];

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

function Project({ p }) {
  return (
    <article className={`panel proj${p.feat ? " feat" : ""} rv ${p.delay}`}>
      <div className={`p-scan${p.img ? " shot" : ""}`}>
        {p.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="p-shot" src={p.img} alt={p.imgAlt || `Prévia ${p.title}`} loading="lazy" />
        ) : (
          <Wave />
        )}
        <div className="sweep" />
      </div>
      <span className="p-tag">{p.tag}</span>
      <span className="p-status">
        <i />
        {p.status || "DEPLOYED"}
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
            <b>{p.impactLabel || "Impacto"} ·</b> {p.impact}
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
              ◉ Ver site ao vivo
            </a>
          ) : (
            <a href={p.href} target="_blank" rel="noopener noreferrer" className="pbtn solid">
              ▲ Código no GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projetos">
      <div className="wrap">
        <div className="sec-label rv">
          <span className="idx">[03]</span> Registro de Missões
        </div>
        <h2 className="sec-title rv d1">
          Projetos <span className="g">implantados</span>
        </h2>
        <p className="sec-lead rv d1">
          Cada projeto é uma missão concluída — do conceito ao deploy em produção.
        </p>

        <div className="proj-grid" style={{ marginTop: "38px" }}>
          {PROJECTS.map((p, i) => (
            <Project key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
