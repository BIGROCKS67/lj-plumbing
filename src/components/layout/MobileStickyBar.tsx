import Link from "next/link";
import { MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { telHref } from "@/lib/utils";

export function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="grid grid-cols-2">
        <a
          href={telHref(siteConfig.phone)}
          className="flex min-h-[3.25rem] items-center justify-center gap-2 bg-ink text-sm font-semibold text-white touch-manipulation"
        >
          <Phone className="h-5 w-5 text-ice" />
          Call
        </a>
        <Link
          href="/contact"
          className="flex min-h-[3.25rem] items-center justify-center gap-2 bg-ice text-sm font-semibold text-ink touch-manipulation"
        >
          <MessageSquare className="h-5 w-5" />
          Enquire
        </Link>
      </div>
    </div>
  );
}
