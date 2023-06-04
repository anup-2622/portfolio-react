import React from "react";
import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <nav>
        <h4>
          Anup <span> Kumar </span>
        </h4>

        <main>
          <Link to={"https://www.linkedin.com/in/anup-kumar-4987821a3/"}>
            <AiFillLinkedin /> Linkedin
          </Link>
          <Link to={"https://github.com/anup-2622"}>
            <AiFillGithub />
            Github
          </Link>
          <Link to={"/contact"}>Contact Me</Link>
        </main>
      </nav>
      <div className="header">
        <main>
          <HashLink to={"/#home"}>Home</HashLink>
          <HashLink to={"/#about"}>About</HashLink>
          <HashLink to={"/#skill"}>Skill</HashLink>
          <HashLink to={"/#project"}>Projects</HashLink>
          {/* <Link to={"/services"}>Services</Link> */}
        </main>
      </div>
    </>
  );
};

export default Header;
