import {
  PRINCETON,
  PRINCETON_CS,
  PRINCETON_MUSIC,
  BC,
  TERRACE,
  HMEI,
  BC_MATH,
  CIRCUS,
  SONATA1,
  RACH,
  GITHUB,
  PRINCETON_THESIS,
  HARMONIA_TRAILER,
  JESTER,
  PRINCETON_CONCERTS,
  BC_ADMISSIONS,
} from "constants";
import { Harmonia } from "hooks/useMediaPreloader";
import { IconType } from "react-icons";
import { BsGithub, BsYoutube } from "react-icons/bs";
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
  GiTeacher,
  GiMusicalNotes,
  GiJesterHat,
} from "react-icons/gi";
import { TbMathIntegrals } from "react-icons/tb";

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
    title: "Music Technology",
    caption: "Scorewriters, DAWs, Plugins",
    color: "text-red-500",
    url: PRINCETON_THESIS,
    Icon: () => <img src={Harmonia} alt="Harmonia" />,
  },
  {
    title: "Web Development",
    caption: "Typescript, React, Redux",
    color: "text-indigo-300",
    url: GITHUB,
    Icon: BsGithub,
  },
  {
    title: "Multimedia Production",
    caption: "Editing, Arranging, Mixing",
    color: "text-rose-400",
    url: HARMONIA_TRAILER,
    Icon: BsYoutube,
  },
  {
    title: "Math Education",
    caption: "Teaching, Tutoring, Planning",
    color: "text-rose-200",
    url: BC,
    Icon: TbMathIntegrals,
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
    color: "text-blue-300",
    url: PRINCETON_CS,
    Icon: GiRobotGolem,
  },
  {
    title: "Minor in Music Performance",
    caption: "Certificate in Composition",
    color: "text-fuchsia-200",
    url: PRINCETON_MUSIC,
    Icon: GiPianoKeys,
  },
  {
    title: "Terrace F. Club",
    caption: "Club Officer + Social Chair",
    color: "text-emerald-300",
    url: TERRACE,
    Icon: GiPartyHat,
  },
];

export const ExperienceBadges: Badge[] = [
  {
    title: "Berkeley Carroll School",
    caption: "US/MS Admissions Intern",
    color: "text-red-400",
    url: BC_ADMISSIONS,
    Icon: GiLion,
  },
  {
    title: "High Meadows Institute",
    caption: "Hurricane Risk Analysis Intern",
    color: "text-indigo-300",
    url: HMEI,
    Icon: GiTornado,
  },
  {
    title: "Berkeley Carroll School",
    caption: "Math Teacher Leave Replacement",
    color: "text-emerald-300",
    url: BC_MATH,
    Icon: GiTeacher,
  },

  {
    title: "Princeton University Concerts",
    caption: "Outreach + Postering Intern",
    color: "text-purple-300",
    url: PRINCETON_CONCERTS,
    Icon: GiMusicalNotes,
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
    title: "'Sonata No. 1' in E Minor",
    caption: "Written in the style of Beethoven",
    color: "text-teal-300",
    url: SONATA1,
    Icon: GiDramaMasks,
  },
  {
    title: "'The Jester' in Db Major",
    caption: "A study on the (015) set class",
    color: "text-fuchsia-300",
    url: JESTER,
    Icon: GiJesterHat,
  },
  {
    title: "Étude-Tableau in Eb Minor",
    caption: "My own performance of Rachmaninoff",
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
