"use client";
import { useEffect, useState } from "react";
import { useLang } from "./LangProvider";

export default function Boot() {
  const { t } = useLang();
  const LINES = t.boot;
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      if (i < LINES.length) setIdx(i);
      else clearInterval(timer);
    }, 550);
    const off = setTimeout(() => setDone(true), 2300);
    return () => {
      clearInterval(timer);
      clearTimeout(off);
    };
  }, [LINES.length]);

  const log = LINES[Math.min(idx, LINES.length - 1)];

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
