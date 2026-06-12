import Contact from "./Contact";

const mono = "var(--font-jetbrains), monospace";
const display = "var(--font-newsreader), serif";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "oklch(0.205 0.014 264)",
        borderTop: "1px solid var(--line)",
        marginTop: 30,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          right: -160,
          top: -220,
          borderRadius: "50%",
          background: "var(--accent-15)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "104px 40px 52px",
        }}
      >
        <div
          className="reveal contact-grid"
          style={{ paddingBottom: 72, borderBottom: "1px solid var(--line)" }}
        >
          <div>
            <div
              style={{
                fontFamily: mono,
                fontSize: "12.5px",
                letterSpacing: "0.04em",
                color: "var(--accent)",
                marginBottom: 22,
              }}
            >
              // LET&apos;S TALK
            </div>
            <h2
              style={{
                fontFamily: display,
                fontWeight: 500,
                fontSize: "clamp(38px, 5vw, 66px)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                margin: "0 0 28px",
                textWrap: "balance",
              }}
            >
              Looking for an engineer who{" "}
              <em style={{ color: "var(--accent)" }}>ships</em>?
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7, margin: "0 0 18px", maxWidth: "30em" }}>
              Drop me a line about a role or project, or grab my résumé. I reply to
              everything.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 320 }}>
              <a
                href="mailto:dali.gaoudi@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text)",
                  border: "1px solid var(--line)",
                  padding: "13px 24px",
                  borderRadius: 999,
                  textDecoration: "none",
                }}
              >
                dali.gaoudi@gmail.com
              </a>
              <a
                href="/Mohamed-Ali-Gaoudi-Resume.pdf"
                target="_blank"
                rel="noopener"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text)",
                  border: "1px solid var(--line)",
                  padding: "13px 24px",
                  borderRadius: 999,
                  textDecoration: "none",
                }}
              >
                Download résumé ↓
              </a>
            </div>
          </div>
          <div>
            <Contact />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 30,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span style={{ fontFamily: mono, fontSize: "12.5px", color: "var(--muted)" }}>
            © 2026 Mohamed Ali Gaoudi · Heilbronn, DE
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              ["https://github.com/DaliGaoudi", "GitHub"],
              ["https://www.linkedin.com/in/medaligaoudi/", "LinkedIn"],
              ["mailto:dali.gaoudi@gmail.com", "Email"],
            ].map(([href, label]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener" : undefined}
                style={{
                  fontFamily: mono,
                  fontSize: "12.5px",
                  color: "var(--muted)",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
