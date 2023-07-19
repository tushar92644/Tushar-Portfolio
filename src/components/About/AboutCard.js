import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tushar Agarwal </span>
            from <span className="purple"> Jaipur, Rajasthan, India.</span>
            <br /> I am a final year student pursuing Computer Science and Specilization
            With Data Science And Data Analytics From <span className="purple">JECRC UIVERSITY.</span>
            <br />
             I am driven by results and motivated to leverage my technical expertise in a dynamic environment. With a focus on data analytics, web development, and open-source contributions
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace challenges, unleash your potential, and conquer the world."{" "}
          </p>
          <footer className="blockquote-footer">Tusharagarwal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
