import Image from "next/image";
import Link from "next/link";
import { premierProjects } from "@/data/projects";
import type { ServicePageDetail } from "@/data/servicePages";

type ServiceDepthProps = {
  detail: ServicePageDetail;
  enquiryLabel: string;
};

export function ServiceDepth({ detail, enquiryLabel }: ServiceDepthProps) {
  const related = premierProjects.filter((p) => detail.projectSlugs.includes(p.slug));

  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-ice-deep">How the work is delivered</p>
        <h2 className="font-display mt-3 max-w-[18ch] text-4xl text-ink">
          Capability, from first meeting to handover.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {detail.sections.map((section) => (
            <div key={section.title} className="border-l-2 border-ice pl-5">
              <h3 className="font-display text-2xl text-ink">{section.title}</h3>
              <p className="mt-3 text-mute">{section.text}</p>
            </div>
          ))}
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-line pt-12">
            <p className="text-sm font-semibold text-ice-deep">Relevant Premier Projects</p>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {related.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
                  <div className="relative mb-4 aspect-[3/2] overflow-hidden bg-ink">
                    <Image
                      src={p.card}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 640px) 40vw, 100vw"
                    />
                  </div>
                  <p className="font-display text-3xl text-ink group-hover:text-ice-deep">{p.title}</p>
                  <p className="mt-2 text-sm text-mute">{p.line}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link
          href="/contact"
          className="mt-12 inline-flex min-h-[3.25rem] items-center rounded-full bg-ink px-7 text-sm font-semibold text-white hover:bg-ice hover:text-ink"
        >
          {enquiryLabel}
        </Link>
      </div>
    </section>
  );
}
