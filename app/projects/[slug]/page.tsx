import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { getProject, projects } from "@/lib/projects";
import { ProjectDetails, ProjectDetailsSkeleton } from "./project-details";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};

  return {
    title: `${project.title} | Brendow E. R`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-3xl flex-col px-5 pt-4 pb-24 md:px-10 md:pt-8">
      <Link
        href="/#projects"
        className="self-start px-1.5 py-1 text-base transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
      >
        &lt; Back
      </Link>

      <Suspense fallback={<ProjectDetailsSkeleton />}>
        <ProjectDetails params={params} />
      </Suspense>
    </main>
  );
}
