import Nav from "components/Nav";
import {
  About,
  Projects,
  Profile,
  Compositions,
  Contact,
} from "components/sections";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import { useViewRef } from "hooks/useViewRef";

import "./App.css";

function App() {
  const [profileView, profileRef] = useViewRef();
  const [aboutView, aboutRef] = useViewRef();
  const [projectsView, projectsRef] = useViewRef();
  const [compositionsView, compositionsRef] = useViewRef();
  const [contactView, contactRef] = useViewRef();

  const store = {
    ids: ["profile", "about", "projects", "compositions", "contact"],
    views: [
      profileView,
      aboutView,
      projectsView,
      compositionsView,
      contactView,
    ],
  };

  useIntersectionObserver(store.views);

  return (
    <>
      <header>
        <Nav {...store} />
      </header>
      <main>
        <section id="profile" ref={profileRef}>
          <Profile />
        </section>
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section id="projects" className="pb-5" ref={projectsRef}>
          <Projects />
        </section>
        <section id="compositions" className="pb-5" ref={compositionsRef}>
          <Compositions />
        </section>
        <section id="contact" className="pb-5" ref={contactRef}>
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
