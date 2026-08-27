import type { Metadata } from "next";
import Image from "next/image";
import { PageEnd } from "@/components/ui/PageEnd";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { getService } from "@/data/services";

export const metadata: Metadata = {
  title: "Project design",
  description:
    "Consultation, technical planning and CAD for plumbing and heating projects. Banbury.",
};

export default function DesignPage() {
  const s = getService("design");
  return (
    <>
      <PageHero
        title={s.title}
        lede={s.line}
        image={images.shots.ufh}
        imageAlt="Underfloor heating set out before screed, during technical preparation"
        imageFocus="object-center"
        eyebrow="Design"
        ctaLabel="Discuss a project"
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
        </div>
        <div className="grid gap-3">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <Image
              src={images.shots.firstFix}
              alt="First-fix pipework prepared before finishes"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[16/11] overflow-hidden bg-ink">
            <Image
              src={images.services.design}
              alt="Plant and cylinder set out during installation preparation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <PageEnd ctaLabel="Discuss a project" />
    </>
  );
}
