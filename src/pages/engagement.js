import React from "react";
import { AccomplishmentsData } from "./accomplishmentsData";
import "./../styles/engagement.css";

function Engagement() {
  return (
    <div className="background">
      <h1 className="header">Engagement</h1>
      <p className="description">
        This page contains a description of engagement and accomplishments that
        are not directly related to Computer Science projects.
      </p>
      {AccomplishmentsData.map((item, index) => {
        return (
          <li key={index} className={item.headerCName}>
            <div className="slide">
              <div className="communityrow">
                <div className="einforow">
                  <h2>{item.name}</h2>
                  <h5>{item.date}</h5> 
                  <p>{item.title}</p>
                  <p>{item.info1}</p>
                  <p>{item.info2}</p>
                </div>
                <div className="imgcol">
                  <img
                    className="image"
                    src={item.image}
                    alt="me :)"
                    width="100%"
                  ></img>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default Engagement;
