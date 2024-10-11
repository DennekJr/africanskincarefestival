"use client";
import Box from "@mui/material/Box";
import { WhiteBgArrowButton } from "@/app/utils";
import { SpeakerVideo } from "@/app/(home)/components/Speakers/SpeakerVideo";
import { ApplyForExhibit } from "@/app/(home)/components/Speakers/ApplyForExhibit";
import { SpeakersGrid } from "@/app/(home)/components/Speakers/SpeakersGrid";

export const Speakers = () => {
  return (
    <section
      className={
        "bg-[#0A090B] w-full lg:my-24 py-24 bg-[url(https://www.africastartupfestival.com/grid-section.svg)] bg-repeat-y bg-top text-white flex flex-col items-center [&>a]:max-w-[90%]"
      }
    >
      <SpeakersGrid />
      <ApplyForExhibit />
      <SpeakerVideo />
      <Box className={""}>
        <WhiteBgArrowButton
          name={"GET TICKET"}
          classNames={
            "lg:text-[44.25px] font-medium [&>svg]:!size-[44.25px] [&>svg]:!stroke-2 px-10 py-8 "
          }
        />
      </Box>
    </section>
  );
};
