import { FadeIn } from "@/components/ui/FadeIn";
import { faqs } from "@/data/services";

export function Faq() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-semibold text-ice-deep">Questions</p>
          <h2 className="font-display mt-2 text-3xl text-ink sm:text-5xl">Straight answers.</h2>
        </FadeIn>
        <div className="mt-10">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-line py-6">
              <p className="font-display text-2xl text-ink">{item.q}</p>
              <p className="mt-2 text-mute">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
