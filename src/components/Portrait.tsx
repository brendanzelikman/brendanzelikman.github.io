import classNames from "classnames";
import PortraitPhoto from "../assets/portrait.png";
export { PortraitPhoto };

export function Portrait(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img {...props} rel="preload" src={PortraitPhoto} alt="Brendan Zelikman" />
  );
}

export function StyledPortrait() {
  return (
    <>
      <div className="absolute inset-0 -left-12 min-w-full saturate-150 z-20 mix-blend-multiply bg-gradient-radial from-sky-500/30 via-teal-500/10 to-fuchsia-800/80" />
      <div className="relative p-1">
        <Portrait className="absolute inset-0 -top-52 opacity-80 saturate-150" />
      </div>
      <div className="min-h-72 max-h-full" />
    </>
  );
}

export function BubblePortrait(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  return (
    <div
      className={classNames(
        props.className,
        "size-24 relative rounded-full overflow-hidden ring-2 ring-indigo-500/50 shadow-xl"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-indigo-500/10 rounded-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={PortraitPhoto}
          alt="Brendan Zelikman"
          className="object-cover scale-[2.5]"
          style={{ margin: "100px 85px 0px 0px" }}
        />
      </div>
    </div>
  );
}
