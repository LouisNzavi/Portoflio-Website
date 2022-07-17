import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import "../styles/ProjectDisplay.css";

//useParams returns an object key/value pairs of the dynamic params from the current URL that were matched by the <Route path>
//

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="portfolio-projects" />
      <p>
        <b>Skills:</b>
        {project.skill}
      </p>
      {/* <div>
        {ProjectList.map((icon) => {
          return 
          <GitHubIcon github={icon.github} />;
        })}
      </div> */}
      <GitHubIcon />

      <LanguageIcon />
    </div>
  );
}

export default ProjectDisplay;
