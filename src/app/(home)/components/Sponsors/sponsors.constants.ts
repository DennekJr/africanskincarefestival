import { SponsorType } from "./sponsors.types";

export const SPONSORGIRD_MENU: Record<string, SponsorType> = {
  ruby: {
    id: "ruby",
    name: "Ruby Sponsors",
    disabled: false,
    group: [
      {
        name: "cardtonic",
        src: "/images/medPlus.webp",
        href: "/",
      },
      {
        name: "pressone",
        src: "/images/piggyvest.svg",
        href: "/",
      },
    ],
  },
};
