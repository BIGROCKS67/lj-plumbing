import Link from "next/link";
import { siteConfig } from "@/data/site";
import { telHref } from "@/lib/utils";

type CtaBandProps = {
  title?: string;
  lede?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CtaBand({
  title = "Planning a substantial project?",
  lede = "Speak to LJ Plumbing & Heating about the property, the scope and the standard you expect.",
  ctaLabel = "Start a project enquiry",
  ctaHref = "/contact",
}: CtaBandProps) {
  return (
    <section className="bg-ice">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">{title}</h2>
          <p className="mt-2 max-w-md text-ink/80">{lede}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={ctaHref}
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold text-white"
          >
            {ctaLabel}
          </Link>
          <a
            href={telHref(siteConfig.phone)}
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-ink"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
