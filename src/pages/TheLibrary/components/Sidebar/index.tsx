import React from 'react';
import * as S from './styles';
import Logo from '../../../../assets/Logo.svg';
import { Home, Bell, Book, Settings, Code } from 'react-feather';
import SidebarLink from './components/SidebarLink';
import { useLocation } from 'react-router-dom';
import { useUser } from '../../../../contexts/User';

const Sidebar = () => {
	const { pathname } = useLocation();

	const { user } = useUser();

	return (
		<S.SidebarContainer>
			<div>
				<S.LogoContainer>
					<img src={Logo} alt='' />
				</S.LogoContainer>
				<S.ContentContainer>
					<SidebarLink
						title='Home'
						Icon={Home}
						path='/'
						currentPage={pathname === '/'}
					/>
					<SidebarLink
						title='Notificações'
						Icon={Bell}
						path='/notification'
						currentPage={pathname.includes('/notification')}
					/>
					<SidebarLink
						title='Todos os Livros'
						Icon={Book}
						path='/all-books'
						currentPage={pathname.includes('/all-books')}
						subLinks={[
							{ title: 'Livros', path: 'livros' },
							{ title: 'Promoções', path: 'promocoes' },
							{ title: 'Acessórios', path: 'acessorios' },
							{ title: 'Canecas', path: 'canecas' },
						]}
					/>
					<SidebarLink
						title='Configurações'
						Icon={Settings}
						path='/settings'
						currentPage={pathname.includes('/settings')}
					/>
				</S.ContentContainer>
			</div>
			<S.ProfileContainer>
				<img
					src={user?.avatar}
					alt=''
				/>
				<p>{user?.username}</p>
				<Code />
			</S.ProfileContainer>
		</S.SidebarContainer>
	);
};

export default Sidebar;
