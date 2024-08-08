import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import "./agenda.css";
import animationData from "../../assets/mic.json";

const section2 = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "agenda-left")
            entry.target.classList.add("agendaScrollAnimateLeft");
          if (entry.target.id == "agenda-right")
            entry.target.classList.add("agendaScrollAnimateRight");
        }
      });
    };

    const options = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll(
      ".about-vision-title,.about-vision-description,.about-mission-title,.about-mission-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  const ref = useRef();
  return (
    <React.Fragment>
      <div className="section2">
        <div className="agenda" id="agenda">
          <div className="title2">
    
            <h1 className="title-name">
              <img src="images/bearicon.png" id="bear-icon" alt="arrow-logo" />
              Agenda
              </h1>
          </div>
          <div className="agenda-text">
            <div className="agenda-lottie-animation">
              <Lottie
                animationData={animationData}
                lottieRef={ref}
                style={{
                  width: "30vw",
                  height: "50vh",
                  scale: "1.3",
                  // background: "red",
                }}
                loop={false}
                onMouseEnter={() => {
                  ref.current.stop();
                  ref.current.setSpeed(0.5);
                  ref.current.play();
                }}
                onMouseLeave={() => ref.current.goToAndStop(1000)}
              />
            </div>
            <div className="agenda-des">
              A hackathon is an event that brings together programmers,
              designers, and entrepreneurs alike to showcase their 
              unique skills, creativity, and problem-solving skills. 
              Individuals or teams compete collaboratively to solve 
              challenges within a limited timeframe, usually ranging 
              from several hours to a couple of days. Its a great way
              to learn and connect with others interested in STEAM. 
            </div>
          </div>
        </div>
        <div className="parent-vision">
          <div className="vision">
            <div className="about-vision-title " id="agenda-left">
              {/* <img
                src="/images/target.png"
                alt="vision-image"
                width="100px"
                className="about-vision-image"
              /> */}
              Vision
            </div>
            <div className="about-vision-description" id="agenda-right">
              Our hackathon envisions a world where inventive minds 
              come together to address critical challenges and create 
              transformative solutions. By fostering dynamic collaboration, 
              leveraging cutting-edge technology, and driving relentless 
              determination, we can create real change. Join us to build a 
              brighter future!
            </div>
          </div>
          <div className="mission">
            <div className="about-mission-title" id="agenda-right">
              {/* <img
                src="/images/target.png"
                alt="mission-image"
                width={"120px"}
                className="about-mission-image"
              /> */}
              Mission
            </div>
            <div className="about-mission-description" id="agenda-left">
              Igniting innovation, our hackathon is a hub for
              reimagining solutions in a rapidly evolving world.
              Through technology-driven teamwork, we drive
              change, push boundaries, and shape the future. 
              Join us to brainstorm, collaborate, and make
              progress in the advancing world. Be part of a 
              movement that sparks real change.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default section2;
