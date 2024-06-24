import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	display: flex;
	column-gap: 2.4rem;
	background-color: #f0f4f9;
	padding: 0 3.6rem 0 0;
`;

export const Content = styled.div`
	width: 100%;
	max-width: 120rem;

	& > div {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
	}
`;
