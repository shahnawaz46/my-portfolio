import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative text-white px-3 sm:px-16 w-full h-fit mt-20"
    >
      <h2 className="text-3xl text-[#3CCF91] text-center mb-2 font-medium">
        Keep In Touch
      </h2>
      <p className="text-center text-md sm:text-lg">
        If you have an exciting opportunity for me, or if you have any Query, or
        if you want to talk with me, <br className="hidden sm:block" /> feel free to reach out!
      </p>
      <div className="flex items-center justify-center flex-wrap gap-3 md:gap-4 mt-8">
        <Link
          href={"https://www.linkedin.com/in/mohd-shahnawaz-7ab868228"}
          target="_blank"
        >
          <div className="bg-white hover:bg-blue-100  flex items-center gap-2 py-1 px-4 rounded-md">
            <BsLinkedin className="text-md cursor-pointer text-[#0a66c2]" />
            <p className="text-black">Linkedin</p>
          </div>
        </Link>
        <Link href={"https://github.com/shahnawaz46"} target="_blank">
          <div className="bg-white hover:bg-[#b5b5b5] flex items-center gap-2 py-1 px-4 rounded-md">
            <BsGithub className="text-lg cursor-pointer text-black" />
            <p className="text-black">Github</p>
          </div>
        </Link>
        <Link href={"mailto:shahnawaz85748@gmail.com"} target="_blank">
          <div className="bg-white hover:bg-red-100 flex items-center gap-2 py-1 px-4 rounded-md">
            <AiOutlineMail className="text-lg cursor-pointer text-red-600" />
            <p className="text-black">Email</p>
          </div>
        </Link>
      </div>
      <div className="mt-16 mb-4 text-center text-md sm:text-lg">
        Designed and Developed by{" "}
        <span className="text-[#3CCF91]">Mohammad Shahnawaz</span>. <br /> Built
        with <span className="text-[#3CCF91]">Next.js</span> & <span className="text-[#3CCF91]">Tailwind Css</span>.
      </div>
    </div>
  );
};

export default Contact;
