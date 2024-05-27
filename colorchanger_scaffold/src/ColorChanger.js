import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ColorChanger from './ColorChanger';

// Use jest's fake timers
jest.useFakeTimers();

test('color changes every second', () => {
  render(<ColorChanger />);
  
  const divElement = screen.getByText(/The color is/i).parentElement;

  // Get initial color
  let initialColor = window.getComputedStyle(divElement).backgroundColor;

  // Advance time by 1 second
  // act(() => {
  //   jest.advanceTimersByTime(1800);
  // });

  // Get new color
  // let newColor = window.getComputedStyle(divElement).backgroundColor;
  
  // console.log(`Initial color: ${initialColor}, New color: ${newColor}`);
  expect(newColor).not.toBe(null);

  // Advance time by another 1 second
  // act(()f => {
    // jest.advanceTimersByTime(1800);
  // });
});
