import { motion } from "framer-motion";
import { useAppContext } from "provider";
import BackgroundGif from "assets/background.gif";

export function Background() {
  const { active } = useAppContext();
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: active ? 0.75 : 1 }}
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `url(${BackgroundGif})`,
          backgroundSize: "cover",
        }}
      />
    </>
  );
}
