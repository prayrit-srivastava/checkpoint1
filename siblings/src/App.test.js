import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Parent from './Parent';

test('SiblingB has access to the name state updated by SiblingA', () => {
  render(<Parent />);

  // Get the input element from SiblingA
  const inputElement = screen.getByPlaceholderText('Enter name');

  // Simulate typing in the input element
  fireEvent.change(inputElement, { target: { value: 'John Doe' } });

  // Check if SiblingB displays the updated name
  expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
});
