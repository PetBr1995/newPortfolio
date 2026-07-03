"use client";
import { useLang } from "./LangProvider";

const IC = ["▤", "✦", "◉", "☎"];

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <section id="sobre">
      <div className="wrap">
        <div className="sec-label rv">
          <span className="idx">{a.idx}</span> {a.label}
        </div>
        <h2 className="sec-title rv d1">
          {a.title.a}
          <span className="g">{a.title.hl}</span>
          {a.title.b}
        </h2>
        <div className="about-grid" style={{ marginTop: "34px" }}>
          <div className="panel about-body rv d1">
            <div className="p-head">
              <span>{a.head}</span>
              <span className="dotgrp">
                <i className="on" />
                <i className="on" />
                <i />
              </span>
            </div>
            <div style={{ paddingTop: "18px" }}>
              <p>
                {a.p1a}
                <strong>Peterson Brito de Albuquerque</strong>
                {a.p1b}
                <strong>{a.p1c}</strong>
              </p>
              <p>
                {a.p2a}
                <strong>{a.p2b}</strong>
                {a.p2c}
              </p>
              <p>
                {a.p3a}
                <strong>{a.p3b}</strong>
                {a.p3c}
              </p>
              <div className="tags">
                {a.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="panel id-card rv d2">
            <div className="p-head">
              <span>{a.idCardHead}</span>
              <span className="dotgrp">
                <i className="on" />
                <i />
                <i />
              </span>
            </div>
            {a.idCard.map((row, i) => (
              <div className="id-row" key={i}>
                <div className="ir-ic">{IC[i]}</div>
                <div>
                  <div className="ir-t">{row.t}</div>
                  <div className="ir-d">{row.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
