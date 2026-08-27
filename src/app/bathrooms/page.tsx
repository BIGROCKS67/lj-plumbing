import type { Metadata } from "next";
import Image from "next/image";
import { ServiceDepth } from "@/components/services/ServiceDepth";
import { PageEnd } from "@/components/ui/PageEnd";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { servicePages } from "@/data/servicePages";
import { getService } from "@/data/services";

export const metadata: Metadata = {
  title: "Bespoke bathrooms",
  description:
    "Complete bathrooms and wet rooms, planned and finished as a single project. Banbury.",
};

export default function BathroomsPage() {
  const s = getService("bathrooms");
  const detail = servicePages.bathrooms;

  return (
    <>
      <PageHero
        title={s.title}
        lede="Complete bathrooms, considered down to the last detail."
        image={s.image}
        imageAlt={detail.imageAlt}
        eyebrow="Bathrooms"
        ctaLabel={detail.ctaLabel}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-lg text-mute">{s.body}</p>
          <ul className="mt-8 space-y-3">
            {s.points.map((p) => (
              <li key={p} className="border-l-2 border-ice pl-4 text-ink">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative aspect-[3/4] overflow-hidden bg-ink">
            <Image
              src={images.shots.starEnsuite}
              alt="Guest en-suite with star-pattern tiles"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mt-8 aspect-[3/4] overflow-hidden bg-ink">
            <Image
              src={images.shots.turwestonShower}
              alt="Finished walk-in shower"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <ServiceDepth detail={detail} enquiryLabel={detail.ctaLabel} />
      <PageEnd
        ctaLabel={detail.ctaLabel}
        bandTitle="Planning a bathroom?"
        bandLede="Send the room, the finish you want and any drawings you already have."
      />
    </>
  );
}
