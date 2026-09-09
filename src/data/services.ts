import { images } from "./images";

export type Service = {
  id: string;
  href: string;
  title: string;
  line: string;
  body: string;
  points: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: "renovations",
    href: "/renovations",
    title: "Complete renovations",
    line: "Coordinated delivery for substantial home and room renovation projects.",
    body: "L J Plumbing and Heating Services takes responsibility for complete renovations, not only the plumbing package. Planning, protection of the property, first and second fix, the required finishing trades and handover sit with one accountable company.",
    points: [
      "Full-scale home and room renovations",
      "Required trades supplied and coordinated",
      "Protection, sequencing and programme",
      "Technical preparation equal to the finish",
    ],
    image: images.shots.monoBath,
  },
  {
    id: "heating",
    href: "/heating",
    title: "Plumbing and heating",
    line: "Systems designed around the property, from plant rooms to the last control.",
    body: "Gas and oil systems, boilers, zoning, smart controls, radiators, underfloor heating, hot water and complex plumbing. Design, heat-loss calculations, correct sizing, careful pipe routing and commissioning are part of the job, not extras.",
    points: [
      "High-efficiency gas boilers",
      "Oil boilers (OFTEC)",
      "Zoned heating and smart controls",
      "Radiators, including decorative",
      "Underfloor heating design and install",
      "Plant rooms, cylinders and unvented systems",
    ],
    image: images.shots.copper,
  },
  {
    id: "servicing",
    href: "/servicing",
    title: "Servicing and maintenance",
    line: "Planned care, diagnostics and dependable ongoing support.",
    body: "Gas and oil boiler servicing, safety checks, leak repairs and system inspections. Existing SMH customers use this route. Guarantees remain honoured, familiar faces remain involved, and Mark continues with the business.",
    points: [
      "Gas boiler service, breakdown and safety checks",
      "Oil boiler service and breakdown",
      "Landlord gas safety certificates",
      "Central heating inspections",
      "Pressure, flow and leak repair",
    ],
    image: images.services.servicing,
  },
  {
    id: "bathrooms",
    href: "/bathrooms",
    title: "Bespoke bathrooms",
    line: "Complete bathrooms and wet rooms, planned and finished as a single project.",
    body: "Layout planning, plumbing, heating, waterproofing, lighting coordination, tiling, cabinetry, sanitaryware, finishing and testing. The finished rooms and the work behind the surfaces both have to meet the same standard.",
    points: [
      "Full bathroom design and planning",
      "Wet-room construction and tanking",
      "Cabinetry, lighting and sanitaryware",
      "Testing and handover",
    ],
    image: images.shots.yellowBath,
  },
  {
    id: "design",
    href: "/design",
    title: "Project design",
    line: "Consultation, technical planning and the drawing before the work starts.",
    body: "We sit with you, and the architect if you have one, and design the plumbing and heating for the property and how it will be used. Heat loss, pipe runs and CAD sit with the same company that then supplies and coordinates the required trades.",
    points: [
      "Consultation and the brief",
      "CAD, heat loss and pipe runs",
      "Required trades supplied and coordinated",
      "Finishing and handover",
    ],
    image: images.shots.firstFix,
  },
  {
    id: "maintenance",
    href: "/servicing",
    title: "Maintenance",
    line: "Domestic, commercial and education sites. Keep the system running.",
    body: "Ongoing plumbing and heating maintenance for houses, commercial sites and school estates. Small repairs through to a planned programme.",
    points: [
      "Domestic, commercial and education",
      "Planned servicing",
      "Call-outs when something fails",
    ],
    image: images.services.maintenance,
  },
];

export const faqs = [
  {
    q: "How do I start a project conversation?",
    a: "Call or send a project brief. Tell us the property, the scope and the standard you expect. We will come back with a clear next step.",
  },
  {
    q: "Are you Gas Safe and OFTEC?",
    a: "Yes. Gas Safe 656970. OFTEC 500360. Gas and oil, registered and documented.",
  },
  {
    q: "I used SMH Gas Specialist. Are you still there?",
    a: "Yes. L J Plumbing and Heating Services has acquired SMH Gas Specialist. Existing guarantees remain honoured, familiar faces remain involved, and Mark continues with the business. There is a dedicated page for SMH customers.",
  },
  {
    q: "What areas do you cover?",
    a: "The company is based in Bodicote, just south of Banbury. The map on the home page shows the usual working area. Unsure whether your property sits inside it? Call.",
  },
  {
    q: "Do you supply the other trades?",
    a: "L J Plumbing and Heating Services supplies and coordinates the trades a project requires, and remains accountable through to handover. Ask us what that includes on your brief.",
  },
  {
    q: "Do you work with schools?",
    a: "Yes. Washroom refurbishments, plumbing, heating and planned maintenance for schools and education estates, programmed around term time and holidays.",
  },
];

export function getService(id: string) {
  const s = services.find((item) => item.id === id);
  if (!s) throw new Error(`Unknown service: ${id}`);
  return s;
}
