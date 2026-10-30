"use client";

import Image from "next/image";
import { useId, useState } from "react";

type Tab = {
  label: string;
  content: React.ReactNode;
};

export default function StackTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const id = useId();

  return (
    <div>
      <div role="tablist" className="relative flex gap-12">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${id}-panel-${i}`}
            onClick={() => setActive(i)}
            className={`cursor-pointer text-base transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none md:text-lg ${
              active === i ? "font-semibold underline decoration-1 underline-offset-4" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
        <Crown />
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`${id}-panel-${i}`}
          aria-labelledby={`${id}-tab-${i}`}
          hidden={active !== i}
          className="animate-fade-up mt-10"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}

// Hand-drawn crown under the second tab, as in the reference
function Crown() {
  return (
    <Image
      src="/crown.png"
      alt=""
      width={52}
      height={52}
      className="pointer-events-none absolute top-6 left-22 h-12 w-12"
    />
  );
}
