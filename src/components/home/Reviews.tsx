import { FadeIn } from "@/components/ui/FadeIn";
import { googleReviews, reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site";

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5c-.3 1.5-1.1 2.7-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.4 21.3 7.4 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.4 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.7.4-2.4V6.5H1.4C.5 8.3 0 10.1 0 12s.5 3.7 1.4 5.5l4-3.1Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.7 0 3.3.6 4.5 1.7l3.4-3.4C17.9 1.1 15.2 0 12 0 7.4 0 3.4 2.7 1.4 6.5l4 3.1C6.3 6.8 8.9 4.8 12 4.8Z"
      />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count} stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-[#fbbc04]" aria-hidden>
          <path d="M10 1.5 12.7 7l6 .5-4.6 4 1.4 5.8L10 14.6 4.5 17.3 5.9 11.5 1.3 7.5 7.3 7 10 1.5Z" />
        </svg>
      ))}
    </span>
  );
}

export function Reviews() {
  const listing = siteConfig.googleReviews;

  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-semibold text-ice-deep">Google reviews</p>
          <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
            What clients say after handover.
          </h2>
          <p className="mt-5 max-w-2xl text-mute">
            {siteConfig.sister.name} is now part of L J Plumbing and Heating Services.
            These are the live Google reviews for that listing.
          </p>
          <div className="mt-8 flex flex-col gap-5 border border-line bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-center gap-4">
              <GoogleMark className="h-10 w-10 shrink-0" />
              <div>
                <p className="flex flex-wrap items-center gap-2 font-display text-3xl text-ink">
                  {listing.rating}
                  <Stars count={5} />
                </p>
                <p className="mt-1 text-sm text-mute">
                  {listing.count} Google reviews · {listing.listingName}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={listing.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[3rem] items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white hover:bg-ice hover:text-ink"
              >
                Read all {listing.count} on Google
              </a>
              <a
                href={listing.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-ink/15 px-6 text-sm font-semibold text-ink hover:border-ice hover:text-ice-deep"
              >
                Write a review
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {googleReviews.map((r, i) => (
            <FadeIn key={`${r.name}-${i}`} delay={(i % 4) * 0.05}>
              <blockquote className="h-full bg-white p-6 sm:p-8">
                <Stars count={r.stars} />
                <p className="mt-4 text-base leading-relaxed text-ink">“{r.quote}”</p>
                <footer className="mt-5 flex items-center justify-between gap-3 text-sm">
                  <span className="font-semibold text-ice-deep">{r.name}</span>
                  <span className="text-mute">Posted on Google</span>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16">
          <p className="text-sm font-semibold text-ice-deep">From recent projects</p>
          <h3 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
            Bathroom and renovation work.
          </h3>
        </FadeIn>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <FadeIn key={`${r.name}-${i}`} delay={(i % 4) * 0.05}>
              <blockquote className="h-full bg-white p-6 sm:p-8">
                <p className="text-base leading-relaxed text-ink">“{r.quote}”</p>
                <footer className="mt-5 text-sm font-semibold text-ice-deep">
                  {r.name}
                  {r.place ? `, ${r.place}` : ""}
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
