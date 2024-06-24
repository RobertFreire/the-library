import styled from 'styled-components';

export const ProductContainer = styled.div`
	width: 20.5rem;
	height: 33.8rem;
	background: var(--light-gray2);

	display: flex;
	flex-direction: column;
	gap: 1.4rem;
	transition: all 0.2s ease-in-out 0s;

	& img {
		width: 100%;
	}

	&:hover {
		cursor: pointer;
		transform: scale(1.10);
	}
`;

export const TagContainer = styled.div`
	position: absolute;
	width: 8rem;
	height: 2rem;
	background: var(--primary-green);
	border-radius: 1rem 0.6rem 0.6rem 0.6rem;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ImageContainer = styled.div`
	width: 20.5rem;
	height: 27rem;
	padding: 2rem 2rem 0rem;
	display: flex;
`;

export const ProductInformation = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	font-size: 1.2rem;

	& p {
		height: 3rem;
		overflow: hidden;
	}

	& span {
		font-weight: 900;
	}
`;
