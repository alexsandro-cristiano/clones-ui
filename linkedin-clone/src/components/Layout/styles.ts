import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;

	.left-column,
	.right-column {
		display: none;
	}

	@media (min-width: 1180px) {
		> main {
			margin: 0 30px;
			display: flex;
			justify-content: center;
		}
		.left-column,
		.right-column {
			display: unset;
		}
		.middle-column {
			margin: 0 25px 16px;
		}
	}
`;
export const AdBanner = styled.span`
	margin-top: 48px;
	display: none;
	@media (min-width: 1180px) {
		display: flex;
		margin-top: 52px;
		padding: 8px 0;
		display: flex;
	}
	> div {
		width: 100%;
		font-size: 15px;
		font-weight: 600;
		color: var(--color-ad-text);
		text-align: center;
		padding: 8px 0;

		span {
			color: var(--color-link);
		}
	}
`;
