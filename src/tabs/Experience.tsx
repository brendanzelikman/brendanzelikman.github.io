import {
  Section,
  SectionHeader,
  SectionItem,
  SectionItemList,
} from "components/Section";
import { DMITRI } from "constants";

export function Experience() {
  return (
    <Section
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="lg:p-8 p-4 lg:pr-2 pr-2 bg-gradient-to-t from-slate-950/50 via-slate-950/80 to-teal-300/25"
    >
      <SectionHeader
        title="Work Experience"
        titleColor="text-teal-400"
        subtitles={["An ecletic mix of jobs and internships..."]}
      />
      <SectionItemList>
        <SectionItem
          title="Harmonia, Lead Developer and Researcher"
          caption={
            <>
              Designed and developed an innovative digital audio workstation
              from scratch, mentored by{" "}
              <a href={DMITRI} className="text-blue-400 hover:underline">
                Dmitri Tymoczko
              </a>
              .
            </>
          }
          captionColor="text-sky-300"
        />
        <SectionItem
          title="Berkeley Carroll, Math Teacher Leave Replacement"
          caption="Taught 63 students across 4 sections of Algebra II and Adv. Multivariable Calculus for the Spring '24 semester."
          captionColor="text-red-300"
        />
        <SectionItem
          title="Terrace F. Club, Social Chair and Officer"
          caption="Cooperated as a leader of a 150-person eating club and managed weekly events, schedules, and budgets."
          captionColor="text-emerald-300"
        />
        <SectionItem
          title="High Meadows Environmental Institute, Summer Intern"
          caption="Created a real-time hurricane forecasting system synced with geospatial data from the National Hurricane Center."
          captionColor="text-indigo-300"
        />
        <SectionItem
          title="Princeton University Concerts Office, Student Intern"
          caption="Provided assistance to staff and helped promote events for the 2019-2020 Princeton concert season."
          captionColor="text-fuchsia-300"
        />
      </SectionItemList>
    </Section>
  );
}
