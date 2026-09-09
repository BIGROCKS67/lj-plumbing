import type { Metadata } from "next";
import Link from "next/link";
import { PageEnd } from "@/components/ui/PageEnd";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "SMH Gas Specialist",
  description:
    "SMH Gas Specialist is now part of L J Plumbing and Heating Services. Existing SMH customers remain fully supported. Guarantees honoured. Mark continues with the business.",
};

const faqs = [
  {
    q: "Will my existing guarantee still be honoured?",
    a: "Yes. Existing SMH guarantees will continue to be honoured following the acquisition.",
  },
  {
    q: "Will the people I know still be involved?",
    a: "Yes. Familiar faces remain involved, and Mark will continue working with the business following Steve’s retirement.",
  },
  {
    q: "What changes for me as a customer?",
    a: "You continue to receive personal, dependable service, now supported by L J Plumbing and Heating Services’ larger team, wider service range and increased capacity.",
  },
  {
    q: "Who should I contact now?",
    a: `Call ${siteConfig.phone} or send the contact form marked as an existing SMH customer.`,
  },
];

export default function SmhPage() {
  return (
    <>
      <PageHero
        title="SMH Gas Specialist is now part of L J Plumbing and Heating Services"
        lede="L J Plumbing and Heating Services has officially acquired SMH Gas Specialist as Steve retires following an exceptional 50 years in the industry."
        image={images.shots.plantRoom}
        imageAlt="Completed heating plant room, the standard of work that now supports SMH customers"
        imageFocus="object-[center_40%]"
        eyebrow="SMH customers"
        ctaLabel="Existing SMH customer? Contact the team"
        secondaryCta={{ label: "Book servicing", href: "/servicing" }}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-lg text-mute">
          Our priority throughout this transition is simple: to provide continuity for
          SMH customers and protect the trusted service they have relied on for many years.
        </p>
        <h2 className="font-display mt-12 text-3xl text-ink">The service you know will continue</h2>
        <p className="mt-4 text-mute">
          Existing SMH customers can be confident that existing guarantees will remain
          honoured, familiar faces will remain involved and the personal service associated
          with SMH will continue. Mark will continue working with the business following
          Steve’s retirement, bringing with him the knowledge, experience and customer
          relationships built over many years.
        </p>
        <h2 className="font-display mt-12 text-3xl text-ink">Continuity with added capability</h2>
        <p className="mt-4 text-mute">
          By bringing SMH into L J Plumbing and Heating Services, customers gain the support of a
          larger team, a wider range of services and increased capacity, while retaining
          the honest advice, quality workmanship and attentive service they already know.
        </p>
        <h2 className="font-display mt-12 text-3xl text-ink">Carrying a trusted reputation forward</h2>
        <p className="mt-4 text-mute">
          SMH has been a trusted name across Banbury and the surrounding area for decades.
          L J Plumbing and Heating Services is proud to carry that reputation forward and thanks Steve
          for his contribution to the industry, his customers and the local community
          throughout a 50-year career.
        </p>
        <div className="mt-12 bg-paper p-6 sm:p-8">
          <p className="font-display text-2xl text-ink">Already an SMH customer?</p>
          <p className="mt-3 text-mute">
            The team is here to help with ongoing servicing, maintenance and plumbing or
            heating requirements.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-[3.25rem] items-center rounded-full bg-ink px-7 text-sm font-semibold text-white hover:bg-ice hover:text-ink"
            >
              Contact the team
            </Link>
            <Link
              href="/servicing"
              className="inline-flex min-h-[3.25rem] items-center rounded-full border border-ink px-7 text-sm font-semibold text-ink"
            >
              Book servicing
            </Link>
          </div>
        </div>
        <ul className="mt-14 space-y-8">
          {faqs.map((item) => (
            <li key={item.q}>
              <p className="font-semibold text-ink">{item.q}</p>
              <p className="mt-2 text-mute">{item.a}</p>
            </li>
          ))}
        </ul>
      </section>
      <PageEnd
        ctaLabel="Contact the team"
        formHeading="Contact the team."
        bandTitle="Existing SMH customer?"
        bandLede="Call the team or send the form marked as an existing SMH customer."
      />
    </>
  );
}
