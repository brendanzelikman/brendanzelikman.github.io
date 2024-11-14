import { createContext, useContext } from "react";

type Context = {
  active: boolean;
  setActive: (active: boolean) => void;
};

const defaultContext: Context = {
  active: false,
  setActive: () => {},
};

export const AppContext = createContext<Context>(defaultContext);
export const useAppContext = () => useContext(AppContext);
