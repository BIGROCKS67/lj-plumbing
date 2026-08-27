import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  lede?: string;
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  showCta?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCta?: { label: string; href: string };
  imageFocus?: string;
};

export function PageHero({
  title,
  lede,
  image,
  imageAlt = "",
  eyebrow,
  showCta = true,
  ctaLabel = "Discuss a project",
  ctaHref = "/contact",
  secondaryCta,
  imageFocus = "object-center",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[70svh] bg-ink md:grid md:min-h-[80vh] md:grid-cols-2">
      <div className="absolute inset-0 md:relative md:order-2 md:min-h-[80vh]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className={cn("object-cover", imageFocus)}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20 md:hidden" />
      </div>
      <div className="relative z-10 flex min-h-[70svh] flex-col justify-end px-5 pb-10 pt-40 sm:px-10 md:min-h-[80vh] md:justify-center md:pb-10 md:pt-36 lg:px-14">
        {eyebrow && (
          <p className="inline-flex w-fit rounded-full bg-ice/15 px-3 py-1 text-xs font-semibold text-ice">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display mt-4 max-w-[16ch] text-4xl text-white sm:text-6xl">{title}</h1>
        {lede && <p className="mt-4 max-w-md text-base text-white/85 sm:text-lg md:text-white/80">{lede}</p>}
        {showCta && (
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={ctaHref}
              className="inline-flex min-h-[3.25rem] max-w-full items-center justify-center rounded-full bg-ice px-7 text-sm font-semibold text-ink hover:bg-white"
            >
              {ctaLabel}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex min-h-[3.25rem] max-w-full items-center justify-center rounded-full border border-white/30 px-7 text-sm font-semibold text-white hover:border-white"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
