import styled from 'styled-components';

export const SidebarContainer = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100%;
	width: 24rem;
	background: white;
`;

export const LogoContainer = styled.div`
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border-bottom: 2px solid #E1E6EE;
  height: 6rem;
`;

export const ContentContainer = styled.div`
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 2.3rem;
`;

export const ProfileContainer = styled.div`
	padding: 2rem;
	height: 5rem;
	border-top: 2px solid #E1E6EE;
	display: flex;
	align-items: center;
	gap: 1rem;
	cursor: pointer;

	& img {
		border-radius: 50%;
		width: 2.7rem;
		height: 2.7rem;
	}

	& p {
		text-align: start;
		width: 13.5rem;
		font-size: 1.4rem;
		font-weight: 600;
	}

	& svg {
		transform: rotate(90deg);
		width: 1.7rem;
	}
`;
