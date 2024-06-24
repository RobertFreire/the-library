import React from 'react';
import * as S from './styles';
import { Book, Mug } from '../../../../@types';
import { useNavigate } from 'react-router-dom';
import { convertCentsToCurrency } from '../../../../utils/CurrencyConvert';

interface ProductProps {
	book?: Book;
	mug?: Mug;
}

const Product: React.FC<ProductProps> = ({ book, mug }) => {
	const navigate = useNavigate();

	const handleProductDetails = () => {
		if (book) {
			navigate(`/book-details/${book?.id}`);
		} else {
			navigate(`/mug-details/${mug?.id}`);
		}
	};

	return (
		<S.ProductContainer onClick={handleProductDetails}>
			{book && book.newness && <S.TagContainer>Novidade</S.TagContainer>}
			{book && (
				<>
					<S.ImageContainer>
						<img src={book.image} alt={book.title} />
					</S.ImageContainer>
					<S.ProductInformation>
						<p>{book.title}</p>
						<span>{convertCentsToCurrency(Number(book.sale.price))}</span>
					</S.ProductInformation>
				</>
			)}
			{mug && (
				<>
					<S.ImageContainer>
						<img src={mug.image} alt='Mug' />
					</S.ImageContainer>
					<S.ProductInformation>
						<p>{mug.name}</p>
						<span>{convertCentsToCurrency(Number(mug.sale.price))}</span>
					</S.ProductInformation>
				</>
			)}
		</S.ProductContainer>
	);
};

export default Product;
