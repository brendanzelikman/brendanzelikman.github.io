import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "components/Navbar";
import { TABS, TAB_COUNT, Tab } from "constants";
import { Content } from "components/Content";
import { AppContext } from "provider";
import { Background } from "components/Background";

function App() {
  const [active, setActive] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const largeContentRef = useRef<HTMLDivElement | null>(null);
  const smallContentRef = useRef<HTMLDivElement | null>(null);

  // Scroll the content to the given tab by number
  const scrollToTab = (tab: number) => {
    const isLg = window.innerWidth >= 1024;
    const current = isLg ? largeContentRef.current : smallContentRef.current;
    if (current) {
      const tabHeight = current.scrollHeight / TAB_COUNT;
      current.scrollTo({
        top: tab * tabHeight,
        behavior: "smooth",
      });
    }
  };

  // Update the active tab based on the scroll position
  const onViewScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      const marginTop = window.innerHeight > 1024 ? 200 : 50;
      const { scrollTop, scrollHeight } = e.currentTarget;
      const tabHeight = scrollHeight / TAB_COUNT;
      const currentIndex = Math.floor((scrollTop + marginTop) / tabHeight);
      if (currentIndex > 0 && currentIndex < TAB_COUNT) {
        setActiveTabIndex(currentIndex);
      }
    },
    [TABS]
  );

  return (
    <AppContext.Provider
      value={{ active, setActive, activeTabIndex, scrollToTab }}
    >
      {/* Layout (< lg viewport) */}
      <div className="flex flex-col items-center lg:hidden relative w-screen h-screen">
        <Background />
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: active ? "120px" : 0 }}
          transition={{ duration: 0.3 }}
          className="w-full justify-center items-center overflow-hidden"
        >
          <Navbar />
        </motion.div>
        <motion.div
          ref={smallContentRef}
          className="w-full flex-1 overflow-scroll"
          onScroll={onViewScroll}
        >
          <Content />
        </motion.div>
      </div>
      {/* Layout (>= lg viewport) */}
      <div className="lg:flex hidden relative w-screen h-screen">
        <Background />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: active ? "fit-content" : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 pl-2 overflow-hidden"
        >
          <Navbar />
        </motion.div>
        <motion.div
          ref={largeContentRef}
          layout
          initial={{ width: "100%" }}
          animate={{ width: active ? "66%" : "100%" }}
          className="h-full overflow-scroll"
          onScroll={onViewScroll}
        >
          <Content />
        </motion.div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
