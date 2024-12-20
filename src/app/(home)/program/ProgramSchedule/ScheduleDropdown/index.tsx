"use client"
import React, { useMemo, useState } from "react";
import { Collapse } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import { SCHEDULEDROPDOWNMENU } from "../ScheduleDropdown/scheduleDropdown.constants";

export const ScheduleDropdown = () => {
  const initialState = [
    { slide: "networking", isOpen: false },
    { slide: "panelDiscussions", isOpen: false },
    { slide: "GuestSpeakers", isOpen: false },
    { slide: "Exhibition", isOpen: false },
    { slide: "liveDemonstrations", isOpen: false },
    { slide: "networkingSession", isOpen: false },
    { slide: "Entertainment&Refreshments", isOpen: false },
    { slide: "eight", isOpen: false },
    { slide: "nine", isOpen: false },
    { slide: "ten", isOpen: false },
  ];
  const [openSlide, setOpenSlide] = useState(initialState);
  const schedules = useMemo(() => Object.values(SCHEDULEDROPDOWNMENU), []);
  const handleClick = (id: string) => {
    const newState = openSlide.map((item) => {
      if (item.slide !== id) {
        return item;
      } else {
        return {
          ...item,
          isOpen: !item.isOpen,
        };
      }
    });
    setOpenSlide(newState);
  };
  return (
    <>
      {schedules.map((schedule, index) => {
        const open = openSlide.find((item) => {
          if (item.slide === schedule.id) {
            return item.isOpen;
          }
          return false;
        });
        return (
          <div
            key={index}
            data-state={open?.isOpen}
            onClick={() => handleClick(schedule.id)}
            className="space-y-2 text-black bg-lightGrey px-4 py-2"
          >
            <button
              type="button"
              className="flex items-center gap-2 w-full text-left justify-between text-textColor"
            >
              <span>
                <p>
                  <span className="font-medium text-primary">{schedule.time}</span> <br />
                </p>
                <p className="font-bold text-xl text-lightSecondary">{schedule.title}</p>
              </span>
              {schedule.content !== undefined && (open?.isOpen ? <ExpandLess className="text-lightSecondary" /> :
                <ExpandMore className="text-lightSecondary" />)}
            </button>
            <div>
              {schedule.content !== undefined && (
                <Collapse in={open?.isOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton className={"px-0"} sx={{ paddingX: 0 }}>
                      <ListItemText>
                        <pre
                          id="undefined-0"
                          className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-normal text-base"
                        >
                          <span className="relative max-w-full break-words text-lightSecondary">
                            <p>
                            {schedule.content?.summary}
                            </p>
                          </span>
                        </pre>
                        {/*<Box*/}
                        {/*  className={"flex flex-wrap gap-5"}*/}
                        {/*  sx={{ marginTop: "calc(1.5rem * calc(1))" }}*/}
                        {/*>*/}
                        {/*  {schedule.content.participants?.map(*/}
                        {/*    (participant, index) => {*/}
                        {/*      return (*/}
                        {/*        <div className="flex gap-2" key={index}>*/}
                        {/*          <div className="overflow-clip rounded-md">*/}
                        {/*            <Image*/}
                        {/*              alt={participant.name}*/}
                        {/*              loading="lazy"*/}
                        {/*              width="60"*/}
                        {/*              height="60"*/}
                        {/*              decoding="async"*/}
                        {/*              className="size-24 object-cover"*/}
                        {/*              src={participant.src}*/}
                        {/*              style={{ color: "transparent" }}*/}
                        {/*            />*/}
                        {/*          </div>*/}
                        {/*          <div className="space-y-1">*/}
                        {/*            <p className="text-lg font-medium text-primary">*/}
                        {/*              {participant.name}*/}
                        {/*            </p>*/}
                        {/*            <div className="text-sm opacity-80 text-lightSecondary">*/}
                        {/*              <p>{participant.company}</p>*/}
                        {/*              <p>{participant.position}</p>*/}
                        {/*            </div>*/}
                        {/*          </div>*/}
                        {/*        </div>*/}
                        {/*      );*/}
                        {/*    },*/}
                        {/*  )}*/}
                        {/*</Box>*/}
                      </ListItemText>
                    </ListItemButton>
                  </List>
                </Collapse>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
