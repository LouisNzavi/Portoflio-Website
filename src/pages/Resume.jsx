import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "../styles/Resume.css";
import pdf from "../assets/louisnzaviresume.docx.pdf";

function Resume() {
  const [numPage, setnumPage] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPage }) {
    setnumPage(numPage);
    setPageNumber(2);
  }
  return (
    <div className="resume">
      <Document
        className="resume-style"
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page height="900" pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPage}
      </p>
      {/* {pageNumber} */}
    </div>
  );
}

export default Resume;
