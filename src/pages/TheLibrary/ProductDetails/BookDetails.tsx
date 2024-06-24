import React, { useState } from 'react';
import * as S from './styles';
import { SectionContainer } from '../components/SectionContainer';
import { Breadcrumb } from '../../../components/UI/BreadCrumb/BreadCrumb';
import { useParams } from 'react-router-dom';
import books from '../../../services/database/books';
import { convertCentsToCurrency } from '../../../utils/CurrencyConvert';
import {
	AlertTriangle,
	ArrowRight,
	Minus,
	Plus,
	ShoppingBag,
} from 'react-feather';
import { Button } from '../../../components/UI/Button';
import WhatsappIcon from '../../../assets/WhatsappIcon.svg';
import InputField from '../../../components/Forms/InputField';
import { useShoppingCart } from '../../../contexts/ShoppingCart';
import Cart from '../components/Cart';
import { Book } from '../../../@types';
import ModalCart from '../components/Cart/ModalCart/ModalCart';

const BookDetails = () => {
	const { id } = useParams<{ id: string }>();

	const { addToCart } = useShoppingCart();
	const [isOpen, setOpen] = useState(false);

	const book = books.find((book) => book.id === id);

	const [quantity, setQuantity] = useState(Number(book?.sale.minQuantity));

	const incrementQuantity = () => {
		if (quantity < Number(book?.sale.minQuantity)) {
			setQuantity(quantity + 1);
		}
	};

	const decrementQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleAddCart = (book: Book, quantity: number) => {
		addToCart(book!, quantity);
		setOpen(true);
	};

	return (
		<div>
			<SectionContainer>
				<h1>Todos os Livros</h1>
				<Cart />
			</SectionContainer>
			<Breadcrumb
				routes={[
					{
						title: 'Inicio',
						route: '/',
					},
					{
						title: 'Todos os livros',
						route: '/all-books',
					},
					{
						title: book?.title as string,
						route: `/product-details/${book?.id}`,
					},
				]}
			/>
			<S.Container>
				<S.ImageContainer>
					<img src={book?.image} alt='' />
					<S.OthersImages>
						<img src={book?.image} alt='' />
						<img src={book?.image} alt='' />
						<img src={book?.image} alt='' />
					</S.OthersImages>
				</S.ImageContainer>
				<S.InformationContainer>
					<h1>{book?.title}</h1>
					<S.Price>
						<h2>{convertCentsToCurrency(Number(book?.sale.price))}</h2>
						<p>
							ou 2x {convertCentsToCurrency(Number(book?.sale.price) / 2)} sem
							juros
						</p>
					</S.Price>
					<S.Description>{book?.description}</S.Description>
					<S.Label>
						<h2>Variação</h2>
						<S.Items>
							{book?.variants.map((variant) => (
								<S.VariationsType>{variant}</S.VariationsType>
							))}
						</S.Items>
					</S.Label>
					<S.Label>
						<h2>Cor:</h2>
						<S.Items>
							{book?.color.map((color) => (
								<S.ColorConainer>
									<S.ColorType style={{ backgroundColor: color }} />
								</S.ColorConainer>
							))}
						</S.Items>
					</S.Label>
					<S.Label>
						<h2>Quantidade:</h2>
						<p style={{ display: 'flex', gap: '1rem' }}>
							<AlertTriangle size={15} color='black' />
							Para este produto quantidade mínima é:
						</p>
						<S.QuantityContainer>
							<Minus
								onClick={decrementQuantity}
								style={{ cursor: 'pointer' }}
								size={15}
							/>
							<div>{quantity}</div>
							<Plus
								onClick={incrementQuantity}
								style={{ cursor: 'pointer' }}
								size={15}
							/>
						</S.QuantityContainer>
					</S.Label>
					<S.Label>
						<Button
							intent='terciary'
							style={{ background: 'var(--black)', width: '29rem' }}
							onClick={() => handleAddCart(book!, quantity)}
						>
							<ShoppingBag /> Adicionar à sacola
						</Button>
						<Button
							intent='ghost'
							style={{
								color: '#34A853',
								border: '2px solid #34A853',
								width: '29rem',
							}}
						>
							<img src={WhatsappIcon} alt='Whatsapp Icon' /> Tem alguma dúvida?
						</Button>
					</S.Label>
					<S.Label>
						<h2>Cálculo de frete</h2>
						<S.FreightContainer>
							<InputField
								style={{
									width: '27rem',
									height: '4.3rem',
									paddingLeft: '2rem',
								}}
								label=''
								name=''
								placeholder='Digite seu CEP para calcular'
							/>{' '}
							<Button
								intent='terciary'
								style={{
									width: '6rem',
									height: '4rem',
									padding: '2rem',
									background: 'var(--black)',
								}}
							>
								{' '}
								<ArrowRight />
							</Button>
						</S.FreightContainer>
						<S.FreightOptions>
							<S.Label>
								<h3>Nome do Frete</h3>
								<p>Prazo</p>
							</S.Label>
							<h1>Preço</h1>
						</S.FreightOptions>
					</S.Label>
				</S.InformationContainer>
			</S.Container>
			<ModalCart Open={isOpen} onRequestClose={() => setOpen(false)} />
		</div>
	);
};

export default BookDetails;
