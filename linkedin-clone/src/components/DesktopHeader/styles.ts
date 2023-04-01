import styled, { css } from "styled-components";
import { GrLinkedin } from "react-icons/gr";
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from "react-icons/ai";

export const Container = styled.header`
	display: none;
	background: var(--color-header);
	padding: 0 30px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	@media (min-width: 1180px) {
		display: block;
	}
`;
export const Wrapper = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	max-width: 1128px;
	margin: 0 auto;
	height: 52px;

	.left,
	.right nav {
		display: flex;
		align-items: center;
	}
	.right nav {
		height: 100%;
		button {
			background: none;
			border: none;
			outline: none;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			min-width: 90px;
			min-height: 100%;
			color: var(--color-icons);
			cursor: pointer;
			&:hover {
				color: var(--color-white);
			}
			&.active {
				border-bottom: 2px solid var(--color-white);
			}
		}
	}
`;

export const ProfileCircle = styled.img`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 1px solid var(--color-white);
	color: var(--color-icons);
`;
export const SearchInput = styled.input`
	margin-left: 16px;
	width: 100%;
	background: var(--color-input);
	color: var(--color-black);
	font-size: 14px;
	padding: 7.5px 8px;
	border: none;
	outline: none;
	border-radius: 2px;
	&:focus {
		background: var(--color-white);
	}
`;
export const LinkedinIcon = styled(GrLinkedin)`
	width: 34px;
	height: 34px;
	color: var(--color-linkedin);
	background: var(--color-white);
	border-radius: 4px;
	flex-shrink: 0;
`;
export const CaretDownIcon = styled(AiFillCaretDown)`
	width: 16px;
	height: 16px;
`;
const iconCSS = css`
	width: 24px;
	height: 24px;
	color: var(--color-icons);
`;
export const HomeIcon = styled(AiFillHome)`
	${iconCSS}
`;
export const NotificationsIcon = styled(AiOutlineBell)`
	${iconCSS}
`;
