"use client";

import { useEffect, useState, type FormEvent } from "react";
import { siteConfig } from "@/data/site";
import { telHref } from "@/lib/utils";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/info@ljplumbheat.co.uk";

const enquiryOptions = [
  "Residential project",
  "Schools & Estates",
  "Servicing & Maintenance",
  "Existing SMH customer",
] as const;

export function ContactForm() {
  const [nextUrl, setNextUrl] = useState(`${siteConfig.url}/contact/thanks/`);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    setNextUrl(`${window.location.origin}/contact/thanks/`);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Form submission failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-paper p-6 sm:p-8" role="status">
        <p className="font-display text-2xl text-ink">Thank you. Your enquiry has been sent.</p>
        <p className="mt-3 text-mute">
          The L J Plumbing and Heating Services team will reply to the details you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} action="https://formsubmit.co/info@ljplumbheat.co.uk" method="POST" className="space-y-4">
      <input type="hidden" name="_subject" value="L J Plumbing website enquiry" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full border border-line bg-white px-4 py-3.5 outline-none focus:border-ice"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-ink">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full border border-line bg-white px-4 py-3.5 outline-none focus:border-ice"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full border border-line bg-white px-4 py-3.5 outline-none focus:border-ice"
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-ink">
          Type of enquiry
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full border border-line bg-white px-4 py-3.5 outline-none focus:border-ice"
        >
          <option value="" disabled>
            Select an option
          </option>
          {enquiryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
          Details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none border border-line bg-white px-4 py-3.5 outline-none focus:border-ice"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full bg-ice px-8 text-sm font-semibold text-ink disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>
      {status === "error" && (
        <p className="text-sm text-ink" role="alert">
          The form could not be sent just then. Call{" "}
          <a className="font-semibold text-ice-deep" href={telHref(siteConfig.phone)}>
            {siteConfig.phone}
          </a>{" "}
          or email{" "}
          <a className="font-semibold text-ice-deep" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
      )}
      <p className="text-sm text-mute">Your enquiry will be sent directly to the L J Plumbing and Heating Services team.</p>
    </form>
  );
}

export function ContactFacts({ heading = "Send a project brief." }: { heading?: string }) {
  return (
    <div>
      <p className="text-sm font-semibold text-ice-deep">Get in touch</p>
      <h2 className="font-display mt-3 text-4xl text-ink">{heading}</h2>
      <p className="mt-4 text-mute">
        Need servicing or already a customer of L J Plumbing and Heating Services or SMH? Call the team directly. For
        residential projects, schools and estate works, use the enquiry form and select
        the relevant service.
      </p>
      <p className="mt-6 font-display text-3xl text-ink">
        <a href={telHref(siteConfig.phone)}>{siteConfig.phone}</a>
      </p>
      <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-ice-deep">
        {siteConfig.email}
      </a>
      <p className="mt-6 text-sm text-mute">{siteConfig.address}</p>
      <p className="mt-1 text-sm text-mute">{siteConfig.hours.weekdays}</p>
    </div>
  );
}
