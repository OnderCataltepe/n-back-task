import { render, screen, act } from '@testing-library/react';
import { AppContextProvider } from '../Context/AppContext';
import Trial from '../Components/Trial/Trial';
import '@testing-library/jest-dom';
import { EXAMPLE_SET } from '../Constants/index';

test('visibility of letter set', () => {
  vi.useFakeTimers();
  render(
    <AppContextProvider>
      <Trial set={EXAMPLE_SET} />
    </AppContextProvider>
  );
  act(() => {
    vi.advanceTimersByTime(300);
  });
  const letter = screen.getByTestId('custom-paragraph');
  expect(letter).not.toHaveClass('invisible');
  act(() => {
    vi.advanceTimersByTime(2000);
  });

  expect(letter).toHaveClass('invisible');
});
