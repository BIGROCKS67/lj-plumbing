import { FadeIn } from "@/components/ui/FadeIn";
import { badges, siteConfig } from "@/data/site";
import Image from "next/image";

const points = [
  {
    title: "Built around the project",
    text: "The best results come from treating every element as part of one brief. Planning, plumbing, heating and the required finishing trades sit together.",
  },
  {
    title: "Quality in front of and behind the walls",
    text: "Premium finish is not cosmetic. Pipework, preparation, system design and testing meet the same standard as the finished room.",
  },
  {
    title: "One accountable company",
    text: "LJ supplies and coordinates what the project requires. Clients should not have to source or manage separate trades.",
  },
];

export function Why() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <FadeIn>
          <p className="text-sm font-semibold text-ice-deep">The LJ standard</p>
          <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
            Built around the project, not just the plumbing.
          </h2>
          <p className="mt-5 max-w-md text-mute">
            Based at {siteConfig.address}.
          </p>
          <ul className="mt-8 space-y-6">
            {points.map((p) => (
              <li key={p.title} className="border-l-2 border-ice pl-5">
                <p className="font-display text-2xl text-ink">{p.title}</p>
                <p className="mt-1 text-sm text-mute">{p.text}</p>
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.08} className="grid grid-cols-2 gap-5 self-center sm:grid-cols-3">
          {badges.map((b) => (
            <div
              key={b.alt}
              className="flex aspect-[5/3] items-center justify-center overflow-hidden bg-paper p-5"
            >
              <Image
                src={b.src}
                alt={b.alt}
                width={160}
                height={80}
                className="max-h-14 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
