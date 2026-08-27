import type { Metadata } from "next";
import { PageEnd } from "@/components/ui/PageEnd";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call L J Plumbing & Heating on 07540 495667 or email info@ljplumbheat.co.uk.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Discuss your project."
        lede="Residential work, schools and estates, servicing, or an existing SMH customer. Tell us the property and the brief."
        image={images.shots.plantRoom}
        imageAlt="Completed plant room installation"
        imageFocus="object-[center_40%]"
        eyebrow="Contact"
        showCta={false}
      />
      <PageEnd />
    </>
  );
}
