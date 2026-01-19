"use client";

import { useEffect, useMemo, useState } from "react";
import { Laptop, Moon, Sun } from "lucide-react";

type ThemePreference = "light" | "dark" | "system";

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(preference: ThemePreference) {
  const actual = preference === "system" ? getSystemTheme() : preference;
  document.documentElement.classList.toggle("dark", actual === "dark");
}

export function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>("system");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const next =
      stored === "light" || stored === "dark" || stored === "system"
        ? (stored as ThemePreference)
        : "system";

    setPreference(next);
    applyTheme(next);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const pref =
        window.localStorage.getItem("theme") === "dark" ||
        window.localStorage.getItem("theme") === "light"
          ? (window.localStorage.getItem("theme") as ThemePreference)
          : "system";

      if (pref === "system") applyTheme("system");
    };

    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  const { label, Icon } = useMemo(() => {
    if (preference === "system") return { label: "Theme: System", Icon: Laptop };
    if (preference === "dark") return { label: "Theme: Dark", Icon: Moon };
    return { label: "Theme: Light", Icon: Sun };
  }, [preference]);

  return (
    <button
      type="button"
      onClick={() => {
        const next: ThemePreference =
          preference === "system"
            ? "dark"
            : preference === "dark"
              ? "light"
              : "system";

        setPreference(next);
        window.localStorage.setItem("theme", next);
        applyTheme(next);
      }}
      className="inline-flex items-center gap-2 rounded-xl border border-border bg-panel px-4 py-2 text-sm font-semibold text-foreground/90 shadow-sm backdrop-blur transition hover:bg-panel-strong"
      aria-label={label}
      title={label}
    >
      <Icon size={16} className="text-foreground/80" aria-hidden="true" />
      <span className="text-foreground/70">{label.replace("Theme: ", "")}</span>
    </button>
  );
}
