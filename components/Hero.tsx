"use client";

import { CSSProperties, useEffect, useRef } from "react";

const mono = "var(--font-jetbrains), monospace";
const display = "var(--font-newsreader), serif";

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (href && href.startsWith("#")) {
    const t = document.getElementById(href.slice(1));
    if (t) {
      e.preventDefault();
      const y = t.getBoundingClientRect().top + window.scrollY - 74;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
}

type Word = { text: string; delay: number; accent?: boolean };

const line1: Word[] = [
  { text: "Full-stack", delay: 0.05 },
  { text: "engineer", delay: 0.13 },
];
const line2: Word[] = [
  { text: "who", delay: 0.22 },
  { text: "ships", delay: 0.3 },
  { text: "production", delay: 0.38, accent: true },
];
const line3: Word[] = [
  { text: "AI", delay: 0.47, accent: true },
  { text: "—", delay: 0.55 },
  { text: "end", delay: 0.63 },
  { text: "to", delay: 0.71 },
  { text: "end.", delay: 0.79 },
];

function WordLine({ words }: { words: Word[] }) {
  return (
    <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.06em" }}>
      {words.map((w, i) => (
        <span key={i}>
          <span
            className="word"
            style={{
              display: "inline-block",
              animationDelay: `${w.delay}s`,
              ...(w.accent
                ? { fontStyle: "italic", color: "var(--accent)" }
                : {}),
            }}
          >
            {w.text}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

const termString: CSSProperties = { color: "var(--term-string)" };
const termKey: CSSProperties = { color: "var(--accent)" };

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    const onMove = (ev: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      glow.style.left = ev.clientX - r.left + "px";
      glow.style.top = ev.clientY - r.top + "px";
      glow.style.opacity = "1";
    };
    const onLeave = () => {
      glow.style.opacity = "0.45";
    };

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    glow.style.opacity = "0.45";

    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <header
      id="hero"
      ref={heroRef}
      style={{
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--line)",
      }}
    >
      {/* animated background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div
          className="blob-a"
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            left: -90,
            top: -160,
            borderRadius: "50%",
            background: "var(--accent-15)",
            filter: "blur(90px)",
            animation: "blobA 14s ease-in-out infinite",
          }}
        />
        <div
          className="blob-b"
          style={{
            position: "absolute",
            width: 460,
            height: 460,
            right: -60,
            bottom: -180,
            borderRadius: "50%",
            background: "var(--hero-blue)",
            filter: "blur(100px)",
            animation: "blobB 17s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(oklch(0.9 0.01 250 / 0.07) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 78%)",
          }}
        />
      </div>

      {/* cursor glow */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent-15), transparent 65%)",
          transform: "translate(-50%,-50%)",
          left: "50%",
          top: "30%",
          zIndex: 1,
          pointerEvents: "none",
          mixBlendMode: "screen",
          transition: "opacity 0.3s",
          filter: "blur(8px)",
          opacity: 0.45,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <div className="hero-grid">
          {/* left */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: mono,
                fontSize: 12,
                letterSpacing: "0.03em",
                color: "var(--text)",
                background: "oklch(0.215 0.015 264 / 0.7)",
                border: "1px solid var(--line)",
                padding: "7px 14px 7px 12px",
                borderRadius: 999,
                marginBottom: 30,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  animation: "pulseDot 2s ease-in-out infinite",
                }}
              />
              OPEN TO FULL-STACK ROLES · 2026
            </div>

            <h1
              style={{
                fontFamily: display,
                fontWeight: 500,
                fontSize: "clamp(46px, 5.8vw, 82px)",
                lineHeight: 1.0,
                letterSpacing: "-0.025em",
                margin: "0 0 28px",
              }}
            >
              <WordLine words={line1} />
              <WordLine words={line2} />
              <WordLine words={line3} />
            </h1>

            <p
              className="reveal"
              style={{
                fontSize: 18,
                lineHeight: 1.62,
                color: "var(--muted)",
                maxWidth: "32em",
                margin: "0 0 34px",
                animationDelay: "0.5s",
                textWrap: "pretty",
              }}
            >
              B.Sc. Information Engineering @ TU Munich. I&apos;ve taken two SaaS
              platforms from architecture to deployment — React, FastAPI, Node,
              PostgreSQL, Docker, and LLM automation. Solo, and shipped.
            </p>

            <div
              className="reveal"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                flexWrap: "wrap",
                animationDelay: "0.62s",
              }}
            >
              <a
                href="#work"
                onClick={smoothScroll}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--accent-ink)",
                  background: "var(--accent)",
                  padding: "14px 24px",
                  borderRadius: 999,
                  textDecoration: "none",
                  transition: "filter 0.2s, transform 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.filter = "brightness(1.08)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.filter = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                See what I&apos;ve built <span style={{ fontFamily: mono }}>→</span>
              </a>
              <a
                href="/Mohamed-Ali-Gaoudi-Resume.pdf"
                target="_blank"
                rel="noopener"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--text)",
                  background: "transparent",
                  border: "1px solid var(--line)",
                  padding: "14px 22px",
                  borderRadius: 999,
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "var(--line)";
                  e.currentTarget.style.color = "var(--text)";
                }}
              >
                Download résumé ↓
              </a>
              <span
                style={{
                  fontFamily: mono,
                  fontSize: "12.5px",
                  color: "var(--muted)",
                  marginLeft: 4,
                }}
              >
                Heilbronn, DE
              </span>
            </div>
          </div>

          {/* right: terminal card */}
          <div className="reveal" style={{ animationDelay: "0.4s" }}>
            <div
              className="float-card"
              style={{
                background: "oklch(0.2 0.014 264 / 0.92)",
                border: "1px solid var(--line)",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 30px 70px -30px oklch(0 0 0 / 0.7)",
                animation: "floatY 7s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "13px 16px",
                  borderBottom: "1px solid var(--line)",
                  background: "oklch(0.235 0.015 264)",
                }}
              >
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "oklch(0.66 0.16 25)" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "oklch(0.8 0.13 85)" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "oklch(0.78 0.15 145)" }} />
                <span style={{ fontFamily: mono, fontSize: "11.5px", color: "var(--muted)", marginLeft: 8 }}>
                  mohamed — zsh
                </span>
              </div>
              <div
                style={{
                  padding: "20px 20px 22px",
                  fontFamily: mono,
                  fontSize: "12.8px",
                  lineHeight: 1.85,
                }}
              >
                <div style={{ color: "var(--muted)" }}>
                  <span style={termKey}>~</span> whoami
                </div>
                <div style={{ color: "var(--text)", marginBottom: 10 }}>mohamed_ali_gaoudi</div>
                <div style={{ color: "var(--muted)" }}>
                  <span style={termKey}>~</span> cat stack.json
                </div>
                <div style={{ color: "var(--muted)" }}>{"{"}</div>
                <div>
                  &nbsp;&nbsp;<span style={termKey}>&quot;frontend&quot;</span>: [
                  <span style={termString}>&quot;React&quot;</span>, <span style={termString}>&quot;Next.js&quot;</span>,{" "}
                  <span style={termString}>&quot;TS&quot;</span>],
                </div>
                <div>
                  &nbsp;&nbsp;<span style={termKey}>&quot;backend&quot;</span>:&nbsp; [
                  <span style={termString}>&quot;Node&quot;</span>, <span style={termString}>&quot;Express&quot;</span>],
                </div>
                <div>
                  &nbsp;&nbsp;<span style={termKey}>&quot;data&quot;</span>:&nbsp;&nbsp;&nbsp;&nbsp; [
                  <span style={termString}>&quot;PostgreSQL&quot;</span>, <span style={termString}>&quot;Supabase&quot;</span>],
                </div>
                <div>
                  &nbsp;&nbsp;<span style={termKey}>&quot;ai&quot;</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [
                  <span style={termString}>&quot;Gemini&quot;</span>, <span style={termString}>&quot;OpenAI&quot;</span>],
                </div>
                <div>
                  &nbsp;&nbsp;<span style={termKey}>&quot;ship&quot;</span>:&nbsp;&nbsp;&nbsp;&nbsp; [
                  <span style={termString}>&quot;Docker&quot;</span>, <span style={termString}>&quot;CI/CD&quot;</span>]
                </div>
                <div style={{ color: "var(--muted)", marginBottom: 10 }}>{"}"}</div>
                <div style={{ color: "var(--muted)" }}>
                  <span style={termKey}>~</span> status
                </div>
                <div style={{ color: "var(--text)" }}>
                  <span style={termKey}>&gt;</span> available · open to relocate&nbsp;
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 15,
                      background: "var(--accent)",
                      verticalAlign: "-2px",
                      animation: "blink 1.1s steps(1) infinite",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
