"use client";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon, MailIcon } from "./Icons";
import { useLang } from "./LangProvider";

const CARDS = [
  { href: "mailto:dev.petersonbrito@gmail.com", ic: <MailIcon size={22} />, val: "dev.petersonbrito@gmail.com", ext: false },
  { href: "https://wa.me/5592981519333", ic: <WhatsAppIcon size={22} />, val: "(92) 98151-9333", ext: true },
  { href: "https://github.com/PetBr1995", ic: <GitHubIcon size={22} />, val: "github.com/PetBr1995", ext: true },
  { href: "https://linkedin.com/in/peterson-brito-048380149", ic: <LinkedInIcon size={22} />, val: "Peterson Brito", ext: true },
];

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  return (
    <section className="contact" id="contato">
      <div className="wrap">
        <div className="panel transmit rv">
          <div className="tx-label">{c.label}</div>
          <h2>
            {c.title.a}
            <span className="g">{c.title.hl}</span>
          </h2>
          <p>{c.p}</p>

          <div className="contact-cards">
            {CARDS.map((card, i) => (
              <a
                key={i}
                href={card.href}
                className="cc"
                {...(card.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="cc-ic">{card.ic}</span>
                <span>
                  <span className="cc-lbl">{c.cards[i]}</span>
                  <span className="cc-val">{card.val}</span>
                </span>
                <span className="cc-arw">↗</span>
              </a>
            ))}
          </div>

          <div className="hero-cta" style={{ marginTop: "26px", position: "relative" }}>
            <a
              href="/curriculo-peterson-brito.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              ▤ {c.cvBtn}
            </a>
          </div>

          <div className="contact-loc">
            {c.loc.pre}
            <b>{c.loc.city}</b>
            {c.loc.suf}
          </div>
        </div>
      </div>
    </section>
  );
}
