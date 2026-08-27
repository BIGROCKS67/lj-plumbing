import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectStory } from "@/components/projects/ProjectStory";
import { getProject, premierProjects } from "@/data/projects";

export function generateStaticParams() {
  return premierProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Premier Project" };
  return {
    title: project.title,
    description: project.line,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectStory project={project} />;
}
