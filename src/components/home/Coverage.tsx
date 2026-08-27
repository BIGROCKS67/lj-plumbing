import { CoverageMap } from "@/components/home/CoverageMap";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/data/site";
import { telHref } from "@/lib/utils";

export function Coverage() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-semibold text-ice-deep">Areas we cover</p>
          <h2 className="font-display mt-3 max-w-[16ch] text-4xl text-ink sm:text-5xl">
            Based in Adderbury. Working across the surrounding counties.
          </h2>
          <p className="mt-5 max-w-2xl text-mute">
            The pin is the office at Banbury Business Park. The circle is the usual
            working area from that base.
          </p>
        </FadeIn>
        <div className="mt-10 overflow-hidden border border-line bg-white">
          <CoverageMap />
          <div className="flex flex-col gap-3 border-t border-line px-5 py-4 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
            <p>{siteConfig.address}</p>
            <p>
              Unsure whether we cover your property? Call{" "}
              <a className="font-semibold text-ice-deep" href={telHref(siteConfig.phone)}>
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
