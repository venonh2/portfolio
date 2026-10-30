import { notFound } from "next/navigation";
import StackDiagram from "@/components/project-details/StackDiagram";
import StackTabs from "@/components/project-details/StackTabs";
import { getProject } from "@/lib/projects";

export async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <h1 className="mt-8 text-[32px] font-bold tracking-tight md:text-5xl">{project.title}</h1>
      <p className="text-sm md:text-base">{project.description}</p>

      {project.highlights && (
        <ul className="mt-6 list-disc space-y-1 pl-4.5 text-base leading-tight md:text-lg">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {project.stacks && (
        <div className="mt-10">
          <StackTabs
            tabs={project.stacks.map((stack) => ({
              label: stack.label,
              content: (
                <StackDiagram root={stack.root} items={stack.items}>
                  {stack.extra}
                </StackDiagram>
              ),
            }))}
          />
        </div>
      )}
    </>
  );
}

export function ProjectDetailsSkeleton() {
  return (
    <div aria-hidden className="animate-pulse">
      <div className="mt-8 h-10 w-2/3 rounded bg-foreground/10 md:h-14" />
      <div className="mt-2 h-4 w-full rounded bg-foreground/10" />
      <div className="mt-1.5 h-4 w-4/5 rounded bg-foreground/10" />
    </div>
  );
}
