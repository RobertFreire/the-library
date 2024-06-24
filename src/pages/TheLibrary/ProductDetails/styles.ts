import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	gap: 10rem;
`;

export const Label = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const Items = styled.div`
	display: flex;
	gap: 2rem;
`;

export const ImageContainer = styled.div`
	position: sticky;
	top: 0;
	align-self: flex-start;
	& > img {
		width: 40rem;
		height: 50rem;
		padding: 2rem;
		border-radius: 3.2rem;
	}
`;

export const OthersImages = styled.div`
	width: 21rem;
	height: 11rem;
	display: flex;
	gap: 2rem;
	cursor: pointer;
	padding-left: 2rem;

	& > img {
		padding: 1rem;
		border-radius: 1.6rem;
	}
`;

export const InformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	overflow: auto;

	& h1 {
		font-size: 3.8rem;
	}
`;

export const Price = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	& h2 {
		font-size: 2.4rem;
		color: var(--primary-green);
	}

	& p {
		font-size: 1.6rem;
		color: #45474f;
	}
`;

export const Description = styled.div`
	max-height: 18.5rem;
	font-size: 1.6rem;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: var(--black);
		border-radius: 5px;
	}

	&::-webkit-scrollbar-track {
		background-color: none;
	}
`;

export const VariationsType = styled.div`
	background: var(--primary-green);
	color: white;
	border-radius: 0.6rem;
	font-size: 1.3rem;
	width: 9rem;
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ColorConainer = styled.div`
	padding: 0.2rem;
	width: 3rem;
	height: 3rem;
	border: 3px solid black;
	border-radius: 50%;
`;

export const ColorType = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 50%;
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

export const FreightContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	& > fieldset {
		width: auto;
	}
`;

export const FreightOptions = styled.div`
border: 1px solid #e1e6ee;
    padding: 1rem;
    width: 58%;
    display: flex;
    justify-content: space-between;
    align-items: center;

	& > h1 {
		font-size: 1rem;
	}
`;
