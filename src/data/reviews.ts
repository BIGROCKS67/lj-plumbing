export type Review = {
  quote: string;
  name: string;
  place?: string;
};

export type GoogleReview = {
  quote: string;
  name: string;
  stars: 5;
};

export const googleReviews: GoogleReview[] = [
  {
    name: "J V",
    stars: 5,
    quote:
      "Very impressed with the service I received from SMH, especially as we are reasonably new home owners and we've found it hard to find reliable tradesmen. I contacted them last week to book in a boiler service and gas check and they replied within the day with their availability and booked me in. They arrived on time and did a thorough job and Mark explained everything and cleaned up before he left. They sent through the certificate and invoice the same day. Excellent service and will definitely use them again next year or if we need any gas works doing in future.",
  },
  {
    name: "Prankit Gupta",
    stars: 5,
    quote:
      "Mark and Steve did a fantastic job removing our old boiler and installing a new PDHW system. They were highly professional throughout the process and were incredibly mindful of our home, leaving everything spotless and clean. Highly recommended!",
  },
  {
    name: "Andrew Roberts",
    stars: 5,
    quote:
      "Mark worked methodically with our heating system to find the likely cause of the fault. He replaced a three-port valve recently installed by another Gas Safe registered plumber and fixed the problem. Thank you Mark, I will be in touch when we need the boiler servicing.",
  },
  {
    name: "D DN",
    stars: 5,
    quote:
      "We have used Mark for a number of years for our boiler servicing and any heating repairs, safety checks etc. We have always been pleased with his work. Well organised and courteous. Would recommend.",
  },
];

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
