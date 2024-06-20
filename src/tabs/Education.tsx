import {
  Section,
  SectionHeader,
  SectionItem,
  SectionItemList,
} from "components/Section";
import { PRINCETON, THESIS } from "constants";
import { useState } from "react";
import { FaAtom, FaCode, FaMusic } from "react-icons/fa";
import PrincetonShield from "../assets/princeton.png";

export function Education() {
  const [showingCosTeachers, setShowingCosTeachers] = useState(false);
  const [showingMusicTeachers, setShowingMusicTeachers] = useState(false);

  const cosCourses = [
    "COS226 (Algorithms and Data Structures)",
    "COS316 (Principles of Computer System Design)",
    "COS324 (Introduction to Machine Learning)",
    "COS333 (Advanced Programming Techniques)",
    "COS340 (Reasoning About Computation)",
    "COS423 (Theory of Algorithms)",
    "COS426 (Computer Graphics)",
  ];

  const cosTeachers = [
    "Jeremie Lumbroso (Senior Thesis)",
    "Brian Kernighan (Independent Work)",
    "Felix Heide (COS426)",
    "Robert Tarjan (COS423)",
    "Robert Dondero (COS333)",
    "Andrew Appel (COS326)",
    "Kevin Wayne (COS226)",
  ];

  const musCourses = [
    "MUS240 (Musical Modernism)",
    "MUS306 (Understanding Tonality)",
    "MUS310 (Adv. Workshop in Musical Composition)",
    "MUS314 (Computer and Electronic Music)",
    "MUS316 (Computer & Electronic Music Composition)",
    "MUS319 (Composition and Improvisation)",
    "MUS326 (Composing Like Beethoven)",
  ];

  const musTeachers = [
    "Dmitri Tymoczko (Thesis + MUS306/310/319/326)",
    "Margaret Kampemeier (Piano Lessons)",
    "Jeff Snyder (MUS314/316)",
    "Rudresh Manhanthappa (MUS319)",
    "Dan Trueman (MUS204)",
    "Simon Morrison (MUS240)",
    "Juri Seo (MUS105/106)",
  ];

  const cosList = showingCosTeachers ? cosTeachers : cosCourses;
  const CosIcon = showingCosTeachers ? FaAtom : FaCode;
  const musicList = showingMusicTeachers ? musTeachers : musCourses;
  const MusicIcon = showingMusicTeachers ? FaAtom : FaMusic;

  return (
    <Section
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="p-8 bg-gradient-to-t from-slate-950/50 via-slate-950/80 to-orange-700/25"
    >
      <SectionHeader
        title="Princeton University '23"
        titleColor="text-orange-500"
        subtitles={[
          "A.B. Computer Science",
          "Certificate in Music Performance",
        ]}
        image={
          <a href={PRINCETON}>
            <img src={PrincetonShield} className="lg:max-w-16 max-w-12" />
          </a>
        }
      />
      <SectionItemList>
        <SectionItem
          title="(Award-Winning) Senior Thesis"
          caption={
            <a className="text-blue-500 hover:underline" href={THESIS}>
              Harmonia: A Pattern-Based DAW with Structural Harmony
            </a>
          }
          extendCaption
        />
        <SectionItem
          title={
            <div className="size-full flex items-center space-x-1.5">
              <CosIcon
                className="w-4 select-none cursor-pointer hover:text-fuchsia-300"
                onClick={() => setShowingCosTeachers((prev) => !prev)}
              />
              <span className="select-none">
                Computer Science {showingCosTeachers ? "Teachers" : "Courses"}
              </span>
            </div>
          }
          caption={cosList.map((course, i) => (
            <li key={`cos-item-${i}`} className="text-orange-300">
              {course}
            </li>
          ))}
        />
        <SectionItem
          title={
            <div className="size-full flex items-center space-x-1.5">
              <MusicIcon
                className="w-4 select-none cursor-pointer hover:text-fuchsia-300"
                onClick={() => setShowingMusicTeachers((prev) => !prev)}
              />
              <span className="select-none">
                Music {showingMusicTeachers ? "Teachers" : "Courses"}
              </span>
            </div>
          }
          caption={musicList.map((course, i) => (
            <li key={`music-item-${i}`} className="text-violet-300">
              {course}
            </li>
          ))}
        />
      </SectionItemList>
    </Section>
  );
}
