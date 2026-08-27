import Image from "next/image";
import { cn } from "@/lib/utils";

export type PhotoFrame = "portrait" | "landscape" | "square";

const frames: Record<PhotoFrame, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

type PhotoProps = {
  src: string;
  alt: string;
  frame?: PhotoFrame;
  focus?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function Photo({
  src,
  alt,
  frame = "landscape",
  focus = "object-center",
  sizes,
  priority,
  className,
}: PhotoProps) {
  return (
    <div className={cn("relative overflow-hidden bg-paper", frames[frame], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn("object-cover", focus)}
        sizes={sizes}
      />
    </div>
  );
}

export function frameForRatio(width: number, height: number): PhotoFrame {
  const r = width / height;
  if (r < 0.9) return "portrait";
  if (r > 1.15) return "landscape";
  return "square";
}
