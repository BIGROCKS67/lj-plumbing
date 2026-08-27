import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How L J Plumbing & Heating Services Ltd handles names, telephone numbers, email addresses and project information sent through this website.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-ice-deep">Legal</p>
      <h1 className="font-display mt-3 text-4xl text-ink sm:text-5xl">Privacy policy</h1>
      <p className="mt-4 text-sm text-mute">Last updated 25 August 2026.</p>

      <div className="mt-10 space-y-8 text-mute">
        <section>
          <h2 className="font-display text-2xl text-ink">Who we are</h2>
          <p className="mt-3">
            This website is operated by {siteConfig.name}, company number {siteConfig.companyNumber},
            VAT {siteConfig.vat}, of {siteConfig.address}.
          </p>
          <p className="mt-3">
            For privacy questions, email{" "}
            <a className="font-semibold text-ice-deep" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>{" "}
            or call {siteConfig.phone}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Information we collect</h2>
          <p className="mt-3">
            When you use the enquiry form we collect your name, telephone number, email
            address, the type of enquiry and any project details you choose to send. If you
            telephone or email the company, we also hold the information you give us so we
            can reply about the job.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">How we use it</h2>
          <p className="mt-3">
            We use this information only to respond to your enquiry, plan work and keep a
            record of the conversation. We do not sell personal information or use it for
            advertising lists.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Who receives it</h2>
          <p className="mt-3">
            Form submissions are sent to {siteConfig.email} through FormSubmit, a third-party
            form service. The LJ Plumbing & Heating team reads those messages. We do not
            pass enquiry details to other organisations except where a project requires it
            (for example a coordinated trade) or the law requires it.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Cookies and third-party tools</h2>
          <p className="mt-3">
            This site does not run its own advertising or analytics tracker. The home page
            can load Instagram’s official embed for {siteConfig.instagramHandle}, which may
            set cookies from Instagram or Meta. That embed is only loaded if you choose
            “Load Instagram” on the home page, or if you open Instagram directly.
          </p>
          <p className="mt-3">
            You can continue without Instagram and still use every other page, including
            the enquiry form.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">How long we keep it</h2>
          <p className="mt-3">
            Enquiry emails and related job records are kept for as long as they are needed
            to handle the work, honour guarantees or meet legal record-keeping duties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Your rights</h2>
          <p className="mt-3">
            You can ask for a copy of the personal information we hold about you, ask us to
            correct it, or ask us to delete it where we no longer need it. Contact the team
            using the details above.
          </p>
        </section>
      </div>
    </article>
  );
}
