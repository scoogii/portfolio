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
          "&.Mui-selected": {
            backgroundColor: "#2b3c5e",
          },
        },
      },
    },
    JoyRadio: {
      styleOverrides: {
        root: {
          color: "white",
          fontSize: "12pt",
        },
      },
    },
  },
});

export default theme;
