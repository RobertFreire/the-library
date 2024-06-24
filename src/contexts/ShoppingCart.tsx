import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react';
import { Book, Mug } from '../@types';

export type CartItem = {
	id: string;
	product: Book | Mug;
	quantity: number;
};

type ShoppingCartContextType = {
	cartItems: CartItem[];
	addToCart: (item: Book | Mug, quantity: number) => void;
	removeFromCart: (itemId: string) => void;
	updateQuantity: (itemId: string, newQuantity: number) => void;
    purchase: () => void;
};

const loadCartFromLocalStorage = (): CartItem[] => {
	const cartItemsString = localStorage.getItem('cartItems');
	if (cartItemsString) {
		return JSON.parse(cartItemsString);
	}
	return [];
};

const saveCartToLocalStorage = (cartItems: CartItem[]) => {
	localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const ShoppingCartContext = createContext<ShoppingCartContextType>({
	cartItems: [],
	addToCart: () => {},
	removeFromCart: () => {},
	updateQuantity: () => {},
    purchase: () => {}
});

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>(
		loadCartFromLocalStorage
	);

	useEffect(() => {
		saveCartToLocalStorage(cartItems);
	}, [cartItems]);

	const addToCart = (item: Book | Mug, quantity: number) => {
		const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

		if (existingItem) {
			const updatedItems = cartItems.map((cartItem) =>
				cartItem.id === item.id
					? { ...cartItem, quantity: cartItem.quantity + quantity }
					: cartItem
			);
			setCartItems(updatedItems);
		} else {
			setCartItems([...cartItems, { id: item.id, product: item, quantity }]);
		}
	};

	const removeFromCart = (itemId: string) => {
		const updatedItems = cartItems.filter((item) => item.id !== itemId);
		setCartItems(updatedItems);
	};

	const updateQuantity = (itemId: string, newQuantity: number) => {
		const updatedItems = cartItems.map((item) =>
			item.id === itemId ? { ...item, quantity: newQuantity } : item
		);
		setCartItems(updatedItems);
	};
    const purchase = () => {
        setCartItems([]);
    }

	const contextValue: ShoppingCartContextType = {
		cartItems,
		addToCart,
		removeFromCart,
		updateQuantity,
        purchase
	};

	return (
		<ShoppingCartContext.Provider value={contextValue}>
			{children}
		</ShoppingCartContext.Provider>
	);
};

export const useShoppingCart = () => {
	return useContext(ShoppingCartContext);
};
