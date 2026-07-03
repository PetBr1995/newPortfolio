import { ImageResponse } from "next/og";

export const alt = "Peterson Brito — Desenvolvedor Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagem de compartilhamento (WhatsApp, LinkedIn, X...) gerada dinamicamente.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background:
            "linear-gradient(135deg,#01060e 0%,#03141f 55%,#020c16 100%)",
          color: "#eef8fc",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* anéis decorativos (reator) */}
        <div
          style={{
            position: "absolute",
            right: "-170px",
            top: "120px",
            width: "560px",
            height: "560px",
            borderRadius: "280px",
            border: "2px solid rgba(49,225,255,0.30)",
            boxShadow: "0 0 140px rgba(49,225,255,0.22)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-40px",
            top: "245px",
            width: "310px",
            height: "310px",
            borderRadius: "155px",
            border: "2px solid rgba(49,225,255,0.55)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "24px",
            letterSpacing: "6px",
            color: "#31e1ff",
            marginBottom: "26px",
          }}
        >
          <div
            style={{
              width: "46px",
              height: "2px",
              background: "#31e1ff",
              marginRight: "16px",
              display: "flex",
            }}
          />
          PETERSON.OS
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "96px",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-2px",
          }}
        >
          PETERSON BRITO
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "46px",
            fontWeight: 700,
            color: "#31e1ff",
            marginTop: "18px",
          }}
        >
          Desenvolvedor Full Stack
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "27px",
            color: "#7fa7bd",
            marginTop: "30px",
            letterSpacing: "1px",
          }}
        >
          React · React Native · Node.js · TypeScript · MongoDB
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "22px",
            color: "#4f7488",
            marginTop: "46px",
            letterSpacing: "3px",
          }}
        >
          MANAUS / AM · BRASIL
        </div>
      </div>
    ),
    { ...size }
  );
}
