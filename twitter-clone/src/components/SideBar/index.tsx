import { FollowSuggestion } from "../FollowSuggestion";
import { List } from "../List";
import { News } from "../News";
import StickyBar from "react-sticky-box";
import {
  Container,
  SearchInput,
  SearchWrapper,
  SearchIcon,
  Body,
} from "./styles";

export function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBar>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="pessoa 1" nickname="@pessoa1" />,
              <FollowSuggestion name="pessoa 3" nickname="@pessoa3" />,
              <FollowSuggestion name="pessoa 2" nickname="@pessoa2" />,
            ]}
          />
          <List
            title="Noticias"
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title="Noticias"
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title="Noticias"
            elements={[<News />, <News />, <News />, <News />]}
          />
        </Body>
      </StickyBar>
    </Container>
  );
}
