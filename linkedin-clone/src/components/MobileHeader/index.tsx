import { Container, ProfileCircle, SearchIcon, SearchInput } from "./styles";

export function MobileHeader() {
	return (
		<Container>
			<ProfileCircle src="https://github.com/alexsandro-cristiano.png" />

			<SearchInput placeholder="Pesquisar" />
			<SearchIcon />
		</Container>
	);
}