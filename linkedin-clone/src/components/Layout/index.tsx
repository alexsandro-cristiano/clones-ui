import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import { MobileHeader } from "../MobileHeader";
import RightColumn from "../RightColumn";
import { Container } from "./styles";

export function Layout() {
	return (
		<Container>
			<MobileHeader/>
			<main>
				<LeftColumn  />
				<MiddleColumn  />
				<RightColumn />
			</main>
		</Container>
	);
}
