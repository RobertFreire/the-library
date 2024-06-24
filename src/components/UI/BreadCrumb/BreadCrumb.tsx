import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-feather';

interface Props {
	routes: {
		title: string;
		route: string;
	}[];
}

export function Breadcrumb({ routes }: Props) {
	return (
		<BreadcrumbContainer>
			{routes.map((item, index) => (
				<React.Fragment key={item.route}>
					{index > 0 && <ChevronRight />}
					<BreadcrumbLink
						to={item.route}
						$isActualRoute={index === routes.length - 1}
					>
						{item.title}
					</BreadcrumbLink>
				</React.Fragment>
			))}
		</BreadcrumbContainer>
	);
}

const BreadcrumbContainer = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.4rem;
	width: fit-content;
	& > svg {
		width: 1rem;
		height: 1rem;
	}

	@media (max-width: 650px) {
		display: none;
	}
`;

const BreadcrumbLink = styled(Link)<{ $isActualRoute: boolean }>`
	font-weight: ${(props) => (props.$isActualRoute ? 700 : 'normal')} !important;
	color: var(--dark-gray2);
	line-height: 16px;
`;
