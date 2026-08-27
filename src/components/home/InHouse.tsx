import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { inHouseSteps } from "@/data/projects";

export function InHouse() {
  return (
    <section className="bg-ink py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-semibold text-ice">How we work</p>
          <h2 className="font-display mt-3 max-w-[18ch] text-4xl sm:text-5xl">
            One team. Every trade. One uncompromising standard.
          </h2>
          <p className="mt-5 max-w-xl text-white/70">
            Built around the project, not just the plumbing. Planning, plumbing, heating
            and the required finishing trades sit with one accountable company. From the
            work hidden behind the walls to the final fitting, every stage is delivered
            with the same attention to detail.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {inHouseSteps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.06}>
              <p className="font-display text-2xl">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{step.text}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <Link
            href="/renovations"
            className="mt-12 inline-flex min-h-[3.25rem] items-center rounded-full bg-ice px-7 text-sm font-semibold text-ink hover:bg-white"
          >
            Complete renovations
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
