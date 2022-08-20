import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  //adding usestate hook for the navbar/mobile navigation on smaller screens: changing state.
  const [expandNavbar, setexpandNavbar] = useState(false);

  //useLocation helps locate current URL: location object is used to access data sent from another route using location object state property
  const location = useLocation();

  //useEffect allows us to perform side effects in our component, it 2 arguments, the function and the dependency(location)
  useEffect(() => {
    setexpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setexpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="projects">Projects</NavLink>
        <NavLink to="experience">Experience</NavLink>
        <NavLink to="resume">Resume</NavLink>

        {/* <Link to="/">Home</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/experience"> Experience</Link>
        <Link to="/resume"> Resume</Link> */}
      </div>
    </div>
  );
}

export default Navbar;
