"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";
import { telHref } from "@/lib/utils";

const tickets = ["Gas Safe 656970", "OFTEC 500360"];

function Tickets() {
  return (
    <div className="flex flex-wrap gap-2">
      {tickets.map((label) => (
        <span
          key={label}
          className="rounded-sm bg-gassafe px-3 py-1.5 text-[11px] font-bold tracking-wide text-white ring-2 ring-gassafe-yellow"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const enter = reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 };
  const from = reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 12 };

  return (
    <section className="relative min-h-[100svh] bg-ink md:grid md:grid-cols-2">
      <div className="absolute inset-0 md:relative md:order-2 md:min-h-[100svh]">
        <Image
          src={images.hero}
          alt="LJ Plumbing & Heating vans"
          fill
          priority
          className="object-cover object-[center_60%]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20 md:hidden" />
        <div className="absolute inset-x-6 bottom-6 hidden md:block">
          <Tickets />
        </div>
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-24 pt-40 sm:px-10 md:justify-center md:pb-10 md:pt-36 lg:px-14">
        <div className="mb-4 md:hidden">
          <Tickets />
        </div>
        <motion.p
          initial={from}
          animate={enter}
          className="inline-flex w-fit rounded-full bg-ice/15 px-3 py-1 text-xs font-semibold text-ice"
        >
          Banbury · Gas Safe · OFTEC
        </motion.p>
        <motion.h1
          initial={from}
          animate={enter}
          transition={reduce ? undefined : { delay: 0.08 }}
          className="font-display mt-5 max-w-[18ch] text-4xl text-white sm:text-5xl lg:text-6xl"
        >
          Complete plumbing, heating and renovation projects, delivered without compromise.
        </motion.h1>
        <motion.p
          initial={from}
          animate={enter}
          transition={reduce ? undefined : { delay: 0.16 }}
          className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:text-lg"
        >
          From full-scale bathroom and home renovations to complex plumbing and heating
          systems, LJ Plumbing & Heating manages every stage, supplies every required
          trade and delivers to exacting standards, in front of and behind the walls.
        </motion.p>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={reduce ? undefined : { delay: 0.24 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-ice px-7 text-sm font-semibold text-ink hover:bg-white"
          >
            Discuss a project
          </Link>
          <Link
            href="/projects"
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white hover:border-white"
          >
            View Premier Projects
          </Link>
        </motion.div>
        <a
          href={telHref(siteConfig.phone)}
          className="mt-5 text-sm font-medium text-white/70 hover:text-white"
        >
          {siteConfig.phone}
        </a>
      </div>
    </section>
  );
}
