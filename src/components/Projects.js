import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Modeling of the Eye contact": {
        title: "Eye contact Modeling with diffusion models",
        desc:
          "My master thesis project, which resulted in few sub projects",
        techStack: "Python, PyTorch, Diffusion Models",
        // link: "https://github.com/slakh96/no-mans-land",
        open: "https://hdl.handle.net/10315/42858",
        image: "/assets/setup_mahsa_majid.png"
      }
      // Truth: {
      //   title: "truth",
      //   desc:
      //     "A three.js simulation of the planet system revolving around a monolith.",
      //   techStack: "JAVASCRIPT (THREE.JS)",
      //   link: "https://github.com/gazijarin/truth",
      //   open: "https://gazijarin.github.io/Truth/",
      //   image: "/assets/truth.png"
      // },
      // "Tall Tales": {
      //   title: "tall tales",
      //   desc:
      //     "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
      //   techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
      //   link: "https://github.com/gazijarin/TallTales",
      //   open: "https://talltales.herokuapp.com/",
      //   image: "/assets/talltales.png"
      // },
      // Portfolio: {
      //   title: "portfolio.js",
      //   desc:
      //     "A small JS library that helps with clear and succinct data presentation.",
      //   techStack: "NODE.JS (EXPRESS.JS)",
      //   link: "https://github.com/gazijarin/Portfolio.js",
      //   open: "https://afternoon-ocean-92382.herokuapp.com/",
      //   image: "/assets/portfolio.png"
      // }
    };
    const projects = {
      "Unity-Based Eye Contact Visualizer": {
        desc:
          "Developed a Unity application to animate generated gaze and head movements on Ready Player Me avatars. Integrated motion capture and eye-tracking outputs into the game engine, enabling realistic simulations of saccades, fixations, and coordinated head turns in conversational settings.",
        techStack: "Unity, Ready Player Me, C#, three.js, PyTorch-Lightning",
        link: "https://drive.google.com/drive/folders/13JNNtsH6KZLCUk6d4eE-RHAlMRJBHlLV?usp=share_link&pli=1",
        open: null
      },
      "Lookalike Modeling for Fashion Personalization": {
        desc:
          "Built a retrieval system using the MMFashion dataset, modeling user preferences using outfit features. Trained a contrastive encoder to align user preference vectors with clothing image features; used FAISS for scalable nearest-neighbor search to identify visually and semantically similar user profiles.",
        techStack: "Python, PyTorch",
        link: "https://github.com/open-mmlab/mmfashion",
        open: null
      },
      "LLM-Powered Analysis of Corporate Diversity Disclosures": {
        desc:
          "Developed an LLM pipeline for legal and compliance document processing to extract insights from diversity disclosures. Implemented RAG to automate extraction from long documents, reducing expert review time by over 50%. Engineered prompt chains with custom memory for variable structures and applied document chunking and embedding-based retrieval for scalable processing of 100+ page PDFs.",
        techStack: "Python, LangChain, OpenAI, RAG",
        link: null,
        open: null
      },
      "Backend Web Development Projects - Swan": {
        desc:
          "Developed a backend integrating social media APIs and MTA servers for automated campaigns.",
        techStack: "Python, Django, REST",
        link: "https://github.com/Anatidaephobia-SE",
        open: null
      },
      "Backend Web Development Projects - GoardBame": {
        desc:
          "Built a backend platform to list board games and cafés, enabling gamers and cafés to connect.",
        techStack: "Python, Django, REST",
        link: "https://github.com/zhsn99/BoardGame-Backend",
        open: null
      }
    };
    
    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
