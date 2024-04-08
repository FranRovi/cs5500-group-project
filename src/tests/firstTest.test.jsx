import React from 'react';
import { render, screen } from '@testing-library/react';
import Aboutus from '../components/aboutus';

describe('Aboutus component', () => {
  test('renders page title and content', () => {
    render(<Aboutus />);
    
    // Check if page title is rendered
    const titleElement = screen.getByText(/Creative Simplicity/i);
    expect(titleElement).toBeInTheDocument();

    // Check if content paragraph is rendered
    const contentElement = screen.getByText(/Pixel Creation is a groundbreaking AI generative platform/i);
    expect(contentElement).toBeInTheDocument();
  });

  test('renders header element', () => {
    render(<Aboutus />);
    const headerElement = screen.getByTestId("header-container");
    expect(headerElement).toBeInTheDocument();
  });

  test('renders content element', () => {
    render(<Aboutus />);
    const contentElement = screen.getByTestId('content-container');
    expect(contentElement).toBeInTheDocument();
  });

  test('renders specific text within content', () => {
    render(<Aboutus />);
    const specificTextElement = screen.getByText(/Our platform is designed with a singular focus/i);
    expect(specificTextElement).toBeInTheDocument();
  });

  test('header and content have correct CSS classes', () => {
    render(<Aboutus />);
    const headerElement = screen.getByTestId('header-container');
    expect(headerElement).toHaveClass('header-container');

    const contentElement = screen.getByTestId('content-container');
    expect(contentElement).toHaveClass('content-container');
  });

  test('component has correct structure', () => {
    render(<Aboutus />);
    const headerElement = screen.getByTestId('header-container');
    const titleElement = screen.getByText(/Creative Simplicity/i);
    const contentElement = screen.getByTestId('content-container');
    const contentParagraphElement = screen.getByText(/Pixel Creation is a groundbreaking AI generative platform/i);

    expect(headerElement).toContainElement(titleElement);
    expect(contentElement).toContainElement(contentParagraphElement);
  });
});
