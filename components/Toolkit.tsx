const mono = "var(--font-jetbrains), monospace";

const groups: { heading: string; items: string }[] = [
  { heading: "FRONTEND", items: "React · Angular · TypeScript · JavaScript · PWA · Webpack" },
  { heading: "BACKEND", items: "Node (Express, NestJS) · FastAPI · Python · Java · REST · Microservices" },
  { heading: "DATA & CLOUD", items: "PostgreSQL · SQL/NoSQL · Firebase · Docker · GitHub Actions · GCP · Vercel" },
  { heading: "AI & QUALITY", items: "OpenAI · OpenRouter · LLM Integration · Jest · pytest · Postman" },
];

export default function Toolkit() {
  return (
    <section
      className="split-section"
      style={{ padding: "90px 0", borderTop: "1px solid var(--line)" }}
    >
      <div
        className="reveal"
        style={{
          fontFamily: mono,
          fontSize: "12.5px",
          letterSpacing: "0.04em",
          color: "var(--accent)",
        }}
      >
        // TOOLKIT
      </div>
      <div className="reveal toolkit-grid">
        {groups.map((g) => (
          <div key={g.heading}>
            <h4
              style={{
                fontFamily: mono,
                fontSize: "11.5px",
                letterSpacing: "0.03em",
                color: "var(--accent)",
                margin: "0 0 14px",
              }}
            >
              {g.heading}
            </h4>
            <div style={{ fontSize: 16, lineHeight: 1.85, color: "var(--text)" }}>{g.items}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
