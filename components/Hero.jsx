"use client";
import { useEffect, useRef, useState } from "react";

const pad = (n) => String(n).padStart(2, "0");
const PHRASES = [
  "> web & mobile · react + node",
  "> apis rest · jwt · mongodb",
  "> do conceito ao deploy_",
];
const TICKS = Array.from({ length: 48 }, (_, i) => i);

export default function Hero() {
  const [coreTime, setCoreTime] = useState("03:09");
  const [stat, setStat] = useState("CPU 62% · MEM 41%");
  const [typed, setTyped] = useState("");
  const reactorRef = useRef(null);

  /* relógio do núcleo */
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setCoreTime(`${pad(d.getHours())}:${pad(d.getMinutes())}`);
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  /* telemetria fake */
  useEffect(() => {
    const t = setInterval(() => {
      const cpu = 55 + Math.floor(Math.random() * 20);
      const mem = 38 + Math.floor(Math.random() * 12);
      setStat(`CPU ${cpu}% · MEM ${mem}%`);
    }, 1800);
    return () => clearInterval(t);
  }, []);

  /* efeito de digitação */
  useEffect(() => {
    let p = 0, ch = 0, del = false, timer;
    const loop = () => {
      const cur = PHRASES[p];
      setTyped(cur.slice(0, ch));
      if (!del) {
        ch++;
        if (ch > cur.length) {
          del = true;
          timer = setTimeout(loop, 1400);
          return;
        }
      } else {
        ch--;
        if (ch < 0) {
          del = false;
          p = (p + 1) % PHRASES.length;
          ch = 0;
        }
      }
      timer = setTimeout(loop, del ? 34 : 62);
    };
    const start = setTimeout(loop, 2500);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, []);

  /* parallax do reator */
  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      if (reactorRef.current)
        reactorRef.current.style.transform = `translate(${x * 14}px,${y * 14}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          {/* REACTOR */}
          <div className="reactor-wrap">
            <div className="reactor" ref={reactorRef}>
              <div className="ring r-outer" />
              <div className="ring r-ticks">
                {TICKS.map((i) => (
                  <span
                    key={i}
                    className="tickmark"
                    style={{
                      transform: `rotate(${i * 7.5}deg)`,
                      ...(i % 4 === 0
                        ? { height: "16px", background: "var(--cy)" }
                        : {}),
                    }}
                  />
                ))}
              </div>
              <div className="ring r-dash" />
              <div className="ring r-seg" />
              <div className="ring r-thin" />
              <div className="ring r-glow" />
              <div className="radar" />
              <div className="r-core">
                <div>
                  <div className="rc-time">{coreTime}</div>
                  <div className="rc-lbl">Full Stack</div>
                  <div className="rc-stat">{stat}</div>
                </div>
              </div>
            </div>

            <div className="hero-name">
              <div className="role rv">Desenvolvedor Full Stack</div>
              <h1 className="rv d1">
                PETERSON <span className="hl">BRITO</span>
              </h1>
              <div className="type mono rv d2">
                <span>{typed}</span>
                <span className="cur">▌</span>
              </div>
              <div className="hero-cta rv d3">
                <a href="#projetos" className="btn btn-primary">▶ Iniciar</a>
                <a href="#contato" className="btn btn-ghost">Transmitir</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
