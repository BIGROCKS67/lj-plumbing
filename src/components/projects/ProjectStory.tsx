import Link from "next/link";
import { PageEnd } from "@/components/ui/PageEnd";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { premierProjects, type PremierProject } from "@/data/projects";

const sections = [
  ["The brief", "brief"],
  ["The challenge", "challenge"],
  ["The L J solution", "solution"],
  ["Behind the walls", "behind"],
  ["The finish", "finish"],
] as const;

export function ProjectStory({ project }: { project: PremierProject }) {
  const others = premierProjects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <PageHero
        title={project.title}
        lede={project.line}
        image={project.hero}
        imageAlt={project.gallery[0]?.alt ?? project.title}
        imageFocus={project.heroFocus}
        eyebrow="Premier Projects"
        ctaLabel="Discuss a project"
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-ice-deep">
          {project.place} · {project.property}
        </p>
        <p className="mt-2 text-sm text-mute">
          {project.category}. {project.period}.
        </p>
        <div className="mt-10 space-y-10">
          {sections.map(([label, key]) => (
            <div key={key}>
              <h2 className="font-display text-2xl text-ink">{label}</h2>
              <p className="mt-3 text-lg leading-relaxed text-mute">{project[key]}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-ink">Project gallery</h2>
          <p className="mt-3 max-w-xl text-mute">
            From first fix and plant to the finished rooms.
          </p>
          <div className="mt-10 grid items-start gap-5 sm:grid-cols-2">
            {project.gallery.map((shot) => (
              <figure key={shot.src} className="bg-white">
                <Photo
                  src={shot.src}
                  alt={shot.alt}
                  frame={shot.frame}
                  focus={shot.focus}
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                {shot.caption && (
                  <figcaption className="px-4 py-3 text-sm text-mute">{shot.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex min-h-[3.25rem] items-center rounded-full border border-ink px-7 text-sm font-semibold text-ink hover:bg-ink hover:text-white"
            >
              All Premier Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[3.25rem] items-center rounded-full bg-ink px-7 text-sm font-semibold text-white hover:bg-ice hover:text-ink"
            >
              Discuss a project
            </Link>
          </div>
          {others.length > 0 && (
            <div className="mt-16 border-t border-line pt-12">
              <p className="text-sm font-semibold text-ice-deep">Next projects</p>
              <div className="mt-4 flex flex-wrap gap-6">
                {others.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="text-ink hover:text-ice-deep">
                    <span className="font-display text-2xl">{p.title}</span>
                    <span className="mt-1 block text-sm text-mute">{p.line}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <PageEnd />
    </>
  );
}
