import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
// import backgroundVideo from "../assets/home.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faCss3,
  faHtml5,
  faNpm,
  faBootstrap,
  faCodepen,
  faGithub,
  faStackOverflow,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.5,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: "0.8s",
              },
            },
          }}
        >
          Hi, My Name is Louis
        </motion.h2>
        <div className="prompt">
          <p>
            I am a Front-End Software Developer and I love learning, problem
            solving, and delivering a great user experience.
          </p>
          <LinkedInIcon
            className="icons-nav"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/louis-mulinge-nzavi-9b2bb0140/"
              )
            }
          />
          <EmailIcon
            className="icons-nav"
            onClick={() => window.open("https://mail.google.com/")}
          />
          <GitHubIcon
            className="icons-nav"
            onClick={() => window.open("https://github.com/LouisNzavi/")}
          />
        </div>
        <a href="#Skills">
          <div className="scroll-down"></div>
        </a>
      </div>
      <div className="Skills">
        <h1 className="skills-h1">Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJs, Redux, HTML, CSS, Javascript.
              <br />
              Npm, BootStrap, MaterialUI, Styled Components.
              <br />
              GraphQL, ES6+, AJAX, APIs - REST.
              <br />
              Animation (Greensock & Three.js), Graphing (d3.js) & Realtime
              (websockets and socket.io)
              <br />
              TypeScript, Cypress, Jest.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript, TypeScript</span>
          </li>
        </ol>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faJsSquare} className="fa-bounce fa-2x" />
        <FontAwesomeIcon icon={faReact} className="fa-bounce fa-2x" />
        <FontAwesomeIcon icon={faCss3} className="fa-bounce fa-2x" />
        <FontAwesomeIcon icon={faHtml5} className="fa-bounce fa-2x" />
        <FontAwesomeIcon icon={faNpm} className="fa-bounce fa-2x" />
        <FontAwesomeIcon icon={faBootstrap} className="fa-bounce fa-2x" />
        <FontAwesomeIcon icon={faCodepen} className="fa-bounce fa-2x" />
        <FontAwesomeIcon icon={faGithub} className="fa-bounce fa-2x" />
        <FontAwesomeIcon icon={faStackOverflow} className="fa-bounce fa-2x" />
        <FontAwesomeIcon icon={faFontAwesome} className="fa-bounce fa-2x" />
      </div>
    </div>
  );
}

export default Home;
