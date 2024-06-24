import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface SearchBoxProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const SearchBox = ({ onChange, value }: SearchBoxProps) => {
	return (
		<SearchContainer>
			<InputSearch
				type='search'
				onChange={onChange}
				value={value}
				placeholder='Pesquisar e filtrar'
			/>
		</SearchContainer>
	);
};

export default SearchBox;

export const SearchContainer = styled.div`
	width: 27rem;
`;

export const InputSearch = styled.input`
	border: 1px solid var(--dark-gray);
	border-radius: 1.6rem;
	width: 100%;
	height: 2.3rem;
	padding-left: 2rem;
`;
