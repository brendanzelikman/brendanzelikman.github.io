import MMThumbnail from "assets/projects/mm.jpg";
import TCOMThumbnail from "assets/projects/tcom.jpg";
import TCHMThumbnail from "assets/projects/tchm.jpg";
import { Card } from "components/Card";

const Projects = () => {
  return (
    <>
      <header className="header pt-5 pb-5">
        <h2>Projects</h2>
      </header>
      <div className="container">
        <Card
          title="MusicMaker"
          subtitle="Senior Thesis with Prof. Dmitri Tymoczko"
          body="Currently developing web software for musical composition and improvisation. My own personal DAW."
          image={MMThumbnail}
          url={"https://brendanzelikman.github.io/thesis/"}
          githubURL={"https://github.com/brendanzelikman/thesis"}
        />
        <Card
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
        <Card
          title="Tropical Cyclone Hazard Map"
          subtitle="Real-Time Forecast System for Hurricane Hazard & Risk"
          body="Designed and developed while interning at the High Mountain Environmental Institute."
          image={TCHMThumbnail}
          url={"https://zelikman.mycpanel.princeton.edu"}
        />
      </div>
    </>
  );
};

export default Projects;
