import {
	Container,
	Wrapper,
	LinkedinIcon,
	SearchInput,
	HomeIcon,
	NotificationsIcon,
	ProfileCircle,
	CaretDownIcon,
} from "./styles";

export function DesktopHeader() {
	return (
		<Container>
			<Wrapper>
				<div className="left">
					<LinkedinIcon />
					<SearchInput placeholder="Pesquisar" />
				</div>
				<div className="right">
					<nav>
						<button className="active">
							<HomeIcon />
							<span>Início</span>
						</button>
						<button>
							<NotificationsIcon />
							<span>Notificações</span>
						</button>
						<button>
							<ProfileCircle src="https://github.com/alexsandro-cristiano.png" />
							<span>
								Eu <CaretDownIcon />{" "}
							</span>
						</button>
					</nav>
				</div>
			</Wrapper>
		</Container>
	);
}
