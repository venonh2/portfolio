import type { Metadata } from "next";
import Link from "next/link";
import IrisMobileStack from "@/components/project-details/IrisMobileStack";
import StackTabs from "@/components/project-details/StackTabs";

export const metadata: Metadata = {
  title: "Iris Security | Brendow E. R",
  description: "Security App for users to see cameras, alarms and sensors related events.",
};

const highlights = [
  "App with 5k+ DAL",
  "The app allowed users to check their cameras images in realtime camera visualization making use of RTSP protocol.",
  "Events list making use of pooling, including alarm events, sensors events e cameras events with image attached to it.",
  "Notifications of critical events making use of push notification service one signal and in app notifications",
];

export default function IrisSecurityPage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-3xl flex-col px-5 pt-4 pb-24 md:px-10 md:pt-8">
      <Link
        href="/#projects"
        className="self-start px-1.5 py-1 text-base transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
      >
        &lt; Back
      </Link>

      <h1 className="mt-8 text-[32px] font-bold tracking-tight md:text-5xl">Iris Security</h1>
      <p className="text-sm md:text-base">
        Security App for users to see cameras, alarms and sensors related events, and much more.
      </p>

      <ul className="mt-6 list-disc space-y-1 pl-[18px] text-base leading-tight md:text-lg">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="mt-10">
        <StackTabs
          tabs={[
            { label: "Mobile", content: <IrisMobileStack /> },
            { label: "Backend", content: <p className="text-base">Coming soon.</p> },
          ]}
        />
      </div>
    </main>
  );
}
