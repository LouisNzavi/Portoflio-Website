/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

//useNavigate helps us to navigate to the project itself once clicked on in this site
//the 'id' loops through the projects to navigate to the correct project

function ProjectItem({ image, name, id }) {
  return (
    <Link to={`/project/${id}`} className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </Link>
  );
}

export default ProjectItem;
