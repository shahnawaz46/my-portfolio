import React from "react";
import '@/styles/globals.css'
import ReactParticle from "@/src/components/ReactParticle";
import Navbar from "@/src/components/Navbar";

export const metadata = {
  title: "Shahnawaz",
  description: "This is my Protfolio Website",
};

export default function RootLayout({ children }) {
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
