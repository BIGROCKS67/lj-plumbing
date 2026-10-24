import type { Metadata } from "next";
import { PageEnd } from "@/components/ui/PageEnd";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { communityIntro, communityStories } from "@/data/community";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Local sponsorships and donations from L J Plumbing and Heating Services, including Easington Sports FC, Banbury Cricket Club, the Bodicote playground, the Banbury Christmas Tractor Run and Feldon Valley.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        title={communityIntro.title}
        lede={communityIntro.lede}
        image={asset("/images/community/tractor.jpg")}
        imageAlt="Sponsored tractor on the Banbury Christmas Tractor Run"
        imageFocus="object-[center_35%]"
        eyebrow="Community"
        ctaLabel="See the local work"
        ctaHref="#easington"
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-lg text-mute">{communityIntro.body}</p>
      </section>
      {communityStories.map((story, index) => (
        <section
          key={story.id}
          id={story.id}
          className={
            index % 2 === 0
              ? "scroll-mt-36 bg-paper py-16 sm:py-24"
              : "scroll-mt-36 bg-white py-16 sm:py-24"
          }
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-ice-deep">{story.place}</p>
            <h2 className="font-display mt-3 text-4xl text-ink">{story.title}</h2>
            <p className="mt-6 max-w-3xl text-lg text-mute">{story.line}</p>
            <p className="mt-4 max-w-3xl text-mute">{story.body}</p>
            <div
              className={
                story.shots.length > 1
                  ? "mt-10 grid items-start gap-5 sm:grid-cols-2"
                  : "mt-10 max-w-xl"
              }
            >
              {story.shots.map((shot) => (
                <Photo
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  frame={shot.frame}
                  sizes={story.shots.length > 1 ? "(min-width: 640px) 50vw, 100vw" : "40vw"}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
      <PageEnd
        ctaLabel="Discuss a project"
        bandTitle="Based in Bodicote."
        bandLede="Plumbing, heating and renovation projects across Banbury and the surrounding counties."
      />
    </>
  );
}
