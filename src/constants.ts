// Website Tabs
export const TABS = [
  "Title",
  "College Education",
  "Work Experience",
  "Technical Skills",
  "Music Portfolio",
  "Magnum Opus",
] as const;
export type Tab = (typeof TABS)[number];
export const TAB_COUNT = TABS.length;

export const SHORT_TABS = [
  "Title",
  "Education",
  "Experience",
  "Skills",
  "Music",
  "Harmonia",
] as const;

// URLs
export const EMAIL = "mailto:brendanzelikman@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/brendanzelikman/";
export const GITHUB = "https://www.github.com/brendanzelikman";
export const PRINCETON = "https://www.princeton.edu";
export const DMITRI = "https://dmitri.mycpanel.princeton.edu/";
export const THESIS =
  "https://dataspace.princeton.edu/handle/88435/dsp0108612r81z";
export const HARMONIA = "https://brendanzelikman.github.io/harmonia/";

// Music
export const CIRCUS = "https://musescore.com/user/33605133/scores/9157980";
export const SONATA1 = "https://musescore.com/user/33605133/scores/9282505";
export const SONATA2 = "https://musescore.com/user/33605133/scores/9282517";
export const PHRYGIAN = "https://musescore.com/user/33605133/scores/6130543";
export const JESTER =
  "https://drive.google.com/file/d/1Apa2aIrn25B5GT1bn6-VmX60qpul8Si0/view";
export const RACH =
  "https://drive.google.com/file/d/1jh-HHiVpYvs_g_TjckTx4Eud2AtpDZ8m/view";
