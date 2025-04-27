import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Machine Learning Development Engineer</b> at{" "}
        <a href="https://www.sickkidsfoundation.com/">SickKids</a>, working in the Research
        and Development team. I recently graduated with a <b>Master of Applied Science</b> in{" "}
        <b>Computer Engineering</b> at <b>York University</b>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm passionate about rock climbing (most common thing among programmers :D), 
        where I find both physical challenge and mental focus. I also express my creativity through painting and drawing, 
        exploring different techniques and styles. 
      </p>
    );

    const tech_stack = [
      "Python",
      "PyTorch",
      "Lightning",
      "TensorFlow",
      "C++",
      "Azure",
      "Docker",
      "Scikit-learn",
      "OpenCV",
      "Three.js",
      "Git",
      "HPC Clusters",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Zari H." src={"/assets/zari_prof.jpeg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
