import classNames from "classnames";
import { motion } from "framer-motion";
import { BubblePortrait } from "components/Portrait";
import { useAppContext } from "hooks/useAppContext";
import { GITHUB, MUSESCORE, PROD } from "constants";

export function Profile() {
  const { active, setActive } = useAppContext();
  return (
    <motion.div
      layout
      className="mb-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: PROFILE_FADE_DELAY + 0.4,
        duration: 0.6,
        damping: 30,
        opacity: { delay: 0.3, duration: 0.8 },
      }}
    >
      <div className="w-screen flex flex-col items-center">
        <div
          className={classNames(
            "bg-gradient-to-b from-sky-500/10 to-indigo-500/10 border-2 border-indigo-700 backdrop-blur-lg rounded-lg",
            "relative transition-all duration-300 tiny:w-[450px] max-tiny:w-full flex flex-col gap-10 overflow-hidden"
          )}
        >
          <div className="px-4 py-2 text-xl bg-slate-950/50 z-40 backdrop-blur-lg size-full flex flex-col items-center justify-center text-slate-200 drop-shadow-xl">
            <div
              className="flex justify-center items-center flex-wrap mx-auto neon gap-4 text-center supertiny:text-3xl tiny:text-4xl text-xl indigo font-normal drop-shadow-2xl"
              style={{ textShadow: "3px 1px 20px #6688ffdd" }}
            >
              <BubblePortrait />
              <div className="flex flex-col items-start select-none">
                <div className="border-b mb-1">Brendan Zelikman</div>
                <div className="flex items-center text-base">
                  Musician • Programmer • Designer
                </div>
                <div
                  className="text-base text-sky-300 cursor-pointer"
                  onClick={() => setActive(!active)}
                >
                  Click to {active ? "admire the view" : "see my portfolio"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export const PROFILE_FADE_DELAY = 0;
