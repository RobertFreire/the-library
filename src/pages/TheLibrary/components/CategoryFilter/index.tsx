import React from 'react';
import * as S from './styles';
import books from '../../../../services/database/books';

interface CategoryProps {
	selectedCategory: string;
	onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({
	selectedCategory,
	onCategoryChange,
}: CategoryProps) => {
	const allCategories: string[] = books.reduce((acc: string[], book) => {
		book.categories.forEach((category) => {
			if (!acc.includes(category)) {
				acc.push(category);
			}
		});
		return acc;
	}, []);

	return (
		<S.FilterContainer>
			<div>
				<S.Filter
					active={selectedCategory === 'Todos'}
					onClick={() => onCategoryChange('Todos')}
				>
					Todos
				</S.Filter>
				{allCategories.map((category) => (
					<S.Filter
						key={category}
						active={selectedCategory === category}
						onClick={() => onCategoryChange(category)}
					>
						{category}
					</S.Filter>
				))}
			</div>
		</S.FilterContainer>
	);
};

export default CategoryFilter;
