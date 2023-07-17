'use client'

import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeTextAnimation = () => {
  return (
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
    />
  );
};

export default TypeTextAnimation;
