/* eslint-disable react/prop-types */
import React from "react";

//this fn links the project url to be opened on a new page

function ExternalLink({ url, children, description }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${description}. Opens in new tab or window"`}
    >
      {children}
    </a>
  );
}

export default ExternalLink;
