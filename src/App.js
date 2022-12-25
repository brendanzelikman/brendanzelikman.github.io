import Projects from "./components/Projects";
import Profile from "./components/Profile";
import "./App.css";
import Music from "./components/Music";

function App() {
  return (
    <div className="App">
      <section className="Profile">
        <Profile />
      </section>
      <section className="Projects pb-5">
        <Projects />
      </section>
      <section className="Music pb-5">
        <Music />
      </section>
    </div>
  );
}

export default App;
