import type { Metadata } from "next";
import Image from "next/image";
import { PageEnd } from "@/components/ui/PageEnd";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { getService } from "@/data/services";

export const metadata: Metadata = {
  title: "Servicing and maintenance",
  description:
    "Planned servicing, diagnostics and ongoing care. Existing SMH customers remain fully supported.",
};

export default function ServicingPage() {
  const s = getService("servicing");
  return (
    <>
      <PageHero
        title={s.title}
        lede={s.line}
        image={s.image}
        imageAlt="Engineer servicing an outdoor boiler"
        eyebrow="Servicing"
        ctaLabel="Book a service"
      />
      <section className="bg-paper">
        <p className="mx-auto max-w-7xl px-4 py-8 text-base text-ink sm:px-6 lg:px-8">
          Existing SMH customer? Guarantees remain honoured, familiar faces remain
          involved, and Mark continues with the business.{" "}
          <a href="/smh-gas-specialist" className="font-semibold text-ice-deep">
            Read the SMH information
          </a>
          .
        </p>
      </section>
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
        <div className="grid gap-3">
          <div className="relative aspect-[16/11] overflow-hidden bg-ink">
            <Image
              src={images.shots.plantRoom}
              alt="Completed plant room after installation"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[16/11] overflow-hidden bg-ink">
            <Image
              src={images.services.gasBoiler}
              alt="Open gas boiler during a service and safety check"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <PageEnd
        ctaLabel="Book a service"
        formHeading="Book servicing or request support."
        bandTitle="Ready to book a service?"
        bandLede="Call the team or send the form marked as servicing and maintenance."
      />
    </>
  );
}
