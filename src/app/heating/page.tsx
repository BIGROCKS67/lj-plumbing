import type { Metadata } from "next";
import Image from "next/image";
import { ServiceDepth } from "@/components/services/ServiceDepth";
import { PageEnd } from "@/components/ui/PageEnd";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { servicePages } from "@/data/servicePages";
import { getService } from "@/data/services";

export const metadata: Metadata = {
  title: "Plumbing and heating",
  description:
    "Plumbing and heating systems designed around the property. Gas, oil, plant rooms, underfloor heating and controls. Banbury.",
};

export default function HeatingPage() {
  const s = getService("heating");
  const detail = servicePages.heating;

  return (
    <>
      <PageHero
        title={s.title}
        lede="Plumbing and heating systems designed around the property."
        image={s.image}
        imageAlt={detail.imageAlt}
        eyebrow="Plumbing & Heating"
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
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <Image
            src={images.shots.cylinder}
            alt="Cylinder and insulated pipework"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section id="renewables" className="scroll-mt-36 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-ice-deep">Plumbing & Heating</p>
          <h2 className="font-display mt-3 max-w-[16ch] text-4xl text-ink">Renewables</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-lg text-mute">
            <p>
              L J Plumbing and Heating Services designs and installs renewable heating where it
              suits the property. An air source heat pump, the cylinder, the emitters and the
              controls are planned as one system, in the same way as a gas or oil installation.
            </p>
            <p>
              Underfloor heating, radiators and hot water are sized for how the building is used.
              The plant, pipework and commissioning sit with the same team that delivers the rest
              of the plumbing and heating.
            </p>
          </div>
          <ul className="mt-8 max-w-3xl space-y-3">
            {[
              "Air source heat pumps",
              "Cylinders and hot water planned for a renewable system",
              "Underfloor heating and radiators sized for the property",
              "Controls, commissioning and handover",
            ].map((item) => (
              <li key={item} className="border-l-2 border-ice pl-4 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ServiceDepth detail={detail} enquiryLabel={detail.ctaLabel} />
      <PageEnd
        ctaLabel={detail.ctaLabel}
        bandTitle="Need a system designed around the property?"
        bandLede="Tell the team about the building, the heat source and how the house is used."
      />
    </>
  );
}
