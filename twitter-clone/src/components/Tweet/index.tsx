import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from "./styles";

export function Tweet() {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rockseat</span>
            <Dot />
            <time>27 de jun</time>
          </Header>
          <Description>Foguete não tem ré</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon /> 19
            </Status>
            <Status>
              <LikeIcon />1
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}
