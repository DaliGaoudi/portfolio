const mono = "var(--font-jetbrains), monospace";

const tokens = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Supabase",
  "Google Gemini",
  "OpenAI",
  "Stripe",
  "Gmail API",
  "Docker",
  "GitHub Actions",
  "Vercel",
];

function Row({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      style={{ display: "flex", gap: 0, alignItems: "center" }}
      aria-hidden={ariaHidden}
    >
      {tokens.map((t) => (
        <span key={t} style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontFamily: mono,
              fontSize: 15,
              color: "var(--muted)",
              padding: "0 26px",
            }}
          >
            {t}
          </span>
          <span style={{ color: "var(--accent)" }}>◆</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      style={{
        borderBottom: "1px solid var(--line)",
        overflow: "hidden",
        padding: "22px 0",
        background: "var(--surface)",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          gap: 0,
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        <Row />
        <Row ariaHidden />
      </div>
    </section>
  );
}
