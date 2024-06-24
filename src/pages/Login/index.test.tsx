import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '.';


describe('Login page', () => {
    test('renders email and password fields', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        const emailInput = screen.getByTestId('email');
        const passwordInput = screen.getByTestId('password');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    test('updates email and password fields', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        const emailInput = screen.getByTestId('email');
        const passwordInput = screen.getByTestId('password');

        fireEvent.change(emailInput, { target: { value: 'newemail@email.com' } });
        fireEvent.change(passwordInput, { target: { value: 'newpassword' } });

        expect(emailInput).toHaveValue('newemail@email.com')
        expect(passwordInput).toHaveValue('newpassword');
    });
});
