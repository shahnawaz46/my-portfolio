import React from "react";
import Link from "next/link";
import { RiShareBoxFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ name, image, gitHubLink, websiteLink, stack, about }) => {
  return (
    <div className="rounded-lg bg-[#080808] border border-[#333]">
      <img src={image} alt="project-image" className="rounded-t-lg" />
      <div className="px-3 pb-3">
        <div className="pb-3">
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-lg md:text-xl">{name}</h3>
            <div className="flex items-center gap-2">
              <Link href={gitHubLink} target="_blank">
              <AiFillGithub className="text-xl md:text-2xl" />
              </Link>
              <Link href={websiteLink} target="_blank">
                <RiShareBoxFill className="text-xl md:text-2xl" />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap mt-2">
            {stack.map((item) => (
              <p
                className="bg-white text-black py-0.5 px-4 rounded-md"
                key={item.id}
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
        <hr style={{ borderColor: "#8F9094" }} />
        <div className="pt-1">
          <p className="text-[#8F9094] text-md">{about}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
