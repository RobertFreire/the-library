import { useState } from 'react';
import styled from 'styled-components';

interface CarouselProps {
	content: JSX.Element[];
	currentIndex: number;
	onChange?: (index: number) => void;
	interval?: number;
}

export function Carousel({ content, currentIndex, interval }: CarouselProps) {
	const [autoPlay, setAutoPlay] = useState<number>(currentIndex);

	const changeSlide = () => {
		const nextIndex = (autoPlay + 1) % content.length;
		setAutoPlay(nextIndex);
		const time = setTimeout(changeSlide, interval);
		clearTimeout(time);
	};

	setTimeout(changeSlide, interval);

	return (
		<Container>
			<CarouselContainer>
				<ContentContainer>{content[autoPlay]}</ContentContainer>
			</CarouselContainer>

			<div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
				{Array.from({ length: content.length }).map((_, i) => (
					<Dot key={i} active={i === autoPlay ? 'true' : 'false'} />
				))}
			</div>
		</Container>
	);
}

export const Container = styled.div`
	display: grid;
	row-gap: 1rem;
	justify-items: center;
`;
export const CarouselContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;
`;
export const ActionButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 6rem;
	height: 6rem;
	background: none;
	& > svg {
		width: 100%;
		height: 100%;
		color: var(--primary-blue);
	}
`;
export const ContentContainer = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
`;
export const Dot = styled.div<{ active: string }>`
	width: ${({ active }) => (active === 'true' ? '.8rem' : '0.6rem')};
	height: ${({ active }) => (active === 'true' ? '.8rem' : '0.6rem')};
	border-radius: 50%;
	transition: all 0.1s;
	background-color: ${({ active }) =>
		active === 'true' ? 'var(--primary-green)' : 'var(--dark-gray)'};
`;
