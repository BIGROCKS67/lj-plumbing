export const INSTAGRAM_CONSENT_KEY = "lj-embed-consent";

export type InstagramConsent = "unknown" | "yes" | "no";

export function readInstagramConsent(): InstagramConsent {
  try {
    const value = window.localStorage.getItem(INSTAGRAM_CONSENT_KEY);
    if (value === "1") return "yes";
    if (value === "0") return "no";
  } catch {
    /* storage may be blocked */
  }
  return "unknown";
}

export function writeInstagramConsent(allowed: boolean) {
  try {
    window.localStorage.setItem(INSTAGRAM_CONSENT_KEY, allowed ? "1" : "0");
  } catch {
    /* storage may be blocked */
  }
}
