import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/navbar';

describe('Navbar component', () => {

    test('renders navbar toggler button', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // check if the navbar toggler button is present
        const navbarToggler = screen.getByRole('button', { name: 'Toggle navigation' });
        expect(navbarToggler).toBeInTheDocument();
    });
});