"use client";
import { useEffect, useState } from "react";
import logo from "../src/logo_site_portifolio2.png";

const MESES = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"];
const pad = (n) => String(n).padStart(2, "0");

const NAV = [
  { href: "#sobre", label: "SOBRE" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projetos", label: "PROJETOS" },
  { href: "#experiencia", label: "LOG" },
  { href: "#contato", label: "CONTATO" },
];

export default function TopBar() {
  const [time, setTime] = useState("00:00:00");
  const [date, setDate] = useState("-- --- ----");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
      setDate(`${pad(d.getDate())} ${MESES[d.getMonth()]} ${d.getFullYear()}`);
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href));
    const onScroll = () => {
      const y = window.scrollY + 140;
      let idx = 0;
      sections.forEach((s, i) => {
        if (s && s.offsetTop <= y) idx = i;
      });
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="topbar">
      <a href="#top" className="brand-logo" aria-label="Peterson Brito — início">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="brand-img" src={logo.src} alt="Peterson Brito — Desenvolvedor Full Stack" />
      </a>

      <nav className={`topnav${open ? " open" : ""}`}>
        {NAV.map((n, i) => (
          <a
            key={n.href}
            href={n.href}
            className={`mono${i === active ? " active" : ""}`}
            onClick={() => setOpen(false)}
          >
            {n.label}
          </a>
        ))}
      </nav>

      <div className="sysclock">
        <div className="t">{time}</div>
        <div className="d">{date}</div>
      </div>

      <button
        className={`burger${open ? " x" : ""}`}
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  );
}
