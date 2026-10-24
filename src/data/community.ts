import { asset } from "@/lib/utils";
import type { PhotoFrame } from "@/components/ui/Photo";

export type CommunityShot = {
  src: string;
  alt: string;
  frame: PhotoFrame;
};

export type CommunityStory = {
  id: string;
  title: string;
  place: string;
  line: string;
  body: string;
  shots: CommunityShot[];
};

export const communityIntro = {
  title: "Part of the places we work.",
  lede: "Sponsorships, donations and support for local clubs, a village playground and fundraising events.",
  body: "L J Plumbing and Heating Services is based in Bodicote and works across Banbury. Sponsorship of local clubs, the village playground and fundraising events is part of that.",
};

export const communityStories: CommunityStory[] = [
  {
    id: "easington",
    title: "Easington Sports FC under\u20117s",
    place: "Addison Road, Banbury",
    line: "Sponsor of the under-7s.",
    body: "The side plays at Addison Road. Luke was with his son’s team as the sponsored shirts went on, and the company stays behind the under-7s for the rest of the season.",
    shots: [
      {
        src: asset("/images/community/football-shirt.jpg"),
        alt: "Easington Sports FC shirt sponsored by L J Plumbing and Heating Services",
        frame: "square",
      },
      {
        src: asset("/images/community/football-team.jpg"),
        alt: "Easington Sports FC under-7s with their coach",
        frame: "square",
      },
    ],
  },
  {
    id: "cricket",
    title: "Banbury Cricket Club",
    place: "Banbury",
    line: "Named at the entrance of the club.",
    body: "The banner is on the fence by the main entrance, after a refurbishment that includes a new balcony and upstairs bar. The club runs cricket for boys, girls, women and men, from All Stars through to the senior sides. Luke’s son plays in the All Stars programme.",
    shots: [
      {
        src: asset("/images/community/cricket-entrance.jpg"),
        alt: "Banbury Cricket Club entrance with the company banner on the fence",
        frame: "portrait",
      },
      {
        src: asset("/images/community/cricket-fence.jpg"),
        alt: "L J Plumbing and Heating Services banner at Banbury Cricket Club",
        frame: "portrait",
      },
    ],
  },
  {
    id: "playground",
    title: "Bodicote playground",
    place: "Bodicote Village Hall and Nursery",
    line: "A donation towards the rebuild.",
    body: "The existing playground has been condemned and is closed off. The donation supports a rebuild so local families have a safe park to use again. The company works with the village hall, the nursery and the primary school, so backing the project was a straightforward decision.",
    shots: [
      {
        src: asset("/images/community/playground.jpg"),
        alt: "Company banner on the closed playground at Bodicote Village Hall",
        frame: "portrait",
      },
      {
        src: asset("/images/community/playground-site.jpg"),
        alt: "The fenced playground site at Bodicote Village Hall",
        frame: "portrait",
      },
    ],
  },
  {
    id: "tractor-run",
    title: "Banbury Christmas Tractor Run",
    place: "Banbury",
    line: "A sponsored tractor on the 10th annual run.",
    body: "The run raises money for Katharine House Hospice. Families line the streets, and local businesses, drivers and volunteers put the night on. Clive took Luke’s son in the cab.",
    shots: [
      {
        src: asset("/images/community/tractor-street.jpg"),
        alt: "The sponsored tractor in the Banbury Christmas Tractor Run",
        frame: "portrait",
      },
      {
        src: asset("/images/community/tractor-cab.jpg"),
        alt: "Luke’s son in the cab of the sponsored tractor",
        frame: "portrait",
      },
    ],
  },
  {
    id: "feldon",
    title: "Feldon Valley",
    place: "Hole 2",
    line: "Sponsor of hole 2.",
    body: "The sponsorship supports the upkeep of the course. It is a course the team plays, and a place customers and suppliers are invited to.",
    shots: [
      {
        src: asset("/images/community/golf.jpg"),
        alt: "Hole 2 tee sign at Feldon Valley, sponsored by L J Plumbing and Heating Services",
        frame: "portrait",
      },
    ],
  },
];
