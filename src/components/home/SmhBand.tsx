import Link from "next/link";
import { siteConfig } from "@/data/site";

export function SmhBand() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-ice-deep">SMH Gas Specialist</p>
          <p className="font-display mt-2 max-w-2xl text-2xl text-ink sm:text-3xl">
            Continuity for SMH customers
          </p>
          <p className="mt-3 max-w-2xl text-sm text-mute">
            Following the acquisition of SMH Gas Specialist, existing SMH customers can be
            confident that the service they know will continue. Existing guarantees remain
            honoured, familiar faces remain involved and Mark will continue working with
            the business.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            href={siteConfig.sister.url}
            className="inline-flex min-h-[3rem] items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white hover:bg-ice hover:text-ink"
          >
            Information for SMH customers
          </Link>
          <Link
            href="/servicing"
            className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-ink/15 px-6 text-sm font-semibold text-ink hover:border-ice hover:text-ice-deep"
          >
            Book servicing
          </Link>
        </div>
      </div>
    </section>
  );
}
