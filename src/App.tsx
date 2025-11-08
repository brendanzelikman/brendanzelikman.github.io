import { AppContainer } from "components/AppContainer";
import { Badges } from "view/Badges";
import { Background } from "view/Background";
import { Profile } from "view/Profile";
import { Credit } from "components/Credit";

export function App() {
  return (
    <AppContainer>
      <Background />
      <Profile />
      <Badges />
      <Credit />
    </AppContainer>
  );
}
