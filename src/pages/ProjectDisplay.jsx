import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import ExternalLink from "../components/ExternalLink";
import "../styles/ProjectDisplay.css";

//useParams returns an object key/value pairs of the dynamic params from the current URL that were matched by the <Route path>
//

function ProjectDisplay() {
  const { id } = useParams();
  const {
    name,
    image,
    skill,
    description,
    github: gh,
    website,
  } = ProjectList[id];

  return (
    <div className="project">
      <h1>{name}</h1>
      <img src={image} alt="portfolio-projects" />
      <p>
        <b>Skills:</b>
        {skill}
      </p>
      <p style={{ padding: "10px 60px", fontSize: "25px" }}>
        <b>Description:</b>
        {description}
      </p>

      <ExternalLink url={gh} description="GitHub repository">
        <GitHubIcon />
      </ExternalLink>

      <ExternalLink url={website} description="Live demo">
        <LanguageIcon />
      </ExternalLink>
    </div>
  );
}

export default ProjectDisplay;
