import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { schoolWork } from "@/data/projects";

export function SchoolsPreview() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <FadeIn>
          <p className="text-sm font-semibold text-ice-deep">Schools & Estates</p>
          <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
            Planned works for schools and education estates
          </h2>
          <p className="mt-5 max-w-md text-mute">{schoolWork.body}</p>
          <Link
            href="/schools"
            className="mt-8 inline-flex min-h-[3.25rem] items-center rounded-full bg-ink px-7 text-sm font-semibold text-white hover:bg-ice hover:text-ink"
          >
            Explore Schools & Estates
          </Link>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="relative aspect-[3/2] overflow-hidden bg-paper">
            <Image
              src={schoolWork.card}
              alt="Refurbished washrooms at Bishop Loveday Primary School"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
