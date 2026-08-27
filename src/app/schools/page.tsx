import type { Metadata } from "next";
import Link from "next/link";
import { PageEnd } from "@/components/ui/PageEnd";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { schoolWork } from "@/data/projects";
import { schoolAssurance } from "@/data/servicePages";

export const metadata: Metadata = {
  title: "Schools & Estates",
  description:
    "Plumbing, heating and refurbishment works for schools and education estates. Planned around term time and holidays.",
};

export default function SchoolsPage() {
  return (
    <>
      <PageHero
        title={schoolWork.title}
        lede={schoolWork.line}
        image={schoolWork.hero}
        imageAlt="Completed school washroom at Bishop Loveday Primary School"
        imageFocus="object-[center_40%]"
        eyebrow="Education"
        ctaLabel="Discuss planned works"
      />
      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-lg text-mute">{schoolWork.body}</p>
          <ul className="mt-8 space-y-3">
            {schoolWork.points.map((p) => (
              <li key={p} className="border-l-2 border-ice pl-4 text-ink">
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-mute">
            Planning works across a school or education estate? Send the scope, programme
            and site requirements to the team.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-[3.25rem] items-center rounded-full bg-ink px-7 text-sm font-semibold text-white hover:bg-ice hover:text-ink"
          >
            Discuss planned works
          </Link>
        </div>
        <div className="grid grid-cols-2 items-start gap-3">
          {schoolWork.shots.slice(0, 4).map((shot) => (
            <Photo
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              frame={shot.frame}
              sizes="25vw"
            />
          ))}
        </div>
      </section>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-ice-deep">For schools and estates</p>
          <h2 className="font-display mt-3 max-w-[18ch] text-4xl text-ink">
            Information for site and facilities teams.
          </h2>
          <p className="mt-4 max-w-2xl text-mute">
            For schools, academy trusts and facilities teams, site-specific documentation
            can be provided as required, including insurance details, risk assessments,
            method statements and agreed safeguarding arrangements. Requirements are
            confirmed with the site before work begins.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {schoolAssurance.map((item) => (
              <div key={item.title} className="border-l-2 border-ice pl-5">
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-mute">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-ice-deep">Featured school project</p>
          <h2 className="font-display mt-3 text-4xl text-ink">{schoolWork.featured.title}</h2>
          <p className="mt-2 text-sm text-mute">
            {schoolWork.featured.place}. {schoolWork.featured.period}.
          </p>
          <p className="mt-6 max-w-3xl text-lg text-mute">{schoolWork.featured.line}</p>
          <p className="mt-4 max-w-3xl text-mute">{schoolWork.featured.body}</p>
          <p className="mt-4 max-w-3xl text-mute">{schoolWork.featured.note}</p>
          <div className="mt-10 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {schoolWork.shots.map((shot) => (
              <Photo
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                frame={shot.frame}
                sizes="33vw"
              />
            ))}
          </div>
        </div>
      </section>
      <PageEnd
        ctaLabel="Discuss planned works"
        formHeading="Send the scope and programme."
        bandTitle="Planning works across a school or estate?"
        bandLede="Send the scope, programme and site requirements. The team will come back with a clear next step."
      />
    </>
  );
}
