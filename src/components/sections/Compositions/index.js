import CircusThumbnail from "assets/compositions/circus.jpg";
import BeethovenThumbnail from "assets/compositions/beethoven.jpg";
import JesterThumbnail from "assets/compositions/jester.jpg";
import { Card } from "components/Card";

const Compositions = () => {
  return (
    <>
      <header className="header pt-5 pb-5">
        <h2>Compositions</h2>
      </header>
      <section className="container">
        <Card
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
        <Card
          title="Sonata #2 in G Major"
          subtitle="Written for Solo Piano"
          body="A sonata movement written in the style of Ludwig van Beethoven as part of MUS326: Composing Like Beethoven."
          image={BeethovenThumbnail}
          url={"https://musescore.com/user/33605133/scores/9282517"}
          musicURL={"https://musescore.com/user/33605133/scores/9282517"}
        />
        <Card
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
      </section>
    </>
  );
};

export default Compositions;
