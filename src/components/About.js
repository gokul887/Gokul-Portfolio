import React from "react";
import "./styles/About.css";
import { ReactComponent as Avatar } from "../img/avataaars.svg";
import Typewriter from "typewriter-effect";

const whatAmI = [
  "I am a Frontend Developer",
  "I am a Backend Developer",
  "I am a Data Scientist",
];
const About = () => {
  return (
    <div className="about section-container">
      <div className="content">
        <div>
          <h1 className="intro flex-1 font-poppins ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Hi! I am
            <br className="sm:block hidden" />
          </h1>
        </div>

        <h1 className="name ss:text-[68px] text-[52px] linear-gradient ss:leading-[100.8px] leading-[75px] w-full">
          Gokul Sivadasan.
        </h1>
        <div className="whatami">
          <Typewriter
            options={{
              strings: whatAmI,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="avatar">
        <Avatar />
      </div>
    </div>
  );
};

export default About;
