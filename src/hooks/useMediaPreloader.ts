import Portrait from "assets/portrait.png";
import Harmonia from "assets/harmonia.png";
import Princeton from "assets/princeton.png";
import BCShield from "assets/bc.png";
import BackgroundVideo from "assets/background.mp4";
import { useState, useEffect } from "react";
export { BCShield, Portrait, Harmonia, Princeton };

const media = [
  { type: "image", src: Portrait },
  { type: "image", src: Harmonia },
  { type: "image", src: Princeton },
  { type: "image", src: BCShield },
  { type: "video", src: BackgroundVideo },
];

export const useMediaPreloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cacheMedia = async ({ type, src }: { type: string; src: string }) => {
      return await new Promise((resolve, reject) => {
        if (type === "image") {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        } else if (type === "video") {
          const video = document.createElement("video");
          video.src = src;
          video.onloadeddata = resolve;
          video.onerror = reject;
        }
      });
    };
    Promise.all(media.map(cacheMedia))
      .then(() => setIsLoading(false))
      .catch(console.error);
  }, []);

  return { isMediaReady: !isLoading };
};
