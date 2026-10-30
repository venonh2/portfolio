import type { Metadata } from "next";
import Link from "next/link";
import StackDiagram from "@/components/project-details/StackDiagram";
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

      <ul className="mt-6 list-disc space-y-1 pl-4.5 text-base leading-tight md:text-lg">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="mt-10">
        <StackTabs
          tabs={[
            {
              label: "Mobile",
              content: (
                <StackDiagram
                  root="React Native"
                  items={[
                    "RTSP protocol with Native Modules",
                    "CI/CD With App Center ( it no longer exists )",
                    "Unit tests with ... Can you guess? I’m just Jesting don’t worry",
                  ]}
                >
                  <p className="mt-14 pl-[15%]">Over 10 flavors for different customers</p>
                </StackDiagram>
              ),
            },
            {
              label: "Backend",
              content: (
                <StackDiagram
                  root=".NET"
                  items={[
                    <>
                      Different Microsservices
                      <br />( cameras, events, clients )
                    </>,
                    "Handling over 50 QPS with Peak of 120 QPS",
                    "Unit tests with xUnit",
                  ]}
                >
                  <ul className="mt-10 list-disc space-y-1 pl-4.5">
                    <li>Over 100 Stored procedures</li>
                    <li>50+ Triggers</li>
                  </ul>
                </StackDiagram>
              ),
            },
          ]}
        />
      </div>
    </main>
  );
}
