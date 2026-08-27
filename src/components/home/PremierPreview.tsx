import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { premierProjects } from "@/data/projects";

export function PremierPreview() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-semibold text-ice-deep">Premier Projects</p>
          <h2 className="font-display mt-3 max-w-[20ch] text-4xl text-ink sm:text-5xl">
            Premier Projects
          </h2>
          <p className="mt-5 max-w-xl text-mute">
            A closer look at the properties, challenges and technical details behind some
            of LJ Plumbing & Heating’s most significant work.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {premierProjects.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.08}>
              <Link href={`/projects/${p.slug}`} className="group block">
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
                <p className="mt-3 text-sm font-semibold text-ink">View project</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
