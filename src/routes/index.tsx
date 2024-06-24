import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/TheLibrary/Home';
import AllBooks from '../pages/TheLibrary/AllBooks';
import BookDetails from '../pages/TheLibrary/ProductDetails/BookDetails';
import MugDetails from '../pages/TheLibrary/ProductDetails/MugDetails';

const LibraryRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />\
			<Route path='/all-books' element={<AllBooks />} />
			<Route path='/book-details/:id' element={<BookDetails />} />
			<Route path='/mug-details/:id' element={<MugDetails />} />
		</Routes>
	);
};

export default LibraryRoutes;
