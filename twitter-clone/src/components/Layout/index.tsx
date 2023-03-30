import { MenuBar } from "../MenuBar";
import { Main } from "../Main";
import { Container, Wrapper } from "./styles";
import { SideBar } from "../SideBar";

export function Layout() {
  return (
    <Container>
      <Wrapper>
        <MenuBar/>
        <Main />
        <SideBar/>
      </Wrapper>
    </Container>
  );
}
