import Box from "@mui/material/Box";
import { MonthScribbleIcon } from "@/app/(home)/speakers/LearnFromLeaders/utils";

export const LearnFromLeaders = () => {
  return (
    <Box
      className={
        "w-full min-h-[636px] flex justify-center items-center lg:py-32 bg-[#ffffff]"
      }
    >
      <Box className={"w-full max-w-[1320px] mx-auto flex gap-10"}>
        <Box
          className={
            "max-w-[738px] mr-auto flex flex-col justify-between gap-4 p-6 lg:p-0"
          }
        >
          <Box className={"*:!tracking-[-1px]"}>
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-5xl leading-[52.8px] lg:text-6xl lg:leading-[66px] xl:text-[90px] xl:leading-[90px] tracking-[-3px]"
              data-sentry-element="Comp"
              data-sentry-component="Children"
              data-sentry-source-file="render.tsx"
            >
              <span className="relative max-w-full break-words">
                This Novembe
              </span>
              <span className="relative max-w-full break-words">
                r,
                <MonthScribbleIcon />
              </span>
              <span className="relative max-w-full break-words">
                learn from the leaders in the game.
              </span>
            </pre>
          </Box>
          <Box className={"flex flex-col gap-8"}>
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 heading text-xl font-normal"
            >
              <span className="relative max-w-full break-words">
                Our speaker lineup is continually growing, with new thought
                leaders and industry experts being added every week to ensure
                you receive the most current and comprehensive insights.
              </span>
            </pre>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};