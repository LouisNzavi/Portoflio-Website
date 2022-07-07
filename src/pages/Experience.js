import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import DataObjectIcon from "@mui/icons-material/DataObject";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#004777">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan 2010- June 2014"
          iconStyle={{ background: "#004777", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            Nicholas BreakSpear Catholic School
          </h2>
          <p>
            A-levels: Communication Studies -A*
            <br />
            ICT Cambridge Technical - A
            <br />
            Philosophy and Ethics - B
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Dec 2020- June 2022"
          iconStyle={{ background: "#FF7700", color: "#fff" }}
          icon={<WorkHistoryIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            ComputaCenter - Scheduler
          </h2>
          <p>
            Incident management.
            <br />
            Tracking and ordering hardware.
            <br />
            Liasing with customers internal and external.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan 2022 - July 2022"
          iconStyle={{ background: "#00AFB5", color: "#fff" }}
          icon={<DataObjectIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            The Jump Digital Coding Bootcamp
          </h2>
          <p>
            HTML, CSS/SaSS/SCSS
            <br />
            JavaScript, TypeScript, React
            <br />
            Redux-Toolkit, Redux
            <br />
            Animation, GraphQL
            <br />
            BootStrap and Materialize
            <br />
            AJAX and API calls
            <br />
            Jest, Cypress
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
