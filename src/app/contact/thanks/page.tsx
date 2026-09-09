import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Enquiry sent",
  description: "Your enquiry has been sent to the L J Plumbing and Heating Services team.",
};

export default function ThanksPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-24 pt-40 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-ice-deep">Contact</p>
      <h1 className="font-display mt-3 text-4xl text-ink sm:text-5xl">Thank you.</h1>
      <p className="mt-6 text-lg text-mute">
        Your enquiry has been sent directly to the L J Plumbing and Heating Services team. We will
        reply using the details you provided.
      </p>
      <p className="mt-4 text-mute">
        If you need the team sooner, call{" "}
        <a className="font-semibold text-ice-deep" href={telHref(siteConfig.phone)}>
          {siteConfig.phone}
        </a>
        .
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex min-h-[3.25rem] items-center rounded-full bg-ink px-7 text-sm font-semibold text-white hover:bg-ice hover:text-ink"
      >
        Back to the home page
      </Link>
    </section>
  );
}
