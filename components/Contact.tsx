"use client";

import { CSSProperties, useState } from "react";

const mono = "var(--font-jetbrains), monospace";
const display = "var(--font-newsreader), serif";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase: CSSProperties = {
  width: "100%",
  background: "var(--bg)",
  border: "1px solid var(--line)",
  borderRadius: 10,
  padding: "12px 14px",
  color: "var(--text)",
  fontFamily: "var(--font-hanken), sans-serif",
  fontSize: 15,
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle: CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: "0.04em",
  color: "var(--muted)",
  marginBottom: 7,
  display: "block",
};

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "", company: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!values.name.trim()) errs.name = "Required";
    if (!values.email.trim()) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = "Enter a valid email";
    const len = values.message.trim().length;
    if (len < 10) errs.message = "At least 10 characters";
    else if (len > 4000) errs.message = "Max 4000 characters";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      setValues({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "var(--accent)");
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "var(--line)");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  if (status === "success") {
    return (
      <div
        style={{
          background: "var(--bg)",
          border: "1px solid var(--accent-30)",
          borderRadius: 14,
          padding: 32,
          textAlign: "center",
        }}
      >
        <div style={{ fontFamily: display, fontSize: 24, marginBottom: 8 }}>Message sent ✓</div>
        <p style={{ color: "var(--muted)", fontSize: 15, margin: "0 0 18px" }}>
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          style={{
            fontFamily: mono,
            fontSize: 13,
            color: "var(--accent)",
            background: "transparent",
            border: "1px solid var(--line)",
            borderRadius: 999,
            padding: "9px 18px",
            cursor: "pointer",
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* honeypot */}
      <input
        type="text"
        name="company"
        value={values.company}
        onChange={set("company")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="contact-row">
        <div>
          <label style={labelStyle} htmlFor="name">
            NAME
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={set("name")}
            onFocus={onFocus}
            onBlur={onBlur}
            style={{ ...inputBase, ...(fieldErrors.name ? { borderColor: "oklch(0.66 0.16 25)" } : {}) }}
            placeholder="Jane Recruiter"
          />
          {fieldErrors.name && (
            <span style={{ fontFamily: mono, fontSize: 11, color: "oklch(0.7 0.16 25)" }}>{fieldErrors.name}</span>
          )}
        </div>
        <div>
          <label style={labelStyle} htmlFor="email">
            EMAIL
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={set("email")}
            onFocus={onFocus}
            onBlur={onBlur}
            style={{ ...inputBase, ...(fieldErrors.email ? { borderColor: "oklch(0.66 0.16 25)" } : {}) }}
            placeholder="jane@company.com"
          />
          {fieldErrors.email && (
            <span style={{ fontFamily: mono, fontSize: 11, color: "oklch(0.7 0.16 25)" }}>{fieldErrors.email}</span>
          )}
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="message">
          MESSAGE
        </label>
        <textarea
          id="message"
          value={values.message}
          onChange={set("message")}
          onFocus={onFocus}
          onBlur={onBlur}
          rows={5}
          style={{
            ...inputBase,
            resize: "vertical",
            ...(fieldErrors.message ? { borderColor: "oklch(0.66 0.16 25)" } : {}),
          }}
          placeholder="Tell me about the role or project…"
        />
        {fieldErrors.message && (
          <span style={{ fontFamily: mono, fontSize: 11, color: "oklch(0.7 0.16 25)" }}>{fieldErrors.message}</span>
        )}
      </div>

      {error && (
        <div
          style={{
            fontFamily: mono,
            fontSize: 12.5,
            color: "oklch(0.78 0.13 25)",
            background: "oklch(0.66 0.16 25 / 0.12)",
            border: "1px solid oklch(0.66 0.16 25 / 0.4)",
            borderRadius: 10,
            padding: "10px 14px",
          }}
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 9,
          fontSize: 15,
          fontWeight: 700,
          color: "var(--accent-ink)",
          background: "var(--accent)",
          padding: "14px 24px",
          borderRadius: 999,
          border: "none",
          cursor: status === "submitting" ? "default" : "pointer",
          opacity: status === "submitting" ? 0.7 : 1,
          transition: "filter 0.2s, transform 0.2s",
        }}
        onMouseOver={(e) => {
          if (status !== "submitting") {
            e.currentTarget.style.filter = "brightness(1.08)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.filter = "none";
          e.currentTarget.style.transform = "none";
        }}
      >
        {status === "submitting" ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}
