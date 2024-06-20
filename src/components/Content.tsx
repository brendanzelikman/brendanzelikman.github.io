import { View } from "./View";
import { useAppContext } from "provider";
import { Profile } from "tabs/Profile";
import { Education } from "tabs/Education";
import { Experience } from "tabs/Experience";
import { Skills } from "tabs/Skills";
import { Music } from "tabs/Music";
import { Harmonia } from "tabs/Harmonia";

export function Content() {
  const { active, setActive } = useAppContext();
  return (
    <>
      <View>
        <Profile active={active} setActive={setActive} />
      </View>
      {active && (
        <>
          <View>
            <Education />
          </View>
          <View>
            <Experience />
          </View>
          <View>
            <Skills />
          </View>
          <View>
            <Music />
          </View>
          <View>
            <Harmonia />
          </View>
        </>
      )}
    </>
  );
}
