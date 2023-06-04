import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import vg from "../assets/2.webp";
import port from "../assets/portfolio.png";
import profile from "../assets/Fotor_AI.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  // const el = useRef(null);

  // const text = ["Developer", "Coder", "Designer", "Freelancer"];

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["Developer", "Coder", "Designer", "Freelancer"],
  //     startDelay: 300,
  //     typeSpeed: 250,
  //     loop: true,
  //   });
  // });
  return (
    <>
      <div className="home" id="home">
        <main>
          <div className="dev-pro">
            <p>Hello , i am </p>
            <h1>
              &lt; Anup <br /> &nbsp; &nbsp; Kumar &#47; &gt;
            </h1>
            <p>Full Stack Devloper</p>
            {/* <p><Typed strings={text} typeSpeed={100}></Typed></p> */}
          </div>
          <div className="dev-pro-img">
            <img src={profile} alt="Anup Kumar" />
          </div>
        </main>
      </div>
      <div className="home2" id="about">
        <main>
          <div className="about">
            <h3>
              About <span>&#40; &#41;</span>
            </h3>
            <p>
              <span> I </span>a'm <span> Anup Kumar </span> a computer science
              student at Punjab Technical University. Specialize in Web
              Development & Web desiging with experience in project creation and
              management. My interests include automation, web desiging,
              managing backend server and data analyzing. Outside of class I'm a
              athelete, photographer and a cook. I also mantain a number of neat
              projects.
            </p>
          </div>
          <div className="about1">
            <div>
              <div className="upper">
                <h4>Full Stack Developer</h4>
                <a href="#" title="Projects">
                  Projets
                </a>
              </div>
              <div className="sign">&lt; &#47; &gt;</div>
            </div>
            <div>
              <div className="lower">
                <h4>Freelancer</h4>
                <a href="#" title="Hire Me">
                  Hire me!{" "}
                </a>
              </div>
              <div className="sign"> &#123; &#125; </div>
            </div>
          </div>
        </main>
      </div>

      <div className="skill" id="skill"></div>
      <div className="projects" id="project">
        <h3>Projects</h3>
        <main>
          <div>
            <img src={port} alt="" />
            <div className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            </div>
            <div className="linkbtn">
              <a href="">Github</a>
              <a href="">Live Demo</a>
            </div>
          </div>
          <div>
            <img src={port} alt="" />
            {/* <img src="" alt="" /> */}
            <div className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
              ipsa
            </div>
            <div className="linkbtn">
              <a href="">Github</a>
              <a href="">Live Demo</a>
            </div>
          </div>
          <div>
            <img src={port} alt="" />
            {/* <img src="" alt="" /> */}
            <div className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            </div>
            <div className="linkbtn">
              <a href="">Github</a>
              <a href="">Live Demo</a>
            </div>
          </div>
          <div>
            <img src={port} alt="" />
            <div className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
              ipsa
            </div>
            <div className="linkbtn">
              <a href="">Github</a>
              <a href="">Live Demo</a>
            </div>
          </div>
          <div>
            <img src={port} alt="" />
            <div className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
              ipsam!
            </div>
            <div className="linkbtn">
              <a href="">Github</a>
              <a href="">Live Demo</a>
            </div>
          </div>
          <div>
            <img src={port} alt="" />
            <div className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            </div>
            <div className="linkbtn">
              <a href="">Github</a>
              <a href="">Live Demo</a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
