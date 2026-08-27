export type Review = {
  quote: string;
  name: string;
  place?: string;
};

export const reviews: Review[] = [
  {
    quote:
      "We couldn’t be more pleased with our transformed bathroom. The level of professionalism and attention to detail from the whole team is hugely appreciated. Communication was excellent throughout the process and we are delighted with the end result.",
    name: "Rachel",
  },
  {
    quote:
      "The team have always been very professional and quality-driven. They managed the plumbing for our extension and renovation, communicating clearly and delivering to an excellent standard. Always respectful and friendly.",
    name: "Chris and Penny",
  },
  {
    quote:
      "My mother is 90 and her boiler was condemned, so she had no heating or hot water. The same engineers came each day, which was very reassuring for her. Thorough, tidy and very pleasant.",
    name: "Heather",
  },
  {
    quote: "Thanks for the bathrooms, they look grand. We were super happy with every step of the process.",
    name: "Kirsty",
    place: "Jubilee House",
  },
  {
    quote:
      "We are delighted with the work the team did, particularly Toby, whose attention to detail is exemplary.",
    name: "Clive",
  },
  {
    quote:
      "The floor heating is working perfectly. We can’t quite believe the house is for us to live in. We’re so grateful for all the careful work.",
    name: "Susan",
  },
  {
    quote: "Bathroom looks fab. Thank you to you and all your men on this job.",
    name: "Wendy",
  },
  {
    quote: "As ever, the service was excellent. Thanks so much for fitting this in so quickly.",
    name: "Rachel",
    place: "Bodicote",
  },
];
