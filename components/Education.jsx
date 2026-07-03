"use client";
import { useLang } from "./LangProvider";

export default function Education() {
  const { t } = useLang();
  const e = t.education;
  return (
    <section id="formacao">
      <div className="wrap">
        <div className="sec-label rv">
          <span className="idx">{e.idx}</span> {e.label}
        </div>
        <h2 className="sec-title rv d1">
          {e.title.a}
          <span className="g">{e.title.hl}</span>
        </h2>
        <div className="edu-grid" style={{ marginTop: "38px" }}>
          <div className="panel edu-col rv">
            <div className="p-head">
              <span>{e.col1Head}</span>
              <span className="dotgrp"><i className="on" /><i className="on" /><i /></span>
            </div>
            <h3>▤ {e.col1Title}</h3>
            {e.acad.map((it, i) => (
              <div className="edu-item" key={i}>
                <div className="ei-t">{it.t}</div>
                <div className="ei-d">{it.d}</div>
              </div>
            ))}
          </div>
          <div className="panel edu-col rv d1">
            <div className="p-head">
              <span>{e.col2Head}</span>
              <span className="dotgrp"><i className="on" /><i /><i /></span>
            </div>
            <h3>✦ {e.col2Title}</h3>
            {e.courses.map((it, i) => (
              <div className="edu-item" key={i}>
                <div className="ei-t">{it.t}</div>
                <div className="ei-d">{it.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
