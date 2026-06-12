"use client";

import { CSSProperties } from "react";

const mono = "var(--font-jetbrains), monospace";
const display = "var(--font-newsreader), serif";

type Project = {
  index: string;
  chip: string;
  title: string;
  description: string;
  outcomes: string[];
  tags: string[];
  liveUrl: string;
  liveNote?: string;
  github: string;
  imageOrder: "left" | "right";
  /** Real screenshot/diagram path under /public. Falls back to a mock frame if absent. */
  image?: string;
  /** How the image fills the slot. "cover" (default) for screenshots, "contain" for diagrams. */
  imageFit?: "cover" | "contain";
  /** Looping muted video path under /public (e.g. a screen recording). Takes priority over image. */
  video?: string;
  imageAlt: string;
  mockUrl: string;
};

const projects: Project[] = [
  {
    index: "01",
    chip: "2024–2025 · SaaS",
    title: "SmartSendr",
    description:
      "Personalized cold emails, scaled — an AI outreach platform that turns your résumé and contacts into tailored messages. I built the whole thing: database architecture, a FastAPI backend with 10+ documented REST endpoints, auth, campaign management, and OpenAI integration with quality filters.",
    outcomes: [
      "Cut manual post-processing per campaign by ~70%",
      "GDPR-compliant storage for contact & comms data",
    ],
    tags: ["React", "FastAPI", "PostgreSQL", "OpenAI API", "Firebase"],
    liveUrl: "https://smartsendr.org",
    github: "https://github.com/DaliGaoudi",
    imageOrder: "right",
    image: "/smartsendr.png",
    imageAlt: "SmartSendr landing page",
    mockUrl: "smartsendr.org",
  },
  {
    index: "02",
    chip: "2024–2025 · SaaS",
    title: "Bailiff Office Intelligence",
    description:
      "Modernized a legacy system into a cloud-native SaaS platform and migrated all historical data without losing integrity. Designed RESTful APIs for financial transactions, case and user management — fully containerized.",
    outcomes: [
      "AI doc generation: ~15 min → under 2 min",
      "Serverless deploy on Vercel, CI/CD via GitHub Actions",
    ],
    tags: ["React", "Node / Express", "PostgreSQL", "Docker", "OpenRouter"],
    liveUrl: "https://bailiff-demo.vercel.app",
    github: "https://github.com/DaliGaoudi",
    imageOrder: "left",
    image: "/bailiff-dashboard.png",
    imageAlt: "Bailiff Office Intelligence — dashboard (demo data)",
    mockUrl: "office.vercel.app",
  },
];

const tagStyle: CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  color: "var(--text)",
  background: "var(--surface-2)",
  padding: "5px 11px",
  borderRadius: 6,
};

function MockShot({
  url,
  alt,
  image,
  video,
  fit = "cover",
}: {
  url: string;
  alt: string;
  image?: string;
  video?: string;
  fit?: "cover" | "contain";
}) {
  if (video) {
    return (
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt}
        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", minHeight: 360, background: "var(--bg)" }}
      />
    );
  }
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={image}
        alt={alt}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: fit,
          minHeight: 360,
          background: fit === "contain" ? "var(--surface)" : undefined,
        }}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={alt}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(140deg, oklch(0.24 0.02 264), oklch(0.2 0.015 264))",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "11px 14px",
          borderBottom: "1px solid var(--line)",
          background: "oklch(0.235 0.015 264)",
        }}
      >
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "oklch(0.66 0.16 25)" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "oklch(0.8 0.13 85)" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "oklch(0.78 0.15 145)" }} />
        <span
          style={{
            marginLeft: 10,
            fontFamily: mono,
            fontSize: 11,
            color: "var(--muted)",
            background: "var(--bg)",
            borderRadius: 6,
            padding: "3px 12px",
          }}
        >
          {url}
        </span>
      </div>
      <div
        style={{
          flex: 1,
          display: "grid",
          placeItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "var(--accent-15)",
            filter: "blur(70px)",
          }}
        />
        <div
          style={{
            position: "relative",
            fontFamily: mono,
            fontSize: 12,
            color: "var(--muted)",
            textAlign: "center",
            lineHeight: 1.8,
          }}
        >
          <span style={{ color: "var(--accent)" }}>{"// screenshot"}</span>
          <br />
          drop a real image into /public
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const onCardOver = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 28px 60px -30px oklch(0 0 0 / 0.75)";
    e.currentTarget.style.borderColor = "var(--accent-30)";
  };
  const onCardOut = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.borderColor = "var(--line)";
  };

  return (
    <section id="work" style={{ padding: "104px 0 90px" }}>
      <div
        className="reveal"
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 52,
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <h2
          style={{
            fontFamily: display,
            fontWeight: 500,
            fontSize: "clamp(34px, 4vw, 50px)",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Built from zero to{" "}
          <span style={{ fontStyle: "italic", color: "var(--accent)" }}>production</span>
        </h2>
        <span style={{ fontFamily: mono, fontSize: "12.5px", color: "var(--muted)" }}>
          02 PLATFORMS · SOLO
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        {projects.map((p) => {
          const text = (
            <div
              key="text"
              style={{
                padding: 44,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
                  <span style={{ fontFamily: mono, fontSize: 12, color: "var(--accent)" }}>{p.index}</span>
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: 11,
                      color: "var(--muted)",
                      border: "1px solid var(--line)",
                      padding: "4px 10px",
                      borderRadius: 999,
                    }}
                  >
                    {p.chip}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: display,
                    fontWeight: 500,
                    fontSize: 32,
                    letterSpacing: "-0.01em",
                    margin: "0 0 14px",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: "15.5px",
                    lineHeight: 1.62,
                    color: "var(--muted)",
                    margin: "0 0 22px",
                    maxWidth: "34em",
                    textWrap: "pretty",
                  }}
                >
                  {p.description}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 24 }}>
                  {p.outcomes.map((o) => (
                    <div
                      key={o}
                      style={{ display: "flex", alignItems: "baseline", gap: 11, fontSize: 14, color: "var(--text)" }}
                    >
                      <span style={{ color: "var(--accent)", fontFamily: mono, fontSize: 13 }}>↳</span>
                      {o}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {p.tags.map((t) => (
                    <span key={t} style={tagStyle}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 34 }}>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--accent)",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "0.75")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Live demo <span style={{ fontFamily: mono }}>↗</span>
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener"
                  style={{ fontFamily: mono, fontSize: 13, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "var(--text)")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  GitHub
                </a>
              </div>
            </div>
          );

          const imageOnLeft = p.imageOrder === "left";
          const imageCol = (
            <div
              key="image"
              style={{
                position: "relative",
                minHeight: 360,
                ...(imageOnLeft
                  ? { borderRight: "1px solid var(--line)" }
                  : { borderLeft: "1px solid var(--line)" }),
              }}
            >
              <MockShot url={p.mockUrl} alt={p.imageAlt} image={p.image} video={p.video} fit={p.imageFit} />
            </div>
          );

          return (
            <article
              key={p.title}
              className="reveal work-card"
              data-image-order={p.imageOrder}
              style={{
                display: "grid",
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: 18,
                overflow: "hidden",
                transition:
                  "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.4s",
              }}
              onMouseOver={onCardOver}
              onMouseOut={onCardOut}
            >
              {imageOnLeft ? [imageCol, text] : [text, imageCol]}
            </article>
          );
        })}
      </div>
    </section>
  );
}
