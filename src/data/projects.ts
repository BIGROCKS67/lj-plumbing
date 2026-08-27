import type { PhotoFrame } from "@/components/ui/Photo";
import { asset } from "@/lib/utils";

export type ProjectShot = {
  src: string;
  alt: string;
  caption?: string;
  frame?: PhotoFrame;
  focus?: string;
};

export type PremierProject = {
  slug: string;
  title: string;
  place: string;
  property: string;
  category: string;
  period: string;
  line: string;
  brief: string;
  challenge: string;
  solution: string;
  behind: string;
  finish: string;
  hero: string;
  card: string;
  heroFocus?: string;
  gallery: ProjectShot[];
};

const w = (file: string) => asset(`/images/projects/woodstock/${file}`);
const t = (file: string) => asset(`/images/projects/turweston/${file}`);
const b = (file: string) => asset(`/images/projects/bloxham-road/${file}`);
const s = (file: string) => asset(`/images/projects/bishop-loveday/${file}`);

export const premierProjects: PremierProject[] = [
  {
    slug: "woodstock",
    title: "Woodstock",
    place: "Woodstock, Oxfordshire",
    property: "Substantial private residence",
    category: "Complete bathroom renovation",
    period: "Completed 2025",
    line: "Five bathrooms, each with its own character, planned and finished as one project.",
    brief: "A substantial property in Woodstock needed every bathroom replaced, from the principal suite to the cloakroom. The client wanted five distinct rooms, not five versions of the same design, with the technical work matching the finish.",
    challenge:
      "Five rooms, five personalities, one property. Bold colour, patterned basins, rainforest tiling and a monochrome guest bathroom all had to sit on first-fix pipework that would never be seen again. The existing bathrooms were tired. The new work had to be precise enough for wall-hung sanitaryware, concealed cisterns and matching brassware throughout.",
    solution:
      "LJ Plumbing & Heating took the bathrooms from first meeting through first fix to handover, working alongside Prosser Building on the wider renovation. Each room was specified as its own brief. Hansgrohe, Duravit, TECE and Tissino run through the project, with finishes changing from matt white to matt black to chrome so the rooms stay distinct.",
    behind:
      "First-fix pipework, an unvented cylinder and underfloor heating were set out before finishes went on. Concealed frames, bottle traps and matching valves were coordinated room by room so the visible work could stay clean.",
    finish:
      "The principal bathroom is the grand finale: a Kohler Cléo bath in sunshine yellow, a rainforest feature wall, Duravit L-Cube vanities and Hansgrohe matt white brassware. The guest bathroom is monochrome, with striped flooring and matt black fittings. Guest en-suite one uses a star-pattern tile and matt white Hansgrohe. Guest en-suite two is cooler, with chrome and Flair glass. The cloakroom is plum tiling and a patterned basin. Five rooms, one standard.",
    hero: w("hero.jpg"),
    card: w("card.jpg"),
    heroFocus: "object-[center_40%]",
    gallery: [
      { src: w("hero.jpg"), alt: "Principal bathroom, rainforest wall and yellow bath", caption: "Principal bathroom", frame: "portrait" },
      { src: w("01.jpg"), alt: "Kohler Cléo bath in the principal bathroom", caption: "Kohler Cléo bath", frame: "landscape" },
      { src: w("02.jpg"), alt: "Monochrome guest bathroom", caption: "Guest bathroom", frame: "landscape" },
      { src: w("03.jpg"), alt: "Guest en-suite with star-pattern tiles", caption: "Guest en-suite one", frame: "portrait" },
      { src: w("04.jpg"), alt: "Guest en-suite with chrome fittings", caption: "Guest en-suite two", frame: "portrait" },
      { src: w("05.jpg"), alt: "Cloakroom with plum tiles", caption: "Cloakroom", frame: "portrait" },
      { src: w("06.jpg"), alt: "Finished radiator installation", caption: "Heating", frame: "portrait" },
      { src: w("07.jpg"), alt: "Plant and cylinder", caption: "Behind the walls", frame: "portrait" },
      { src: w("08.jpg"), alt: "Underfloor heating first fix", caption: "Underfloor heating", frame: "landscape" },
      { src: w("09.jpg"), alt: "First-fix pipework", caption: "First fix", frame: "portrait" },
      { src: w("11.jpg"), alt: "Pipework through the structure", caption: "First fix", frame: "portrait" },
      { src: w("10.jpg"), alt: "The Woodstock property", caption: "The property", frame: "portrait" },
    ],
  },
  {
    slug: "turweston",
    title: "Turweston House",
    place: "Turweston",
    property: "Grade II listed Georgian country home",
    category: "Listed-building bathrooms and heating",
    period: "Completed 2025",
    line: "An early 18th-century listed house. New bathrooms and heating that sit with the building.",
    brief: "Turweston House is an early 18th-century Grade II listed Georgian country home. The brief was a full renovation of the bathrooms, with fixtures and finishes chosen to complement the period fabric rather than fight it.",
    challenge:
      "Listed fabric, existing structure and a finish that had to feel considered, not applied. Wall-mounted copper brassware, stone-effect basins, a freestanding bath and smart sanitaryware all needed to work in rooms with beams, shutters and original proportions. Access, protection and sequencing mattered as much as the specification.",
    solution:
      "LJ Plumbing & Heating delivered the bathrooms from first fix to final polish, coordinating with Beasley Dickson Architects, Prosser Building, Impact Electrical and the bathroom suppliers. Rexa Design, Gessi, Bard & Brazier and Day True sit in the finished rooms. Heating was brought through the house with column radiators and valves matched to the joinery.",
    behind:
      "Pipe runs, frames and plant were set out to protect the building. First-fix work is neat because the second fix has nowhere to hide on a listed job. Testing and commissioning happened before handover.",
    finish:
      "Geometric star tiling, under-bath lighting, sculptural basins, wall-mounted copper fittings and a freestanding bath. Deep green boarding, brass towel rails and charcoal column radiators carry the same standard into the rest of the house.",
    hero: t("hero.jpg"),
    card: t("card.jpg"),
    heroFocus: "object-[center_55%]",
    gallery: [
      { src: t("hero.jpg"), alt: "Finished bathroom at Turweston House", caption: "Completed bathroom", frame: "portrait" },
      { src: t("01.jpg"), alt: "Freestanding bath and copper fittings", caption: "Freestanding bath", frame: "portrait" },
      { src: t("02.jpg"), alt: "Geometric tiling and walk-in shower", caption: "Shower and tiling", frame: "portrait" },
      { src: t("03.jpg"), alt: "Brass towel rail on green boarding", caption: "Brassware", frame: "landscape" },
      { src: t("11.jpg"), alt: "Stone-effect basins and copper taps", caption: "Basins", frame: "portrait" },
      { src: t("08.jpg"), alt: "Bathroom detailing", caption: "Finish", frame: "portrait" },
      { src: t("04.jpg"), alt: "Column radiator against period joinery", caption: "Heating", frame: "portrait" },
      { src: t("10.jpg"), alt: "Radiator installation", caption: "Heating", frame: "portrait" },
      { src: t("05.jpg"), alt: "Plant and pipework", caption: "Behind the walls", frame: "landscape" },
      { src: t("06.jpg"), alt: "Technical installation", caption: "Behind the walls", frame: "portrait" },
      { src: t("07.jpg"), alt: "First-fix pipework", caption: "First fix", frame: "portrait" },
      { src: t("09.jpg"), alt: "Services set out before finishes", caption: "First fix", frame: "portrait" },
    ],
  },
  {
    slug: "bloxham-road",
    title: "Bloxham Road",
    place: "Banbury, Oxfordshire",
    property: "Contemporary private residence",
    category: "Whole-property plumbing and heating",
    period: "Completed 2025",
    line: "A complete modern house. Underfloor heating, plant, bathrooms and the kitchen, delivered as one system.",
    brief: "A contemporary house on Bloxham Road needed the full plumbing and heating package. Bathrooms, kitchen, utility, underfloor heating throughout and a plant room specified to match the architecture.",
    challenge:
      "A whole-property system has to be invisible in the finished rooms and exact in the plant room. Underfloor heating across the house, designer radiators, a boost tank and smart controls all had to be commissioned as one installation, not a collection of extras.",
    solution:
      "LJ Plumbing & Heating designed and installed the system end to end. Worcester Bosch boiler, Joule high-gain unvented cylinder, Power Tank boost set, Heatmiser controls and underfloor heating throughout. Bathrooms and the kitchen were finished to the same standard as the plant.",
    behind:
      "Manifolds, insulated pipework and first-fix runs were set out before screed and finishes. The plant room is the evidence: labelled, insulated, commissioned. That is the work the finished rooms depend on.",
    finish:
      "Walk-in showers, freestanding baths, floating vanities, a modern kitchen and a house that heats evenly. From the driveway at dusk the property reads as complete. Inside, the same standard holds behind the walls.",
    hero: b("10.jpg"),
    card: b("card.jpg"),
    heroFocus: "object-center",
    gallery: [
      { src: b("10.jpg"), alt: "Bloxham Road house at dusk", caption: "The property", frame: "landscape" },
      { src: b("11.jpg"), alt: "Front of the finished house", caption: "Completed house", frame: "square" },
      { src: b("01.jpg"), alt: "Freestanding bath", caption: "Bathroom", frame: "landscape" },
      { src: b("02.jpg"), alt: "Walk-in shower", caption: "Wet room", frame: "portrait" },
      { src: b("03.jpg"), alt: "Floating vanity", caption: "Bathroom", frame: "landscape" },
      { src: b("04.jpg"), alt: "Kitchen installation", caption: "Kitchen", frame: "landscape" },
      { src: b("05.jpg"), alt: "Plant room", caption: "Plant", frame: "landscape" },
      { src: b("06.jpg"), alt: "Cylinder and pipework", caption: "Plant", frame: "landscape" },
      { src: b("07.jpg"), alt: "Underfloor heating", caption: "Underfloor heating", frame: "portrait" },
      { src: b("08.jpg"), alt: "Heating manifolds", caption: "Manifolds", frame: "landscape" },
      { src: b("09.jpg"), alt: "First-fix pipework", caption: "First fix", frame: "landscape" },
    ],
  },
];

export const schoolWork: {
  title: string;
  line: string;
  body: string;
  hero: string;
  card: string;
  points: string[];
  featured: {
    title: string;
    place: string;
    period: string;
    line: string;
    body: string;
    note: string;
  };
  shots: ProjectShot[];
} = {
  title: "Schools & Estates",
  line: "Plumbing, heating and refurbishment works for schools and education estates.",
  body: "From washroom and bathroom refurbishments to plumbing, heating and planned maintenance, LJ Plumbing & Heating supports schools with programmed work, clear communication and dependable delivery.",
  hero: s("04.jpg"),
  card: s("card.jpg"),
  points: [
    "Bathroom, toilet and washroom renovations",
    "Plumbing and hot-water installations, upgrades and repairs",
    "Heating installations, upgrades, servicing and fault-finding",
    "Planned and reactive maintenance",
    "Refurbishment works with coordinated trades",
    "Programmes planned around holidays, term time and site access",
  ],
  featured: {
    title: "Bishop Loveday Primary School",
    place: "Bloxham, Oxfordshire",
    period: "Summer 2025",
    line: "Four toilet blocks, refurbished over the summer break and handed back for the first day of term.",
    body: "Old basins were replaced with semi-countertop units that conceal pipework and safety valves. Self-closing pillar taps reduce waste. Toilets were upgraded with fast-filling cisterns and dual flush plates. Waterproof wall boards went into the wet areas. Cubicle doors were renewed in a clean, neutral finish. The rooms were redecorated with J Coates Decorating. New flooring was supplied and fitted by Sherfield Flooring.",
    note: "The works were carefully programmed across the summer holiday, with materials, access and individual phases coordinated around the school’s requirements. All four washroom areas were completed and handed back ready for the beginning of the new academic year.",
  },
  shots: [
    { src: s("hero.jpg"), alt: "Refurbished washbasins at Bishop Loveday", frame: "portrait" },
    { src: s("01.jpg"), alt: "School washroom", frame: "portrait" },
    { src: s("02.jpg"), alt: "Toilet cubicles", frame: "portrait" },
    { src: s("03.jpg"), alt: "Washroom detail", frame: "landscape" },
    { src: s("04.jpg"), alt: "Finished toilet block", frame: "landscape" },
    { src: s("05.jpg"), alt: "Basins and taps", frame: "landscape" },
    { src: s("06.jpg"), alt: "Cubicle doors", frame: "landscape" },
    { src: s("07.jpg"), alt: "Boys and girls toilet doors", frame: "portrait" },
    { src: s("08.jpg"), alt: "Washroom finishes", frame: "landscape" },
    { src: s("09.jpg"), alt: "Flush plates and sanitaryware", frame: "landscape" },
  ],
};

export const inHouseSteps = [
  {
    title: "Consultation and scope",
    text: "We walk the property, agree the brief and set out what the project actually requires.",
  },
  {
    title: "Design and technical planning",
    text: "Heat loss, pipe runs, layouts and the drawing the team works from. Before anyone opens a wall.",
  },
  {
    title: "Coordinated delivery",
    text: "LJ supplies and coordinates the required trades. One company remains accountable through the programme.",
  },
  {
    title: "Testing, finishing and handover",
    text: "Commissioning, the last fitting and a finished result that is ready to use.",
  },
];

export function getProject(slug: string) {
  return premierProjects.find((p) => p.slug === slug);
}
