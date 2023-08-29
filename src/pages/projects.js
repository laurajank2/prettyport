import React from "react";
import { ProjectData } from "./projectData";
import "./../styles/projects.css";

function Projects() {
  return (
    <div className="background">
      <h1 className="header">Projects</h1>
      {ProjectData.map((item, index) => {
        return (
          <li key={index} className="name">
            <span className="small-title">{item.title}</span>
            
            <div className="row">
              <div className="columnimg">
                <img src={item.image} width="100%" alt={item.imgAlt}></img>
              </div>
              <div className="columninfo">
                <p className="date">{item.date}</p>
                <ul>
                  <li>{item.info1}</li>
                  <li>{item.info2}</li>
                  <li>{item.info3}</li>
                </ul>
              </div>
            </div>
          </li>
        );
      })}
      <br />
    </div>
  );
}

export default Projects;
