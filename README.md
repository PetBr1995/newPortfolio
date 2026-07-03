# Peterson Brito - Portfólio (Next.js)

Portfólio HUD/sci-fi de **Peterson Brito de Albuquerque** convertido para **Next.js 14 (App Router)**.

## Rodando localmente

Pré-requisito: Node.js 18.17+ instalado.

```bash
npm install
npm run dev
```

Abra http://localhost:3000

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # roda o build de produção
npm run lint    # lint
```

## Estrutura

```
nextjs-portfolio/
├─ app/
│  ├─ layout.js      # <html>, fontes (next/font), metadata/SEO
│  ├─ page.js        # composição da página
│  └─ globals.css    # design system HUD completo
├─ components/
│  ├─ Background.jsx # starfield (canvas), grid, scanlines  [client]
│  ├─ Boot.jsx       # sequência de boot                    [client]
│  ├─ TopBar.jsx     # relógio ao vivo, menu, nav ativo      [client]
│  ├─ Hero.jsx       # reator, relógio do núcleo, digitação  [client]
│  ├─ Ticker.jsx     # esteira de tecnologias
│  ├─ About.jsx      # perfil + ID card
│  ├─ Skills.jsx     # gauges radiais animados               [client]
│  ├─ Projects.jsx   # projetos (mission logs)               [client]
│  ├─ Experience.jsx # experiência (log de operações)
│  ├─ Education.jsx  # formação & cursos
│  ├─ Contact.jsx    # cards de contato/links
│  ├─ Footer.jsx     # rodapé
│  └─ Reveal.jsx     # observer de reveal no scroll          [client]
├─ package.json
├─ next.config.mjs
└─ jsconfig.json
```

## Fontes

Carregadas via `next/font/google` (Orbitron, Rajdhani, Share Tech Mono) e expostas
como variáveis CSS (`--font-orbitron`, `--font-rajdhani`, `--font-techmono`) usadas
no `globals.css`.

## Deploy

Recomendado na **Vercel** (`vercel` ou conectando o repositório do GitHub).
Também funciona em qualquer host que rode Node. Para site estático, use
`output: 'export'` no `next.config.mjs` e `npm run build`.

## A ajustar

- Links dos projetos apontam para o perfil `github.com/PetBr1995`.
  Troque `GITHUB` / `href` em `components/Projects.jsx` pelos repositórios reais.
- Percentuais das skills em `components/Skills.jsx` (array `GAUGES`).
