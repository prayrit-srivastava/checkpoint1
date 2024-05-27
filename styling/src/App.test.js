import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the "toHaveStyle" matcher
import Button from './Button';

test('it has the correct styles', () => {
  const { getByText } = render(<Button label="Click Me" />);
  const button = getByText('Click Me');
  
  // Check if the button has the correct background color
  expect(button).toHaveStyle('background-color: blue');
  
  // Check if the button has the correct text color
  expect(button).toHaveStyle('color: white');
});
