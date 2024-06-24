type Book = {
	id: string;
	title: string;
	description: string;
	categories: string[];
	author: string;
	image: string;
	color: string[];
	variants: string[];
	newness?: boolean
	sale: {
		minQuantity: string;
		price: string;
	};
	type: 'book';
};

type Mug = {
	id: string;
	name: string;
	image: string;
	description: string;
	specification: string;
	color: string;
	sale: {
		minQuantity: string;
		price: string;
	};
	type: 'mug';
}

type User = {
	username: string;
	email: string;
	password: string;
	avatar: string;
  }

export type { Book, Mug, User };
