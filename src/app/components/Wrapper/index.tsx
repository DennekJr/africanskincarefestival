"use client";
import * as React from "react";
import { ReactNode } from "react";
import Box from "@mui/material/Box";
import NavBar from "@/app/components/NavBar";
import { Footer } from "@/app/components/Footer";

export default function WebWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{ display: "flex" }}
      className={"w-screen min-h-dvh flex flex-col relative overflow-x-hidden"}
    >
      <NavBar />
      <Box component="main">{children}</Box>
      <Footer />
    </Box>
  );
}