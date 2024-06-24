import { X } from 'react-feather';
import ReactModal from 'react-modal';
import * as S from './styles';
import { ReactNode } from 'react';

interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
	enableClose: boolean;
	onRequestClose(
		event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
	): void;
	parentId?: string;
}

const Modal = ({
	isOpen,
	onRequestClose,
	enableClose,
	children,
	parentId: parent,
}: ModalProps) => {
	// Change default Modal styles
	ReactModal.defaultStyles = {
		...ReactModal.defaultStyles,
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(122, 122, 122, 0.685)',
		},
	};

	return (
		<S.Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			shouldCloseOnEsc={false}
			shouldCloseOnOverlayClick={enableClose}
			ariaHideApp={false}
			parentSelector={() => document.body}
			
		>
			{enableClose && (
				<S.CloseModalBtn onClick={onRequestClose} data-testid='close-modal'>
					<X size={20} />
				</S.CloseModalBtn>
			)}
			{children}
		</S.Modal>
	);
};

export default Modal;
