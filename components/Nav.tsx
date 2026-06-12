"use client";

import { CSSProperties } from "react";

const mono = "var(--font-jetbrains), monospace";

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

const linkStyle: CSSProperties = {
  fontFamily: mono,
  fontSize: "12.5px",
  color: "var(--muted)",
  textDecoration: "none",
  transition: "color 0.2s",
};

export default function Nav() {
  const onLinkOver = (e: React.MouseEvent<HTMLAnchorElement>) =>
    (e.currentTarget.style.color = "var(--text)");
  const onLinkOut = (e: React.MouseEvent<HTMLAnchorElement>) =>
    (e.currentTarget.style.color = "var(--muted)");

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        background: "oklch(0.17 0.013 264 / 0.72)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "17px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#top"
          onClick={smoothScroll}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            textDecoration: "none",
          }}
        >
          <span
            style={{
              display: "grid",
              placeItems: "center",
              width: 30,
              height: 30,
              borderRadius: 8,
              background: "var(--accent)",
              color: "var(--accent-ink)",
              fontFamily: mono,
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            M
          </span>
          <span
            style={{
              fontFamily: mono,
              fontSize: "13.5px",
              letterSpacing: "0.01em",
              color: "var(--text)",
              whiteSpace: "nowrap",
            }}
          >
            mohamed_ali<span style={{ color: "var(--muted)" }}>.dev</span>
          </span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {[
            ["#work", "Work"],
            ["#about", "About"],
            ["#experience", "Path"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={smoothScroll}
              onMouseOver={onLinkOver}
              onMouseOut={onLinkOut}
              style={linkStyle}
              className="nav-collapsible"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={smoothScroll}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: mono,
              fontSize: "12.5px",
              color: "var(--accent-ink)",
              background: "var(--accent)",
              padding: "9px 16px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
              transition: "filter 0.2s, transform 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.filter = "brightness(1.08)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.filter = "none";
              e.currentTarget.style.transform = "none";
            }}
          >
            Contact →
          </a>
        </div>
      </div>
    </nav>
  );
}
