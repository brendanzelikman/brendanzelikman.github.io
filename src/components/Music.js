import { FaFilePdf, FaMusic } from "react-icons/fa";

import CircusThumbnail from "../assets/music/circus.jpg";
import BeethovenThumbnail from "../assets/music/beethoven.jpg";
import JesterThumbnail from "../assets/music/jester.jpg";

import "./Music.css";

const Piece = ({ url, title, subtitle, body, image, pdfURL, musicURL }) => (
  <div className="music-card">
    <a href={url} className="music-image" target="_blank" rel="noreferrer">
      <img src={image} alt={title} />
    </a>
    <div className="music-content">
      <h5 className="music-title">{title}</h5>
      <h6 className="music-subtitle">{subtitle}</h6>
      <br />
      <p className="music-body">{body}</p>
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

const CircusShow = () => (
  <Piece
    title="A Circus Show"
    subtitle="Written for Percussion Quartet"
    body={
      "Performed by So Percussion as part of MUS310: Advanced Workshop in Musical Composition."
    }
    image={CircusThumbnail}
    url={"https://musescore.com/user/33605133/scores/9157980"}
    pdfURL={
      "https://music.princeton.edu/wp-content/uploads/2022/11/MUSIC-DEPT-PDF-Program-MUS-310-Final-Concert-12.12.22_final2.pdf"
    }
    musicURL={"https://musescore.com/user/33605133/scores/9157980"}
  />
);

const BeethovenSonata = () => (
  <Piece
    title="Sonata #2 in G Major"
    subtitle="Written for Solo Piano"
    body="A sonata movement written in the style of Ludwig van Beethoven as part of MUS326: Composing Like Beethoven."
    image={BeethovenThumbnail}
    url={"https://musescore.com/user/33605133/scores/9282517"}
    musicURL={"https://musescore.com/user/33605133/scores/9282517"}
  />
);

const TheJester = () => (
  <Piece
    title="The Jester"
    subtitle="Composed in Ableton"
    body="A spooky study on the 0-1-5 set written as part of MUS319: Composition and Improvisation."
    image={JesterThumbnail}
    url={
      "https://drive.google.com/file/d/1Apa2aIrn25B5GT1bn6-VmX60qpul8Si0/view?usp=sharing"
    }
    musicURL={
      "https://drive.google.com/file/d/1Apa2aIrn25B5GT1bn6-VmX60qpul8Si0/view?usp=sharing"
    }
  />
);

const Music = () => {
  return (
    <>
      <header className="music-header pt-5 pb-5">
        <h2>Music</h2>
      </header>
      <div className="music-container">
        <CircusShow />
        <BeethovenSonata />
        <TheJester />
      </div>
    </>
  );
};

export default Music;
