import { PORTFOLIO_BADGES, PortfolioSection } from "badges";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeItem } from "./Badge";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { mod } from "constants";
import { PROFILE_FADE_DELAY } from "view/Profile";
import { useAppContext } from "hooks/useAppContext";

export function Section(props: { section: PortfolioSection; i: number }) {
  const { active } = useAppContext();
  const { section, i } = props;
  const badges = PORTFOLIO_BADGES[section];
  const badgeCount = badges.length;

  const offset = 100;
  const variants = {
    center: { zIndex: 1, x: 0, opacity: 1 },
    enter: (direction: number) => {
      return { x: direction > 0 ? offset : -offset, opacity: 0 };
    },
    exit: (direction: number) => {
      return { zIndex: 0, x: direction < 0 ? offset : -offset, opacity: 0 };
    },
  };

  const [[index, direction], setIndex] = useState([0, 0]);
  const badgeIndex = mod(index, badgeCount);
  const offsetBadge = (newDirection: number) => {
    setIndex([index + newDirection, newDirection]);
  };

  /* Big and supertiny viewports see all badges */
  const BadgeTable = (
    <div className="big:flex supertiny:hidden max-supertiny:*:mx-auto flex-wrap big:flex-row overflow-hidden supertiny:px-4 px-2 items-center gap-2 bg-slate-900/10">
      {PORTFOLIO_BADGES[section].map((badge, i) => (
        <BadgeItem key={i} {...badge} />
      ))}
    </div>
  );

  /* Small viewports use a carousel */
  const BadgeCarousel = (
    <div className="big:hidden supertiny:flex hidden relative min-h-24 w-full overflow-hidden items-center gap-2 bg-slate-500/10">
      {/* Elements swipe in the direction they are going */}
      <AnimatePresence initial={false} custom={direction}>
        <div className="relative size-full w-96 min-h-28 flex items-center justify-center">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute"
            transition={{
              x: { type: "spring", damping: 30, stiffness: 300 },
              opacity: { duration: 0.5 },
            }}
          >
            <BadgeItem {...badges[badgeIndex]} />
          </motion.div>
        </div>
      </AnimatePresence>
      <button
        className="absolute supertiny:flex hidden left-4 -mt-4 z-10 bg-slate-900/50 items-center justify-center rounded-full p-1"
        onClick={() => offsetBadge(-1)}
      >
        <BsArrowLeft />
      </button>
      <button
        className="absolute supertiny:flex hidden right-4 -mt-4 z-10 bg-slate-900/50 items-center justify-center rounded-full p-1"
        onClick={() => offsetBadge(1)}
      >
        <BsArrowRight />
      </button>
    </div>
  );

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ x: 0, y: -50, scale: 0.5, opacity: 0 }}
          animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          exit={{ x: 0, y: -50, scale: 0.5, opacity: 0 }}
          transition={{
            delay: PROFILE_FADE_DELAY + i * 0.1,
            duration: 0.5,
            type: "spring",
          }}
          className="h-full flex flex-col max-big:tiny:min-w-72"
        >
          <div className="px-2 whitespace-nowrap overflow-scroll py-1 bg-gradient-to-b from-sky-900/70 to-indigo-600/70 shadow-[0_0_20px_1px_#89f8] rounded rounded-b-none font-bold">
            <span className="hidden supertiny:block">{section}</span>
            <span className="supertiny:hidden">
              {section.split(" ").slice(1)}
            </span>
          </div>

          {BadgeTable}
          {BadgeCarousel}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
