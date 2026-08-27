"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { readInstagramConsent, writeInstagramConsent, type InstagramConsent } from "@/lib/consent";
import { siteConfig } from "@/data/site";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

function processEmbed() {
  window.instgrm?.Embeds.process();
}

export function Instagram() {
  const [consent, setConsent] = useState<InstagramConsent>("unknown");

  useEffect(() => {
    setConsent(readInstagramConsent());
  }, []);

  useEffect(() => {
    if (consent !== "yes") return;
    processEmbed();
    const t = window.setTimeout(processEmbed, 800);
    return () => window.clearTimeout(t);
  }, [consent]);

  function choose(allowed: boolean) {
    writeInstagramConsent(allowed);
    setConsent(allowed ? "yes" : "no");
  }

  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,540px)] lg:gap-16">
          <FadeIn className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold text-ice">Instagram</p>
            <h2 className="font-display mt-3 max-w-[12ch] text-4xl text-white sm:text-6xl">
              The jobs, as they go on.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/80 sm:text-lg">
              Live from {siteConfig.instagramHandle}. Finished rooms and the work
              behind the walls, as the jobs go on.
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-[3.25rem] items-center gap-2 rounded-full bg-[#0095f6] px-7 text-sm font-semibold text-white hover:bg-[#1877f2]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 4.8A4.2 4.2 0 1 0 16.2 12 4.2 4.2 0 0 0 12 7.8Zm0 6.9A2.7 2.7 0 1 1 14.7 12 2.7 2.7 0 0 1 12 14.7ZM17.35 6.4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z" />
              </svg>
              Follow {siteConfig.instagramHandle}
            </a>
          </FadeIn>

          <FadeIn delay={0.08} className="w-full">
            <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-white/10">
              {consent === "yes" ? (
                <blockquote
                  className="instagram-media ig-embed"
                  data-instgrm-permalink="https://www.instagram.com/lj_plumbheat/?utm_source=ig_embed&utm_campaign=loading"
                  data-instgrm-version="14"
                >
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="block px-4 py-8 text-center text-sm font-semibold text-[#0095f6]"
                  >
                    View {siteConfig.instagramHandle} on Instagram
                  </a>
                </blockquote>
              ) : (
                <div className="px-6 py-12 text-center sm:px-8">
                  {consent === "unknown" ? (
                    <>
                      <p className="text-sm leading-relaxed text-ink">
                        Loading the Instagram feed may set cookies from Instagram. This
                        site does not run a separate advertising or analytics tracker.{" "}
                        <Link href="/privacy" className="font-semibold text-ice-deep">
                          Privacy policy
                        </Link>
                      </p>
                      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <button
                          type="button"
                          onClick={() => choose(true)}
                          className="inline-flex min-h-[3rem] items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white"
                        >
                          Load Instagram
                        </button>
                        <button
                          type="button"
                          onClick={() => choose(false)}
                          className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-ink px-6 text-sm font-semibold text-ink"
                        >
                          Continue without Instagram
                        </button>
                      </div>
                    </>
                  ) : (
                    <a
                      href={siteConfig.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[3.25rem] items-center text-sm font-semibold text-[#0095f6]"
                    >
                      View {siteConfig.instagramHandle} on Instagram
                    </a>
                  )}
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
      {consent === "yes" && (
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="lazyOnload"
          onLoad={processEmbed}
        />
      )}
    </section>
  );
}
