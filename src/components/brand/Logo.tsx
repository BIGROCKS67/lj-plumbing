import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { images } from "@/data/images";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
  className?: string;
  linked?: boolean;
};

const heights = { sm: 40, md: 52, lg: 72 };

export function Logo({ size = "md", onDark = false, className, linked = true }: LogoProps) {
  const h = heights[size];
  const inner = (
    <Image
      src={onDark ? images.logoLight : images.logoDark}
      alt="L J Plumbing & Heating Services Ltd"
      width={220}
      height={h}
      className="object-contain object-left"
      style={{ height: h, width: "auto" }}
      priority
    />
  );
  const classes = cn("inline-flex items-center touch-manipulation", className);
  if (!linked) return <div className={classes}>{inner}</div>;
  return (
    <Link href="/" className={classes} aria-label="L J Plumbing and Heating Services home">
      {inner}
    </Link>
  );
}
