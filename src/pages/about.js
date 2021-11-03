import React from "react";
import "./../styles/about.css";

const About = () => {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="aboutheader"
      >
        About
      </h1>
      <div className="aboutrow">
        <div className="aboutcolumn">
          <img
            className="image"
            src="https://lh3.googleusercontent.com/4mdDkjxTma21RpG2KVeoD9OFk1-oa087zmhCO-PBMV2KCcOPv4TytSwcNg5LMNRxuWYc4HSOhYbENVORskoHJPqzKL0plB9yeQ7FNwWM2iQop-PgiOdgCkS0JzocnV5duw=w1280"
            alt="photo of me :)"
            width="100%"
          ></img>
        </div>

        <div className="aboutcolumn">
          <p>Hello world</p>
        </div>
      </div>
    </div>
  );
};

export default About;
