import Link from "next/link";

type Project = {
  title: string;
  description: string;
  href?: string;
  // Each divider sits at a different offset, as in the reference layout
  divider: string;
};

const projects: Project[] = [
  {
    title: "Calculator in JS",
    description:
      "An advanced calculator that eliminates the use of physical devices. It eliminates the need to spend money on physical devices and increases productivity at the same time.",
    divider: "mr-[20%]",
  },
  {
    title: "Iris Security",
    description:
      "Security App for users to see cameras, alarms and sensor-related events, and much more.",
    href: "/projects/iris-security",
    divider: "ml-[40%]",
  },
  {
    title: "Iris Guard Tour",
    description:
      "Offline first. What if your security team had an app that registers the percurse during a ronda? Really nice project.",
    divider: "mx-[20%]",
  },
  {
    title: "Approva Crédito",
    description:
      "Do you know that the credit validation in Brazil, when buying a house with a government subsidy may take weeks?",
    divider: "ml-[32%] mr-[8%]",
  },
  {
    title: "Alirok.com",
    description:
      "Around the world, people buy and sell products at scale, containers, trucks full of loads, etc. If you need to bring a container full of products from China, where and how would you do that? At Alirok i helped that be possible and simple.",
    divider: "mr-[42%]",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto w-full max-w-3xl px-5 pt-16 pb-24 md:px-10 md:pt-24"
    >
      <header>
        <h2 id="projects-title" className="text-[32px] font-bold tracking-tight md:text-5xl">
          Projects
        </h2>
        <p className="text-lg md:text-2xl">Part of over <span className="text-[20px] font-bold underline decoration-1 underline-offset-4 md:text-[26px]">11+</span> projects</p>
      </header>

      <ul className="mt-24 flex flex-col gap-5 md:mt-32 md:gap-8">
        {projects.map((project) => (
          <li key={project.title} className="animate-fade-in-view">
            <article>
              <h3 className="text-lg font-semibold md:text-2xl">
                {project.href ? (
                  <Link
                    href={project.href}
                    className="transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
                  >
                    {project.title}
                  </Link>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mt-1 text-justify text-sm leading-4.75 tracking-wide md:mt-2 md:text-base md:leading-6">
                {project.description}
              </p>
              <hr className={`mt-3 border-foreground/70 md:mt-5 ${project.divider}`} />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
