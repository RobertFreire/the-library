import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { GlobalTheme } from './styles/GlobalTheme';
import Home from './pages/TheLibrary/Home';
import TheLibrary from './pages/TheLibrary';
import { ShoppingCartProvider } from './contexts/ShoppingCart';
import { UserProvider } from './contexts/User';

function App() {
	return (
		<>
			<UserProvider>
				<ShoppingCartProvider>
					<GlobalTheme />
					<Routes>
						<Route path='/login' element={<Login />} />
						<Route path='/*' element={<TheLibrary />} />
					</Routes>
				</ShoppingCartProvider>
			</UserProvider>
		</>
	);
}

export default App;
