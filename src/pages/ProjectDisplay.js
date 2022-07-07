import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

//useParams returns an object key/value pairs of the dynamic params from the current URL that were matched by the <Route path>
//

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  // const githubLink = ProjectList;

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="portfolio-projects" />
      <p>
        <b>Skills:</b>
        {project.skill}
      </p>

      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
