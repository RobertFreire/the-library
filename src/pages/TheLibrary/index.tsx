import React from 'react';
import * as S from './styles';
import LibraryRoutes from '../../routes';
import Sidebar from './components/Sidebar';
import { useUser } from '../../contexts/User';
import { Navigate } from 'react-router-dom';

const TheLibrary = () => {
	const {user} = useUser();

	console.log(user)

	if (!user) {
		return <Navigate to="/login" />;
	}

	return (
		<S.Container>
			<Sidebar />
			<S.Content>
				 <LibraryRoutes />
			</S.Content>
		</S.Container>
	);
};

export default TheLibrary;
