import React from "react";
import { CommunityData } from "./communityData";
import "./../styles/community.css";

const Community = () => {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="comheader"
      >
        Community
      </h1>
      {CommunityData.map((item, index) => {
        return (
          <li key={index} className={item.headerCName}>
            <div className="communityrow">
              <div className="communitycolumn">
                <img
                  className="image"
                  src={item.image}
                  alt="me :)"
                  width="100%"
                ></img>
              </div>
              <div className="inforow">
                <h2>{item.name}</h2>
                <p>{item.title}</p>
                <p>{item.info}</p>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default Community;
