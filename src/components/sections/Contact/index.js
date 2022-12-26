import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./index.css";

const Contact = () => {
  return (
    <>
      <header className="header pt-5 pb-5">
        <h2>Contact Info</h2>
      </header>
      <section className="container">
        <div className="contact-icons">
          <OverlayTrigger overlay={<Tooltip>Email</Tooltip>}>
            <a
              href="mailto:brendanzelikman@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
          </OverlayTrigger>
          <OverlayTrigger overlay={<Tooltip>LinkedIn</Tooltip>}>
            <a
              href="https://linkedin.com/in/brendanzelikman"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </OverlayTrigger>

          <OverlayTrigger overlay={<Tooltip>Facebook</Tooltip>}>
            <a
              href="https://facebook.com/brendan.zelikman"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </OverlayTrigger>

          <OverlayTrigger overlay={<Tooltip>Twitter</Tooltip>}>
            <a
              href="https://twitter.com/BrendanZelikman"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </OverlayTrigger>
        </div>
        <h4 className="pt-5 mt-4">That's all... thanks for scrolling!</h4>
        <p className="contact-credit">
          Background Credit:{" "}
          <a
            href="https://wallpaperaccess.com/8-bit-gif"
            style={{ color: "lightgray" }}
          >
            wallpaperaccess.com
          </a>
        </p>
      </section>
    </>
  );
};

export default Contact;
