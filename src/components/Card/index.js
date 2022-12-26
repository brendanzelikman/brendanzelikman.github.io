import { FaFilePdf, FaGithub, FaMusic } from "react-icons/fa";
import "./index.css";

export const Card = ({
  url,
  title,
  subtitle,
  body,
  image,
  githubURL,
  pdfURL,
  musicURL,
}) => (
  <div className="card-container">
    {url ? (
      <a href={url} className="card-image" target="_blank" rel="noreferrer">
        <img src={image} alt={title} />
      </a>
    ) : (
      <img className="card-image" src={image} alt={title} />
    )}
    <div className="card-content">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle">{subtitle}</h6>
      <br />
      <p className="card-body">{body}</p>
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
      {musicURL && (
        <a href={musicURL} target="_blank" rel="noreferrer">
          <FaMusic />
        </a>
      )}
    </div>
  </div>
);
