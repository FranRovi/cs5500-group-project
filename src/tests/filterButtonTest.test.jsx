import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from '../components/homepage';

describe('Homepage filter buttons', () => {

    test('renders five filter buttons', () => {
        render(<Homepage />);

        // Define the expected filter button texts
        const filterButtonNames = ['Grayscale', 'Sepia', 'Brightness', 'Contrast', 'None'];

        filterButtonNames.forEach(name => {
            const button = screen.getByRole('button', { name: new RegExp(name, 'i') });
            expect(button).toBeInTheDocument();
        });
    });
});