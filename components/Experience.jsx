"use client";
import { useLang } from "./LangProvider";

const STATIC = [
  { delay: "", org: "// Digital Comunicação", chips: ["React", "JavaScript", "Tailwind", "Material UI", "Axios"] },
  { delay: "d1", org: "// Central do Saber", chips: ["React Native", "Node.js", "MongoDB", "JWT", "Vite"] },
];

export default function Experience() {
  const { t } = useLang();
  const e = t.experience;
  return (
    <section id="experiencia">
      <div className="wrap">
        <div className="sec-label rv">
          <span className="idx">{e.idx}</span> {e.label}
        </div>
        <h2 className="sec-title rv d1">
          {e.title.a}
          <span className="g">{e.title.hl}</span>
        </h2>
        <div className="xp" style={{ marginTop: "38px" }}>
          {e.items.map((x, i) => (
            <div className={`xp-item rv ${STATIC[i].delay}`} key={i}>
              <div className="panel xp-body">
                <div className="xp-top">
                  <h3>{x.role}</h3>
                  <span className="xp-date">{x.date}</span>
                </div>
                <div className="xp-org">{STATIC[i].org}</div>
                <ul className="xp-list">
                  {x.bullets.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
                <div className="chips">
                  {STATIC[i].chips.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
