const mono = "var(--font-jetbrains), monospace";
const display = "var(--font-newsreader), serif";

type Entry = {
  date: string;
  location: string;
  title: string;
  company: string;
  description: string;
};

const entries: Entry[] = [
  {
    date: "2024 · 6 mos",
    location: "Heilbronn",
    title: "Student Researcher — ML Data Repair",
    company: "TU Munich",
    description:
      "Evaluated ML-supported data-repair pipelines across 4 structured datasets, identifying sequencing strategies that improved data consistency by up to 22%. Combined ML frameworks with rule-based validation in Python (pandas, scikit-learn) for reproducible, automated cleaning.",
  },
  {
    date: "2023",
    location: "Remote · Tunisia",
    title: "Web Development Intern — Full Stack",
    company: "B2M",
    description:
      "Implemented OAuth 2.0 auth flows in an Angular app, reducing unauthorized access to zero in testing. Built 8+ REST endpoints between Angular and Node, improving main-view load times ~30%, and applied OWASP Top 10 principles — zero findings in final review.",
  },
];

export default function Path() {
  return (
    <section
      id="experience"
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
        // THE PATH
      </div>
      <div>
        {entries.map((entry, i) => (
          <div
            key={entry.title}
            className="reveal path-row"
            style={{
              ...(i < entries.length - 1
                ? {
                    paddingBottom: 30,
                    borderBottom: "1px solid var(--line)",
                    marginBottom: 30,
                  }
                : {}),
            }}
          >
            <div
              style={{
                fontFamily: mono,
                fontSize: "12.5px",
                color: "var(--muted)",
                paddingTop: 5,
              }}
            >
              {entry.date}
              <br />
              <span style={{ color: "oklch(0.55 0.012 255)" }}>{entry.location}</span>
            </div>
            <div>
              <h3 style={{ fontFamily: display, fontWeight: 500, fontSize: 22, margin: "0 0 5px" }}>
                {entry.title}
              </h3>
              <div style={{ fontSize: 14, color: "var(--accent)", fontWeight: 600, marginBottom: 12 }}>
                {entry.company}
              </div>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: 1.65,
                  color: "var(--muted)",
                  margin: 0,
                  maxWidth: "44em",
                  textWrap: "pretty",
                }}
              >
                {entry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
