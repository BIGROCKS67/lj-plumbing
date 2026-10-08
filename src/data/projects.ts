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
const f = (file: string) => asset(`/images/projects/farthinghoe/${file}`);

export type SchoolProject = {
  slug: string;
  title: string;
  place: string;
  period: string;
  line: string;
  body: string;
  note: string;
  shots: ProjectShot[];
};

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
      "L J Plumbing and Heating Services took the bathrooms from first meeting through first fix to handover, working alongside Prosser Building on the wider renovation. Each room was specified as its own brief. Hansgrohe, Duravit, TECE and Tissino run through the project, with finishes changing from matt white to matt black to chrome so the rooms stay distinct.",
    behind:
      "First-fix pipework, an unvented cylinder and underfloor heating were set out before finishes went on. Concealed frames, bottle traps and matching valves were coordinated room by room so the visible work could stay clean.",
    finish:
      "The principal bathroom is the grand finale: a Kohler Cléo bath in sunshine yellow, a rainforest feature wall, Duravit L-Cube vanities and Hansgrohe matt white brassware. The guest bathroom is monochrome, with striped flooring and matt black fittings. Guest en-suite one uses a star-pattern tile and matt white Hansgrohe. Guest en-suite two is cooler, with chrome and Flair glass. The cloakroom is plum tiling and a patterned basin. Five rooms, one standard.",
    hero: w("l13.jpg"),
    card: w("card.jpg"),
    heroFocus: "object-center",
    gallery: [
      { src: w("l13.jpg"), alt: "Principal bathroom with double vanity", caption: "Principal bathroom", frame: "landscape" },
      { src: w("01.jpg"), alt: "Freestanding bath in the principal bathroom", caption: "Freestanding bath", frame: "landscape" },
      { src: w("l10.jpg"), alt: "Guest bathroom", caption: "Guest bathroom", frame: "portrait" },
      { src: w("l11.jpg"), alt: "Guest en-suite with star-pattern tiles", caption: "Guest en-suite", frame: "portrait" },
      { src: w("l12.jpg"), alt: "Guest en-suite with a walk-in shower", caption: "Guest en-suite", frame: "portrait" },
      { src: w("l14.jpg"), alt: "Cloakroom with plum tiles", caption: "Cloakroom", frame: "portrait" },
      { src: w("06.jpg"), alt: "Finished radiator installation", caption: "Heating", frame: "portrait" },
      { src: w("07.jpg"), alt: "Plant and cylinder", caption: "Plant room", frame: "portrait" },
      { src: w("l15.jpg"), alt: "Underfloor heating first fix", caption: "Underfloor heating", frame: "portrait" },
      { src: w("l16.jpg"), alt: "First-fix pipework in the ceiling", caption: "First fix", frame: "portrait" },
      { src: w("l17.jpg"), alt: "First-fix pipework through the structure", caption: "First fix", frame: "portrait" },
      { src: w("10.jpg"), alt: "On site at Woodstock", caption: "On site", frame: "portrait" },
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
      "L J Plumbing and Heating Services delivered the bathrooms from first fix to final polish, coordinating with Beasley Dickson Architects, Prosser Building, Impact Electrical and the bathroom suppliers. Rexa Design, Gessi, Bard & Brazier and Day True sit in the finished rooms. Heating was brought through the house with column radiators and valves matched to the joinery.",
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
      { src: t("11.jpg"), alt: "Stone-effect basins and copper taps", caption: "Basins", frame: "portrait" },
      { src: t("l9.jpg"), alt: "Finished hallway with a column radiator", caption: "Finish", frame: "portrait" },
      { src: t("04.jpg"), alt: "Column radiator against period joinery", caption: "Heating", frame: "portrait" },
      { src: t("10.jpg"), alt: "Bedroom heating", caption: "Bedroom", frame: "portrait" },
      { src: t("06.jpg"), alt: "Bathroom services", caption: "Bathroom", frame: "portrait" },
      { src: t("07.jpg"), alt: "Heating first fix", caption: "Heating", frame: "portrait" },
      { src: t("09.jpg"), alt: "Heating controls", caption: "Controls", frame: "portrait" },
      { src: t("03.jpg"), alt: "Brass towel rail", caption: "Brass towel rail", frame: "landscape" },
      { src: t("05.jpg"), alt: "Plant room and pipework", caption: "Plant room", frame: "landscape" },
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
      "L J Plumbing and Heating Services designed and installed the system end to end. Worcester Bosch boiler, Joule high-gain unvented cylinder, Power Tank boost set, Heatmiser controls and underfloor heating throughout. Bathrooms and the kitchen were finished to the same standard as the plant.",
    behind:
      "Manifolds, insulated pipework and first-fix runs were set out before screed and finishes. The plant room is the evidence: labelled, insulated, commissioned. That is the work the finished rooms depend on.",
    finish:
      "Walk-in showers, freestanding baths, floating vanities, a modern kitchen and a house that heats evenly. From the driveway at dusk the property reads as complete. Inside, the same standard holds behind the walls.",
    hero: b("l7.jpg"),
    card: b("card.jpg"),
    heroFocus: "object-center",
    gallery: [
      { src: b("l7.jpg"), alt: "Bloxham Road during the build", caption: "The site", frame: "landscape" },
      { src: b("l8.jpg"), alt: "Front of the finished house", caption: "Completed house", frame: "landscape" },
      { src: b("01.jpg"), alt: "Freestanding bath", caption: "Bathroom", frame: "landscape" },
      { src: b("03.jpg"), alt: "Floating vanity", caption: "Bathroom", frame: "landscape" },
      { src: b("04.jpg"), alt: "Kitchen installation", caption: "Kitchen", frame: "landscape" },
      { src: b("06.jpg"), alt: "Cylinder and pipework", caption: "Plant", frame: "landscape" },
      { src: b("l5.jpg"), alt: "Heating manifolds", caption: "Manifolds", frame: "landscape" },
      { src: b("l6.jpg"), alt: "First-fix pipework", caption: "First fix", frame: "landscape" },
      { src: b("02.jpg"), alt: "Walk-in shower", caption: "Shower", frame: "portrait" },
      { src: b("l4.jpg"), alt: "Underfloor heating", caption: "Underfloor heating", frame: "portrait" },
    ],
  },
];

export const schoolProjects: SchoolProject[] = [
  {
    slug: "bishop-loveday",
    title: "Bishop Loveday Primary School",
    place: "Bloxham, Oxfordshire",
    period: "Summer 2025",
    line: "Pupil washrooms and the staff toilets, refurbished over the summer break and handed back for the first day of term.",
    body: "Old basins were replaced with semi-countertop units that conceal pipework and safety valves. Self-closing pillar taps reduce waste. Toilets were upgraded with fast-filling cisterns and dual flush plates. Waterproof wall boards went into the wet areas. Cubicle doors were renewed in a clean, neutral finish. The rooms were redecorated with J Coates Decorating. New flooring was supplied and fitted by Sherfield Flooring. The staff toilets were completed in the same programme, with new sanitaryware, basins and finishes to the same standard as the pupil washrooms.",
    note: "The works were carefully programmed across the summer holiday, with materials, access and individual phases coordinated around the school’s requirements. The pupil washrooms and the staff toilets were completed and handed back ready for the beginning of the new academic year.",
    shots: [
      { src: s("l18.jpg"), alt: "Bishop Loveday Primary School", frame: "portrait" },
      { src: s("l20.jpg"), alt: "Pupil washroom basins", frame: "portrait" },
      { src: s("l19.jpg"), alt: "Pupil toilet cubicle", frame: "portrait" },
      { src: s("l22.jpg"), alt: "Pupil toilet cubicles", frame: "landscape" },
      { src: s("l21.jpg"), alt: "Staff toilet", frame: "portrait" },
      { src: s("l23.jpg"), alt: "Staff toilet basin and radiator", frame: "portrait" },
      { src: s("l24.jpg"), alt: "Staff toilet", frame: "portrait" },
      { src: s("l25.jpg"), alt: "Staff toilet basin", frame: "portrait" },
    ],
  },
  {
    slug: "farthinghoe",
    title: "Farthinghoe Primary School",
    place: "Farthinghoe, Northamptonshire",
    period: "Completed 2026",
    line: "A washroom reconfiguration for a village school of around 40 pupils, aged 4 to 11.",
    body: "This was more than replacing the existing sanitaryware. The space had to work properly for every age group in the school. The former boys’ toilet was decommissioned so the existing girls’ facilities could become a mixed four-cubicle layout. One cubicle was designed as an assisted WC, with grab rails and support arms to improve accessibility. Basins were relocated to give more individual space and fitted with self-closing taps through thermostatic blending valves. Waterproof boxing, dual-flush systems and purpose-made flooring with a sealed upstand were introduced to give a more durable, hygienic finish that is easier for the school to clean and maintain.",
    note: "The staff WC received the same level of attention, with a new vanity, concealed cistern, flooring and upgraded heating. The work was completed alongside TW Carpentry and J Coates Decorating, with electrical work carried out by JPH.",
    shots: [
      { src: f("01.jpg"), alt: "Farthinghoe Primary School", frame: "portrait" },
      { src: f("hero.jpg"), alt: "New mixed cubicles and washbasins at Farthinghoe Primary School", frame: "portrait" },
      { src: f("03.jpg"), alt: "Relocated washbasins with self-closing taps", frame: "portrait" },
      { src: f("04.jpg"), alt: "Pupil washroom looking through to the basin run", frame: "portrait" },
      { src: f("07.jpg"), alt: "Finished cubicle in the mixed four-cubicle layout", frame: "portrait" },
      { src: f("08.jpg"), alt: "Assisted WC with grab rails and support arms", frame: "portrait" },
      { src: f("09.jpg"), alt: "Washroom looking toward the corridor", frame: "portrait" },
      { src: f("05.jpg"), alt: "Basin waste and thermostatic blending valve pipework", frame: "portrait" },
      { src: f("06.jpg"), alt: "Intamix thermostatic blending valve on the hot water supply", frame: "portrait" },
      { src: f("10.jpg"), alt: "Refurbished staff WC with concealed cistern and new vanity", frame: "portrait" },
      { src: f("11.jpg"), alt: "Staff vanity, basin and upgraded heating", frame: "portrait" },
      { src: f("12.jpg"), alt: "Concealed cistern in the staff WC", frame: "portrait" },
      { src: f("02.jpg"), alt: "Farthinghoe School crest", frame: "portrait" },
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
  featured: SchoolProject;
  shots: ProjectShot[];
  projects: SchoolProject[];
} = {
  title: "Schools & Estates",
  line: "Plumbing, heating and refurbishment works for schools and education estates.",
  body: "From washroom and bathroom refurbishments to plumbing, heating and planned maintenance, L J Plumbing and Heating Services supports schools with programmed work, clear communication and dependable delivery.",
  hero: f("l26.jpg"),
  card: s("card.jpg"),
  points: [
    "Bathroom, toilet and washroom renovations",
    "Plumbing and hot-water installations, upgrades and repairs",
    "Heating installations, upgrades, servicing and fault-finding",
    "Planned and reactive maintenance",
    "Refurbishment works with coordinated trades",
    "Programmes planned around holidays, term time and site access",
  ],
  featured: schoolProjects[0],
  shots: [
    { src: s("hero.jpg"), alt: "Refurbished washbasins at Bishop Loveday Primary School", frame: "portrait" },
    { src: s("01.jpg"), alt: "School washroom at Bishop Loveday Primary School", frame: "portrait" },
    { src: f("l27.jpg"), alt: "Assisted cubicle at Farthinghoe Primary School", frame: "portrait" },
    { src: f("l28.jpg"), alt: "Pupil washroom at Farthinghoe Primary School", frame: "portrait" },
  ],
  projects: schoolProjects,
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
    text: "L J Plumbing and Heating Services supplies and coordinates the required trades. One company remains accountable through the programme.",
  },
  {
    title: "Testing, finishing and handover",
    text: "Commissioning, the last fitting and a finished result that is ready to use.",
  },
];

export function getProject(slug: string) {
  return premierProjects.find((p) => p.slug === slug);
}
