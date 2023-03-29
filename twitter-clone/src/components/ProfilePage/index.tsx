import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from "./styles";

export function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Çalves Cristian</h1>
        <h2>@çalveCrist</h2>

        <p>
          Developer at <a href="#">@Empty</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 20 de novembro de 2030
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>28</strong>
          </span>
          <span>
            <strong>1000</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}
