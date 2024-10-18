"use client";
import Box from "@mui/material/Box";
import { Collapse } from "@mui/material";
import React, { useMemo, useState } from "react";
import { TICKETPURCHASEMENU } from "./ticketPurchase.constants";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Minus, Plus, TicketTag } from "./utils";
import { FortyFiveDegreeArrow } from "@/app/(home)/sponsor/Hero/utils";
import { useMyContext } from "../../../components/CheckoutContext";
import { useRouter } from "next/navigation";

export const TicketPurchase = () => {
  const initialState = [
    { ticketName: "explorer", isOpen: false },
    { ticketName: "founder", isOpen: false },
    { ticketName: "investor", isOpen: false },
    { ticketName: "delegate", isOpen: false },
  ];
  const initialValue = [
    { ticketName: "explorer", value: 0 },
    { ticketName: "founder", value: 0 },
    { ticketName: "investor", value: 0 },
    { ticketName: "delegate", value: 0 },
  ];

  const [isOpen, setIsOpen] = useState(initialState);
  const [values, setValues] = useState(initialValue);
  const router = useRouter();
  const { setData } = useMyContext();
  const tickets = useMemo(() => Object.values(TICKETPURCHASEMENU), []);

  const handleClick = (id: string) => {
    const newState = isOpen.map((item) => {
      if (item.ticketName !== id) {
        return item;
      } else {
        return {
          ...item,
          isOpen: !item.isOpen,
        };
      }
    });
    setIsOpen(newState);
  };
  const handleChange = (math: string, id: string) => {
    const newState = values.map((ticketValue) => {
      if (ticketValue.ticketName !== id) {
        return ticketValue;
      } else {
        const newValue =
          math === "plus"
            ? ticketValue.value + 1
            : ticketValue.value > 0
              ? ticketValue.value - 1
              : ticketValue.value;
        return {
          ...ticketValue,
          value: newValue,
        };
      }
    });
    setValues(newState);
  };

  const handleProceedToCheckout = () => {
    // if(router){
    //   router.push({
    //     pathname: '/second-page',
    //     query: { value: someValue },
    //   });
    // }
    setData(values);
    router.push('/checkout');

  }
  return (
    <>
      {tickets.map((ticket, index) => {
        const open = isOpen.find((item) => {
          if (item.ticketName === ticket.id) {
            return item.isOpen;
          }
          return false;
        });
        const ticketNumber = values.find((item) => {
          if (item.ticketName === ticket.id) {
            return item.value;
          }
          return 0;
        });
        return (
          <Box
            key={index}
            className="border-b border-[#F2F2F2] p-5 lg:p-8 space-y-6"
          >
            <Box className="space-y-2 lg:space-y-4">
              <Box className="flex flex-col-reverse lg:grid grid-cols-5 gap-2">
                <Box className="col-span-4 space-y-1">
                  <p className="text-2xl lg:text-3xl xl:text-6xl font-medium">
                    {ticket.title}
                  </p>
                  <p className="text-sm lg:text-base">{ticket.subTitle}</p>
                </Box>
                <TicketTag ticket={ticket} />
              </Box>
              <div data-state={open?.isOpen}>
                <button
                  type="button"
                  onClick={() => handleClick(ticket.id)}
                  className="flex items-center gap-2"
                >
                  <span>See more</span>
                  {open?.isOpen ? <ExpandLess /> : <ExpandMore />}
                </button>
                <div
                  className="list-disc text-[#504E56] pt-2"
                  style={{ position: "relative" }}
                >
                  <Collapse in={open?.isOpen} timeout="auto" unmountOnExit>
                    <Box className={"flex flex-col pt-2"}>
                      {ticket.benefits.map((benefit, index) => {
                        return <li key={index}>{benefit}</li>;
                      })}
                    </Box>
                  </Collapse>
                </div>
              </div>
            </Box>
            <Box className="space-y-4">
              <div className="flex gap-4 lg:gap-6">
                <p className="text-2xl lg:text-3xl xl:text-5xl font-medium">
                  {ticket.price}
                </p>
              </div>
              <div className="flex items-center gap-5">
                <Minus handleClick={() => handleChange("minus", ticket.id)} />
                <p className="text-2xl lg:text-3xl xl:text-5xl font-medium">
                  {ticketNumber?.value ?? 0}
                </p>
                <Plus handleClick={() => handleChange("plus", ticket.id)} />
              </div>
            </Box>
          </Box>
        );
      })}
      <Box className="py-10 lg:py-12 flex justify-center">
        {" "}
        <button
          onClick={handleProceedToCheckout}
          className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0A090B] text-[#FCFCFC] hover:bg-[#0A090B]/90 h-14 px-6 py-4 rounded-full mx-auto min-w-[80%]"
        >
          <span>PROCEED TO CHECK OUT</span>
          <FortyFiveDegreeArrow />
        </button>
      </Box>
    </>
  );
};
