import Link from "next/link";
import { projects } from "@/lib/projects";

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
          <li key={project.slug} className="animate-fade-in-view">
            <article>
              <h3 className="text-lg font-semibold md:text-2xl">
                <Link
                  href={`/projects/${project.slug}`}
                  className="transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
                >
                  {project.title}
                </Link>
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
