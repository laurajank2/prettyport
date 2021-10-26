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
                        <p className="info">{item.info}</p>
                      </div>
                      <div className="column">
                        <img src={item.image} width="100%" height="300"></img>
                      </div>
                    </div>
                </li>
              );
            })}
        </div>
    )
}

export default Projects;

