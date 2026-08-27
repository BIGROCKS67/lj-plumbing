import { CtaBand } from "@/components/home/CtaBand";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { InHouse } from "@/components/home/InHouse";
import { Instagram } from "@/components/home/Instagram";
import { PremierPreview } from "@/components/home/PremierPreview";
import { ProofStrip } from "@/components/home/ProofStrip";
import { Reviews } from "@/components/home/Reviews";
import { SchoolsPreview } from "@/components/home/SchoolsPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { SmhBand } from "@/components/home/SmhBand";
import { Coverage } from "@/components/home/Coverage";
import { Why } from "@/components/home/Why";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Why />
      <Coverage />
      <ServicesGrid />
      <InHouse />
      <PremierPreview />
      <SchoolsPreview />
      <Reviews />
      <SmhBand />
      <Instagram />
      <Faq />
      <CtaBand />
    </>
  );
}
