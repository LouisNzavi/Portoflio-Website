import React from "react";
import { useNavigate } from "react-router-dom";

//useNavigate helps us to navigate to the project itself once clicked on

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;