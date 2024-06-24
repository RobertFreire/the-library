import React, { ComponentType, useState, MouseEvent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-feather';

interface ContainerProps {
	$current_page: boolean;
	$isOpen?: boolean;
}

interface Props {
	Icon: ComponentType;
	title: string;
	currentPage: boolean;
	path: string;
	subLinks?: { title: string; path: string }[];
}

const SidebarLink = ({ Icon, title, currentPage, path, subLinks }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	const handleSubLinkClick = (e: MouseEvent, subLinkPath: string) => {
		e.preventDefault();
		window.location.hash = subLinkPath;
		const element = document.getElementById(subLinkPath);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<Container>
			<LinkContainer
				to={path}
				$current_page={currentPage}
				onClick={toggleAccordion}
				$isOpen={isOpen}
			>
				<div>
					<Icon /> <p>{title}</p>
				</div>
				{subLinks && (
					<div className='arrow'>
						<ChevronRight color='black' />
					</div>
				)}
			</LinkContainer>
			{isOpen && subLinks && (
				<SubLinkContainer>
					{subLinks.map((subLink) => (
						<SubLink
							key={subLink.path}
							$current_page={window.location.hash === `#${subLink.path}`}
							onClick={(e) => handleSubLinkClick(e, subLink.path)}
						>
							{subLink.title}
						</SubLink>
					))}
				</SubLinkContainer>
			)}
		</Container>
	);
};

export default SidebarLink;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.5rem;
`;

const LinkContainer = styled(Link)<ContainerProps>`
	display: flex;
	justify-content: space-between;
	font-size: 1.4rem;
	font-weight: 600;
	color: ${({ $current_page }) =>
		$current_page ? 'var(--primary-orange)' : 'var(--black)'};
	text-decoration: none;
	cursor: pointer;
	width: 100%;

	& > div {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	& svg {
		width: 15px;
		height: 15px;
	}

	& .arrow {
		& svg {
			transform: ${({ $isOpen }) => $isOpen ? 'rotateZ(90deg)' : 'rotate(0deg)'}
		}
	}

	&:hover {
		color: var(--primary-orange);
	}
`;

const SubLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
`;

const SubLink = styled.div<ContainerProps>`
	color: ${({ $current_page }) =>
		$current_page ? 'var(--primary-orange)' : 'var(--black)'};
	text-decoration: none;
	cursor: pointer;
	padding: 0.5rem;
	margin-left: 4rem;
	border-radius: 0.6rem;
	font-size: 1.4rem;
	&:hover {
		color: var(--primary-orange);
		background: var(--light-gray2);
	}
`;
