import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceDepth } from "@/components/services/ServiceDepth";
import { PageEnd } from "@/components/ui/PageEnd";
import { images } from "@/data/images";
import { servicePages } from "@/data/servicePages";
import { getService } from "@/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Complete renovations",
  description:
    "Complete home and room renovations from first fix to final finish. Required trades supplied and coordinated by L J Plumbing and Heating Services.",
};

const heroShots = [
  {
    src: images.shots.renovationsBuild,
    alt: "Bloxham Road during the build",
    caption: "During the build",
    focus: "object-[center_46%]",
  },
  {
    src: images.shots.renovationsComplete,
    alt: "The finished house on Bloxham Road",
    caption: "Completed",
    focus: "object-center",
  },
];

export default function RenovationsPage() {
  const s = getService("renovations");
  const detail = servicePages.renovations;

  return (
    <>
      <section className="bg-ink md:grid md:min-h-[80vh] md:grid-cols-2">
        <div className="flex min-h-[70svh] flex-col justify-end px-5 pb-10 pt-40 sm:px-10 md:min-h-[80vh] md:justify-center md:pb-10 md:pt-36 lg:px-14">
          <p className="inline-flex w-fit rounded-full bg-ice/15 px-3 py-1 text-xs font-semibold text-ice">
            Renovations
          </p>
          <h1 className="font-display mt-4 max-w-[16ch] text-4xl text-white sm:text-6xl">{s.title}</h1>
          <p className="mt-4 max-w-md text-base text-white/85 sm:text-lg md:text-white/80">
            Complete renovations, managed from first fix to final finish.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-ice px-7 text-sm font-semibold text-ink hover:bg-white"
          >
            {detail.ctaLabel}
          </Link>
        </div>
        <div className="grid md:min-h-[80vh] md:grid-rows-2">
          {heroShots.map((shot) => (
            <div key={shot.caption} className="relative aspect-[4/3] md:aspect-auto">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                priority
                className={cn("object-cover", shot.focus)}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <p className="absolute bottom-3 left-4 text-xs font-semibold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                {shot.caption}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
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
