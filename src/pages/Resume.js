import React from "react";
import pdf from "../assets/Louis Nzavi CV (1).pdf";
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume">
      <a
        href={pdf}
        target="_blank"
        rel="norefferrer noreferrer"
        className="pop"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
