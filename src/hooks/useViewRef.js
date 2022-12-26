import { useCallback, useState } from "react";

export const useViewRef = () => {
  const [view, setView] = useState(null);
  const ref = useCallback((node) => setView(node), []);
  return [view, ref];
};

export const useViewStore = ([ids]) => {};
