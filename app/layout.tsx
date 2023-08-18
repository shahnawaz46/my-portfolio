import "@/styles/globals.css";
import type { Metadata } from "next";
import ReactParticle from "@/src/components/ReactParticle";
import Navbar from "@/src/components/Navbar";
import { childrenProps } from "@/src/interfaces/Interface";

export const metadata: Metadata = {
  title: "Shahnawaz",
  description: "This is my Protfolio Website",
};

export default function RootLayout({ children }: childrenProps) {
  return (
    <html lang="en">
      <body>
        <ReactParticle />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
