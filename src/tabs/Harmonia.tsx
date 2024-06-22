import {
  Section,
  SectionHeader,
  SectionItemList,
  SectionText,
} from "components/Section";
import { HARMONIA } from "constants";

export function Harmonia() {
  return (
    <Section
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      className="lg:p-8 p-4 bg-gradient-to-t from-indigo-900/80 via-indigo-800/50 to-sky-950/50"
    >
      <SectionHeader
        title={
          <a href={HARMONIA} className="hover:underline text-sky-400">
            Harmonia: My Magnum Opus
          </a>
        }
        titleColor="text-sky-400"
        subtitles={["Created under the mentorship of Dmitri Tymoczko"]}
      />
      <SectionItemList>
        <SectionText>
          Harmonia is the culmination of my life's work in music and computer
          science. It took an uncountable number of hours to design the engine,
          structure the interface, and implement the website, but I am
          incredibly proud of what I've created.
        </SectionText>
        <SectionText>
          My dream is to see Harmonia evolve into a movement greater than
          myself, one that can unlock the potential of transposition and set a
          new standard for music software. If you want to help bring this dream
          to life, please reach out!
        </SectionText>
      </SectionItemList>
      <HarmoniaTrailer />
    </Section>
  );
}

// Embedded from Google Drive
function HarmoniaTrailer() {
  return (
    <span className="flex flex-col mt-8">
      <iframe
        className="ring-4 ring-indigo-500/50 rounded"
        src="https://drive.google.com/file/d/1eW3ZmS7pwiO34LP2QU8A31MZ5KcveuDL/preview"
        height="250"
      />
    </span>
  );
}
