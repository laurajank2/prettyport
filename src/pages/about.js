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
          <img
            className="aboutimg"
            src="https://i.ibb.co/qrWD3GP/image.jpg"
            alt="me :)"
          ></img>

        <div className="aboutinfo">
          <p>Hello world</p>
          <br />
          <p>
            I’m an undergraduate student at Brown University planning on
            concentrating in Computer Science and Cognitive Neuroscience. I’m
            passionate about making things that amaze, whether it’s a cool
            website, algorithm, or video game.
          </p>
          <br />
          <p>
            I started my journey in computer science by building a website for
            the Nirox Foundation. I learned how to build websites during
            quarantine and had the wonderful opportunity to actually put my
            skills to use in service of a non-profit. Soon after, I started my
            first semester at Brown and dove into traditional classes where I
            learned how to use Java, Python, and various data structures and
            algorithms. I joined SBUDNIC, a research project led by a graduate
            student where undergraduates work together to build a satellite. I
            also am a Development team member for Hack@Brown, the organization
            that runs Brown’s annual Hackathon.
          </p>
          <br />
          <p>
            Now I continue my journey with computer science. I’m looking to
            expand my knowledge of the field through practical and classroom
            experiences. I also aim to incorporate my interest in neuroscience
            by approaching projects with human-computer interaction in mind.
            Overall, I’m excited about finding more research and internship
            opportunities to bolster my understanding and experience in the
            subject.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
