import "./globals.css";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata = {
  title: "Christian's Portfolio",
  description: "Created by Christian Nguyen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>{children}</body>
    </html>
  );
}
