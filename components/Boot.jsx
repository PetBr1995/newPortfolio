"use client";
import { useEffect, useState } from "react";

const LINES = [
  "INICIANDO SISTEMA...",
  "CARREGANDO MÓDULOS...",
  "CONECTANDO NÚCLEO...",
  "PETERSON.OS ONLINE ✓",
];

export default function Boot() {
  const [log, setLog] = useState(LINES[0]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      if (i < LINES.length) setLog(LINES[i]);
      else clearInterval(t);
    }, 550);
    const off = setTimeout(() => setDone(true), 2300);
    return () => {
      clearInterval(t);
      clearTimeout(off);
    };
  }, []);

  return (
    <div id="boot" className={done ? "done" : undefined}>
      <div className="boot-core" />
      <div className="boot-log mono">{log}</div>
      <div className="boot-bar">
        <i />
      </div>
    </div>
  );
}
