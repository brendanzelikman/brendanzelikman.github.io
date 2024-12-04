import {
  PRINCETON,
  PRINCETON_CS,
  PRINCETON_MUSIC,
  TERRACE,
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
} from "constants";
import { Harmonia } from "hooks/useMediaPreloader";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { BsCodeSlash, BsGithub, BsYoutube } from "react-icons/bs";
import {
  GiTigerHead,
  GiPianoKeys,
  GiLion,
  GiPartyHat,
  GiTornado,
  GiClown,
  GiDramaMasks,
  GiBurningPassion,
  GiMusicalNotes,
  GiJesterHat,
  GiClassicalKnowledge,
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
  title: ReactNode;
  caption: string;
  color: string;
  url: string;
  Icon: IconType | React.FC;
}>;

export const SkillsBadges: Badge[] = [
  {
    title: "Harmonia (DAW)",
    caption: "Illuminate the Geometry of Music!",
    color: "text-red-500",
    url: HARMONIA,
    Icon: () => <img src={Harmonia} alt="Harmonia" />,
  },
  {
    title: "Introducing... (Trailer)",
    caption: "A cinematic preview of Harmonia",
    color: "text-rose-400",
    url: HARMONIA_TRAILER,
    Icon: BsYoutube,
  },
  {
    title: "Thesis (Gallery)",
    caption: "The evolution of my web design",
    color: "text-indigo-400",
    url: HARMONIA_GALLERY,
    Icon: BsGithub,
  },
  {
    title: "The Color of Music (Tool)",
    caption: "Play the piano, with colors!",
    color: "text-rose-300",
    url: COLOR_OF_MUSIC,
    Icon: GiPianoKeys,
  },
];

export const EducationBadges: Badge[] = [
  {
    title: "Princeton University",
    caption: "The Great Class of 2023",
    color: "text-orange-300",
    url: PRINCETON,
    Icon: GiTigerHead,
  },
  {
    title: "A.B. Computer Science",
    caption: "Cum Laude + Thesis Prize",
    color: "text-teal-300",
    url: PRINCETON_CS,
    Icon: BsCodeSlash,
  },
  {
    title: "Certificate in Music",
    caption: "Music Theory + Composition",
    color: "text-fuchsia-300",
    url: PRINCETON_MUSIC,
    Icon: GiMusicalNotes,
  },
  {
    title: "Terrace F. Club",
    caption: "Club Officer / Social Chair",
    color: "text-emerald-300",
    url: TERRACE,
    Icon: GiPartyHat,
  },
];

export const ExperienceBadges: Badge[] = [
  {
    title: "Math Teacher Replacement",
    caption: "Algebera II + Multivariable Calculus",
    color: "text-sky-500",
    url: BC_MATH,
    Icon: TbMathIntegrals,
  },
  {
    title: "Admissions Internship",
    caption: "Berkeley Carroll School",
    color: "text-rose-400",
    url: BC_ADMISSIONS,
    Icon: GiLion,
  },
  {
    title: "Hurricane Risk Analysis",
    caption: "High Meadows Environmental Institute",
    color: "text-indigo-400",
    url: HMEI,
    Icon: GiTornado,
  },
  {
    title: "Research Exhibition",
    caption: "Princeton Innovation Forum",
    color: "text-rose-300",
    url: INNOVATION_FORUM,
    Icon: GiClassicalKnowledge,
  },
];

export const MusicBadges: Badge[] = [
  {
    title: "'A Circus Show' in B Minor",
    caption: "Composed for So Percussion",
    color: "text-pink-300",
    url: CIRCUS,
    Icon: GiClown,
  },
  {
    title: "Étude-Tableau in Eb Minor",
    caption: "My performance of Rachmaninoff",
    color: "text-teal-300",
    url: RACH,
    Icon: GiBurningPassion,
  },
  {
    title: "'The Jester' in Db Major",
    caption: "A slippery study on musical sets",
    color: "text-fuchsia-300",
    url: JESTER,
    Icon: GiJesterHat,
  },
  {
    title: "'Sonata No. 1' in E Minor",
    caption: "Written in the style of Beethoven",
    color: "text-emerald-300",
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
