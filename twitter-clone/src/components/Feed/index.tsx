import { Container, Tab,Tweets } from "./styles";
import {Tweet} from '../Tweet'
export function Feed() {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
}
