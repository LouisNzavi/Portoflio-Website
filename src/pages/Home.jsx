import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
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
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.5,
              },
            },
          }}
        >
          Hi, My Name is Louis
        </motion.h2>

        <div className="prompt">
          <p>
            I am a Front-End Software Developer with a focus on delivering for
            user experience. Have a passion for learning and problem solving.
          </p>
          <LinkedInIcon
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/louis-mulinge-nzavi-9b2bb0140/"
              )
            }
          />
          <EmailIcon onClick={() => window.open("https://mail.google.com/")} />
          <GitHubIcon
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
              ReactJs, Redux, HTML, CSS, Javascript
              <br />
              Npm, BootStrap, MaterialUI, Styled Components
              <br />
              GraphQL, ES6+, AJAX, APIs - REST and GraphQL,
              <br />
              Animation (Greensock & Three.js), Graphing (d3.js) & Realtime
              (websockets and socket.io)
              <br />
              TypeScript, Cypress, Jest, Webpack, OAuth.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
