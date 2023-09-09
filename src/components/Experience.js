import React from "react";
import "./styles/Experience.css";
import IntuitLogo from "../img/intuit.png";
import UAlbertaLogo from "../img/ualberta.png";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const experienceCards = [
  {
    classname: "intuit-card",
    img: <img src={IntuitLogo} alt="Intuit logo" />,
    employer: "Intuit",
    experiences: [
      {
        id: 1,
        position: "Backend Developer",
        work: [
          "Used Java and Spring Boot to migrate backend services.",
          "Leveraged Python and Rego to optimize policy response time by 25%.",
          "Collaborated with cross-functional teams to deliver fine-grained permission checking for more than 5 million users.",
        ],
      },
      {
        id: 2,
        position: "Full Stack Developer",
        work: [
          "Used ReactJS and Java to release innovative enhancements to key accounting forms in Quickbooks to 5 major countries.",
          "Optimized performance of feature by 40% (25ms) per keypress.",
          "Collaborated with different teams to integrate useful features to improve user experience.",
        ],
      },
    ],
  },
  {
    classname: "ualberta-card",
    img: <img src={UAlbertaLogo} alt="UAlberta logo" />,
    employer: "University of Alberta",
    experiences: [
      {
        id: 3,
        position: "Research Assistant",
        work: [
          "Developed algorithms to help identify rehabilitation methods for patients with brain or spinal cord injury and stroke.",
          "Established parameters and optimized existing parameter calculation time by 60%.",
          "Studied to separate EEG signal from noise using machine learning techniques, PCA and ICA.",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <div className="experience-section section-container">
      <p>Here are some of my recent work experiences</p>
      <div className="experience-card-section">
        {experienceCards.map((experience) => {
          return (
            <div className="experience-card" key={experience.classname}>
              <div className="experience-img">{experience.img}</div>
              <div className="experience-content">
                {experience.experiences.map((each) => {
                  return (
                    <Timeline key={each.id}>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot
                            sx={{
                              backgroundColor: "#6e07f3",
                            }}
                          />
                          <TimelineConnector
                            sx={{
                              backgroundColor: "#6e07f3",
                            }}
                          />
                        </TimelineSeparator>
                        <div className="experience">
                          <TimelineContent
                            sx={{ fontWeight: 600, fontSize: "1.25rem" }}
                          >
                            {each.position}
                          </TimelineContent>
                          <ul className="experience-points">
                            {each.work.map((point) => {
                              return <li key={point}>{point}</li>;
                            })}
                          </ul>
                        </div>
                      </TimelineItem>
                    </Timeline>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
