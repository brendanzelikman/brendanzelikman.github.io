import { createContext, useContext } from "react";

interface AppContext {
  active: boolean;
  setActive: (active: boolean) => void;
  activeTabIndex: number;
  scrollToTab: (tab: number) => void;
}

export const AppContext = createContext<AppContext>({
  active: false,
  setActive: () => null,
  activeTabIndex: 0,
  scrollToTab: () => null,
});

export const useAppContext = () => {
  return useContext(AppContext);
};
