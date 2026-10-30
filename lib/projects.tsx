export type Stack = {
  label: string;
  root: string;
  // Each one is connected to the root by a dotted line in the diagram
  items: [React.ReactNode, React.ReactNode, React.ReactNode];
  // Shown below the diagram, without connecting lines
  extra?: React.ReactNode;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  // Each divider in the projects list sits at a different offset, as in the reference layout
  divider: string;
  highlights?: string[];
  stacks?: Stack[];
};

export const projects: Project[] = [
  {
    slug: "calculator-in-js",
    title: "Calculator in JS",
    description:
      "An advanced calculator that eliminates the use of physical devices. It eliminates the need to spend money on physical devices and increases productivity at the same time.",
    divider: "mr-[20%]",
    highlights: ["You won’t find anything here, go away"],
    stacks: [
      {
        label: "Mobile",
        root: "React Native",
        items: [
          "Over 1.000.000 possibilities",
          "Over 1.000.000 possibilities",
          "Over 1.000.000 possibilities",
        ],
      },
    ],
  },
  {
    slug: "iris-security",
    title: "Iris Security",
    description:
      "Security App for users to see cameras, alarms and sensor-related events, and much more.",
    divider: "ml-[40%]",
    highlights: [
      "App with 5k+ DAL",
      "The app allowed users to check their cameras images in realtime camera visualization making use of RTSP protocol.",
      "Events list making use of pooling, including alarm events, sensors events e cameras events with image attached to it.",
      "Notifications of critical events making use of push notification service one signal and in app notifications",
    ],
    stacks: [
      {
        label: "Mobile",
        root: "React Native",
        items: [
          "RTSP protocol with Native Modules",
          "CI/CD With App Center ( it no longer exists )",
          "Unit tests with ... Can you guess? I’m just Jesting don’t worry",
        ],
        extra: <p className="mt-14 pl-[15%]">Over 10 flavors for different customers</p>,
      },
      {
        label: "Backend",
        root: ".NET",
        items: [
          <>
            Different Microsservices
            <br />( cameras, events, clients )
          </>,
          "Handling over 50 QPS with Peak of 120 QPS",
          "Unit tests with xUnit",
        ],
        extra: (
          <ul className="mt-10 list-disc space-y-1 pl-4.5">
            <li>Over 100 Stored procedures</li>
            <li>50+ Triggers</li>
          </ul>
        ),
      },
    ],
  },
  {
    slug: "iris-guard-tour",
    title: "Iris Guard Tour",
    description:
      "Offline first. What if your security team had an app that registers the percurse during a ronda? Really nice project.",
    divider: "mx-[20%]",
    highlights: [
      "App with 500+ Users",
      "The app allowed users to work without internet connection",
      "Geolocation for predefined routes",
      "I was responsible for the entire app life cycle ( creation → tests → validation → deployment)",
    ],
    stacks: [
      {
        label: "Mobile",
        root: "React Native",
        items: [
          "Offline-first with WatermelonDB",
          "CI/CD With App Center ( it no longer exists )",
          "Unit tests with JEST & R.N Testing Library",
        ],
      },
    ],
  },
  {
    slug: "approva-credito",
    title: "Approva Crédito",
    description:
      "Do you know that the credit validation in Brazil, when buying a house with a government subsidy may take weeks?",
    divider: "ml-[32%] mr-[8%]",
  },
  {
    slug: "alirok",
    title: "Alirok.com",
    description:
      "Around the world, people buy and sell products at scale, containers, trucks full of loads, etc. If you need to bring a container full of products from China, where and how would you do that? At Alirok i helped that be possible and simple.",
    divider: "mr-[42%]",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
