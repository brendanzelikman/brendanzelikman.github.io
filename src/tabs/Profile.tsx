import classNames from "classnames";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { EMAIL, GITHUB, LINKEDIN } from "constants";
import { Avatar } from "components/Avatar";

interface ProfileProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

export function Profile(props: ProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={classNames(
        "flex flex-col items-center",
        "lg:max-w-lg md:max-w-md max-w-sm",
        "bg-slate-900/20 border-2 border-slate-500 backdrop-blur-md rounded",
        "mt-16 px-4 lg:px-16 pt-12 pb-8"
      )}
    >
      <Avatar onClick={() => props.setActive(!props.active)} />
      <ProfileName>Brendan Zelikman</ProfileName>
      <ProfileBio>Musician, Programmer, Teacher</ProfileBio>
      <ProfileAction {...props} />
    </motion.div>
  );
}

// Styled elements
function ProfileName({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mt-4 lg:mb-2 text-center text-xl lg:text-4xl font-semibold drop-shadow-2xl">
      {children}
    </h1>
  );
}
function ProfileBio({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-center text-md lg:text-2xl font-light text-slate-200 drop-shadow-xl">
      {children}
    </h2>
  );
}
function ProfileButton({ active, setActive }: ProfileProps) {
  return (
    <motion.button
      initial={{ scale: 1, opacity: 1 }}
      animate={{ opacity: active ? 0 : 1, display: active ? "none" : "block" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: active ? 0.3 : 0 }}
      className="px-4 py-2 bg-indigo-700/40 transition-all duration-150 rounded-lg border hover:bg-indigo-800/50 hover:border-indigo-300/50"
      onClick={() => setActive(true)}
    >
      View Profile
    </motion.button>
  );
}
function ProfileLinks() {
  return (
    <motion.div
      className="flex space-x-8 text-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.3, ease: "easeInOut" }}
    >
      <a href={EMAIL} className="hover:text-blue-500">
        <FaEnvelope />
      </a>
      <a href={LINKEDIN} className="hover:text-blue-500">
        <FaLinkedin />
      </a>
      <a href={GITHUB} className="hover:text-blue-500">
        <FaGithub />
      </a>
    </motion.div>
  );
}
function ProfileAction(props: ProfileProps) {
  return (
    <div className="text-2xl h-12 text-slate-200 drop-shadow-xl">
      <ProfileButton {...props} />
      {!!props.active && <ProfileLinks />}
    </div>
  );
}
