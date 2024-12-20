"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import { SponsorType } from "@/app/(home)/components/newHome/buildFromScratchNewHome/OurSponsors/Sponsor/sponsors.types";
import { ArrowRightAltOutlined } from "@mui/icons-material";

export const Sponsor = ({ sponsor }: { sponsor: SponsorType }) => {
  const handleNavigate = () => {
    if (typeof window === "undefined") return;
    window.open(sponsor.url, "_blank");
  };
  return (
    <Box onClick={handleNavigate}
         className={"sponsorContainer w-full md:w-1/2 lg:w-[33.33%] inline-block align-top relative mb-[16px] md:mb-[32px] lg:mb-[64px] pb-[20px] md:pb-0 md:pr-[30px]"}>
      <Box className={"relative text-left"}>
        <Box className={"mb-8 box-border h-[60px] min-h-[60px]"}>
          <Image
            loading="lazy"
            decoding="async"
            style={{transition: 'opacity 0.3s ease'}}
            className={"sponsorImage h-[52px] w-auto text-primary fill-current opacity-20 "}
            src={sponsor.image}
            alt={sponsor.title}
            width={208}
            height={52}
          />
        </Box>
        <Box className={"mt-[1.3em]"}>
          <h4
            style={{ transition: "all 0.3s ease" }}
            className={"text-primary"}
          >
            {sponsor.title}
          </h4>
          <Box className={"text-lightSecondary mt-[0.4em] mb-[0.3em] text-[15px] leading-[1.6em]"}>
            <span className={"block"}>{sponsor.content}</span>
          </Box>
          <Box
            className={
              "1.7em relative inline-block text-[16px] leading-[21px] z-10 overflow-hidden"
            }
          >
            <span
              className={
                "animateReadMore relative text-primary inline-block align-middle indent-[-110px] whitespace-nowrap text-[14px]"
              }
              style={{
                transition:
                  "visibility 0.4s ease, margin-right 0.4s ease-out, text-indent 0.5s ease-out, opacity 0.4s ease",
                willChange: "visibility, margin-right, text-indent, opacity",
              }}
            ><h4>View More</h4></span>
            <span>
              <ArrowRightAltOutlined className={'relative text-primary inline-block align-middle overflow-hidden w-[1.4em] h-[1.4em]'}/>
            </span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
