import { AppContext } from "hooks/useAppContext";
import { useMediaPreloader } from "hooks/useMediaPreloader";
import { useState } from "react";

export const AppContainer = (props: { children: React.ReactNode }) => {
  const [active, setActive] = useState(false);
  const { isMediaReady } = useMediaPreloader();
  if (!isMediaReady) return null;
  return (
    <AppContext.Provider value={{ active, setActive }}>
      <div className="w-screen h-screen relative flex flex-col gap-4 p-4 tiny:justify-evenly overflow-hidden">
        {props.children}
      </div>
    </AppContext.Provider>
  );
};
