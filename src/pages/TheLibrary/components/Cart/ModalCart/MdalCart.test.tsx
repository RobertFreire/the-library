import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalCart from './ModalCart';
import {
	ShoppingCartProvider,
	useShoppingCart,
} from '../../../../../contexts/ShoppingCart';
import { Book } from '../../../../../@types';

const mockBookItem: Book = {
	id: '1',
	type: 'book',
	author: 'author',
	title: 'Example Book',
	description: 'description',
	categories: ['Fiction'],
	image: 'example.jpg',
	color: ['black'],
	variants: ['ebook'],
	sale: {
		price: '1000',
		minQuantity: '1',
	},
};

const TestComponent = () => {
	const { addToCart } = useShoppingCart();

	const handleAddToCart = () => {
		addToCart(mockBookItem, 1);
	};

	return (
		<div>
			<button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
			<ModalCart Open={true} onRequestClose={() => {}} />
		</div>
	);
};

describe('ModalCart', () => {
	test('displays the correct price in the modal', () => {
		render(
			<ShoppingCartProvider>
				<TestComponent />
			</ShoppingCartProvider>
		);

		const AddedCart = screen.getByText('Adicionar ao Carrinho');
		fireEvent.click(AddedCart);
		const BookName = screen.getByText('Example Book');
		expect(BookName).toBeInTheDocument();
	});

	test('opens purchase modal when "Finalizar Compra" button is clicked', () => {
		render(
			<ShoppingCartProvider>
				<TestComponent />
			</ShoppingCartProvider>
		);

		const AddedCart = screen.getByText('Adicionar ao Carrinho');
		fireEvent.click(AddedCart);
		const finished = screen.getByText('Finalizar Compra');
		fireEvent.click(finished);

		const purchaseModalContent = screen.getByText(
			'Finalize sua compra lendo o Qr-Code'
		);
		expect(purchaseModalContent).toBeInTheDocument();
	});
});
