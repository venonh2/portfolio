"use client";

import { useEffect, useState } from "react";

type Step = "idle" | "math" | "pets" | "last" | "results" | "bye";

const LINKEDIN_URL = "https://www.linkedin.com/";

const option =
  "cursor-pointer text-lg font-semibold transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none md:text-2xl";

export default function HeroQuiz() {
  const [step, setStep] = useState<Step>("idle");

  return (
    <>
      <div
        className={`mt-14 flex flex-row items-center justify-between transition-[opacity,visibility] duration-300 md:mt-16 ${
          step === "idle" ? "" : "invisible opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setStep("math")}
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
        {step === "math" && <MathQuestion onAnswer={() => setStep("pets")} />}
        {step === "pets" && <PetsQuestion onAnswer={() => setStep("last")} />}
        {step === "last" && <LastOne onAnswer={() => setStep("results")} />}
        {step === "results" && <TestResults />}
        {step === "bye" && <Goodbye />}
      </div>
    </>
  );
}

type QuestionProps = { onAnswer: () => void };

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold md:text-4xl">{children}</h2>;
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
      <Title>
        Ok, Maybe next <span className="underline decoration-1 underline-offset-[6px]">time</span>
      </Title>

      <p
        aria-label={`Redirecting in ${count}`}
        className="mt-20 flex size-12 items-center justify-center self-center rounded-full bg-foreground text-2xl font-bold text-background tabular-nums"
      >
        {Math.max(count, 1)}
      </p>
    </div>
  );
}

function MathQuestion({ onAnswer }: QuestionProps) {
  return (
    <div key="math" className="animate-fade-up flex flex-col">
      <Title>
        Ok, Let’s get <span className="underline decoration-1 underline-offset-[10px]">start</span>
      </Title>

      <p className="mt-16 self-center text-[22px] font-bold md:text-3xl">2×2 = ?</p>

      <div className="relative mt-10 h-28 md:h-32">
        <button type="button" onClick={onAnswer} className={`${option} absolute top-6 left-[18%] text-2xl`}>
          4
        </button>
        <WrongAnswer className="absolute top-0 right-[20%]">8</WrongAnswer>
        <WrongAnswer className="absolute top-16 left-1/2 -translate-x-1/2">6</WrongAnswer>
      </div>
    </div>
  );
}

function WrongAnswer({ className, children }: { className: string; children: React.ReactNode }) {
  const [shaking, setShaking] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setShaking(true)}
      onAnimationEnd={() => setShaking(false)}
      className={`${option} ${className} text-2xl ${shaking ? "animate-shake" : ""}`}
    >
      {children}
    </button>
  );
}

function PetsQuestion({ onAnswer }: QuestionProps) {
  return (
    <div key="pets" className="animate-fade-up flex flex-col">
      <Title>Ok Ok</Title>

      <p className="mt-8 self-end pr-10 text-[22px] font-bold md:pr-24 md:text-3xl">
        <span className="underline decoration-1 underline-offset-4">Next</span> Question !!
      </p>

      <p className="mt-12 pl-12 text-[22px] font-bold md:pl-24 md:text-3xl">Dogs or Cats?</p>

      <div className="relative mt-10 h-24">
        <button type="button" onClick={onAnswer} className={`${option} absolute top-1 left-[5%]`}>
          Dogs
        </button>
        <button type="button" onClick={onAnswer} className={`${option} absolute top-0 right-[18%]`}>
          Both
        </button>
        <button type="button" onClick={onAnswer} className={`${option} absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap`}>
          Obviously Cats
        </button>
      </div>
    </div>
  );
}

function LastOne({ onAnswer }: QuestionProps) {
  return (
    <div key="last" className="animate-fade-up flex flex-col">
      <Title>Last One</Title>

      <button
        type="button"
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        className="mt-10 cursor-pointer self-start pl-6 text-left text-[22px] font-bold leading-snug transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none md:pl-12 md:text-3xl"
      >
        Cut the crap out !!
        <br />
        Show me what you have got
      </button>

      <button type="button" onClick={onAnswer} className={`${option} mt-36 self-end pr-6 md:mt-40 md:pr-16`}>
        See Test Results
      </button>
    </div>
  );
}

function TestResults() {
  return (
    <div key="results" className="animate-fade-up flex flex-col">
      <Title>Test Results</Title>

      <svg
        viewBox="0 0 416 300"
        className="mt-4 w-full max-w-md text-foreground"
        role="img"
        aria-label="Chart of the chances that I end up hired: a sharp rise, a dip, then a steady climb"
      >
        <text x="23" y="24" fill="currentColor" fontSize="16">
          Changes that i end up hired
        </text>
        {/* Arrow pointing to the peak */}
        <path
          d="M101 38 L130 50 M120 51 L130 50 L125 41"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="77,288 143,55 208,165 322,72"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset="1"
          style={{ animation: "draw-line 1.4s ease-out 0.2s forwards" }}
        />
      </svg>
    </div>
  );
}
