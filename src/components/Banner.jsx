import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillInstagram, AiOutlineDownload } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="h-[88vh]" id="">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-white px-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          Hi I&apos;m <br className="sm:hidden" />
          Mohammad Shahnawaz
        </h1>
        <TypeAnimation
          sequence={[
            "Software Engineer",
            1000,
            "Front end Developer",
            1000,
            "Mern Stack Developer",
            1000,
          ]}
          repeat={Infinity}
          cursor={true}
          wrapper="span"
          className="text-xl sm:text-2xl"
          // style={{ fontSize: "20px" }}
        />
        <div className="flex items-center justify-center gap-3 md:gap-4 mt-4">
          <Link
            href={"https://www.linkedin.com/in/mohd-shahnawaz-7ab868228"}
            target="_blank"
          >
            <BsLinkedin className="text-[22px] cursor-pointer text-[#3CCF91]" />
          </Link>
          <Link href={"https://github.com/shahnawaz46"} target="_blank">
            <BsGithub className="text-[22px] cursor-pointer text-[#3CCF91]" />
          </Link>
          <AiFillInstagram className="text-[22px] cursor-pointer text-[#3CCF91]" />
        </div>
        <div className="flex justify-center items-center gap-3 mt-5">
          <Link
            href={
              "https://drive.google.com/file/d/1MzVeuszQpBCUeTvMZV0QRSCC2q0p1vEU/view?usp=share_link"
            }
            target="_blank"
            className="flex items-center justify-evenly w-32 xs:w-36 text-md border-2 border-[#3CCF91] rounded-3xl p-1 cursor-pointer hover:bg-[#3CCF91]"
          >
            <button className="text-lg">Resume</button>
            <AiOutlineDownload className="text-lg" />
          </Link>

          <Link
           href={"#contact"}
            scroll={false}
            className="flex items-center justify-evenly w-32 xs:w-36 text-md border-2 border-[#3CCF91] rounded-3xl p-1 cursor-pointer hover:bg-[#3CCF91]"
          >
            <button className="text-lg">Contact</button>
            <IoMdCall className="text-lg" />
          </Link>
        </div>
      </div>

      <div className="hidden fixed bottom-44 -right-32 rotate-90 text-white sm:flex items-center gap-4">
        <p className="text-lg">shahnawaz85748@gmail.com</p>
        <div className="w-20 h-[2px] bg-[#3CCF91]" />
      </div>
    </div>
  );
};

export default Banner;
