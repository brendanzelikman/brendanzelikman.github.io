import {
  PRINCETON,
  HMEI,
  BC_MATH,
  CIRCUS,
  SONATA1,
  RACH,
  HARMONIA_TRAILER,
  JESTER,
  BC_ADMISSIONS,
  HARMONIA,
  COLOR_OF_MUSIC,
  HARMONIA_GALLERY,
  INNOVATION_FORUM,
  CCRMA,
  CURTIS,
  HW3,
  HW2,
  TERRACE,
} from "constants";
import { Harmonia } from "hooks/useMediaPreloader";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { BsGithub, BsYoutube } from "react-icons/bs";
import {
  GiTigerHead,
  GiPianoKeys,
  GiLion,
  GiTornado,
  GiClown,
  GiDramaMasks,
  GiBurningPassion,
  GiJesterHat,
  GiClassicalKnowledge,
  GiPineTree,
  GiC96,
  GiMusicSpell,
  GiGuitar,
  GiBanana,
  GiPaintBrush,
  GiBalloons,
} from "react-icons/gi";
import { TbMathIntegrals } from "react-icons/tb";

// ----------------------------
// Portfolio Sections
// ----------------------------

export const SkillsSection = "Favorite Projects";
export const MusicSection = "Favorite Works";
export const EducationSection = "Academic Highlights";
export const ExperienceSection = "Career Experience";

export type PortfolioSection = (typeof PORTFOLIO_SECTIONS)[number];
export const PORTFOLIO_SECTIONS = [
  SkillsSection,
  MusicSection,
  ExperienceSection,
  EducationSection,
] as const;

// ----------------------------
// Badges
// ----------------------------

export type Badge = Partial<{
  title?: ReactNode;
  caption: string | string[];
  color: string;
  shelfColor: string;
  url: string;
  Icon: IconType | React.FC;
}>;

export const SkillsBadges: Badge[] = [
  {
    title: "Harmonia (DAW)",
    caption: "Scientific Musical Calculator",
    color: "text-red-500",
    shelfColor: "border-b-sky-500",
    url: HARMONIA,
    Icon: () => <img src={Harmonia} alt="Harmonia" />,
  },
  {
    title: "Chunky Kong's Tower Defense",
    caption: "An audiovisual sequencer game",
    color: "text-amber-400",
    shelfColor: "border-b-amber-500",
    url: HW3,
    Icon: GiBanana,
  },
  {
    title: "Nostalgia Hero",
    caption: "A visualizer inspired by Guitar Hero",
    color: "text-fuchsia-400",
    shelfColor: "border-b-fuchsia-500",
    url: HW2,
    Icon: GiGuitar,
  },
  {
    title: "Thesis (Gallery)",
    caption: "The evolution of Harmonia's design",
    color: "text-indigo-400",
    shelfColor: "border-b-indigo-500",
    url: HARMONIA_GALLERY,
    Icon: BsGithub,
  },
];

export const EducationBadges: Badge[] = [
  {
    title: "Stanford University",
    caption: "MA/MST @ CCRMA '27",
    color: "text-red-400",
    shelfColor: "border-b-red-400",
    url: CCRMA,
    Icon: GiPineTree,
  },
  {
    caption: [
      "ChucK Kitchen Cabinet (Research Lab)",
      "MUS 256A - Music, Computing, Design: The Art of Design",
      "MUS 220A - Fundamentals of Computer-Generated Sound",
    ],
    color: "text-red-400",
    shelfColor: "border-b-red-400",
    url: CCRMA,
  },
  {
    title: "Princeton University",
    caption: "AB COS '23 (Cum Laude)",
    color: "text-orange-300",
    shelfColor: "border-b-orange-400",
    url: PRINCETON,
    Icon: GiTigerHead,
  },
  {
    caption: [
      "COS 426 - Computer Graphics",
      "COS 423 - Theory of Algorithms",
      "COS 326 - Functional Programming",
      "MUS 326 - Composing Like Beethoven",
      "MUS 306 - Understanding Tonality",
    ],
    color: "text-orange-400",
    shelfColor: "border-b-orange-400",
    url: PRINCETON,
  },
];

export const ExperienceBadges: Badge[] = [
  {
    title: "Admissions Intern",
    caption: "Middle and High School Applications",
    color: "text-rose-400",
    shelfColor: "border-b-rose-500",
    url: BC_ADMISSIONS,
    Icon: GiLion,
  },
  {
    title: "Math Teacher Replacement",
    caption: "Algebera II + Multivariable Calculus",
    color: "text-sky-500",
    shelfColor: "border-b-sky-600",
    url: BC_MATH,
    Icon: TbMathIntegrals,
  },
  {
    title: "Social Chair / Club Officer",
    caption: "Terrace F. Club (Princeton)",
    color: "text-emerald-500",
    shelfColor: "border-b-emerald-500",
    url: TERRACE,
    Icon: GiBalloons,
  },
  {
    title: "Hurricane Risk Summer Intern",
    caption: "High Meadows Environmental Institute",
    color: "text-indigo-300",
    shelfColor: "border-b-indigo-400",
    url: HMEI,
    Icon: GiTornado,
  },
];

export const MusicBadges: Badge[] = [
  {
    title: "'A Circus Show' in B Minor",
    caption: "Composed for So Percussion",
    color: "text-pink-300",
    shelfColor: "border-b-pink-400",
    url: CIRCUS,
    Icon: GiClown,
  },
  {
    title: "Étude-Tableau in Eb Minor",
    caption: "My performance of Rachmaninoff",
    color: "text-teal-300",
    shelfColor: "border-b-teal-400",
    url: RACH,
    Icon: GiBurningPassion,
  },
  {
    title: "'The Jester' in Db Major",
    caption: "A slippery study on musical sets",
    color: "text-fuchsia-300",
    shelfColor: "border-b-fuchsia-400",
    url: JESTER,
    Icon: GiJesterHat,
  },
  {
    title: "'Sonata No. 1' in E Minor",
    caption: "Written in the style of Beethoven",
    color: "text-emerald-300",
    shelfColor: "border-b-emerald-400",
    url: SONATA1,
    Icon: GiDramaMasks,
  },
];

export const PORTFOLIO_BADGES: Record<PortfolioSection, Badge[]> = {
  [SkillsSection]: SkillsBadges,
  [EducationSection]: EducationBadges,
  [ExperienceSection]: ExperienceBadges,
  [MusicSection]: MusicBadges,
};
