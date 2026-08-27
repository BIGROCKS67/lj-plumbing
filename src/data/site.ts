import { asset } from "@/lib/utils";

export type NavChild = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  children?: readonly NavChild[];
};

export const siteConfig = {
  name: "L J Plumbing & Heating Services Ltd",
  shortName: "LJ Plumbing & Heating",
  tagline: "Complete plumbing, heating and renovation projects, delivered without compromise.",
  description:
    "LJ Plumbing & Heating delivers complete bathroom and home renovations, complex plumbing and heating systems, and planned works for schools and estates. Banbury and the surrounding counties.",
  url: "https://ljplumbheat.co.uk",
  phone: "07540 495667",
  email: "info@ljplumbheat.co.uk",
  address: "2 Somerville Court, Banbury Business Park, Adderbury, Oxfordshire OX17 3SN",
  town: "Banbury",
  county: "Oxfordshire",
  instagram: "https://www.instagram.com/lj_plumbheat/",
  instagramHandle: "@lj_plumbheat",
  companyNumber: "13459004",
  vat: "383085973",
  gasSafe: "656970",
  oftec: "500360",
  hours: {
    weekdays: "Mon – Fri: 08:00 – 17:00",
    weekend: "Sat – Sun: Closed",
  },
  areas: [
    "Banbury",
    "Adderbury",
    "Bloxham",
    "Woodstock",
    "North Oxfordshire",
    "South Warwickshire",
    "South Northamptonshire",
  ],
  coverage: {
    lat: 52.0123,
    lng: -1.2915,
    radiusM: 36000,
    label: "LJ Plumbing & Heating, Adderbury",
  },
  sister: {
    name: "SMH Gas Specialist",
    url: "/smh-gas-specialist",
    handoverUrl: "https://www.smh-gas-specialist.co.uk",
    line: "SMH Gas Specialist is now part of LJ Plumbing & Heating. Existing SMH customers remain fully supported.",
  },
  nav: [
    { label: "Renovations", href: "/renovations" },
    { label: "Bathrooms", href: "/bathrooms" },
    { label: "Plumbing & Heating", href: "/heating" },
    { label: "Servicing", href: "/servicing" },
    {
      label: "Premier Projects",
      href: "/projects",
      children: [
        { label: "Woodstock", href: "/projects/woodstock" },
        { label: "Turweston House", href: "/projects/turweston" },
        { label: "Bloxham Road", href: "/projects/bloxham-road" },
      ],
    },
    { label: "Schools", href: "/schools" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as const satisfies readonly NavItem[],
} as const;

export const badges = [
  { src: asset("/images/badges/gas-safe.png"), alt: "Gas Safe registered" },
  { src: asset("/images/badges/oftec.png"), alt: "OFTEC registered" },
  { src: asset("/images/badges/worcester.png"), alt: "Worcester Bosch" },
  { src: asset("/images/badges/wras.png"), alt: "WRAS" },
  { src: asset("/images/badges/city-guilds.png"), alt: "City & Guilds" },
] as const;

export const proofStrip = [
  "Gas Safe registered",
  "OFTEC registered",
  "Complete project delivery",
  "Required trades supplied and coordinated",
  "Residential, education and estate work",
] as const;
