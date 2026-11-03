"use client";

import { useEffect, useState } from "react";

type Step = "idle" | "workflow" | "bye";

const LINKEDIN_URL = "https://www.linkedin.com/";

const option =
  "cursor-pointer text-lg font-semibold transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none md:text-2xl";

export default function HeroQuiz() {
  const [step, setStep] = useState<Step>("idle");

  return (
    <>
      <div
        className={`mt-14 flex flex-row items-center justify-evenly transition-[opacity,visibility] duration-300 md:mt-16 ${
          step === "idle" ? "" : "invisible opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setStep("workflow")}
          className={`${option} pl-3`}
        >
          Yes, I’m
        </button>
        <button
          type="button"
          onClick={() => setStep("bye")}
          className={`${option} pr-6 md:pr-16`}
        >
          Nah, Lost interest!
        </button>
      </div>

      {/* Fixed height so the top of the section never shifts between steps */}
      <div className="mt-12 min-h-[340px] md:min-h-[420px]" aria-live="polite">
        {step === "workflow" && <Workflow />}
        {step === "bye" && <Goodbye />}
      </div>
    </>
  );
}

function Goodbye() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      window.location.assign(LINKEDIN_URL);
      return;
    }
    const timeout = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <div key="bye" className="animate-fade-up flex flex-col">
      <h2 className="text-2xl font-bold md:text-4xl">
        Ok, Maybe next <span className="underline decoration-1 underline-offset-[6px]">time</span>
      </h2>

      <p
        aria-label={`Redirecting in ${count}`}
        className="mt-20 flex size-12 items-center justify-center self-center rounded-full bg-foreground text-2xl font-bold text-background tabular-nums"
      >
        {Math.max(count, 1)}
      </p>
    </div>
  );
}

function Workflow() {
  return (
    <svg
      viewBox="35 40 385 285"
      className="animate-fade-up mx-auto w-full max-w-md text-foreground"
      role="img"
      aria-label="Workflow: Specify, Plan, Tasks, Implement"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeDasharray="2 3">
        <path d="M95 90 C98 130 125 160 165 172" />
        <path d="M212 188 C235 184 255 176 268 180 C282 186 278 208 298 210 C312 210 322 198 332 195" />
        <path d="M367 215 L323 275" />
      </g>
      <g fill="currentColor" fontSize="22" fontWeight="700">
        <text x="42" y="72">Specify</text>
        <text x="158" y="200">Plan</text>
        <text x="345" y="198">Tasks</text>
        <text x="269" y="312">Implement</text>
      </g>
    </svg>
  );
}
