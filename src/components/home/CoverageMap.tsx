import Image from "next/image";
import { images } from "@/data/images";

export function CoverageMap() {
  return (
    <div className="lj-coverage-map relative h-[22rem] w-full overflow-hidden bg-paper sm:h-[28rem] lg:aspect-[20/9] lg:h-auto">
      <Image
        src={images.coverage}
        alt="Map showing L J Plumbing and Heating Services based in Bodicote, with a coverage circle across Banbury and the surrounding counties."
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <p className="absolute bottom-2 right-3 text-[10px] text-ink/40">© OpenStreetMap © Esri</p>
    </div>
  );
}
