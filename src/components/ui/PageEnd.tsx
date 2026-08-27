import { ContactFacts, ContactForm } from "@/components/contact/ContactForm";
import { CtaBand } from "@/components/home/CtaBand";

type PageEndProps = {
  ctaLabel?: string;
  bandTitle?: string;
  bandLede?: string;
  formHeading?: string;
};

export function PageEnd({ ctaLabel, bandTitle, bandLede, formHeading }: PageEndProps) {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ContactFacts heading={formHeading} />
          <ContactForm />
        </div>
      </section>
      <CtaBand title={bandTitle} lede={bandLede} ctaLabel={ctaLabel} />
    </>
  );
}
