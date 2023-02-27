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
            I’m an undergraduate student at Brown University concentrating in Computer Science and Cognitive Neuroscience. I’m
            passionate about making things that amaze, whether it’s a cool
            website, algorithm, or video game.
          </p>
          <br />
          <p>
            I started my journey in computer science by learning how to build websites during
            quarantine. Soon after, I started my first semester at Brown and dove into traditional classes where I
            learned how to use Java, Python, and various data structures and
            algorithms. I joined SBUDNIC, a research project where graduate and undergraduate students work together to build a satellite. 
            The satellite is now in space, and our team is set to present our research at a conference in Singapore this April.
            I also had the amazing opportunity to work at Meta last summer and learned all about building iOS applications and 
            thinking about how to reach as many people as possible.
          </p>
          <br />
          <p>
            Today, I continue my computer science journey. I also hope to incorporate my interest in neuroscience
            by approaching projects with human-computer interaction and the user in mind.
            Overall, I’m excited about finding more research, internship, and job
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
