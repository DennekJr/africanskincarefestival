"use client";
import Marquee from "react-fast-marquee";
import { MarqueeStarIcon } from "../../../utils";
import PlaceIcon from "@mui/icons-material/Place";

export const MarqueeSlide = () => {
  return (
    <Marquee
      className={"marquee-container z-[100] w-full flex py-8 text-white bg-lightGrey text-primary"}
      play
      direction={"left"}
      loop={0}
    >
      <PlaceIcon className={"scale-150"} />
      <span className="px-12">
        Herel Play, Ikoyi, Lagos, Nigeria. See you there!
      </span>
      <MarqueeStarIcon />
      <span className="px-12">Sat, 21th December, 2024</span>
      <PlaceIcon className={"scale-150"} />
      <span className="px-12">
        Herel Play, Ikoyi, Lagos, Nigeria. See you there!
      </span>
      <MarqueeStarIcon />
      <span className="px-12">Sun, 22th December, 2024</span>
    </Marquee>
  );
};
