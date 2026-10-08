import type { Metadata } from "next";
import { ServiceDepth } from "@/components/services/ServiceDepth";
import { PageEnd } from "@/components/ui/PageEnd";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoGallery } from "@/components/ui/PhotoGallery";
import { images } from "@/data/images";
import { servicePages } from "@/data/servicePages";
import { getService } from "@/data/services";

const bathroomShots = [
  { src: images.bathrooms.finals[0], alt: "Walk-in shower with green tiles", frame: "portrait" as const },
  { src: images.bathrooms.finals[1], alt: "Double vanity with brass taps", frame: "portrait" as const },
  { src: images.bathrooms.finals[2], alt: "Bathroom with a high-level cistern", frame: "portrait" as const },
  { src: images.bathrooms.finals[3], alt: "Freestanding bath", frame: "portrait" as const },
  { src: images.bathrooms.finals[4], alt: "Vanity and wall-hung sanitaryware", frame: "portrait" as const },
  { src: images.bathrooms.finals[5], alt: "Freestanding bath and brass taps", frame: "portrait" as const },
  { src: images.bathrooms.finals[6], alt: "Bathroom under the eaves", frame: "portrait" as const },
  { src: images.bathrooms.finals[7], alt: "Brass bath taps", frame: "portrait" as const },
  { src: images.bathrooms.finals[8], alt: "Family bathroom with vanity and bath", frame: "portrait" as const },
  { src: images.bathrooms.finals[9], alt: "Walk-in shower", frame: "portrait" as const },
  { src: images.bathrooms.finals[10], alt: "Bath and handheld shower", frame: "portrait" as const },
  { src: images.bathrooms.finals[11], alt: "Freestanding bath in front of a fireplace", frame: "landscape" as const },
  { src: images.bathrooms.finals[12], alt: "Freestanding bath and patterned floor", frame: "landscape" as const },
];

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
        image={images.bathrooms.hero}
        imageAlt="Freestanding bath, patterned floor and walk-in shower"
        eyebrow="Bathrooms"
        ctaLabel={detail.ctaLabel}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-lg text-mute">{s.body}</p>
        <ul className="mt-8 space-y-3">
          {s.points.map((p) => (
            <li key={p} className="border-l-2 border-ice pl-4 text-ink">
              {p}
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-ice-deep">Bathroom work</p>
          <h2 className="font-display mt-3 max-w-[18ch] text-4xl text-ink">Completed bathrooms.</h2>
          <PhotoGallery shots={bathroomShots} />
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
