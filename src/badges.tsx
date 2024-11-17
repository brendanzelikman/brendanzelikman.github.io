import {
  PRINCETON,
  PRINCETON_CS,
  PRINCETON_MUSIC,
  BC,
  TERRACE,
  HMEI,
  HARMONIA,
  BC_MATH,
  CIRCUS,
  SONATA1,
  RACH,
  GITHUB,
  PRINCETON_THESIS,
} from "constants";
import { BCShield, Harmonia } from "hooks/useImagePreloader";
import { IconType } from "react-icons";
import { BsGithub } from "react-icons/bs";
import {
  GiTigerHead,
  GiRobotGolem,
  GiPianoKeys,
  GiLion,
  GiPartyHat,
  GiTornado,
  GiClown,
  GiDramaMasks,
  GiBurningPassion,
} from "react-icons/gi";

// ----------------------------
// Portfolio Sections
// ----------------------------

export const SkillsSection = "Exceptional Skills";
export const EducationSection = "College Education";
export const ExperienceSection = "Work Experience";
export const MusicSection = "Music Showcase";

export type PortfolioSection = (typeof PORTFOLIO_SECTIONS)[number];
export const PORTFOLIO_SECTIONS = [
  SkillsSection,
  EducationSection,
  ExperienceSection,
  MusicSection,
] as const;

// ----------------------------
// Badges
// ----------------------------

export type Badge = Partial<{
  title: string;
  caption: string;
  color: string;
  url: string;
  Icon: IconType | React.FC;
}>;

export const SkillsBadges: Badge[] = [
  {
    title: "Web Development",
    caption: "Typescript, React, Redux",
    color: "text-indigo-300",
    url: GITHUB,
    Icon: BsGithub,
  },
  {
    title: "Music Technology",
    caption: "Scorewriters, DAWs, Plugins",
    color: "text-red-500",
    url: PRINCETON_THESIS,
    Icon: () => <img src={Harmonia} alt="Harmonia" />,
  },
  {
    title: "Math Education",
    caption: "Teaching, Tutoring, Grading",
    color: "text-rose-200",
    url: BC_MATH,
    Icon: () => <img src={BCShield} alt="BC Shield" />,
  },
];

export const EducationBadges: Badge[] = [
  {
    title: "Princeton University",
    caption: "Great Class of 2023",
    color: "text-orange-300",
    url: PRINCETON,
    Icon: GiTigerHead,
  },
  {
    title: "A.B. Computer Science",
    caption: "Cum Laude + Thesis Award",
    color: "text-purple-300",
    url: PRINCETON_CS,
    Icon: GiRobotGolem,
  },
  {
    title: "Minor in Music Performance",
    caption: "Certificate in Composition",
    color: "text-sky-300",
    url: PRINCETON_MUSIC,
    Icon: GiPianoKeys,
  },
];

export const ExperienceBadges: Badge[] = [
  {
    title: "Berkeley Carroll",
    caption: "High School Math Teacher",

    color: "text-red-400",
    url: BC,
    Icon: GiLion,
  },
  {
    title: "Terrace F. Club",
    caption: "Club Officer + Social Chair",

    color: "text-emerald-300",
    url: TERRACE,
    Icon: GiPartyHat,
  },
  {
    title: "Princeton University",
    caption: "Hurricane Risk Analysis Intern",
    color: "text-indigo-300",
    url: HMEI,
    Icon: GiTornado,
  },
];

export const MusicBadges: Badge[] = [
  {
    title: "'A Circus Show'",
    caption: "Performed by So Percussion",
    color: "text-pink-300",
    url: CIRCUS,
    Icon: GiClown,
  },
  {
    title: "'Sonata No. 1 in E Minor'",
    caption: "In the style of Beethoven",
    color: "text-teal-200",
    url: SONATA1,
    Icon: GiDramaMasks,
  },
  {
    title: "Op. 39, No. 5 (Rachmaninoff)",
    caption: "Recorded for Princeton Music Outreach",
    color: "text-red-300",
    url: RACH,
    Icon: GiBurningPassion,
  },
];

export const PORTFOLIO_BADGES: Record<PortfolioSection, Badge[]> = {
  [SkillsSection]: SkillsBadges,
  [EducationSection]: EducationBadges,
  [ExperienceSection]: ExperienceBadges,
  [MusicSection]: MusicBadges,
};
