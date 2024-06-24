import React, { useState } from 'react';
import { SectionContainer } from '../components/SectionContainer';
import SearchBox from '../../../components/UI/SearchBox';
import * as S from './styles';
import { Carousel } from '../../../components/UI/Carrosel/Carousel';
import DespertarLideranca from '../../../assets/Carousel/DespertarLiderança.png';
import CruzeiroAmor from '../../../assets/Carousel/CruzeirodoAmor.png';
import SeEuTivesseDitoAEla from '../../../assets/Carousel/SeEuTivesseDitoAEla.png';
import Promotion from '../../../assets/Promotion.png';
import Product from '../components/Product';
import books from '../../../services/database/books';
import CategoryFilter from '../components/CategoryFilter';
import Mugs from '../../../services/database/mug';
import Cart from '../components/Cart';

const CarouselImages = [
	{
		id: 1,
		image: DespertarLideranca,
	},
	{
		id: 2,
		image: CruzeiroAmor,
	},
	{
		id: 2,
		image: SeEuTivesseDitoAEla,
	},
];

const AllBooks = () => {
	const [selectedCategory, setSelectedCategory] = useState('Todos');
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredBooks, setFilteredBooks] = useState(books);

	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category);
	};

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const query = event.target.value;
		setSearchQuery(query.toLowerCase());

		if (query) {
			setFilteredBooks(
				books.filter((book) => book.title.toLowerCase().includes(query))
			);
		} else {
			setFilteredBooks(books);
		}
	};

	const CategorySelected = () => {
		return (
			<S.ProductsContainer id='livros'>
				<S.BooksContainer>
					{books
						.filter((book) => book.categories.includes(selectedCategory))
						.map((book) => (
							<Product key={book.id} book={book} />
						))}
				</S.BooksContainer>
			</S.ProductsContainer>
		);
	};

	const isSearching = searchQuery.length > 0;

	return (
		<div>
			<SectionContainer>
				<h1>Todos os Livros</h1>
				<Cart />
			</SectionContainer>

			<S.Container>
				<SearchBox value={searchQuery} onChange={handleSearchChange} />
				{!searchQuery && selectedCategory === 'Todos' && (
					<S.FrontCover>
						<Carousel
							interval={8000}
							currentIndex={CarouselImages.findIndex((index) => index.id)}
							content={CarouselImages.map((content) => (
								<S.FrontCover>
									<img key={content.id} src={content.image}></img>
								</S.FrontCover>
							))}
						/>
					</S.FrontCover>
				)}

				{isSearching && (
					<S.ProductsContainer id='search-results'>
						<h1>Resultados da Pesquisa</h1>
						<S.BooksContainer>
							{filteredBooks.map((book) => (
								<Product key={book.id} book={book} />
							))}
						</S.BooksContainer>
					</S.ProductsContainer>
				)}

				{!searchQuery && selectedCategory !== 'Todos' && (
					<S.BannerCategory>{`/${selectedCategory}`}</S.BannerCategory>
				)}

				{!searchQuery && (
					<CategoryFilter
						selectedCategory={selectedCategory}
						onCategoryChange={handleCategoryChange}
					/>
				)}
				{!searchQuery && selectedCategory === 'Todos' ? (
					<>
						<S.ProductsContainer id='livros'>
							<h1>Novidades </h1>
							<S.BooksContainer>
								{books
									.filter((book) => book.newness)
									.map((book) => (
										<Product book={book} />
									))}
							</S.BooksContainer>
						</S.ProductsContainer>

						<S.Promotion>
							<div>CONHEÇA NOSSO NOVO LIVRO</div>
							<img src={Promotion} alt='Promotion'></img>
						</S.Promotion>

						<S.ProductsContainer id='promocoes'>
							<h1>Promoções </h1>
							<S.BooksContainer>
								{books
									.filter((book) => !book.newness)
									.map((book) => (
										<Product book={book} />
									))}
							</S.BooksContainer>
						</S.ProductsContainer>
						<S.ProductsContainer id='canecas'>
							<h1>Canecas </h1>
							<S.BooksContainer>
								{Mugs.map((mug) => (
									<Product mug={mug} />
								))}
							</S.BooksContainer>
						</S.ProductsContainer>
					</>
				) : (
					<CategorySelected />
				)}
			</S.Container>
		</div>
	);
};

export default AllBooks;
