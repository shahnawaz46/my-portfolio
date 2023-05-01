import React from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import ChatAppImage from "@/assets/chat-app.png";
import EcommerceImage from "@/assets/Ecommerce.png";
import PasswordSaverImage from "@/assets/Password-Saver.png";
import MusicPlayerImage from "@/assets/Music-player.png";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{once:true, amount:0.1}}
      id="project"
      className="relative text-white px-3 sm:px-16 w-full h-fit mt-20"
    >
      <h2 className="text-3xl text-[#3CCF91] text-center mb-2 font-medium">
        Projects
      </h2>
      <p className="text-center text-md sm:text-lg">
        I love building projects and practice my engineering skills, here&apos;s
        are some of my project that I&apos;ve worked on and you can check all of
        my projects by visiting My{" "}
        <Link href={"https://github.com/shahnawaz46"}>Github</Link>.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 md:gap-7 mt-4">
        <ProjectCard
          name={"Global Talk"}
          image={ChatAppImage.src}
          gitHubLink={"https://github.com/shahnawaz46/chatApp-frontend"}
          websiteLink={"https://chatapp-socket.netlify.app/"}
          stack={[
            { id: 1, name: "Mern Stack" },
            { id: 2, name: "Context Api" },
            { id: 3, name: "Socket.io" },
            { id: 4, name: "Cloudinary" },
            { id: 5, name: "PWA" },
          ]}
          about={
            "This is the Global Talk chat web app where you can send a friend request to any one who have an account and chat with each other and lots of other functionality. In this chat web app , I am using Mern Stack and socket io (for realtime connection)."
          }
        />

        <ProjectCard
          name={"Fuzicon"}
          image={EcommerceImage.src}
          gitHubLink={
            "https://github.com/shahnawaz46/fuzicon-frontend-in-reactjs"
          }
          websiteLink={"https://fuzicon-ecommerce.netlify.app/"}
          stack={[
            { id: 1, name: "Mern Stack" },
            { id: 2, name: "Redux" },
            { id: 3, name: "Cloudinary" },
            { id: 4, name: "Framer" },
          ]}
          about={
            "This is a Single Vendor E-commerce Website where you can Checkout, Search, Filter, Add to Cart, Update profile, Buy Products and etc. In this Website, I am using Mern Stack."
          }
        />

        <ProjectCard
          name={"Password Saver"}
          image={PasswordSaverImage.src}
          gitHubLink={"https://github.com/shahnawaz46/password-saver-client"}
          websiteLink={"https://manage-password.netlify.app/"}
          stack={[
            { id: 1, name: "Mern Stack" },
            { id: 2, name: "SASS" },
          ]}
          about={
            "In this project i am creating a website where you can store and get your passwords. Your password will be stored on mongodb and don't worry about your password because your password is completly encrypted."
          }
        />

        <ProjectCard
          name={"Music Player"}
          image={MusicPlayerImage.src}
          gitHubLink={"https://github.com/shahnawaz46/music-player-frontend-"}
          websiteLink={"https://music-player-mern.netlify.app/"}
          stack={[{ id: 1, name: "Mern Stack" }]}
          about={
            "Simple Music Player app in Mern Stack and in this project i am using my own Api for songs information which is store in music-player-bakend repo."
          }
        />
      </div>
    </motion.div>
  );
};

export default Project;
