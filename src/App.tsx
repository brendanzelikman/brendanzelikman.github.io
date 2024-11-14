import { AppContainer } from "components/AppContainer";
import { Badges } from "view/Badges";
import { Background } from "view/Background";
import { Profile } from "view/Profile";

export function App() {
  return (
    <AppContainer>
      <Background />
      <Profile />
      <Badges />
    </AppContainer>
  );
}
