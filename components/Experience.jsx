const XP = [
  {
    delay: "",
    role: "Dev Front-end / Full Stack",
    date: "ABR/2025 — ATUAL",
    org: "// Digital Comunicação",
    items: [
      <>Desenvolvimento do painel administrativo <strong>Digital Educa</strong> em React.</>,
      "Dashboards interativos, componentes reutilizáveis e controle de acesso.",
      "Integração com APIs REST.",
      "Landing pages otimizadas para SEO, performance e conversão.",
    ],
    chips: ["React","JavaScript","Tailwind","Material UI","Axios"],
  },
  {
    delay: "d1",
    role: "Dev Web Full Stack",
    date: "JAN/2025 — ABR/2025",
    org: "// Central do Saber",
    items: [
      "Aplicação mobile em React Native com backend em Node.js.",
      "APIs REST com autenticação JWT e controle de presença via QR Code.",
      "Geração automática de certificados em PDF/DOCX.",
      "Conversão para PWA e sites institucionais em React + Vite.",
    ],
    chips: ["React Native","Node.js","MongoDB","JWT","Vite"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia">
      <div className="wrap">
        <div className="sec-label rv">
          <span className="idx">[04]</span> Log de Operações
        </div>
        <h2 className="sec-title rv d1">
          Experiência <span className="g">profissional</span>
        </h2>
        <div className="xp" style={{ marginTop: "38px" }}>
          {XP.map((x, i) => (
            <div className={`xp-item rv ${x.delay}`} key={i}>
              <div className="panel xp-body">
                <div className="xp-top">
                  <h3>{x.role}</h3>
                  <span className="xp-date">{x.date}</span>
                </div>
                <div className="xp-org">{x.org}</div>
                <ul className="xp-list">
                  {x.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
                <div className="chips">
                  {x.chips.map((c) => <span key={c}>{c}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
