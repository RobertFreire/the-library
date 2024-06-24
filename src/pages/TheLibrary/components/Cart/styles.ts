import styled from 'styled-components';

export const CartContainer = styled.div`
	cursor: pointer;
`;

export const ModalContainer = styled.div`
	width: 40.5rem;
`;

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	height: 8rem;
	border-bottom: 2px solid #e1e6ee;
`;

export const Icon = styled.div`
	width: 4rem;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 3px solid #f2f3f6;
	border-radius: 0.6rem;
`;

export const TextHeader = styled.div`
	color: #344054;

	& p {
		font-size: 1.2rem;
	}
`;

export const ContentContainer = styled.div`
`;

export const ProductContainer = styled.div`
	display: flex;
	gap: 2rem;

	& img {
		height: 18rem;
		padding: 2rem;
	}

	& h1 {
		padding-top: 1.5rem;
		font-size: 1.6rem;
	}

	& h2 {
		color: var(--primary-green);
	}
`;

export const InformationProduct = styled.div`
	gap: 1rem;
	display: flex;
	flex-direction: column;
`;

export const QuantityContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 9.5rem;
	height: 3rem;
	font-size: 1.2rem;
	border: 1px solid black;
`;

export const AllItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	height: 11rem;
	border: 2px solid #e1e6ee;
	margin: 2rem;
	padding: 2rem;
`;

export const LabelItems = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	font-size: 1.2rem;

	& h3 {
		font-weight: 400;
		font-size: 1.2rem;
	}

	& p {
		font-weight: 900;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const ItemsCart = styled.div`
	width: 1rem;
	height: 1rem;
	background: var(--primary-green);
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-5.5rem, 2rem);
	border-radius: 0.6rem;
	display: flex;
	color: white;
	align-items: center;
	justify-content: center;
	font-size: 0.9rem;
`;

export const QrCodeContainer = styled.div`
	display: flex;
	flex-direction: column;
`
