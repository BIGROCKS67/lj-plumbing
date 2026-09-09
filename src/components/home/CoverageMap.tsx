import Image from "next/image";
import { images } from "@/data/images";

export function CoverageMap() {
  return (
    <div className="lj-coverage-map relative h-[22rem] w-full overflow-hidden bg-paper sm:h-[28rem] lg:h-[32rem]">
      <Image
        src={images.coverage}
        alt="Map showing L J Plumbing and Heating Services based in Bodicote, with a coverage circle across Banbury and the surrounding counties."
        fill
        className="object-cover object-[center_52%]"
        sizes="100vw"
      />
      <p className="absolute bottom-2 right-3 text-[10px] text-ink/45">© OpenStreetMap</p>
    </div>
  );
}
