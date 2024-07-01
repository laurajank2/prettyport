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
            I’m a recent graduate from Brown University with a Bachelors in Computer Science and Cognitive Neuroscience. I'm looking forward to working at Netflix starting August 2024 as a Software Enginner on the Testing Automation Platform Team.
          </p>
          <br />
          <p>
            I started my journey in computer science by learning how to build websites during
            COVID-19 quarantine. During my first semester at Brown, I dove into traditional classes where I
            learned how to use Java, Python, and various data structures and
            algorithms. I joined SBUDNIC, a research project where graduate and undergraduate students worked together to build a satellite. 
            The satellite is now in space, and our team presented our research at a conference in Singapore.
            I also had the amazing opportunity to intern at Meta summer 2022, where I learned how to build iOS apps. Summer 2023, I interned at Starbucks on the Retail Infrastucture Engineering team, where I implemented a proof of concept that changed retail stores from cloud to edge computing
            using Docker, Kubernetes, and CoreDNS and got hands-on experience in network engineering.
          </p>
          <br />
          <p>
            Today, I continue my computer science journey. I also hope to incorporate my interest in neuroscience
            by approaching projects with human-computer interaction and the user in mind.
            Overall, I’m excited about finding more research, volunteer, and job
            opportunities to bolster my understanding and experience in computer science.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
