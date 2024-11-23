import { createTheme } from "@mui/material";
import "./globals.css";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Christian's Portfolio",
  description: "Created by Christian Nguyen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inconsolata.className}>
      <body>{children}</body>
    </html>
  );
}
