import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p style={{ color: "inherit" }}>&copy; 2022 louismulinge.com</p>
    </div>
  );
}

export default Footer;
