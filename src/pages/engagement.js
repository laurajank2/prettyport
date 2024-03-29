import React from "react";
import { AccomplishmentsData } from "./accomplishmentsData";
import "./../styles/engagement.css";
import "./../styles/projects.css";

function Engagement() {
  return (
    <div className="background">
      <h1 className="eheader">Engagement</h1>
      <p className="description">
        This page contains a description of engagement and accomplishments that
        are not directly related to computer science projects.
      </p>
      {AccomplishmentsData.map((item, index) => {
        return (
          <li key={index} className="name">
            <div className="row">
              <div className="ecolumnimg">
                <img src={item.image} className='engimg' alt={item.imgAlt}></img>
              </div>
              <div className="columninfo">
                <h2 className = "ename">{item.name}</h2>
                <h3 className = "etitle">{item.title}</h3>
                <p className = "edate">{item.date}</p>
                <ul>
                  <li>{item.info1}</li>
                  <li>{item.info2}</li>
                </ul>
              </div>
            </div>
          </li>
        );
      })}
      <br/>
    </div>
  );
}

export default Engagement;
