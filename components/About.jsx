export default function About() {
  return (
    <section id="sobre">
      <div className="wrap">
        <div className="sec-label rv">
          <span className="idx">[01]</span> Perfil do Operador
        </div>
        <h2 className="sec-title rv d1">
          Do <span className="g">frontend</span> ao banco de dados
        </h2>
        <div className="about-grid" style={{ marginTop: "34px" }}>
          <div className="panel about-body rv d1">
            <div className="p-head">
              <span>// DOSSIÊ_PETERSON.LOG</span>
              <span className="dotgrp">
                <i className="on" />
                <i className="on" />
                <i />
              </span>
            </div>
            <div style={{ paddingTop: "18px" }}>
              <p>
                Sou <strong>Peterson Brito de Albuquerque</strong>, desenvolvedor
                full stack em Manaus/AM. Tenho experiência no desenvolvimento de
                aplicações web e mobile com{" "}
                <strong>React, React Native, Node.js, JavaScript e TypeScript</strong>.
              </p>
              <p>
                Atuo na construção de dashboards administrativos, APIs REST,
                autenticação JWT, integração entre frontend e backend, PWAs e
                sistemas de gestão. Trabalho com{" "}
                <strong>MongoDB, SQL e Git</strong>, com foco em performance e
                qualidade de código.
              </p>
              <p>
                Também aplico <strong>Engenharia de Prompt</strong> ao
                desenvolvimento de software para acelerar entregas e resolver
                problemas com mais eficiência.
              </p>
              <div className="tags">
                <span>CLEAN_CODE</span>
                <span>PERFORMANCE</span>
                <span>WEB_&amp;_MOBILE</span>
                <span>JWT_AUTH</span>
                <span>PROMPT_ENG</span>
              </div>
            </div>
          </div>

          <div className="panel id-card rv d2">
            <div className="p-head">
              <span>// ID_CARD</span>
              <span className="dotgrp">
                <i className="on" />
                <i />
                <i />
              </span>
            </div>
            <div className="id-row">
              <div className="ir-ic">▤</div>
              <div>
                <div className="ir-t">Full Stack Developer</div>
                <div className="ir-d">WEB &amp; MOBILE · REACT · NODE</div>
              </div>
            </div>
            <div className="id-row">
              <div className="ir-ic">✦</div>
              <div>
                <div className="ir-t">Análise e Desenv. de Sistemas</div>
                <div className="ir-d">ESTÁCIO · TECNÓLOGO</div>
              </div>
            </div>
            <div className="id-row">
              <div className="ir-ic">◉</div>
              <div>
                <div className="ir-t">Manaus / AM</div>
                <div className="ir-d">DISPONÍVEL · REMOTO</div>
              </div>
            </div>
            <div className="id-row">
              <div className="ir-ic">☎</div>
              <div>
                <div className="ir-t">(92) 98151-9333</div>
                <div className="ir-d">DEV.PETERSONBRITO@GMAIL.COM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
