"use client";

import { useState } from "react";
import { Bell, Moon, Vibrate } from "lucide-react";

const TOGGLES = [
  {
    key: "notifications",
    icon: Bell,
    label: "Notifications",
    hint: "Demo only — nothing is actually sent.",
  },
  {
    key: "motion",
    icon: Moon,
    label: "Reduced motion",
    hint: "Minimize card and menu animations.",
  },
  {
    key: "haptics",
    icon: Vibrate,
    label: "Haptic feedback",
    hint: "Vibration on supported touch devices.",
  },
];

export default function SettingsForm() {
  const [prefs, setPrefs] = useState({
    notifications: true,
    motion: true,
    haptics: false,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2000);
  };

  return (
    <form
      onSubmit={handleSave}
      className="max-w-xl divide-y divide-edge rounded-xl border border-edge bg-card"
    >
      {TOGGLES.map(({ key, icon: Icon, label, hint }) => {
        const value = prefs[key];
        return (
          <div key={key} className="flex items-center justify-between gap-4 p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface text-muted">
                <Icon size={16} aria-hidden="true" />
              </span>
              <div>
                <label htmlFor={`setting-${key}`} className="block text-sm font-semibold">
                  {label}
                </label>
                <p className="mt-0.5 text-xs text-muted">{hint}</p>
              </div>
            </div>
            <button
              id={`setting-${key}`}
              type="button"
              role="switch"
              aria-checked={value}
              aria-label={label}
              onClick={() => setPrefs((p) => ({ ...p, [key]: !p[key] }))}
              className={`relative h-6 w-11 shrink-0 rounded-full outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card ${
                value ? "bg-accent" : "bg-edge"
              }`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-150 ${
                  value ? "translate-x-[22px]" : "translate-x-0.5"
                }`}
                aria-hidden="true"
              />
            </button>
          </div>
        );
      })}

      <div className="flex items-center gap-3 p-4">
        <button
          type="submit"
          className="inline-flex h-10 items-center rounded-lg bg-accent px-4 text-sm font-bold text-bg outline-none transition-colors duration-150 hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          Save Preferences
        </button>
        {saved && (
          <span
            role="status"
            aria-live="polite"
            className="text-sm font-medium text-accent"
          >
            Preferences saved (demo)
          </span>
        )}
      </div>
    </form>
  );
}
