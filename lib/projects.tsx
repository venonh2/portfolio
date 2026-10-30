// Every project page shows these tabs, in this order
export const stackLabels = ["Backend", "Mobile", "Web"] as const;

export type Stack = {
  label: (typeof stackLabels)[number];
  root: string;
  // Each one is connected to the root by a dotted line in the diagram
  items: [React.ReactNode, React.ReactNode, React.ReactNode];
  // Shown below the diagram, without connecting lines
  extra?: React.ReactNode;
  // Hides the crown doodle while this tab is open
  hideCrown?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  // Each divider in the projects list sits at a different offset, as in the reference layout
  divider: string;
  highlights?: string[];
  // Which tabs the details page shows (always in `stackLabels` order); all of them when omitted
  tabs?: Stack["label"][];
  stacks?: Stack[];
};

export const projects: Project[] = [
  {
    slug: "iris-security",
    title: "Iris Security",
    tabs: ["Backend", "Mobile"],
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
    slug: "calculator-in-js",
    title: "Calculator in JS",
    description:
      "An advanced calculator that eliminates the use of physical devices. It eliminates the need to spend money on physical devices and increases productivity at the same time.",
    divider: "mr-[20%]",
    highlights: ["You won’t find anything here, go away ^_^"],
    tabs: [],
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
    slug: "iris-guard-tour",
    title: "Iris Guard Tour",
    tabs: ["Mobile"],
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
    tabs: ["Backend", "Mobile"],
    description:
      "Do you know that the credit validation in Brazil, when buying a house with a government subsidy may take days?",
    divider: "ml-[32%] mr-[8%]",
    highlights: [
      "Over 10.000+ documents handled by the app ( S3 → signed urls )",
      "Document verification",
      "Kanban",
      "Push notifications with one signal for events",
      "CI/CD Pipeline",
      "From days to minutes credit verification",
    ],
    stacks: [
      {
        label: "Mobile",
        root: "React Native",
        items: [
          "Native Modules for documents verification ( RG )",
          "Different Microsservices ( documents, users, companies )",
          "E2E testing with Maestro",
        ],
        extra: (
          <ul className="mt-10 ml-6 list-disc space-y-1 pl-4.5">
            <li>CI/CD with App Center</li>
            <li>Unit tests with JEST</li>
            <li>R.N Bare workflow</li>
          </ul>
        ),
      },
      {
        label: "Backend",
        root: "Node.JS",
        hideCrown: true,
        items: [
          "MongoDB ( Too few relationships. Better a non-relational DB )",
          "Different Microsservices ( documents, users, companies )",
          "AWS ( S3, Api Gateway, Lambdas, Lambda Layers )",
        ],
        extra: (
          <ul className="mt-10 ml-6 list-disc space-y-1 pl-4.5">
            <li>CI/CD with Github Actions + Serverless</li>
            <li>Unit tests with JEST</li>
          </ul>
        ),
      },
    ],
  },
  {
    slug: "alirok",
    title: "Alirok.com",
    tabs: ["Backend", "Web"],
    description:
      "Around the world, people buy and sell products at scale, containers, trucks full of loads, etc. If you need to bring a container full of products from China, where and how would you do that? At Alirok i helped that be possible and simple.",
    divider: "mr-[42%]",
    highlights: [
      "Co-architected and built the backend that made quoting, booking and tracking possible in a single product",
      "Redesigned the third-party integrations, cutting quote response time from 17 seconds to 3",
      "Modeled the database for sea and air freight quotes ( SEA/AIR )",
      "Led the adoption of Scrum, defining workflows, sprints and reviews",
      "Set up CI/CD pipelines and testing standards adopted by the team, cutting deploy time from 12 minutes to 4",
    ],
    stacks: [
      {
        label: "Backend",
        root: "NestJS",
        items: [
          "PostgreSQL ( SEA/AIR freight quotes )",
          "AWS ( Lambda, EC2, Elastic Beanstalk, S3, RDS )",
          "Third-party integrations ( quotes from 17s to 3s )",
        ],
        extra: (
          <ul className="mt-10 ml-6 list-disc space-y-1 pl-4.5">
            <li>CI/CD with Github Actions ( deploys from 12 to 4 minutes )</li>
            <li>Cache</li>
          </ul>
        ),
      },
      {
        label: "Web",
        root: "React.js",
        items: [
          "React Query ( Tanstack )",
          "NextJS (SSR, Tailwind)",
          "Storybook for components",
        ],
        extra: (
          <ul className="mt-10 ml-6 list-disc space-y-1 pl-4.5">
            <li>CI/CD with Github Actions</li>
            <li>Unit tests with JEST</li>
          </ul>
        ),
      },
    ],
  },
  {
    slug: "cidade-segura",
    title: "Cidade Segura",
    tabs: ["Backend", "Mobile"],
    description:
      "A project focused on prefectures, integrating cameras, alarms and sensors across the entire city.",
    divider: "ml-[24%] mr-[12%]",
    stacks: [
      {
        label: "Mobile",
        root: "React Native",
        items: [
          "RTSP protocol with Native Modules",
          "CI/CD With App Center ( it no longer exists )",
          "Unit tests with JEST & R.N Testing Library",
        ],
      },
      {
        label: "Backend",
        root: ".NET",
        items: [
          <>
            Different Microsservices
            <br />( cameras, events, clients )
          </>,
          "Multi tenant architecture for different prefectures",
          "Unit tests with xUnit",
        ],
        extra: (
          <ul className="mt-10 list-disc space-y-1 pl-4.5">
            <li>Over 20+ prefectures</li>
          </ul>
        ),
      },
    ],
  },
  // {
  //   slug: "jobs-radar",
  //   title: "Jobs Radar",
  //   tabs: ["Backend", "Mobile"],
  //   description: "How about finding jobs in your city and region with just a few clicks?",
  //   divider: "mr-[30%]",
  // },
  {
    slug: "mafamanda-app",
    title: "Mafamanda App",
    description:
      "Pacifier use harms children’s future development. How can we teach them to give up the pacifier in a playful way?",
    divider: "ml-[36%]",
    highlights: [
      "Teaches children around age 4 to stop using a pacifier",
      "Made with the dentistry department of the University of Ponta Grossa",
      "Based on proven studies",
    ],
    tabs: ["Mobile"],
    stacks: [
      {
        label: "Mobile",
        root: "React Native",
        items: [
          "Original material → app adaptation",
          "Helped with the patent registration",
          "In-app stories and interactions",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
