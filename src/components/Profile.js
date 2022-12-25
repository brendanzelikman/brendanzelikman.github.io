import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import PrincetonShield from "../assets/profile/princeton.png";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-frame">
      {/* <div className="profile-glass"></div> */}
      <div className="profile-picture" />
      <h1 className="profile-name">BRENDAN ZELIKMAN</h1>
      <h5 className="profile-title">Designer • Developer • Musician</h5>
      <div className="profile-links">
        <a
          href={"https://www.linkedin.com/in/brendanzelikman/"}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href={"https://www.github.com/brendanzelikman"}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href={"https://www.twitter.com/brendanzelikman"}
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
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
