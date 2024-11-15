import { FooterItem } from "./footer.types";

export const FOOTER_MENULINKS: Record<string, FooterItem> = {
  navigate: {
    id: "navigate",
    route: "",
    name: "Navigate",
    subLinks: [
      { id: "getATicket", name: "Get a Ticket", route: "/ticket" },
      { id: "home", name: "Home", route: "/" },
      { id: "2024speakers", name: "2024 speakers", route: "/speakers" },
      { id: "exhibit", name: "Exhibit", route: "/exhibit" },
      { id: "sponsor", name: "Sponsor", route: "/sponsor" },
      { id: "2024program", name: "2024 Program", route: "/program" },
    ],
    disabled: false,
  },
  ourEvents: {
    id: "ourEvents",
    route: "",
    name: "Our Events",
    subLinks: [
      { id: "africaSkincare", name: "Africa Skincare", route: "" },
      {
        id: "torontoSkincareFestival",
        name: "Toronto Skincare Festival",
        route: "",
      },
      { id: "dubaiSkincareFestival", name: "Dubai Skincare Festival", route: "" },
    ],
    disabled: false,
  },
  eventGuide: {
    id: "eventGuide",
    route: "",
    name: "Event Guide",
    subLinks: [
      { id: "volunteerAtASF", name: "Volunteer at ASF", route: "" },
      { id: "applyToSpeak", name: "Apply to Speak", route: "" },
      { id: "contactUs", name: "Contact Us", route: "/contactus" },
    ],
    disabled: false,
  },
  connect: {
    id: "connect",
    route: "",
    name: "Connect",
    subLinks: [
      { id: "instagram", name: "Instagram", route: "" },
      { id: "x", name: "X", route: "" },
      { id: "linkedin", name: "Linkedin", route: "" },
    ],
    disabled: false,
  },
};
