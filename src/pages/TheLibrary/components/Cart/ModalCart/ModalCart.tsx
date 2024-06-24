import React, { useState } from 'react';
import * as S from '../styles';
import Modal from '../../../../../components/Modal';
import { Minus, Plus, ShoppingBag } from 'react-feather';
import { useShoppingCart } from '../../../../../contexts/ShoppingCart';
import { Book, Mug } from '../../../../../@types';
import { convertCentsToCurrency } from '../../../../../utils/CurrencyConvert';
import { Button } from '../../../../../components/UI/Button';
import QrCode from '../../../../../assets/QrCode.png';

interface CartModalProps {
	Open: boolean;
	onRequestClose: () => void;
}

const ModalCart = ({ Open, onRequestClose }: CartModalProps) => {
	const { cartItems, updateQuantity, removeFromCart, purchase } =
		useShoppingCart();
	const [isPurchaseModalOpen, setPurchaseModalOpen] = useState(false);

	const decrementQuantity = (id: string, quantity: number) => {
		if (quantity > 1) {
			updateQuantity(id, quantity - 1);
		} else {
			removeFromCart(id);
		}
	};

	const incrementQuantity = (
		id: string,
		quantity: number,
		product: Book | Mug
	) => {
		if (quantity >= Number(product.sale.minQuantity)) {
			updateQuantity(id, Number(product.sale.minQuantity));
		} else {
			updateQuantity(id, quantity + 1);
		}
	};

	const calculateTotal = () => {
		let total = 0;
		cartItems.forEach((item) => {
			const price = Number(item.product.sale.price);
			const quantity = item.quantity;
			total += price * quantity;
		});
		return convertCentsToCurrency(total);
	};

	const Finished = () => {
		onRequestClose();
		setPurchaseModalOpen(false);
		purchase();
	};

	return (
		<div>
			<Modal isOpen={Open} enableClose onRequestClose={onRequestClose}>
				<S.ModalContainer>
					<S.HeaderContainer>
						<S.Icon>
							<ShoppingBag />
						</S.Icon>
						<S.TextHeader>
							<h2>Carrinho</h2>
							<p>Certifique-se da sua escolha e finalize a compra</p>
						</S.TextHeader>
					</S.HeaderContainer>
					<S.ContentContainer>
						{cartItems.map((item) => (
							<S.ProductContainer key={item.id}>
								<img src={item.product.image} alt='' />
								<S.InformationProduct>
									{item.product.type === 'book' && (
										<>
											<h1>{item.product.title}</h1>
											<h2>
												{convertCentsToCurrency(
													Number(item.product.sale.price)
												)}
											</h2>
										</>
									)}
									{item.product.type === 'mug' && (
										<>
											<h1>{item.product.name}</h1>
											<h2>
												{convertCentsToCurrency(
													Number(item.product.sale.price)
												)}
											</h2>
										</>
									)}
									<S.QuantityContainer>
										<Minus
											onClick={() => decrementQuantity(item.id, item.quantity)}
											style={{ cursor: 'pointer' }}
											size={15}
										/>
										<div>{item.quantity}</div>
										<Plus
											onClick={() =>
												incrementQuantity(item.id, item.quantity, item.product)
											}
											style={{ cursor: 'pointer' }}
											size={15}
										/>
									</S.QuantityContainer>
								</S.InformationProduct>
							</S.ProductContainer>
						))}
						<S.AllItems>
							<S.LabelItems>
								<h3>Subtotal ({cartItems.length} produtos)</h3>
								<p>{calculateTotal()}</p>
							</S.LabelItems>
							<S.LabelItems>
								<h3>Frete</h3>
								<p>{convertCentsToCurrency(0)}</p>
							</S.LabelItems>
							<S.LabelItems>
								<h3>Total</h3>
								<p style={{ color: 'var(--primary-green)' }}>
									{calculateTotal()}
								</p>
							</S.LabelItems>
						</S.AllItems>
						<S.ButtonsContainer>
							<Button
								onClick={() => setPurchaseModalOpen(true)}
								style={{ width: '27.6rem', height: '3.6rem' }}
							>
								Finalizar Compra
							</Button>
						</S.ButtonsContainer>
					</S.ContentContainer>
				</S.ModalContainer>
			</Modal>
			<Modal
				isOpen={isPurchaseModalOpen}
				enableClose
				onRequestClose={() => setPurchaseModalOpen(false)}
			>
				<S.ModalContainer style={{ width: '32rem' }}>
					<S.HeaderContainer>
						<S.Icon>
							<ShoppingBag />
						</S.Icon>
						<S.TextHeader>
							<h2>Carrinho</h2>
							<p>Finalize sua compra lendo o Qr-Code</p>
						</S.TextHeader>
					</S.HeaderContainer>
					<S.QrCodeContainer>
						<img src={QrCode} alt='' />
						<S.ButtonsContainer>
							<Button
								onClick={Finished}
								style={{ width: '27.6rem', height: '3.6rem' }}
							>
								Fechar
							</Button>
						</S.ButtonsContainer>
					</S.QrCodeContainer>
				</S.ModalContainer>
			</Modal>
		</div>
	);
};

export default ModalCart;
