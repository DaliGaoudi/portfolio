"use client";

import { useReveal } from "./hooks/useReveal";

/** Mounts the scroll-reveal / count-up / language-bar observers. Renders nothing. */
export default function RevealMount() {
  useReveal();
  return null;
}
