import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import { MobileHeader } from "../MobileHeader";
import { DesktopHeader } from "../DesktopHeader";
import RightColumn from "../RightColumn";
import { Container, AdBanner } from "./styles";

export function Layout() {
	return (
		<Container>
			<MobileHeader />
			<DesktopHeader />
			<AdBanner>
				<div>
					<span>Clone UI -</span>
					Propagandis
				</div>
			</AdBanner>
			<main>
				<LeftColumn />
				<MiddleColumn />
				<RightColumn />
			</main>
		</Container>
	);
}
