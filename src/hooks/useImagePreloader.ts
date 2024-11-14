import Portrait from "assets/portrait.png";
import Harmonia from "assets/harmonia.png";
import Princeton from "assets/princeton.png";
import BCShield from "assets/bc.png";
import { useState, useEffect } from "react";
export { BCShield, Portrait, Harmonia, Princeton };

const images = [BCShield, Portrait, Princeton, Harmonia];

export const useImagePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cacheImage = async (src: string) => {
      return await new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    };
    Promise.all(images.map(cacheImage)).then(() => setIsLoading(false));
  }, []);

  return { isMediaReady: !isLoading };
};
