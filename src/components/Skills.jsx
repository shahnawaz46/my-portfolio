import React from "react";
import ReactjsIcon from "@/assets/react-js-icon.svg";
import NextjsIcon from "@/assets/nextjs-icon.svg";
import ReduxIcon from "@/assets/redux-icon.svg";
import JavacriptIcon from "@/assets/javascript-icon.svg";
import HtmlIcon from "@/assets/html-icon.svg";
import CssIcon from "@/assets/css-icon.svg";
import SassIcon from "@/assets/sass-icon.svg";
import TailwindCssIcon from "@/assets/tailwind-icon.svg";
import MaterialUiIcon from "@/assets/material-ui-icon.svg";
import FramerMotionIcon from "@/assets/framer-icon.svg";
import NodejsIcon from "@/assets/nodejs-icon.svg";
import ExpressjsIcon from "@/assets/express-icon.svg";
import DjangoIcon from "@/assets/django-icon.svg";
import MongodbIcon from "@/assets/mongodb-icon.svg";
import GitIcon from "@/assets/git-icon.svg";
import GithubIcon from "@/assets/github-icon.svg";

const skillIcons = [
  { id:101,icon: ReactjsIcon.src, name: "React.js" },
  { id:102,icon: NextjsIcon.src, name: "Next.js" },
  { id:103,icon: ReduxIcon.src, name: "Redux" },
  { id:104,icon: JavacriptIcon.src, name: "Javascript" },
  { id:105,icon: HtmlIcon.src, name: "HTML5" },
  { id:106,icon: CssIcon.src, name: "CSS3" },
  { id:107,icon: SassIcon.src, name: "SASS" },
  { id:108,icon: TailwindCssIcon.src, name: "Tailwind" },
  { id:109,icon: MaterialUiIcon.src, name: "MUI" },
  { id:110,icon: FramerMotionIcon.src, name: "Framer" },
  { id:111,icon: NodejsIcon.src, name: "Node.js" },
  { id:112,icon: ExpressjsIcon.src, name: "Express.js" },
  { id:113,icon: DjangoIcon.src, name: "Django" },
  { id:114,icon: MongodbIcon.src, name: "Mongodb" },
  { id:115,icon: GitIcon.src, name: "Git" },
  { id:116,icon: GithubIcon.src, name: "Github" },
];

const Skills = () => {
  return (
    <div
      id="skill"
      className="relative text-white px-3 sm:px-16 w-full h-full md:mt-16"
    >
      <h2 className="text-3xl text-[#3CCF91] text-center mb-2 font-medium">
        My Skills
      </h2>
      <p className="text-center text-md sm:text-lg">
        The Skills, tools and technology that i use to make the projects.
      </p>
      <div className="flex items-center justify-center gap-3 flex-wrap mt-4">
        {skillIcons.map((item) => (
          <div key={item.id} className="w-28 xs:w-36 h-14 flex items-center justify-center gap-2 bg-white p-1 rounded-md shadow-lg">
            <img src={item.icon} alt="SVG" className="w-8 xs:w-10 sm:w-11" />
            <p className="text-black">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
