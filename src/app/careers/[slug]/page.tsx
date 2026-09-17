import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CareerApply } from "@/components/careers/CareerApply";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { careerRoles, getCareerRole } from "@/data/careers";
import { siteConfig } from "@/data/site";
import { telHref } from "@/lib/utils";

export function generateStaticParams() {
  return careerRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getCareerRole(slug);
  if (!role) return { title: "Careers" };
  return {
    title: role.title,
    description: role.summary,
  };
}

export default async function CareerRolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getCareerRole(slug);
  if (!role) notFound();

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: [role.summary, ...role.intro, ...(role.closing ? [role.closing] : [])].join(" "),
    datePosted: "2026-09-17",
    employmentType: role.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
      url: siteConfig.url,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.town,
        addressRegion: siteConfig.county,
        postalCode: "OX15",
        addressCountry: "GB",
      },
    },
    ...(role.remote ? { jobLocationType: "TELECOMMUTE" } : {}),
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "GBP",
      value: {
        "@type": "QuantitativeValue",
        minValue: role.salaryMin,
        maxValue: role.salaryMax,
        unitText: "YEAR",
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "GB",
    },
    directApply: true,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
      />
      <PageHero
        title={role.title}
        lede={role.summary}
        image={role.image}
        imageAlt={role.imageAlt}
        imageFocus={role.imageFocus}
        eyebrow="Careers"
        ctaLabel="Apply for this role"
        ctaHref="#apply"
        secondaryCta={{ label: "All open roles", href: "/careers" }}
      />
      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-ice-deep">{role.eyebrow}</p>
          <div className="mt-6 space-y-5 text-lg text-mute">
            {role.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h2 className="font-display mt-12 text-3xl text-ink">What’s on offer</h2>
          <ul className="mt-6 space-y-3">
            {role.offer.map((item) => (
              <li key={item} className="border-l-2 border-ice pl-4 text-ink">
                {item}
              </li>
            ))}
          </ul>
          {role.closing && <p className="mt-8 text-lg text-mute">{role.closing}</p>}
        </div>
        <aside className="border border-line bg-white p-6">
          <p className="text-sm font-semibold text-ice-deep">The role</p>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="text-mute">Salary</dt>
              <dd className="mt-1 font-semibold text-ink">{role.salary}</dd>
            </div>
            <div>
              <dt className="text-mute">Hours</dt>
              <dd className="mt-1 font-semibold text-ink">{role.hours}</dd>
            </div>
            <div>
              <dt className="text-mute">Location</dt>
              <dd className="mt-1 font-semibold text-ink">{role.location}</dd>
            </div>
            <div>
              <dt className="text-mute">Contract</dt>
              <dd className="mt-1 font-semibold text-ink">{role.contract}</dd>
            </div>
          </dl>
          <a
            href="#apply"
            className="mt-8 inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold text-white hover:bg-ice hover:text-ink"
          >
            Apply for this role
          </a>
        </aside>
      </section>
      <section id="apply" className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold text-ice-deep">Apply</p>
            <h2 className="font-display mt-3 text-4xl text-ink">Send a short application.</h2>
            <p className="mt-4 text-mute">
              Use the form, or email a CV and a short note to{" "}
              <a
                className="font-semibold text-ice-deep"
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
              >
                {siteConfig.email}
              </a>
              . You can also call{" "}
              <a className="font-semibold text-ice-deep" href={telHref(siteConfig.phone)}>
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
          <CareerApply role={role.title} />
        </div>
      </section>
      <CtaBand
        title="See the other open role"
        lede="Both positions are listed on the careers page."
        ctaLabel="All open roles"
        ctaHref="/careers"
      />
      <div className="bg-paper py-8 text-center">
        <Link href="/careers" className="text-sm font-semibold text-ice-deep hover:underline">
          Back to careers
        </Link>
      </div>
    </>
  );
}
