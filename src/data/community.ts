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
  body: string;
  shots: CommunityShot[];
};

export const communityIntro = {
  title: "Supporting our community",
  lede: "Proud sponsors of local sport, community projects and causes that make a difference.",
  body: "Our community has helped shape L J Plumbing, and supporting it is an important part of our business. Through club sponsorships, donations and local fundraising events, we’re pleased to give something back.",
};

export const communityStories: CommunityStory[] = [
  {
    id: "easington",
    title: "Easington Sports FC Under-7s",
    body: "We’re proud to sponsor Easington Sports FC’s under-7s, with the L J Plumbing name on the team’s shirts. Grassroots football gives children the opportunity to build confidence, develop friendships and enjoy being part of a team. We’re delighted to support those first steps on the pitch.",
    shots: [
      {
        src: asset("/images/community/football-luke-team.jpg"),
        alt: "Luke with the Easington Sports FC under-7s",
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
    body: "Our sponsorship of Banbury Cricket Club supports a club with opportunities for players of all ages, from the All Stars programme through to the senior teams. With cricket available for boys, girls, women and men, the club plays an important role in local sport, and we’re proud to be one of its sponsors.",
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
    title: "Bodicote Playground",
    body: "Following the closure of Bodicote’s playground, we contributed towards the fundraising effort to rebuild it. A safe, welcoming place to play makes a real difference to village life. Having also worked with the village hall, nursery and primary school, we were pleased to support a project that will benefit local children and families.",
    shots: [
      {
        src: asset("/images/community/playground.jpg"),
        alt: "Company banner on the closed playground at Bodicote Village Hall",
        frame: "portrait",
      },
      {
        src: asset("/images/community/playground-site.jpg"),
        alt: "Company banner beside the play equipment at Bodicote playground",
        frame: "square",
      },
    ],
  },
  {
    id: "tractor-run",
    title: "Banbury Christmas Tractor Run",
    body: "We were proud to sponsor a tractor in the 10th annual Banbury Christmas Tractor Run in support of Katharine House Hospice. The event brings thousands of Christmas lights to the streets and people together for an important local cause. Our thanks go to the organisers, drivers and volunteers who make it happen.",
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
    body: "L J Plumbing sponsors the second hole at Feldon Valley, contributing to the upkeep of the course. It’s a venue we know through team golf and hosting customers and suppliers, making this a natural partnership for the business. We’re pleased to support the work that keeps the course in excellent condition.",
    shots: [
      {
        src: asset("/images/community/golf.jpg"),
        alt: "Hole 2 tee sign at Feldon Valley, sponsored by L J Plumbing and Heating Services",
        frame: "portrait",
      },
    ],
  },
];
