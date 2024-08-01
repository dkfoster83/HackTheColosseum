import React from "react";
import { ReactComponent as LaunchLink } from "../../assets/link-launch.svg";
import "./sponsors.css";
import Contact from "./contact";
import Faqs from "./faqs";
import Convener from "./convener";
import Coordinators from "./coordinators";
const sponsors = () => {
  return (
    <React.Fragment>
      <div className="parent-sponsors">
        <h1 className="sponsors-title">
          Sponsors
          <img src="/images/bearicon.png" alt="arrow-logo" />
        </h1>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/logo.png" alt="Stansberry Research" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://stansberryresearch.com/" target="_blank">
                  {" "}
                  Stansberry Research{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>

        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/wolfram.png" alt="Wolfram Alpha" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://www.wolframalpha.com/" target="_blank">
                  {" "}
                  Wolfram Alpha{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
        <Faqs />
        <Contact />
        <Convener />
        <Coordinators />
      </div>
    </React.Fragment>
  );
};

export default sponsors;
