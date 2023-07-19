import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="College Website"
              description="I am driving the development of a sophisticated and modern website for our college using HTML, CSS, and JavaScript. The website is designed to deliver an exceptional online experience for students, faculty, and visitors. Through careful planning and implementation, we aim to create a user-friendly interface and seamless navigation. Our focus is on enhancing accessibility, responsiveness, and visual appeal to reflect the college's values and meet the needs of our diverse user base. The project involves collaborative efforts, attention to detail, and innovative solutions to ensure the website becomes a valuable resource"
              ghLink="https://github.com/tushar92644/college_website"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Car-Price-Pridiction"
          description="I have played a key role in a project centered around predicting used car prices based on their specifications. Through the application of diverse machine learning algorithms, our objective is to deliver precise and dependable price estimates. This project aims to empower both buyers and sellers with the necessary information to make well-informed decisions. Our focus lies in leveraging data-driven insights and advanced modeling techniques to enhance the accuracy and reliability of the predictions. By combining domain expertise with cutting-edge technology, we strive to create a valuable tool for the automotive market."
              ghLink="https://github.com/tushar92644/price-predictor-of-cars-"
              // demoLink="https://blogs.soumya-jit.tech/"
            />v
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="COURECO"
              description="In our project, we harnessed the power of machine learning algorithms to personalize job and study recommendations, ultimately boosting student success. By developing and implementing a robust recommendation system, we effectively matched students with relevant job opportunities, higher study programs, and online courses. This initiative yielded remarkable results, with a substantial increase in student engagement and satisfaction. Through data-driven insights and personalized recommendations, we aimed to empower students in making informed choices and maximizing their educational and career outcomes."
              ghLink=""
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
