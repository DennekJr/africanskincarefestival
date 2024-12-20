import React, { Suspense } from "react";
import { Skeleton } from "@mui/material";

export async function VideoComponent( ) {
  return (
    <Suspense fallback={<Skeleton variant="rectangular" width={'100%'} height={622} />}>
      <video
        poster={
          "/images/heroImageChoices/realHomeHeroImg.webp"
        }
        preload={"none"}
        className={
          "w-full min-h-[622px] lg:min-h-screen !h-full object-cover relative bg-[#0A090B]"
        }
        aria-label="Video player"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
      >
        <source src={"/images/heroImageChoices/realHomeHeroImg.webp"} type={"image/webp"} />
        Your browser does not support the video tag.
      </video>
    </Suspense>
  );
}
