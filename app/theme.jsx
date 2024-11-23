"use client";

import { extendTheme } from "@mui/joy";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"], display: "swap" });

const theme = extendTheme({
  components: {
    JoyTab: {
      styleOverrides: {
        root: {
          color: "white",
          "&:hover": {
            backgroundColor: "black",
            opacity: "0.8",
          },
          "&.Mui-selected": {
            backgroundColor: "#2b3c5e",
          },
        },
      },
    },
    JoyTabList: {
      styleOverrides: {
        root: {},
      },
    },
    JoyTabPanel: {
      styleOverrides: {
        root: {},
      },
    },
  },
  fontFamily: {
    body: inconsolata,
  },
});

export default theme;
