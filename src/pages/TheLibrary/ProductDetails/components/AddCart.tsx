import React, { useState } from 'react';
import { Button } from '../../../../components/UI/Button';
import { ShoppingBag } from 'react-feather';
import Modal from '../../../../components/Modal';

const AddCart = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<div>
			<Button
				intent='terciary'
                onClick={() => setOpen(true)}
				style={{ background: 'var(--black)', width: '29rem' }}
			>
				<ShoppingBag /> Adicionar à sacola
			</Button>
			<Modal enableClose isOpen={isOpen} onRequestClose={() => setOpen(false)}>
                <div>Oiii</div>
            </Modal>
		</div>
	);
};

export default AddCart;
