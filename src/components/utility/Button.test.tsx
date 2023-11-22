import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders with danger variant and small size', () => {
    render(
      <Button variant="danger" size="sm">
        Click Me
      </Button>
    );
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toHaveClass('bg-red-500 hover:bg-red-700 py-1 px-2');
  });

  test('renders with success variant and medium size', () => {
    render(
      <Button variant="success" size="md">
        Click Me
      </Button>
    );
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toHaveClass(
      'bg-slate-500 hover:bg-slate-700 py-2 px-4'
    );
  });

  test('renders with neutral variant and large size', () => {
    render(
      <Button variant="neutral" size="lg">
        Click Me
      </Button>
    );
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toHaveClass(
      'bg-slate-500 hover:bg-slate-700 py-4 px-8'
    );
  });

  test('renders with default props', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toHaveClass(
      'bg-slate-500 hover:bg-slate-700 py-1 px-2'
    );
  });
});
