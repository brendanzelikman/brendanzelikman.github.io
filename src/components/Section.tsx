import classNames from "classnames";
import { HTMLMotionProps, motion } from "framer-motion";
import { HTMLProps, ReactNode } from "react";

export function Section(props: HTMLMotionProps<"ul">) {
  return (
    <motion.ul
      {...props}
      className={classNames(
        props.className,
        "flex flex-col my-auto",
        "lg:max-w-lg md:max-w-md max-w-sm",
        "border-2 border-slate-500 backdrop-blur-md rounded"
      )}
    >
      {props.children}
    </motion.ul>
  );
}

interface SectionHeaderProps {
  title: ReactNode;
  titleColor?: string;
  subtitles?: ReactNode[];
  image?: ReactNode;
}

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className="flex w-full">
      <div className="flex-col min-w-fit">
        <h2
          className={classNames(
            props.titleColor,
            "font-bold text-2xl drop-shadow-xl whitespace-nowrap"
          )}
        >
          {props.title}
        </h2>
        {(props.subtitles || []).map((subtitle, i) => (
          <h3 key={`subtitle-${i}`} className="text-slate-300 font-extralight">
            {subtitle}
          </h3>
        ))}
      </div>
      {!props.image ? null : (
        <div className="flex-1 hidden md:flex h-full justify-end">
          {props.image}
        </div>
      )}
    </div>
  );
}

interface SectionItemProps {
  title: ReactNode;
  caption: ReactNode;
  captionColor?: string;
  extendCaption?: boolean;
}

export function SectionItem(props: SectionItemProps) {
  return (
    <span
      className={classNames(
        "space-y-1 [&>li]:font-light pr-2",
        props.extendCaption ? "" : "lg:pr-12"
      )}
    >
      <div className="font-bold border-b border-b-slate-500/20">
        {props.title}
      </div>
      <div className={props.captionColor}>{props.caption}</div>
    </span>
  );
}

export function SectionItemList(props: { children?: ReactNode }) {
  return (
    <div {...props} className="flex flex-col mt-4 space-y-6">
      {props.children}
    </div>
  );
}

export function SectionText(props: HTMLProps<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      className={classNames(
        props.className,
        "text-slate-100 font-light whitespace-pre-wrap"
      )}
    >
      {props.children}
    </p>
  );
}
