import React, { useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./faqs.css";
import ReactGA from "react-ga";

const faqs = () => {
  const handleArrow = (element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "FAQs",
    });
    const elementVisible = element.currentTarget.querySelector(
      ".faqs-content-description"
    );
    const arrow = element.currentTarget.querySelector(".faqs-arrow");

    elementVisible.classList.toggle("faq-visible");
    arrow.classList.toggle("arrow-transform");
  };

  const styles = {
    container: {
      position: "relative",
      zIndex: "-1",
      fontSize: "2.5vw",
      transition: "all 0.3s linear",
      cursor: "pointer",
    },
  };

  if (window.innerWidth <= 768) {
    styles.container = {
      ...styles.container,
      fontSize: "5vw",
    };
  }

  return (
    <React.Fragment>
      <div id="faqs" className="parent-faqs">
        <h1 className="faqs-title">
          <img src="images/bearicon.png" alt="arrow-logo" />
          FAQs
        </h1>

        <div className="faqs-section">
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is a hackathon?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              A hackathon is a computer science competition
              where competitors team up to create and pitch a 
              programming solution to a panel of judges in order
              to win prizes. The solution is related to a theme
              and in this case, the theme is finance. 
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is "Hack The Colosseum?"
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Hack The Colosseum is a Hackathon organized by
              the Glenelg Competitive Programming Team, taking
              inspiration from our school mascot, the Gladiators. 
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Who can participate?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Everyone in high school or below is welcome! No
              programming experience is needed, we have tons of
              beginner-friendly events and workshops that teach
              basic programming. Furthermore, if you need a 
              computer, just fill out the google form and we will
              provide you with one for free use during the event. 
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Is there a registration fee
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Nope! It's completely free. 
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Is the hackathon online or in-person?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              We have online and in-person options with a different
              prize pool for each.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is the team size to participate?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Teams can have anywhere from 1-3 people!
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What food and drink options will be available?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Lunch and dinner will be provided in the form 
              of pizza! We will also provide water as well as
              various juices and soft drinks. 
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What prizes do the winning teams receive?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              We have $10k+ in prizes between our online
              and in-person tracks!
            </p>

            <table>
              <tr>
                <th>Name</th>
                <th>Cost</th>
              </tr>
              <tr>
                <th>Gaming Keyboard (x3) [in-person, 1st]</th>
                <th>$78</th>
              </tr>
              <tr>
                <th>Raspberry Pi (x3) [in-person, 2rd]</th>
                <th>$105</th>
              </tr>
              <tr>
                <th>Wireless Earbuds (x3) [in-person, 3rd]</th>
                <th>$48</th>
              </tr>
              <tr>
                <th>$25 Apple Gift Card (x3) [virtual]</th>
                <th>$75</th>
              </tr>
              <tr>
                <th>$5 Apple Gift Card (x3) [activities award]</th>
                <th>$15</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default faqs;
