import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { useRouter } from "next/router";

const navItems = [
  { name: "Home", link: "" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skill" },
  // { name: "Work", link: "#work" },
  { name: "Project", link: "#project" },
];

const Navbar = () => {
  const { asPath } = useRouter();
  // console.log(asPath);
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="sticky top-0 z-20 text-white flex justify-between items-center h-16 px-3 sm:p-5 md:px-12 lg:px-24">
      <h1 className="text-3xl">
        {" "}
        &lt;Profo<span className="text-[#3CCF91]">\</span>&gt;{" "}
      </h1>
      <BiMenuAltRight
        className="text-3xl cursor-pointer sm:hidden"
        onClick={() => setShowNavbar(true)}
      />
      <nav
        className={`fixed sm:static top-0 ${
          showNavbar ? "right-0" : "right-[-100%]"
        } transition-all bg-white sm:bg-transparent text-black sm:text-white w-60 sm:w-fit h-screen sm:h-fit p-4 flex flex-col sm:flex-row gap-3 sm:gap-7 lg:gap-12 cursor-pointer z-10`}
      >
        <div className="flex justify-end">
          <AiOutlineClose
            className="text-xl cursor-pointer sm:hidden"
            onClick={() => setShowNavbar(false)}
          />
        </div>
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`text-xl sm:text-lg ${asPath === `/${item.link}` && 'underline underline-offset-4 decoration-[#3CCF91]'} sm:hover:underline sm:hover:decoration-[#3CCF91] sm:hover:underline-offset-4`}
          >
            <Link href={item.link} scroll={false}>{item.name}</Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
