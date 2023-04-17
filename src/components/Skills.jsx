import React from "react";
import { motion } from "framer-motion";
import {
  ReactjsIcon,
  NextjsIcon,
  ReduxIcon,
  JavacriptIcon,
  HtmlIcon,
  CssIcon,
  SassIcon,
  TailwindCssIcon,
  MaterialUiIcon,
  FramerMotionIcon,
  NodejsIcon,
  ExpressjsIcon,
  DjangoIcon,
  MongodbIcon,
  GitIcon,
  GithubIcon,
} from "./SkillsIcons";

const skillIcons = [
  { id: 101, icon: ReactjsIcon.src, name: "React.js" },
  { id: 102, icon: NextjsIcon.src, name: "Next.js" },
  { id: 103, icon: ReduxIcon.src, name: "Redux" },
  { id: 104, icon: JavacriptIcon.src, name: "Javascript" },
  { id: 105, icon: HtmlIcon.src, name: "HTML5" },
  { id: 106, icon: CssIcon.src, name: "CSS3" },
  { id: 107, icon: SassIcon.src, name: "SASS" },
  { id: 108, icon: TailwindCssIcon.src, name: "Tailwind" },
  { id: 109, icon: MaterialUiIcon.src, name: "MUI" },
  { id: 110, icon: FramerMotionIcon.src, name: "Framer" },
  { id: 111, icon: NodejsIcon.src, name: "Node.js" },
  { id: 112, icon: ExpressjsIcon.src, name: "Express.js" },
  { id: 113, icon: DjangoIcon.src, name: "Django" },
  { id: 114, icon: MongodbIcon.src, name: "Mongodb" },
  { id: 115, icon: GitIcon.src, name: "Git" },
  { id: 116, icon: GithubIcon.src, name: "Github" },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
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
          <motion.div
            whileHover={{
              scale: 1.07,
              transition: { duration: 0.5 },
            }}
            whileTap={{
              scale: 1.07,
              transition: { duration: 0.5 },
            }}
            onContextMenu={(e) => e.preventDefault()}
            key={item.id}
            className="w-28 xs:w-36 h-14 flex items-center justify-center gap-2 bg-white p-1 rounded-md shadow-lg"
          >
            <img src={item.icon} alt="SVG" className="w-8 xs:w-10 sm:w-11" />
            <p className="text-black">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
