import { Badge } from "badges";
import classNames from "classnames";

export const BadgeItem = (props: Badge) => {
  const { title, caption, color, url, Icon } = props;
  return (
    <div className="group min-w-56 py-2 flex flex-col ubertiny:items-center justify-center whitespace-nowrap">
      <a
        href={url}
        className={classNames(
          color,
          "size-12 hover:scale-105 ring-1 ring-slate-400/20 hover:ring-indigo-400/50 transition-opacity duration-150 flex justify-center items-center text-3xl rounded-full bg-slate-800"
        )}
      >
        {Icon && <Icon />}
      </a>
      <div className="text-sm font-bold mt-2">{title}</div>
      <div className="text-xs text-slate-400">{caption}</div>
    </div>
  );
};
