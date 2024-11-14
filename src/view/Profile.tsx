import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { BubblePortrait, StyledPortrait } from "components/Portrait";
import { useAppContext } from "hooks/useAppContext";

export function Profile() {
  const { active, setActive } = useAppContext();
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: PROFILE_FADE_DELAY + 0.4,
        duration: 0.6,
        type: "spring",
        opacity: { delay: 0.3, duration: 0.8, type: "spring" },
      }}
    >
      <div className="w-full h-auto tiny:pt-0 tiny:h-screen flex flex-col items-center justify-center">
        <div
          className={classNames(
            "bg-gradient-to-b from-sky-500/10 to-indigo-500/10 border-2 border-indigo-700 backdrop-blur-lg rounded-lg",
            "relative transition-all duration-300 tiny:w-[450px] w-full flex flex-col gap-10 overflow-hidden"
          )}
        >
          <div className="tiny:block hidden">
            <StyledPortrait />
          </div>
          <div className="mt-auto px-4 py-8 text-xl bg-slate-950/50 z-40 backdrop-blur-lg w-full flex flex-col items-center justify-center text-slate-200 drop-shadow-xl">
            <div
              className="flex justify-center items-center flex-wrap mx-auto neon gap-4 mb-6 text-center supertiny:text-3xl tiny:text-4xl text-xl indigo font-normal drop-shadow-2xl"
              style={{ textShadow: "3px 1px 20px #6688ffdd" }}
            >
              <BubblePortrait className="block tiny:hidden" />
              Brendan Zelikman
            </div>

            <motion.button
              whileHover={active ? undefined : { scale: 1.05 }}
              whileTap={active ? undefined : { scale: 0.95 }}
              transition={{ scale: { duration: 0.1, type: "tween" } }}
              className={classNames(
                active ? "h-32" : "h-14",
                active ? "supertiny:p-4 p-1" : "py-2 supertiny:px-16 px-4",
                active
                  ? "bg-slate-900/50"
                  : "bg-gradient-radial from-sky-600/50 to-indigo-600/50",
                active
                  ? "border-indigo-400/40 cursor-default"
                  : "border-white/5 shover:bg-indigo-800/50 hover:border-indigo-300/50",
                "shadow-[1px_1px_20px_10px_#228a] mx-auto overflow-scroll font-light backdrop-blur-lg transition-all rounded-lg border"
              )}
              onClick={() => setActive(true)}
            >
              <AnimatePresence>
                {!active && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: active ? "none" : "block" }}
                    className="supertiny:text-3xl"
                  >
                    Open <span className="max-supertiny:hidden">Portfolio</span>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {active && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="supertiny:text-balance supertiny:text-lg text-sm"
                  >{`Hello, World! I am a "mad musical scientist" living in NYC with
                professional experience in programming, composing, and teaching.`}</motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export const PROFILE_FADE_DELAY = 0;
