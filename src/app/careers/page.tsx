import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { careerRoles, careersIntro } from "@/data/careers";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "L J Plumbing and Heating Services is hiring an Administration Assistant / PA and a Gas Safe Engineer in North Oxfordshire.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        title={careersIntro.title}
        lede={careersIntro.lede}
        image={images.shots.fleet}
        imageAlt="L J Plumbing and Heating Services vans"
        imageFocus="object-[center_60%]"
        eyebrow="Careers"
        ctaLabel="View open roles"
        ctaHref="#open-roles"
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-ice-deep">Open roles</p>
        <h2 className="font-display mt-3 text-4xl text-ink">Two positions, one growing team.</h2>
        <p className="mt-6 text-lg text-mute">{careersIntro.body}</p>
      </section>
      <section id="open-roles" className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {careerRoles.map((role) => (
            <article key={role.slug} className="flex flex-col border border-line bg-paper p-6 sm:p-8">
              <p className="text-sm font-semibold text-ice-deep">{role.eyebrow}</p>
              <h3 className="font-display mt-3 text-3xl text-ink">{role.title}</h3>
              <p className="mt-4 text-mute">{role.summary}</p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                <li>{role.salary}</li>
                <li>{role.hours}</li>
                <li>{role.location}</li>
                <li>{role.contract}</li>
              </ul>
              <Link
                href={`/careers/${role.slug}`}
                className="mt-8 inline-flex min-h-[3.25rem] w-fit items-center rounded-full bg-ink px-7 text-sm font-semibold text-white hover:bg-ice hover:text-ink"
              >
                Read the full role
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CtaBand
        title="Interested in either role?"
        lede={`Send a short note and a CV to ${siteConfig.email}, or open the role and apply from the page.`}
        ctaLabel="Email the team"
        ctaHref={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Careers enquiry")}`}
      />
    </>
  );
}
