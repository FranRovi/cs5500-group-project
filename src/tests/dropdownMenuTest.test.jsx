import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from '../components/homepage';

// test checks that language dropdown button is render in homepage component
describe('Homepage component', () => {
  test('renders language button', () => {
    render(<Homepage />);
    
    const button = screen.getByTestId("languageBtn");
    expect(button).toBeInTheDocument()
  });
});
