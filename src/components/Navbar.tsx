import classNames from "classnames";
import { SHORT_TABS, TABS } from "constants";
import { useAppContext } from "provider";

export function Navbar() {
  const { activeTabIndex, scrollToTab } = useAppContext();
  const isSelected = (index: number) => index === activeTabIndex;
  const selectedClass = "bg-indigo-300/30";
  const [_, ...bodyTabs] = TABS;
  const [__, ...shortBodyTabs] = SHORT_TABS;
  return (
    <div className="p-2 lg:bg-transparent bg-slate-900/80">
      <h1
        className={classNames(
          "mt-4 text-4xl lg:text-start text-center lg:w-full w-fit mx-auto drop-shadow-xl backdrop-blur-sm cursor-pointer select-none p-2 px-8 lg:px-2 rounded-lg border border-indigo-200/80 xl:whitespace-nowrap",
          { [selectedClass]: isSelected(0) }
        )}
        onClick={() => scrollToTab(0)}
      >
        Brendan Zelikman
      </h1>
      {/* Sidebar (< lg viewport) */}
      <ul className="lg:hidden flex justify-center mt-2 py-4 w-full text-sm *:max-w-sm *:rounded-lg sm:*:mr-8 *:mr-3 *:px-1 *:text-center *:cursor-pointer *:border-indigo-200/50">
        {shortBodyTabs.map((tab, index) => (
          <div
            key={index}
            className={classNames("last:mr-0", {
              [selectedClass]: isSelected(index + 1),
            })}
            onClick={() => scrollToTab(index + 1)}
          >
            {tab}
          </div>
        ))}
      </ul>

      {/* Sidebar (>= lg viewport) */}
      <ul className="lg:flex lg:flex-col hidden mt-2 px-6 py-4 w-full text-xl space-y-3 *:rounded-lg *:px-2 *:py-1 *:border *:cursor-pointer *:whitespace-nowrap *:border-indigo-200/50">
        {bodyTabs.map((tab, index) => (
          <li
            key={index}
            className={classNames("backdrop-blur-sm", {
              [selectedClass]: isSelected(index + 1),
            })}
            onClick={() => scrollToTab(index + 1)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
}
