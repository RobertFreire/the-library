import React, { useState } from 'react';
import * as S from './styles';
import { SectionContainer } from '../components/SectionContainer';
import { Breadcrumb } from '../../../components/UI/BreadCrumb/BreadCrumb';
import { useLocation, useParams } from 'react-router-dom';
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
import Mugs from '../../../services/database/mug';
import ModalCart from '../components/Cart/ModalCart/ModalCart';
import { useShoppingCart } from '../../../contexts/ShoppingCart';
import { Mug } from '../../../@types';
import Cart from '../components/Cart';

const MugDetails = () => {
	const { id } = useParams<{ id: string }>();

	const mug = Mugs.find((mug) => mug.id === id);

	const [quantity, setQuantity] = useState(Number(mug?.sale.minQuantity));
	const [isOpen, setOpen] = useState(false);
	const { addToCart } = useShoppingCart();

	const incrementQuantity = () => {
		if (quantity < Number(mug?.sale.minQuantity)) {
			setQuantity(quantity + 1);
		}
	};

	const decrementQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleAddCart = (mug: Mug, quantity: number) => {
		addToCart(mug!, quantity);
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
						title: mug?.name as string,
						route: `/mug-details/${mug?.id}`,
					},
				]}
			/>
			<S.Container>
				<S.ImageContainer>
					<img src={mug?.image} alt='' />
					<S.OthersImages>
						<img src={mug?.image} alt='' />
						<img src={mug?.image} alt='' />
						<img src={mug?.image} alt='' />
					</S.OthersImages>
				</S.ImageContainer>
				<S.InformationContainer>
					<h1>{mug?.name}</h1>
					<S.Price>
						<h2>{convertCentsToCurrency(Number(mug?.sale.price))}</h2>
						<p>
							ou 2x {convertCentsToCurrency(Number(mug?.sale.price) / 2)} sem
							juros
						</p>
					</S.Price>
					<S.Description>{mug?.description}</S.Description>
					<S.Label>
						<h2>Cor:</h2>
						<S.Items>
							<S.ColorConainer>
								<S.ColorType style={{ backgroundColor: mug?.color }} />
							</S.ColorConainer>
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
							onClick={() => handleAddCart(mug!, quantity)}
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

export default MugDetails;
