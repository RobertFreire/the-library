import React, { useState } from 'react';
import { Minus, Plus, ShoppingBag } from 'react-feather';
import * as S from './styles';
import Modal from '../../../../components/Modal';
import { useShoppingCart } from '../../../../contexts/ShoppingCart';
import { convertCentsToCurrency } from '../../../../utils/CurrencyConvert';
import { Book, Mug } from '../../../../@types';
import ModalCart from './ModalCart/ModalCart';

const Cart = () => {
	const [isOpen, setOpen] = useState(false);
	const { cartItems } = useShoppingCart();

	return (
		<div>
			<S.CartContainer data-testid='Cart' onClick={() => setOpen(true)}>
				<ShoppingBag />
				{cartItems.length > 0 && <S.ItemsCart>{cartItems.length}</S.ItemsCart>}
			</S.CartContainer>

			<ModalCart onRequestClose={() => setOpen(false)} Open={isOpen} />
		</div>
	);
};

export default Cart;
