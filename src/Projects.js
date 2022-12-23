import { FaGithub } from "react-icons/fa";
import "./Projects.css";
import thesis from "./thesis.jpg";
import tcom from "./tcom.jpg";
import tchm from "./tchm.jpg";

const Projects = () => {
  const Project = ({ url, title, subtitle, body, image, githubURL }) => (
    <div className="project-card">
      <a href={url} className="project-image" target="_blank" rel="noreferrer">
        <img src={image} alt={title} />
      </a>
      <div className="project-content">
        <h5 className="project-title">{title}</h5>
        <h6 className="project-subtitle">{subtitle}</h6>
        <br />
        <p className="project-body">{body}</p>
        {githubURL && (
          <a href={githubURL} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        )}
      </div>
    </div>
  );

  const thesisURL = "https://brendanzelikman.github.io/thesis/";
  const thesisGithubURL = "https://github.com/brendanzelikman/thesis";
  const Thesis = () => (
    <Project
      url={thesisURL}
      title="MusicMaker"
      subtitle="Senior Thesis with Prof. Dmitri Tymoczko"
      body="Currently developing web software for musical composition and improvisation. My own personal DAW."
      image={thesis}
      githubURL={thesisGithubURL}
    />
  );

  const tcomURL = "https://brendanzelikman.github.io/the-color-of-music/";
  const tcomGithubURL = "https://github.com/brendanzelikman/the-color-of-music";
  const TCOM = () => (
    <Project
      url={tcomURL}
      title="The Color of Music"
      subtitle="COS426 Final Project with Tan Vu"
      body="A chromesthetic music visualizer with an interactive piano keyboard. Lots of colors."
      image={tcom}
      githubURL={tcomGithubURL}
    />
  );

  const tchmURL = "https://zelikman.mycpanel.princeton.edu";
  const TCHM = () => (
    <Project
      url={tchmURL}
      title="Tropical Cyclone Hazard Map"
      subtitle="Real-Time Forecast System for Hurricane Hazard & Risk"
      body="Designed and developed while interning at the High Mountain Environmental Institute."
      image={tchm}
    />
  );

  return (
    <div className="projects-container">
      <Thesis />
      <TCOM />
      <TCHM />
    </div>
  );
};

export default Projects;
