"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig, type NavChild, type NavItem } from "@/data/site";
import { cn, telHref } from "@/lib/utils";

function childImage(child: NavChild) {
  return "image" in child ? child.image : undefined;
}

function childLine(child: NavChild) {
  return "line" in child ? child.line : undefined;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [mobileDrop, setMobileDrop] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setOpenDrop(null);
    setMobileDrop(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const itemActive = (item: NavItem) =>
    pathname === item.href ||
    ("children" in item && item.children?.some((child) => pathname === child.href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink pt-[env(safe-area-inset-top,0px)]">
      <Link
        href={siteConfig.sister.url}
        className="block border-b border-white/10 bg-ice/15 px-4 py-2 text-center text-[13px] leading-snug text-white/90 sm:px-6"
      >
        {siteConfig.sister.line}{" "}
        <span className="font-semibold text-ice">Find out more</span>
      </Link>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Logo size="md" onDark />

        <nav className="hidden items-center gap-2.5 xl:flex 2xl:gap-4" aria-label="Main">
          {siteConfig.nav.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDrop(item.href)}
                onMouseLeave={() => setOpenDrop(null)}
              >
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center gap-1 text-[13px] font-semibold transition-colors hover:text-ice",
                    itemActive(item) ? "text-ice" : "text-white/80"
                  )}
                  aria-expanded={openDrop === item.href}
                  aria-haspopup="true"
                  onClick={() => setOpenDrop((v) => (v === item.href ? null : item.href))}
                >
                  {item.label}
                  <ChevronDown className={cn("h-3.5 w-3.5", openDrop === item.href && "rotate-180")} />
                </button>
                {openDrop === item.href && (
                  <div className="absolute left-0 top-full pt-3">
                    {item.children.some((child) => childImage(child)) ? (
                      <div className="grid w-[36rem] grid-cols-3 gap-2 border border-white/10 bg-ink p-3 shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href + child.label}
                            href={child.href}
                            className="group block"
                          >
                            {childImage(child) && (
                              <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
                                <Image
                                  src={childImage(child)!}
                                  alt={child.label}
                                  fill
                                  className="object-cover transition duration-500 group-hover:scale-105"
                                  sizes="200px"
                                />
                              </div>
                            )}
                            <p className="mt-2 text-sm font-semibold text-white group-hover:text-ice">
                              {child.label}
                            </p>
                            {childLine(child) && (
                              <p className="mt-0.5 text-xs text-white/55">{childLine(child)}</p>
                            )}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="min-w-[14rem] border border-white/10 bg-ink py-2 shadow-xl">
                        <Link
                          href={item.href}
                          className="block px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/5 hover:text-ice"
                        >
                          All {item.label}
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm hover:bg-white/5 hover:text-ice",
                              pathname === child.href ? "text-ice" : "text-white/75"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap text-[13px] font-semibold transition-colors hover:text-ice",
                  pathname === item.href ? "text-ice" : "text-white/80"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 xl:flex 2xl:gap-4">
          <a
            href={telHref(siteConfig.phone)}
            className="text-sm font-medium text-white/80 hover:text-white"
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-ice px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-ink hover:bg-white"
          >
            Enquire
          </Link>
        </div>

        <div className="flex items-center gap-1 xl:hidden">
          <a
            href={telHref(siteConfig.phone)}
            className="flex h-11 w-11 items-center justify-center text-white touch-manipulation"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-white touch-manipulation"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-7rem)] overflow-y-auto bg-ink xl:hidden">
          <nav className="flex flex-col px-4 py-2 pb-28" aria-label="Mobile">
            {siteConfig.nav.map((item) =>
              "children" in item && item.children ? (
                <div key={item.href} className="border-b border-white/10">
                  <button
                    type="button"
                    className="flex min-h-[3.25rem] w-full items-center justify-between text-lg font-semibold text-white"
                    onClick={() => setMobileDrop((v) => (v === item.href ? null : item.href))}
                    aria-expanded={mobileDrop === item.href}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-5 w-5", mobileDrop === item.href && "rotate-180")} />
                  </button>
                  {mobileDrop === item.href && (
                    <div className="pb-3 pl-3">
                      {!item.children.some((child) => child.href === item.href) && (
                        <Link
                          href={item.href}
                          className="flex min-h-[2.75rem] items-center text-base text-white/80"
                        >
                          All {item.label}
                        </Link>
                      )}
                      {item.children.map((child) => (
                        <Link
                          key={child.href + child.label}
                          href={child.href}
                          className="flex min-h-[2.75rem] items-center text-base text-white/80"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-[3.25rem] items-center border-b border-white/10 text-lg font-semibold text-white"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="mt-6 flex min-h-[3.25rem] items-center justify-center rounded-full bg-ice text-base font-semibold text-ink"
            >
              Enquire
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
