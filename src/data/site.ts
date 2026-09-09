import { asset } from "@/lib/utils";

export type NavChild = {
  label: string;
  href: string;
  image?: string;
  line?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: readonly NavChild[];
};

export const siteConfig = {
  name: "L J Plumbing & Heating Services Ltd",
  shortName: "L J Plumbing and Heating Services",
  tagline: "Complete plumbing, heating and renovation projects, delivered without compromise.",
  description:
    "L J Plumbing and Heating Services delivers complete bathroom and home renovations, complex plumbing and heating systems, and planned works for schools and estates. Banbury and the surrounding counties.",
  url: "https://ljplumbheat.co.uk",
  phone: "07540 495667",
  email: "info@ljplumbheat.co.uk",
  address: "Based in Bodicote",
  town: "Bodicote",
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
    "Bodicote",
    "Adderbury",
    "Bloxham",
    "Woodstock",
    "North Oxfordshire",
    "South Warwickshire",
    "South Northamptonshire",
  ],
  coverage: {
    lat: 52.0344,
    lng: -1.3308,
    radiusM: 36000,
    label: "L J Plumbing and Heating Services, Bodicote",
  },
  sister: {
    name: "SMH Gas Specialist",
    url: "/smh-gas-specialist",
    handoverUrl: "https://www.smh-gas-specialist.co.uk",
    line: "SMH Gas Specialist is now part of L J Plumbing and Heating Services. Existing SMH customers remain fully supported.",
  },
  googleReviews: {
    listingName: "S M H Gas Specialist",
    rating: 4.9,
    count: 48,
    url: "https://maps.app.goo.gl/uuhLoAUNmbKSPmKq9",
    cid: "4421845943020009866",
    featureId: "0x487727c7a1d724e1:0x3d5d8d750d35b98a",
  },
  nav: [
    { label: "Renovations", href: "/renovations" },
    {
      label: "Bathrooms",
      href: "/bathrooms",
      children: [
        {
          label: "All bathrooms",
          href: "/bathrooms",
          image: asset("/images/projects/woodstock/01.jpg"),
          line: "Complete bathrooms and wet rooms",
        },
        {
          label: "Woodstock",
          href: "/projects/woodstock",
          image: asset("/images/projects/woodstock/card.jpg"),
          line: "Five bathrooms, one project",
        },
        {
          label: "Turweston House",
          href: "/projects/turweston",
          image: asset("/images/projects/turweston/01.jpg"),
          line: "Listed-building bathrooms",
        },
      ],
    },
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
  "Complete project delivery",
  "Required trades supplied and coordinated",
  "Residential, education and estate work",
  "From first meeting to handover",
  "Banbury and the surrounding counties",
] as const;
