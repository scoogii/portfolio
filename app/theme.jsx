"use client";

import { extendTheme } from "@mui/joy";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"], display: "swap" });

const theme = extendTheme({
  fontFamily: {
    body: inconsolata,
  },
  components: {
    JoyTab: {
      styleOverrides: {
        root: {
          color: "white",
          "&:hover": {
            opacity: "0.8",
          },
          "&.Mui-selected": {
            backgroundColor: "#2b3c5e",
          },
        },
      },
    },
  },
});

export default theme;
