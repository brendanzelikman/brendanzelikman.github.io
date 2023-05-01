import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import "./index.css";

import PrincetonShield from "assets/profile/princeton.png";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className={`profile-picture`} />
      <h1 className="profile-name">BRENDAN ZELIKMAN</h1>
      <h5 className="profile-title">Programmer • Musician • Designer</h5>
      <div className="profile-links">
        <OverlayTrigger overlay={<Tooltip>LinkedIn</Tooltip>}>
          <a
            href={"https://www.linkedin.com/in/brendanzelikman/"}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip>GitHub</Tooltip>}>
          <a
            href={"https://www.github.com/brendanzelikman"}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip>Resume</Tooltip>}>
          <a
            href={
              "https://drive.google.com/file/d/1yJ3DzIqNeXTk96L3_4thAwo4aAUu7aOU/view?usp=sharing"
            }
            target="_blank"
            rel="noreferrer"
          >
            <FaFilePdf />
          </a>
        </OverlayTrigger>
      </div>
      <div className="profile-credit">
        <a href="https://www.princeton.edu" target="_blank" rel="noreferrer">
          <img
            src={PrincetonShield}
            alt="Princeton"
            className="profile-shield"
          />
        </a>{" "}
        Princeton '23 • A.B. Computer Science • Certificate in Music Composition
      </div>
    </div>
  );
};

export default Profile;
