import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { badges, siteConfig } from "@/data/site";
import { telHref } from "@/lib/utils";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo size="md" onDark className="mb-5" />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            {siteConfig.tagline} Gas Safe {siteConfig.gasSafe}. OFTEC {siteConfig.oftec}.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ice">Pages</p>
          <ul className="mt-4 space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/65 hover:text-white">
                  {item.label}
                </Link>
                {"children" in item &&
                  item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="mt-1.5 block pl-3 text-sm text-white/45 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
              </li>
            ))}
            <li>
              <Link href="/design" className="text-sm text-white/65 hover:text-white">
                Design
              </Link>
            </li>
            <li>
              <Link href="/smh-gas-specialist" className="text-sm text-white/65 hover:text-white">
                SMH customers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ice">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            <li>
              <a href={telHref(siteConfig.phone)} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.address}</li>
            <li>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
                {siteConfig.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ice">Hours</p>
          <p className="mt-4 text-sm text-white/65">{siteConfig.hours.weekdays}</p>
          <p className="text-sm text-white/65">{siteConfig.hours.weekend}</p>
          <p className="mt-4 text-sm text-white/50">{siteConfig.sister.line}</p>
          <Link href={siteConfig.sister.url} className="mt-1 inline-block text-sm text-ice hover:underline">
            {siteConfig.sister.name}
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            {badges.map((b) => (
              <Image key={b.alt} src={b.src} alt={b.alt} width={72} height={36} className="h-8 w-auto object-contain" />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/55">
            <p>
              © {year} {siteConfig.name}. Co {siteConfig.companyNumber}. VAT {siteConfig.vat}.
            </p>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
