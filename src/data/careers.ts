import { images } from "@/data/images";

export type CareerRole = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  salary: string;
  hours: string;
  location: string;
  contract: string;
  image: string;
  imageAlt: string;
  imageFocus: string;
  intro: readonly string[];
  closing?: string;
  offer: readonly string[];
  salaryMin: number;
  salaryMax: number;
  employmentType: "FULL_TIME" | "PART_TIME";
  remote: boolean;
};

export const careersIntro = {
  title: "Join the team.",
  lede: "L J Plumbing and Heating Services is growing after the acquisition of SMH Gas Specialist. Two roles are open now.",
  body: "The company is expanding a team that already has the work, the systems and the standard in place. These are employed roles with a close-knit company based in Bodicote, working across Banbury and the surrounding counties.",
} as const;

export const careerRoles: readonly CareerRole[] = [
  {
    slug: "administration-assistant-pa",
    title: "Administration Assistant / PA",
    shortTitle: "Administration Assistant",
    eyebrow: "Office & PA support",
    summary:
      "Work closely with Luke to keep jobs, diaries and customer contact running as the company grows.",
    salary: "£20,000–£35,000 a year",
    hours: "Minimum 3 days a week, with scope for 4–5",
    location: "Remote to start, based around Bodicote",
    contract: "Part-time, with room to grow",
    image: images.shots.vansClose,
    imageAlt: "L J Plumbing and Heating Services kit and company van",
    imageFocus: "object-[center_70%]",
    intro: [
      "L J Plumbing and Heating Services has recently acquired SMH Gas Specialist, a trusted name across Oxfordshire for decades. With SMH’s experience and customer base now part of the business, the company is expanding the team and the services it can offer.",
      "This role has a strong PA element. You will organise jobs and engineers’ diaries, handle customer calls and emails, keep records up to date and support Luke with the day-to-day running of the business.",
      "You will need to be organised, confident speaking to people and comfortable using digital systems. Administration experience is welcome, but the right person and attitude matter just as much.",
      "The role starts remotely, with the possibility of office days later. It is a minimum of three days a week, with the potential to grow to four or five as the business grows.",
    ],
    offer: [
      "Work closely with Luke on the day-to-day running of the business",
      "Bookings, diaries, customer enquiries and PA support",
      "Remote to start, with possible office days later",
      "Minimum three days a week, with scope for four or five",
      "£20,000–£35,000 a year, depending on experience, hours and how the role develops",
    ],
    salaryMin: 20000,
    salaryMax: 35000,
    employmentType: "PART_TIME",
    remote: true,
  },
  {
    slug: "gas-safe-engineer",
    title: "Gas Safe Engineer",
    shortTitle: "Gas Safe Engineer",
    eyebrow: "Employed, permanent · OX15",
    summary:
      "An experienced Gas Safe engineer for local domestic work, bathrooms and planned projects across North Oxfordshire.",
    salary: "£35,000–£50,000 a year",
    hours: "Full-time, local work — home every night",
    location: "North Oxfordshire, commuting distance of OX15",
    contract: "Employed, permanent",
    image: images.services.gasBoiler,
    imageAlt: "Gas boiler and heating installation",
    imageFocus: "object-[center_40%]",
    intro: [
      "L J Plumbing and Heating Services is looking for an experienced Gas Safe engineer to join the team. The role is based in North Oxfordshire, so applicants need to be within a reasonable commuting distance of OX15.",
      "The company already has an established team of plumbing and heating engineers, including Gas Safe and OFTEC registered engineers. This role is an addition to that team, not a replacement for it.",
      "This is a long-term employed role with steady work. There are multiple projects on the go, further work scheduled later in the year, and new enquiries coming in daily. The company is expanding a team that already has the work, not firefighting or chasing it.",
      "The work is mainly domestic oil and gas breakdowns, plumbing and heating, with a strong focus on quality bathroom refurbishment and renovation projects.",
    ],
    closing:
      "Serious applicants can be shown around live sites so they can see the standard of work and how jobs are run.",
    offer: [
      "£35,000–£50,000 a year depending on experience",
      "Employed, permanent role",
      "Company van, fuel card and work uniform",
      "Fully stocked van, with use of up-to-date power tools",
      "Local work only — home every night",
      "Company pension scheme",
      "Properly planned jobs with office and project management support",
      "Private medical and dental care",
      "Social, team-building events within work hours",
    ],
    salaryMin: 35000,
    salaryMax: 50000,
    employmentType: "FULL_TIME",
    remote: false,
  },
] as const;

export function getCareerRole(slug: string) {
  return careerRoles.find((role) => role.slug === slug);
}
