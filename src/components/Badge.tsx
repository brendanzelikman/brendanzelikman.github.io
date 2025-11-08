import { Badge } from "badges";
import classNames from "classnames";

export const BadgeItem = (props: Badge) => {
  const { title, caption, color, url, Icon } = props;
  const isCaptionArray = Array.isArray(caption);
  return (
    <a
      href={url}
      className={classNames(
        props.shelfColor,
        "group hover:bg-indigo-500/20 w-60 h-28 py-2 border-b-4 border-b-amber-700 border-x border-x-slate-500/50 flex flex-col ubertiny:items-center justify-center whitespace-nowrap"
      )}
    >
      {Icon && (
        <div
          className={classNames(
            color,
            "size-12 group-hover:scale-105 ring-1 ring-slate-400/20 hover:ring-indigo-400/50 transition-opacity duration-150 flex justify-center items-center text-3xl rounded-full bg-slate-800"
          )}
        >
          {<Icon />}
        </div>
      )}
      {title && <div className="text-sm font-bold mt-2">{title}</div>}
      {isCaptionArray ? (
        <div className="p-2 items-center max-w-72 w-min min-w-60">
          {caption.map((line, index) => (
            <div key={index} className="text-xs text-slate-400 text-wrap">
              {line}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-xs text-slate-400">{caption}</div>
      )}
    </a>
  );
};
