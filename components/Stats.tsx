const mono = "var(--font-jetbrains), monospace";
const display = "var(--font-newsreader), serif";

const stats: { count: number; suffix?: string; caption: [string, string] }[] = [
  { count: 2, caption: ["production SaaS", "platforms shipped"] },
  { count: 70, suffix: "%", caption: ["less manual work", "via LLM automation"] },
  { count: 30, suffix: "%", caption: ["faster page loads", "on core views"] },
  { count: 4, caption: ["languages spoken", "AR · DE · EN · FR"] },
];

export default function Stats() {
  return (
    <section style={{ borderBottom: "1px solid var(--line)" }}>
      <div
        className="reveal stats-grid"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "44px 40px" }}
      >
        {stats.map((s, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div
              style={{
                fontFamily: display,
                fontSize: 48,
                fontWeight: 500,
                lineHeight: 1,
                color: "var(--accent)",
              }}
            >
              <span className="countup" data-count={s.count}>
                0
              </span>
              {s.suffix}
            </div>
            <div
              style={{
                fontFamily: mono,
                fontSize: 12,
                color: "var(--muted)",
                lineHeight: 1.5,
              }}
            >
              {s.caption[0]}
              <br />
              {s.caption[1]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
