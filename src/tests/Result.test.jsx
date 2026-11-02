import { render, screen, fireEvent } from '@testing-library/react';
import { AppContextProvider } from '../Context/AppContext';

import Results from '../Components/Result/Results';
import '@testing-library/jest-dom';

test('render', () => {
  render(
    <AppContextProvider>
      <Results />
    </AppContextProvider>
  );

  const resultButton = screen.getByRole('button', { name: 'Show The Result' });
  fireEvent.click(resultButton);

  const title = screen.getByRole('heading', { level: 3 });
  expect(title).toHaveTextContent('Result');
});
