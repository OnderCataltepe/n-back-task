import { render, screen, fireEvent } from '@testing-library/react';
import Results from '../Components/Result/Results';
import '@testing-library/jest-dom';
const resultValues = {
  results: {
    correctNumber: 0,
    wrongNumber: 0,
    totalNumber: 7,
    correctTimes: [],
    wrongTimes: []
  }
};
const pageValues = {
  pageState: {
    trial: false,
    ready: false,
    real: false,
    result: true
  }
};

test('render', () => {
  render(<Results resultValues={resultValues} pageValues={pageValues} />);

  const resultButton = screen.getByRole('button', { name: 'Show The Result' });
  fireEvent.click(resultButton);

  const title = screen.getByRole('heading', { level: 3 });
  expect(title).toHaveTextContent('Result');
});
