export default function Education() {
  return (
    <section id="formacao">
      <div className="wrap">
        <div className="sec-label rv">
          <span className="idx">[05]</span> Base de Conhecimento
        </div>
        <h2 className="sec-title rv d1">
          Formação &amp; <span className="g">cursos</span>
        </h2>
        <div className="edu-grid" style={{ marginTop: "38px" }}>
          <div className="panel edu-col rv">
            <div className="p-head">
              <span>// ACADÊMICO</span>
              <span className="dotgrp"><i className="on" /><i className="on" /><i /></span>
            </div>
            <h3>▤ Formação Acadêmica</h3>
            <div className="edu-item">
              <div className="ei-t">Tecnólogo em Análise e Desenv. de Sistemas</div>
              <div className="ei-d">ESTÁCIO</div>
            </div>
            <div className="edu-item">
              <div className="ei-t">Técnico em Desenvolvimento de Software</div>
              <div className="ei-d">FPF TECH · EM ANDAMENTO</div>
            </div>
          </div>
          <div className="panel edu-col rv d1">
            <div className="p-head">
              <span>// CURSOS</span>
              <span className="dotgrp"><i className="on" /><i /><i /></span>
            </div>
            <h3>✦ Cursos Complementares</h3>
            <div className="edu-item">
              <div className="ei-t">Programador Web</div>
              <div className="ei-d">IFRS</div>
            </div>
            <div className="edu-item">
              <div className="ei-t">Programador Full Stack</div>
              <div className="ei-d">IFPK</div>
            </div>
            <div className="edu-item">
              <div className="ei-t">HTML5 e CSS3</div>
              <div className="ei-d">ONEBITCODE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
