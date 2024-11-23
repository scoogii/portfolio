import { ThemeProvider } from "@mui/joy";
import theme from "./theme";
import "./globals.css";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Christian's Portfolio",
  description: "Created by Christian Nguyen",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en" className={inconsolata.className}>
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
