import portrait from "assets/about/portrait.jpg";
import dogs from "assets/about/dogs.jpg";
import { Card } from "components/Card";

const About = () => {
  return (
    <>
      <header className="header pt-5 pb-5">
        <h2>About Me</h2>
      </header>
      <section className="container">
        <Card
          title="Brendan Zelikman"
          subtitle="Senior at Princeton University"
          body="I'm a computer scientist with 5 years of experience in software engineering and UI/UX design. I'm also a classically trained pianist who loves to talk about music."
          image={portrait}
        />
        <Card
          title="My Dogs"
          subtitle="Chloe, Uma, Ora, and Bear (not pictured)"
          body="+10 points for cuteness"
          image={dogs}
        />
      </section>
    </>
  );
};

export default About;
