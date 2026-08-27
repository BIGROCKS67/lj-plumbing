import { proofStrip } from "@/data/site";

export function ProofStrip() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-5 sm:px-6 lg:px-8">
        {proofStrip.map((item) => (
          <p key={item} className="text-sm font-semibold text-ink">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
