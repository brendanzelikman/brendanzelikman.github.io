import { AppContext } from "hooks/useAppContext";
import { useImagePreloader } from "hooks/useImagePreloader";
import { useState } from "react";

export const AppContainer = (props: { children: React.ReactNode }) => {
  const [active, setActive] = useState(false);
  const { isMediaReady } = useImagePreloader();
  if (!isMediaReady) return null;
  return (
    <AppContext.Provider value={{ active, setActive }}>
      <div className="w-screen h-screen relative flex flex-col tiny:flex-row tiny:gap-20 gap-4 p-4 tiny:justify-evenly overflow-hidden">
        {props.children}
      </div>
    </AppContext.Provider>
  );
};
