import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '.';

const CONTENT = 'MDOAL CONTENT';
const onRequestCloseCallback = jest.fn();

function renderModal(isOpen = true, enableClose = true) {
	return render(
		<Modal
			enableClose={enableClose}
			isOpen={isOpen}
			onRequestClose={onRequestCloseCallback}
		>
			{CONTENT}
		</Modal>
	);
}

describe('Modal - Component', () => {
	it('should render a modal when isOpen prop is true', async () => {
		renderModal(true);

		expect(screen.getByText(CONTENT)).toBeInTheDocument();
	});

	it('should not render a modal when isOpen prop is false', async () => {
		renderModal(false);

		expect(screen.queryByText(CONTENT)).not.toBeInTheDocument();
	});

	it('should render the exit button when enableClose is true', async () => {
		renderModal();

		expect(screen.getByTestId('close-modal')).toBeInTheDocument();
	});

	it('should not render the exit button when enableClose is false', async () => {
		renderModal(true, false);

		expect(screen.queryByTestId('close-modal')).not.toBeInTheDocument();
	});

	it('should call onRequestClose callback on exit action', async () => {
		renderModal();

		fireEvent.click(screen.getByTestId('close-modal'));

		expect(onRequestCloseCallback).toHaveBeenCalledTimes(1);
	});
});
