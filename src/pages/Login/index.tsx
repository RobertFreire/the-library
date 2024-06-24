import React, { useState } from 'react';
import * as S from './styles';
import ImageLogin from '../../assets/LoginGirlCellPhone.png';
import Logo from '../../assets/Logo.svg';
import InputField from '../../components/Forms/InputField';
import { Button } from '../../components/UI/Button';
import { useUser } from '../../contexts/User';

const Login = () => {
	const { login } = useUser();
	const [email, setEmail] = useState('robert@email.com');
	const [password, setPassword] = useState('123456');

	const handleLogin = () => {
		login(email, password);
	};

	return (
		<S.Container>
			<S.LeftContainer>
				<S.MainContentLogin>
					<img src={Logo} />
					<S.BoxLogin>
						<h1>Login da Marca</h1>
						<InputField
							data-testid='email'
							style={{ width: '27.6rem', paddingLeft: '2rem' }}
							label='Email'
							name='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<InputField
							data-testid='password'
							style={{ width: '27.6rem', paddingLeft: '2rem' }}
							label='Senha'
							name='Senha'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Button
							onClick={handleLogin}
							data-testid='submit'
							style={{ width: '27.6rem', height: '3.6rem' }}
						>
							Entrar
						</Button>
						<Button
							intent='ghost'
							style={{ border: '1px solid var(--dark-gray)' }}
							$outline
						>
							Esqueci minha senha
						</Button>
					</S.BoxLogin>
					<p>
						Não possui conta? <a href=''>Clique aqui</a>
					</p>
				</S.MainContentLogin>
				<p>© 2024 BUZZZ MEDIA. All rights reserved</p>
			</S.LeftContainer>
			<S.RightContainer>
				<S.OrangeContainer>
					<div>
						<h1>Bem-vindo(a) de volta ao the Library!</h1>
						<p>Entre com sua conta para utilizar a plataforma</p>
					</div>
					<div>
						<img src={ImageLogin} alt='' />
					</div>
					<div></div>
				</S.OrangeContainer>
			</S.RightContainer>
		</S.Container>
	);
};

export default Login;
