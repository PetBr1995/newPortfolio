const CARDS = [
  { href: "mailto:dev.petersonbrito@gmail.com", ic: "✉", lbl: "E-mail", val: "dev.petersonbrito@gmail.com", ext: false },
  { href: "https://wa.me/5592981519333", ic: "☎", lbl: "WhatsApp / Telefone", val: "(92) 98151-9333", ext: true },
  { href: "https://github.com/PetBr1995", ic: "GH", lbl: "GitHub", val: "github.com/PetBr1995", ext: true },
  { href: "https://linkedin.com/in/peterson-brito-048380149", ic: "in", lbl: "LinkedIn", val: "Peterson Brito", ext: true },
];

export default function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="wrap">
        <div className="panel transmit rv">
          <div className="tx-label">// Contato</div>
          <h2>
            Vamos <span className="g">conversar</span>
          </h2>
          <p>Tem uma vaga ou projeto? Me chame por qualquer canal abaixo — respondo rápido.</p>

          <div className="contact-cards">
            {CARDS.map((c) => (
              <a
                key={c.lbl}
                href={c.href}
                className="cc"
                {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="cc-ic">{c.ic}</span>
                <span>
                  <span className="cc-lbl">{c.lbl}</span>
                  <span className="cc-val">{c.val}</span>
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
              ▤ Baixar currículo (PDF)
            </a>
          </div>

          <div className="contact-loc">
            ◉ <b>Manaus / AM</b> · Disponível para trabalho remoto
          </div>
        </div>
      </div>
    </section>
  );
}
