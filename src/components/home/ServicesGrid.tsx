import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-semibold text-ice-deep">What we do</p>
          <h2 className="font-display mt-3 max-w-xl text-4xl text-ink sm:text-5xl">
            The services that sit under a complete project.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.slice(0, 4).map((s, i) => (
            <FadeIn key={s.id} delay={i * 0.06}>
              <Link
                href={s.href}
                className="group relative block overflow-hidden bg-ink"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <h3 className="font-display text-3xl text-white sm:text-4xl">{s.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-white/75">{s.line}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
