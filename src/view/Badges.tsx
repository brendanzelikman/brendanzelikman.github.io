import { PORTFOLIO_SECTIONS } from "badges";
import { AnimatePresence, motion } from "framer-motion";
import { useAppContext } from "hooks/useAppContext";
import { Section } from "components/Section";
import { PROFILE_FADE_DELAY } from "./Profile";

export function Badges() {
  const { active } = useAppContext();
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{
            delay: PROFILE_FADE_DELAY,
            duration: 0.5,
          }}
          className="supertiny:p-6 shadow-[0_0_20px_#abf5] p-2 rounded-lg my-auto grid grid-cols-1 backdrop-blur overflow-hidden gap-4 h-min w-fit mx-auto bg-slate-950/40"
        >
          {PORTFOLIO_SECTIONS.map((section, i) => (
            <Section key={i} section={section} i={i} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
