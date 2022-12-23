import shield from "./princeton.png";
import "./App.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Projects from "./Projects";

const linkedinURL = "https://www.linkedin.com/in/brendanzelikman/";
const githubURL = "https://www.github.com/brendanzelikman";
const twitterURL = "https://www.twitter.com/brendanzelikman";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <div className="profile-frame">
          {/* <div className="profile-glass"></div> */}
          <div className="profile-picture" />
          <h1 className="profile-name">BRENDAN ZELIKMAN</h1>
          <h5 className="profile-title">Designer • Developer • Musician</h5>
          <div className="profile-links">
            <a href={linkedinURL} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href={githubURL} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href={twitterURL} target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </div>
          <div className="profile-credit">
            <a
              href="https://www.princeton.edu"
              target="_blank"
              rel="noreferrer"
            >
              <img src={shield} alt="Princeton" className="profile-shield" />
            </a>{" "}
            Princeton '23 • A.B. Computer Science • Certificate in Music
            Composition
          </div>
        </div>
      </header>

      <h2 id="Projects">Projects</h2>

      <Projects />
    </div>
  );
}

export default App;
