import React from "react";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { ImGithub } from "react-icons/im";
import { BsFillChatFill } from "react-icons/bs";
import "./styles/Contact.css";

const socials = [
  {
    key: "email",
    icon: <MdEmail />,
    url: "mailto:sivadasa@ualberta.ca",
  },
  {
    key: "linkedin",
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/gokul-sa/",
  },
  {
    key: "github",
    icon: <ImGithub />,
    url: "https://github.com/gokul887",
  },
];
const Contact = () => {
  return (
    <div className="contact-container section-container">
      <BsFillChatFill />
      <h1>Interested in having a chat?</h1>
      <div className="contact-socials">
        {socials.map((social) => {
          return (
            <a
              target="_blank"
              className={social.className}
              href={social.url}
              key={social.key}
              rel="noreferrer"
            >
              {social.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
