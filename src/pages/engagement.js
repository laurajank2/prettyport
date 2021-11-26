import React from "react";
import { AccomplishmentsData } from "./accomplishmentsData";
import "./../styles/engagement.css";

function Engagement() {
  return (
    <div className="background">
      <h1 className="eheader">Engagement</h1>
      <p className="description">
        This page contains a description of engagement and accomplishments that
        are not directly related to Computer Science projects.
      </p>
      {AccomplishmentsData.map((item, index) => {
        return (
          <li key={index} className="name">
            <div className="row">
              <div className="ecolumnimg">
                <img src={item.image} width="100%" alt={item.imgAlt}></img>
              </div>
              <div className="ecolumninfo">
                <h2>{item.name}</h2>
                <p className="edate">{item.date}</p>
                <ul>
                  <li>{item.info1}</li>
                  <li>{item.info2}</li>
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default Engagement;
