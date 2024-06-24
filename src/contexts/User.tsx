import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react';
import { User } from '../@types/index';
import { Navigate, useNavigate } from 'react-router-dom';

interface UserContextType {
	user: User | null;
	login: (email: string, password: string) => void;
	logout: () => void;
}

const initialUser: User | null = null;

const UserContext = createContext<UserContextType>({
	user: initialUser,
	login: () => {},
	logout: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(initialUser);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		setLoading(false);
	}, []);

	const login = (email: string, password: string) => {
		if (email === 'robert@email.com' && password === '123456') {
			const mockUser: User = {
				username: 'Robert F',
				email: 'robert@email.com',
				password: '',
				avatar:
					'https://media.licdn.com/dms/image/C4E03AQFyFlnTZxDpRw/profile-displayphoto-shrink_400_400/0/1646068078703?e=1724889600&v=beta&t=g_YuD9RBlythFTPXubg6uKvSDeJoK5zj8rL8FGxTbmU',
			};
			setUser(mockUser);
			localStorage.setItem('user', JSON.stringify(mockUser));
			navigate('/');
		} else {
			setUser(null);
			console.log('Login failed');
		}
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem('user');
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};
