import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ShoppingCartProvider } from '../../../../contexts/ShoppingCart';
import Cart from '.';

describe('Cart', () => {
  test('opens modal when cart icon is clicked', () => {
    render(
      <ShoppingCartProvider>
        <Cart />
      </ShoppingCartProvider>
    );

    const cartIcon = screen.getByTestId('Cart');
    fireEvent.click(cartIcon);

    const modalContent = screen.getByText(
      'Certifique-se da sua escolha e finalize a compra'
    );
    expect(modalContent).toBeInTheDocument();
  });
});
