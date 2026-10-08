import { Photo, type PhotoFrame } from "@/components/ui/Photo";

type GalleryShot = {
  src: string;
  alt: string;
  caption?: string;
  frame?: PhotoFrame;
  focus?: string;
};

function isPortrait(shot: GalleryShot) {
  return shot.frame === "portrait";
}

function portraitChunks(count: number) {
  if (count <= 3) return [count];
  const remainder = count % 3;
  if (remainder === 0) return [count];
  if (remainder === 2) return [count - 2, 2];
  if (count === 4) return [4];
  return [count - 4, 4];
}

function columnsFor(count: number) {
  if (count >= 3 && count % 3 === 0) return 3;
  if (count >= 2) return 2;
  return 1;
}

export function PhotoGallery({ shots }: { shots: readonly GalleryShot[] }) {
  const runs: { wide: boolean; shots: GalleryShot[] }[] = [];

  for (const shot of shots) {
    const wide = !isPortrait(shot);
    const last = runs.at(-1);
    if (last && last.wide === wide) last.shots.push(shot);
    else runs.push({ wide, shots: [shot] });
  }

  const grids: { key: string; columns: number; spanLast: boolean; wide: boolean; shots: GalleryShot[] }[] = [];

  for (const run of runs) {
    if (run.wide) {
      grids.push({
        key: run.shots.map((shot) => shot.src).join("|"),
        columns: Math.min(run.shots.length, 2),
        spanLast: run.shots.length % 2 === 1,
        wide: true,
        shots: run.shots,
      });
      continue;
    }

    let offset = 0;
    for (const size of portraitChunks(run.shots.length)) {
      const chunk = run.shots.slice(offset, offset + size);
      offset += size;
      grids.push({
        key: chunk.map((shot) => shot.src).join("|"),
        columns: columnsFor(chunk.length),
        spanLast: false,
        wide: false,
        shots: chunk,
      });
    }
  }

  return (
    <div className="mt-10 space-y-5">
      {grids.map((grid) => (
        <div
          key={grid.key}
          className={
            grid.columns >= 3
              ? "grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3"
              : grid.columns === 2
                ? "grid items-start gap-5 sm:grid-cols-2"
                : "grid items-start gap-5"
          }
        >
          {grid.shots.map((shot, index) => (
            <figure
              key={shot.src + (shot.caption ?? "")}
              className={
                grid.spanLast && index === grid.shots.length - 1 ? "bg-white sm:col-span-2" : "bg-white"
              }
            >
              <Photo
                src={shot.src}
                alt={shot.alt}
                frame={shot.frame}
                focus={shot.focus}
                sizes={grid.wide ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
              />
              {shot.caption && (
                <figcaption className="px-4 py-3 text-sm text-mute">{shot.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}
