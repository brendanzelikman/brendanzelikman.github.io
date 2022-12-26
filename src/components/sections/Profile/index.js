import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import "./index.css";

import PrincetonShield from "assets/profile/princeton.png";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useState } from "react";

const Profile = () => {
  const [spinning, setSpinning] = useState(false);

  return (
    <div className="profile-container">
      <div
        className={`profile-picture ${spinning ? "spin" : ""}`}
        onClick={() => setSpinning((val) => !val)}
        onAnimationEnd={() => setSpinning(false)}
      />
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
              "https://drive.google.com/file/d/15ALKQXWqhoScmfz9cgsyacx_tZGcqhBl/view?usp=sharing"
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
