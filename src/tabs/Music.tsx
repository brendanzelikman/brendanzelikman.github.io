import {
  Section,
  SectionHeader,
  SectionItem,
  SectionItemList,
} from "components/Section";
import { CIRCUS, JESTER, PHRYGIAN, RACH, SONATA1 } from "constants";
import { FaMusic } from "react-icons/fa";

export function Music() {
  return (
    <Section
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      className="lg:p-8 p-4 lg:pr-0 pr-0 bg-gradient-to-t from-slate-950/50 via-slate-950/80 to-cyan-400/25"
    >
      <SectionHeader
        title="Music Portfolio"
        titleColor="text-sky-300"
        subtitles={["My favorite music I've composed and performed..."]}
      />
      <SectionItemList>
        <SectionItem
          title={
            <a href={CIRCUS} className="flex items-center hover:underline">
              <FaMusic className="mr-3" /> "A Circus Show" for Percussion
              Quartet
            </a>
          }
          caption="A suite of fifteen movements that showcase the bizarre and the unusual, debuted by So Percussion for MUS310."
          captionColor="text-fuchsia-300"
        />
        <SectionItem
          title={
            <a href={SONATA1} className="flex items-center hover:underline">
              <FaMusic className="mr-3" /> "Beethovenian" Sonata No. 1 in E
              Minor
            </a>
          }
          caption="The first of two sonatas created in the style of Beethoven for MUS326, with a focus on angst and tragedy."
          captionColor="text-emerald-300"
        />
        <SectionItem
          title={
            <a href={JESTER} className="flex items-center hover:underline">
              <FaMusic className="mr-3" /> "The Jester" Standard for Jazz
              Ensemble
            </a>
          }
          caption="An angular and spooky jazz study for MUS310 based on the 0-1-5 set and its transformations."
          captionColor="text-purple-300"
        />
        <SectionItem
          title={
            <a href={PHRYGIAN} className="flex items-center hover:underline">
              <FaMusic className="mr-3" /> "Sospiro's Moonlight" Etude in C
              Phrygian
            </a>
          }
          caption="An original etude in C Phrygian written for MUS106 that explores the three-hand piano technique of 'Un Sospiro.'"
          captionColor="text-indigo-200"
        />
        <SectionItem
          title={
            <a href={RACH} className="flex items-center hover:underline">
              <FaMusic className="mr-3" /> Etude-Tableau, Op. 39 No. 5
              (Rachmaninoff)
            </a>
          }
          caption="My performance of one of Rachmaninoff's most challenging etudes, recorded for Princeton Music Outreach."
          captionColor="text-cyan-300"
        />
      </SectionItemList>
    </Section>
  );
}
