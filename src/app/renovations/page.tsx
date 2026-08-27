import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceDepth } from "@/components/services/ServiceDepth";
import { PageEnd } from "@/components/ui/PageEnd";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { servicePages } from "@/data/servicePages";
import { getService } from "@/data/services";

export const metadata: Metadata = {
  title: "Complete renovations",
  description:
    "Complete home and room renovations from first fix to final finish. Required trades supplied and coordinated by LJ Plumbing & Heating.",
};

export default function RenovationsPage() {
  const s = getService("renovations");
  const detail = servicePages.renovations;

  return (
    <>
      <PageHero
        title={s.title}
        lede="Complete renovations, managed from first fix to final finish."
        image={s.image}
        imageAlt={detail.imageAlt}
        eyebrow="Renovations"
        ctaLabel={detail.ctaLabel}
      />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-lg text-mute">{s.body}</p>
          <ul className="mt-8 space-y-3">
            {s.points.map((p) => (
              <li key={p} className="border-l-2 border-ice pl-4 text-ink">
                {p}
              </li>
            ))}
          </ul>
          <Link
            href="/projects"
            className="mt-8 inline-flex min-h-[3.25rem] items-center text-sm font-semibold text-ice-deep hover:text-ink"
          >
            See Premier Projects
          </Link>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <Image
            src={images.shots.turwestonBath}
            alt="Finished bathroom on a complete renovation"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <ServiceDepth detail={detail} enquiryLabel={detail.ctaLabel} />
      <PageEnd
        ctaLabel={detail.ctaLabel}
        bandTitle="Planning a renovation?"
        bandLede="Tell the team about the property, the rooms and the standard you expect."
      />
    </>
  );
}
