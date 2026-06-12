const mono = "var(--font-jetbrains), monospace";
const display = "var(--font-newsreader), serif";

const languages: { name: string; level: string; pct: number; delay: number }[] = [
  { name: "Arabic", level: "Native", pct: 100, delay: 0 },
  { name: "English", level: "C1 · Fluent", pct: 90, delay: 0.1 },
  { name: "German", level: "C1", pct: 90, delay: 0.2 },
  { name: "French", level: "B2", pct: 72, delay: 0.3 },
];

export default function EducationLanguages() {
  return (
    <section
      className="edu-grid"
      style={{ padding: "90px 0", borderTop: "1px solid var(--line)" }}
    >
      {/* Education */}
      <div className="reveal">
        <div
          style={{
            fontFamily: mono,
            fontSize: "12.5px",
            letterSpacing: "0.04em",
            color: "var(--accent)",
            marginBottom: 26,
          }}
        >
          // EDUCATION
        </div>
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: 16,
            padding: 30,
          }}
        >
          <div style={{ fontFamily: mono, fontSize: 12, color: "var(--muted)", marginBottom: 14 }}>
            GRADUATED 02 / 2026 · HEILBRONN
          </div>
          <h3 style={{ fontFamily: display, fontWeight: 500, fontSize: 25, margin: "0 0 6px", lineHeight: 1.2 }}>
            B.Sc. Information Engineering
          </h3>
          <div style={{ fontSize: "14.5px", color: "var(--accent)", fontWeight: 600, marginBottom: 16 }}>
            Technical University of Munich
          </div>
          <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "var(--muted)", margin: 0, textWrap: "pretty" }}>
            Focus: Machine Learning, Databases (SQL &amp; NoSQL), Data Structures &amp;
            Algorithms, Software Engineering, Cyber-Physical Systems.
          </p>
        </div>
      </div>

      {/* Languages */}
      <div className="reveal">
        <div
          style={{
            fontFamily: mono,
            fontSize: "12.5px",
            letterSpacing: "0.04em",
            color: "var(--accent)",
            marginBottom: 26,
          }}
        >
          // LANGUAGES
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {languages.map((lang) => (
            <div key={lang.name}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 9 }}>
                <span style={{ fontSize: 15, fontWeight: 600 }}>{lang.name}</span>
                <span style={{ fontFamily: mono, fontSize: 12, color: "var(--muted)" }}>{lang.level}</span>
              </div>
              <div
                style={{
                  height: 6,
                  background: "var(--surface-2)",
                  borderRadius: 999,
                  overflow: "hidden",
                }}
              >
                <div
                  className="bar-fill"
                  data-level={lang.pct}
                  style={{
                    height: "100%",
                    width: 0,
                    background: "var(--accent)",
                    borderRadius: 999,
                    transition: "width 1.1s cubic-bezier(0.16,1,0.3,1)",
                    transitionDelay: `${lang.delay}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
