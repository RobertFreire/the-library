import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Roundness, getBorderRadius } from '../../../styles/GlobalTheme';
import { Link } from 'react-router-dom';


interface ButtonStylesProps {
	intent?: 'primary' | 'secondary' | 'terciary' | 'link' | 'ghost';
	roundness?: Roundness;
	$outline?: boolean;
	width?: 'full' | 'adjusted' | 'contain';
}

interface Props
	extends ButtonStylesProps,
		ButtonHTMLAttributes<HTMLButtonElement> {
	as?: 'button' | 'link';
	to?: string | { pathname: string; state: any };
	loading?: boolean;
	iconRight?: JSX.Element;
	iconLeft?: JSX.Element;
	state?: any;
}

const getThemeColors = (intent: ButtonStylesProps['intent']) => {
	if (intent === 'primary') return 'var(--primary-green)';
	if (intent === 'secondary') return 'var(--primary-orange)';

	return 'var(--dark-gray2)';
};

const getBackgroundColor = (props: ButtonStylesProps, hover = false) => {
	if (hover) {
		if (props.$outline) {
			return getThemeColors(props.intent);
		}
		if (props.intent === 'ghost') return 'rgba(236, 236, 236, 1)';
		if (props.intent === 'primary') return 'var(--primary-green)';
		if (props.intent === 'secondary') return 'var(--primary-orange)';
		if (props.intent === 'terciary') return 'rgb(46, 46, 46)';
	}

	if (props.$outline || props.intent === 'ghost') return 'transparent';
	return getThemeColors(props.intent);
};

const getColor = (props: ButtonStylesProps) => {
	if (props.intent === 'ghost') return 'var(--dark-gray)';
	if (!props.$outline && props.intent !== 'link') return 'var(--white)';

	return getThemeColors(props.intent);
};

export function Button({
	as = 'button',
	to,
	intent = 'primary',
	roundness = 'md',
	width = 'adjusted',

	loading = false,
	iconRight,
	iconLeft,
	children,
	disabled,
	...rest
}: Props) {
	const Content = () => {
		return (
			<>
				{iconLeft} {children} {iconRight}
			</>
		);
	};

	const Component = (props: Props) => {
		if (as === 'link' && to)
			return (
				<RouterLinkComponentStyle to={to} {...props}>
					{iconLeft}
					{props.children}
					{iconLeft}
				</RouterLinkComponentStyle>
			);
		return (
			<ButtonComponentStyle {...props}>{props.children}</ButtonComponentStyle>
		);
	};

	return (
		<Component
			intent={intent}
			roundness={roundness}
			width={width}
			disabled={loading || disabled}
			{...rest}
		>
			<Content />
		</Component>
	);
}

const ButtonBaseStyle = css<Props>`
	width: ${(props) => (props.width === 'full' ? '100%' : 'fit-content')};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${(props) =>
		props.width === 'adjusted' ? '1.2rem 4rem' : '1.2rem'};
	font-size: 1.4rem;
	font-weight: 500;
	letter-spacing: 0.1px;
	transition: all 0.3s ease;
	column-gap: 1rem;
	color: ${(props) => getColor(props)};
	background-color: ${(props) => getBackgroundColor(props)};
	${(props) =>
		props.intent !== 'ghost' &&
		`
    border: 2px solid ${getThemeColors(props.intent || 'primary')};
  `}
	border-radius: ${(props) => getBorderRadius(props.roundness!)};
	& > svg {
		width: ${(props) => (props.intent === 'ghost' ? '2.6rem' : '2rem')};
		height: ${(props) => (props.intent === 'ghost' ? '2.6rem' : '2rem')};
	}
`;

const BaseHoverStyle = css<Props>`
	background-color: ${(props) =>
		props.intent === 'primary' ? 'var(--dark-blue)' : 'var(--dark-red)'};
	background-color: ${(props) => getBackgroundColor(props, true)};
	color: ${(props) =>
		props.intent !== 'ghost' ? 'var(--white)' : 'var(--primary-green)'};

	filter: none;
`;

const LinkBaseStyle = css<Props>`
	color: ${(props) => getColor(props)};
	border-bottom: 2px solid ${(props) => getColor(props)};
	display: flex;
	align-items: center;
	column-gap: 1rem;
	background-color: transparent;
`;

const ButtonComponentStyle = styled.button<Props>`
	${(props) => (props.intent === 'link' ? LinkBaseStyle : ButtonBaseStyle)}

	&:enabled:hover {
		${(props) => props.intent !== 'link' && BaseHoverStyle}
	}
`;
const RouterLinkComponentStyle = styled(Link)<Props>`
	${(props) => (props.intent === 'link' ? LinkBaseStyle : ButtonBaseStyle)}

	&:hover {
		${(props) => props.intent !== 'link' && BaseHoverStyle}
	}
`;

