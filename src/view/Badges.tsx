import { PORTFOLIO_SECTIONS } from "badges";
import { motion } from "framer-motion";
import { useAppContext } from "hooks/useAppContext";
import { Section } from "components/Section";
import { PROFILE_FADE_DELAY } from "./Profile";

export function Badges() {
  const { active } = useAppContext();
  if (!active) return null;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: PROFILE_FADE_DELAY + 0.4,
        duration: 0.6,
        type: "spring",
      }}
      className="supertiny:p-6 p-2 rounded-lg my-auto grid tiny:grid-cols-1 supertiny:grid-cols-2 grid-cols-1 backdrop-blur overflow-scroll gap-6 h-min bg-slate-950/50"
    >
      {PORTFOLIO_SECTIONS.map((section, i) => (
        <Section key={i} section={section} i={i} />
      ))}
    </motion.div>
  );
}
