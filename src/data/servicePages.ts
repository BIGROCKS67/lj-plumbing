export type ServiceSection = {
  title: string;
  text: string;
};

export type ServicePageDetail = {
  ctaLabel: string;
  imageAlt: string;
  sections: ServiceSection[];
  projectSlugs: string[];
};

export const servicePages: Record<string, ServicePageDetail> = {
  renovations: {
    ctaLabel: "Discuss a renovation",
    imageAlt: "Completed bathroom on a full renovation",
    projectSlugs: ["woodstock", "turweston"],
    sections: [
      {
        title: "What the service includes",
        text: "Complete room and home renovations where L J Plumbing and Heating Services takes responsibility for the plumbing, heating and the finishing work the brief requires. Bathrooms, wet rooms, kitchens and wider renovation packages are planned and delivered as one coordinated programme.",
      },
      {
        title: "How the project is managed",
        text: "The company walks the property, agrees the scope and sets a programme. Protection of the house, sequencing of trades and a single point of contact sit with L J from first meeting through to handover.",
      },
      {
        title: "Trades supplied and coordinated",
        text: "L J supplies and coordinates the trades a renovation needs. One company remains accountable, rather than the client managing a list of separate contractors.",
      },
      {
        title: "Planning and technical preparation",
        text: "Layouts, first-fix routes, heating and hot water are designed before walls are opened. Where an architect is already involved, the plumbing and heating package is coordinated with that drawing.",
      },
      {
        title: "Work behind the walls",
        text: "Pipework, frames, tanks, waterproofing and first-fix services are set out to the same standard as the visible rooms. That work is finished before tiles and sanitaryware go on.",
      },
      {
        title: "Testing, finishing and handover",
        text: "Systems are tested and commissioned. Finishes are completed and the property is handed back ready to use.",
      },
    ],
  },
  bathrooms: {
    ctaLabel: "Discuss a bathroom project",
    imageAlt: "Principal bathroom with yellow bath and rainforest wall",
    projectSlugs: ["woodstock", "turweston"],
    sections: [
      {
        title: "What the service includes",
        text: "Complete bathrooms and wet rooms, planned and finished as a single project. Layout, plumbing, heating, waterproofing, lighting coordination, tiling, cabinetry, sanitaryware and the last fitting all sit in one brief.",
      },
      {
        title: "How the project is managed",
        text: "Each room is treated as its own brief inside a clear programme. The same team remains accountable from the first layout conversation through first fix, second fix and handover.",
      },
      {
        title: "Trades supplied and coordinated",
        text: "L J supplies and coordinates the finishing trades a bathroom needs, including tiling and decoration where the project requires them. One company stays responsible for the finished room.",
      },
      {
        title: "Planning and technical preparation",
        text: "Waste, water, heating and concealed frames are set out before finishes are chosen in isolation. Wall-hung sanitaryware, wet-room tanking and matching brassware are planned so the visible work can stay clean.",
      },
      {
        title: "Work behind the walls",
        text: "First-fix pipework, concealed cisterns, bottle traps and waterproofing are completed to the same standard as the finished surfaces. That is the work the room depends on once the tiles are on.",
      },
      {
        title: "Testing, finishing and handover",
        text: "Every bathroom is tested, commissioned and finished before handover. The room is handed back fully tested, finished and ready to use.",
      },
    ],
  },
  heating: {
    ctaLabel: "Discuss your requirements",
    imageAlt: "Copper manifolds and plant on a whole-property heating install",
    projectSlugs: ["bloxham-road", "turweston"],
    sections: [
      {
        title: "What the service includes",
        text: "Plumbing and heating systems designed around the property. Gas and oil boilers, plant rooms, cylinders, underfloor heating, radiators, zoning, smart controls and the pipework that ties them together.",
      },
      {
        title: "How the project is managed",
        text: "The system is scoped as one installation. Design, materials, first fix, second fix and commissioning stay with L J, so the plant room and the finished rooms are delivered to the same standard.",
      },
      {
        title: "Trades supplied and coordinated",
        text: "Where a heating project sits inside a wider renovation, L J supplies and coordinates the trades the programme needs and remains the accountable company through to handover.",
      },
      {
        title: "Planning and technical preparation",
        text: "Heat-loss calculations, correct sizing, pipe routes and controls are prepared before the floor is opened. Technical planning and working drawings are included within the project delivery.",
      },
      {
        title: "Work behind the walls",
        text: "Manifolds, insulated pipework, cylinders and first-fix runs are set out before screed and finishes. The plant room is the evidence: labelled, insulated and ready to commission.",
      },
      {
        title: "Testing, finishing and handover",
        text: "Systems are filled, tested and commissioned. Controls are set up for how the property is used, and the installation is handed over as a working system.",
      },
    ],
  },
};

export const schoolAssurance = [
  {
    title: "Programme and access",
    text: "Works can be programmed across holiday windows or, where agreed, around term-time access and occupied buildings. Materials, deliveries and individual phases are coordinated around the school’s requirements.",
  },
  {
    title: "Quotations and schedules",
    text: "Scope, quotation and a project schedule are set out before work begins, so site and facilities teams can see what will happen and when.",
  },
  {
    title: "Communication on site",
    text: "Day-to-day contact sits with the site and facilities team so the programme stays aligned with the school.",
  },
  {
    title: "Planned maintenance",
    text: "Alongside project work, L J provides planned plumbing and heating maintenance for schools and education estates.",
  },
  {
    title: "Company and site information",
    text: "Gas Safe and OFTEC registration are published on this site. Insurance details, risk assessments, method statements and agreed safeguarding arrangements can be provided as the site requires.",
  },
];
