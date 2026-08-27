import { FadeIn } from "@/components/ui/FadeIn";
import { reviews } from "@/data/reviews";

export function Reviews() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-semibold text-ice-deep">Client words</p>
          <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
            What clients say after handover.
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
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
