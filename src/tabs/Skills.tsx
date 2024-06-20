import {
  Section,
  SectionHeader,
  SectionItem,
  SectionItemList,
} from "components/Section";

export function Skills() {
  const currentYear = new Date().getFullYear();
  return (
    <Section
      initial={{ opacity: 0, translateX: 50, translateY: 100 }}
      whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
      viewport={{ once: true }}
      className="lg:p-8 p-4 lg:pr-0 pr-2 bg-gradient-to-t from-slate-950/50 via-slate-950/80 to-indigo-400/25"
    >
      <SectionHeader
        title="Technical Skills"
        titleColor="text-indigo-300"
        subtitles={[
          `Building on ${currentYear - 2006} years of music + ${
            currentYear - 2013
          } years of coding...`,
        ]}
      />
      <SectionItemList>
        <SectionItem
          title="Music Knowledge"
          caption="Romantic Piano Repertoire, Western Music Theory, Academic Composition, Audio Processing"
          captionColor="text-emerald-300"
        />
        <SectionItem
          title="Music Software"
          caption="Harmonia, Ableton, FL Studio, Reaper, MuseScore, Sibelius, Max/MSP, ChucK, JUCE, Audacity, bitKlavier"
          captionColor="text-sky-300"
        />
        <SectionItem
          title="Frontend Skills"
          caption="HTML, CSS, JavaScript, TypeScript, React, Redux, Tailwind, Vite, Electron, Framer, Tone.js, Three.js"
          captionColor="text-violet-300"
        />
        <SectionItem
          title="Backend Skills"
          caption="Python, Go, Java, C, C++, C#, ARMv8, OCaml, Swift, SQL, Jupyter, NumPy, SciKit, Flask, Django"
          captionColor="text-neutral-300"
        />
        <SectionItem
          title="General Skills"
          caption="Node, Git, GitHub, Figma, Firebase, Heroku, Stripe, XCode, Google Cloud, Microsoft Office, AWS"
          captionColor="text-red-300"
        />
      </SectionItemList>
    </Section>
  );
}
