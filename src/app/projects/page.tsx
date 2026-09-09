import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageEnd } from "@/components/ui/PageEnd";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { premierProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Premier Projects",
  description:
    "Detailed case studies of L J Plumbing and Heating Services’ most significant work. Woodstock, Turweston House and Bloxham Road.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Premier Projects"
        lede="The properties, challenges and technical details behind the company’s most significant work."
        image={images.shots.yellowBath}
        imageAlt="Completed principal bathroom at Woodstock, yellow bath and rainforest wall"
        imageFocus="object-[center_45%]"
        eyebrow="Case studies"
        ctaLabel="Discuss a project"
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="max-w-2xl text-lg text-mute">
          Each project is presented as a detailed case study, covering the original
          brief, technical challenges, work behind the walls and completed finish.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {premierProjects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
              <div className="relative aspect-[3/2] overflow-hidden bg-paper">
                <Image
                  src={p.card}
                  alt={p.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ice-deep">
                {p.place}
              </p>
              <p className="font-display mt-1 text-3xl text-ink">{p.title}</p>
              <p className="mt-2 text-sm text-mute">{p.line}</p>
            </Link>
          ))}
        </div>
      </section>
      <PageEnd />
    </>
  );
}
