import React from 'react';
import { ProjectData } from "./projectData";
import "./../styles/projects.css";

function Projects() {
    return (
        <div className="background">
            <h1 className="header">Projects</h1>
            {ProjectData.map((item, index) => {
              return (
                <li key={index} className={item.headerCName}>
                    <h2 className='small-title'>{item.title}</h2>
                    <div className="row">
                      <div className="column">
                        <p>{item.date}</p>
                        <ul>
                          <li>{item.info1}</li>
                          <li>{item.info2}</li>
                          <li>{item.info3}</li>
                        </ul>
                      </div>
                      <div className="column">
                        <img src={item.image} width="100%" alt={item.imgAlt}></img>
                      </div>
                    </div>
                </li>
              );
            })}
        </div>
    )
}

export default Projects;

