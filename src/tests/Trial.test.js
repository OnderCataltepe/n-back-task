import { render, screen, fireEvent, act } from '@testing-library/react';
import Trial from '../Components/Trial/Trial';
import '@testing-library/jest-dom';
const exampleSet = ['A', 'L', 'A'];
const resultValues = { correctNumber: 0 };
const pageValues = {
  pageState: {
    trial: true,
    ready: false,
    real: false,
    result: false
  }
};

test('changing border color when user click div', () => {
  jest.useFakeTimers();
  render(<Trial resultValues={resultValues} pageValues={pageValues} set={exampleSet} />);

  act(() => {
    jest.advanceTimersByTime(1000);
  });
  const clickableDiv = screen.getByTestId('custom-element');
  fireEvent.click(clickableDiv);
  expect(clickableDiv).toHaveClass('red');
});

test('visibility of letter set', () => {
  jest.useFakeTimers();
  render(<Trial resultValues={resultValues} pageValues={pageValues} set={exampleSet} />);
  act(() => {
    jest.advanceTimersByTime(300);
  });
  const letter = screen.getByTestId('custom-paragraph');
  expect(letter).not.toHaveClass('invisible');
  act(() => {
    jest.advanceTimersByTime(2000);
  });

  expect(letter).toHaveClass('invisible');
});
