"use client";

import { useEffect, useState } from "react";

type Props = {
  label: string;
  value: string;
};

export default function CopyContact({ label, value }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(timeout);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (insecure context, permissions); nothing to fall back to
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}: ${value}`}
      className="group flex cursor-pointer items-center gap-3 text-left transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span>{label}</span>
      <span aria-live="polite" className="text-sm text-accent">
        {copied ? "Copied!" : ""}
      </span>
    </button>
  );
}

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  className: "shrink-0",
} as const;

function CopyIcon() {
  return (
    <svg {...iconProps}>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg {...iconProps} className="shrink-0 text-accent">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
