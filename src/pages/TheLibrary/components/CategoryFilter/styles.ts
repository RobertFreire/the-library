import styled from 'styled-components';

export const FilterContainer = styled.div`
	width: 100%;
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	padding: 2rem 0rem;
	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 50%;
		height: 3rem;
        gap: 1rem;
	}
`;

export const Filter = styled.div<{ active: boolean }>`
	background: ${({ active }) =>
		active ? 'var(--primary-orange)' : 'var(--dark-gray);'};
	padding: 0.5rem 1rem;
	border-radius: 3.2rem;
	cursor: pointer;

    &:hover{
        transform: scale(1.2);
    }
`;
