import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageEnd } from "@/components/ui/PageEnd";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About LJ",
  description:
    "LJ Plumbing & Heating delivers complete renovations, complex plumbing and heating, and planned works for schools. Banbury.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A company built for complete projects."
        lede="LJ Plumbing & Heating takes responsibility for substantial residential work, complex systems and education estates."
        image={images.shots.vansClose}
        imageAlt="LJ Plumbing & Heating vans on site"
        imageFocus="object-[center_70%]"
        eyebrow="About LJ"
        ctaLabel="Discuss a project"
      />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4 text-lg text-mute">
          <p>
            {siteConfig.name} (company no. {siteConfig.companyNumber}) is based at{" "}
            {siteConfig.address}.
          </p>
          <p>
            The company delivers complete bathroom and home renovations, plumbing and
            heating systems, and planned works for schools and estates. Required trades
            are supplied and coordinated through one accountable team. The standard
            behind the walls matters as much as the visible finish.
          </p>
          <p>
            Gas Safe {siteConfig.gasSafe}. OFTEC {siteConfig.oftec}. VAT {siteConfig.vat}.
            The company is based in Adderbury and works across Banbury and the
            surrounding counties.
          </p>
          <p>
            In 2026 the company acquired SMH Gas Specialist. Existing SMH customers remain
            fully supported.{" "}
            <Link href="/smh-gas-specialist" className="font-semibold text-ice-deep">
              Information for SMH customers
            </Link>
            .
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <Image src={images.work.site} alt="Boiler, cylinder and pipework on site" fill className="object-cover object-[center_40%]" />
        </div>
      </section>
      <PageEnd />
    </>
  );
}
