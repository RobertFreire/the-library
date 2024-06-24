import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding-bottom: 5rem;
`;

export const FrontCover = styled.div`
	width: 100%;
	height: 29rem;
	object-fit: cover;
	& img {
		width: 100%;
		height: 29rem;
		border-radius: 3.2rem;
	}
`;

export const BannerCategory = styled.div`
	display: flex;
	align-items: center;
	height: 16.2rem;
	border-radius: 1.6rem;
	background: var(--primary-orange);
	font-size: 4.6rem;
	font-weight: 600;
	color: white;
	padding-left: 2rem;
`;

export const FilterContainer = styled.div`
	width: 100%;
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 50%;
		height: 3rem;
	}
`;

export const Filter = styled.div<{ active?: string }>`
	background: ${({ active }) =>
		active === 'true' ? 'var(--primary-orange)' : 'var(--dark-gray);'};
	padding: 0.5rem;
	border-radius: 3.2rem;
`;

export const ProductsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const BooksContainer = styled.div`
	width: 100%;
	height: 38.8rem;
	display: flex;
	justify-content: start;
	align-content: flex-start;
	gap: 4rem;
	overflow: auto;
	flex-wrap: wrap;
	flex-direction: column;

	&::-webkit-scrollbar {
		width: 3px; 
		height: 8px;
	}

	&::-webkit-scrollbar-track {
		background: #f1f1f1; 
	}

	&::-webkit-scrollbar-thumb {
		background-color: #888; 
		border-radius: 4px; 
	}

`;

export const Promotion = styled.div`
	width: 100%;
	height: 30rem;
	position: relative;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	& > div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 21rem;
		background: #f6ec32;
		height: 4rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(60%, 190%);
		color: #4588dc;
		font-size: 1.3rem;
		font-weight: 900;
		cursor: pointer;
	}
`;
