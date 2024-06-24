import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export function SectionContainer({
	children,
	...rest
}: HTMLAttributes<HTMLDivElement>) {
	return <SectionContainerStyle {...rest}>{children}</SectionContainerStyle>;
}

const SectionContainerStyle = styled.div`
	display: flex;
	justify-content: space-between;
	row-gap: 1rem;
	padding: 2rem 2rem 2rem 0rem;
	border-bottom: 2px solid #e1e6ee;
`;
