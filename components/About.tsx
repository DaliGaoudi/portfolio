const mono = "var(--font-jetbrains), monospace";
const display = "var(--font-newsreader), serif";

export default function About() {
  return (
    <section
      id="about"
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
        // ABOUT
      </div>
      <div className="reveal">
        <p
          style={{
            fontFamily: display,
            fontSize: "clamp(23px, 2.7vw, 33px)",
            lineHeight: 1.42,
            letterSpacing: "-0.01em",
            margin: "0 0 32px",
            textWrap: "pretty",
          }}
        >
          I&apos;m a full-stack engineer who likes owning the whole problem — from
          the database schema to the deployed product. Most of what I&apos;ve built,
          I built alone, which taught me to make pragmatic decisions and ship.
        </p>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "var(--muted)",
            margin: "0 0 18px",
            maxWidth: "42em",
            textWrap: "pretty",
          }}
        >
          I&apos;m finishing my B.Sc. in Information Engineering at TU Munich
          (graduating Feb 2026), with a focus on machine learning, databases, and
          software engineering. Along the way I interned building secure Angular
          apps, and did research on ML-supported data-repair pipelines.
        </p>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "var(--muted)",
            margin: 0,
            maxWidth: "42em",
            textWrap: "pretty",
          }}
        >
          I work comfortably in German (B2) and English (C1), and I care a lot about
          clean APIs, security done right, and using AI where it genuinely removes
          grunt work.
        </p>
      </div>
    </section>
  );
}
