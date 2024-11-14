import { motion } from "framer-motion";
import BackgroundVideo from "assets/background.mp4";

export function Background() {
  return (
    <motion.video
      autoPlay
      muted
      loop
      className="fixed inset-0 -z-10 object-cover min-w-screen min-h-screen"
    >
      <source src={BackgroundVideo} type="video/mp4" />
    </motion.video>
  );
}
