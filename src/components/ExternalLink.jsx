/* eslint-disable react/prop-types */
import React from "react";

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
