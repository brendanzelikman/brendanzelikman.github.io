import { FaFilePdf, FaGithub } from "react-icons/fa";
import "./Projects.css";
import MMThumbnail from "../assets/projects/mm.jpg";
import TCOMThumbnail from "../assets/projects/tcom.jpg";
import TCHMThumbnail from "../assets/projects/tchm.jpg";

const Project = ({ url, title, subtitle, body, image, githubURL, pdfURL }) => (
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
      {pdfURL && (
        <a href={pdfURL} target="_blank" rel="noreferrer">
          <FaFilePdf />
        </a>
      )}
    </div>
  </div>
);

const MusicMaker = () => (
  <Project
    title="MusicMaker"
    subtitle="Senior Thesis with Prof. Dmitri Tymoczko"
    body="Currently developing web software for musical composition and improvisation. My own personal DAW."
    image={MMThumbnail}
    url={"https://brendanzelikman.github.io/thesis/"}
    githubURL={"https://github.com/brendanzelikman/thesis"}
  />
);

const TheColorOfMusic = () => (
  <Project
    title="The Color of Music"
    subtitle="COS426 Final Project with Tan Vu"
    body="A chromesthetic music visualizer with an interactive piano keyboard. Lots of colors."
    image={TCOMThumbnail}
    url={"https://brendanzelikman.github.io/the-color-of-music/"}
    githubURL={"https://github.com/brendanzelikman/the-color-of-music"}
    pdfURL={
      "https://github.com/brendanzelikman/the-color-of-music/blob/master/writeup.pdf"
    }
  />
);

const TropicalCycloneHazardMap = () => (
  <Project
    title="Tropical Cyclone Hazard Map"
    subtitle="Real-Time Forecast System for Hurricane Hazard & Risk"
    body="Designed and developed while interning at the High Mountain Environmental Institute."
    image={TCHMThumbnail}
    url={"https://zelikman.mycpanel.princeton.edu"}
  />
);

const Projects = () => {
  return (
    <>
      <header className="projects-header pt-5 pb-5">
        <h2>Projects</h2>
      </header>
      <div className="projects-container">
        <MusicMaker />
        <TheColorOfMusic />
        <TropicalCycloneHazardMap />
      </div>
    </>
  );
};

export default Projects;
