import { render, screen } from '@testing-library/react';
import { AppContextProvider } from '../Context/AppContext';

import '@testing-library/jest-dom';
import WelcomePage from '../Components/WelcomePage/WelcomePage';

test('initial conditions', () => {
  render(
    <AppContextProvider>
      <WelcomePage />
    </AppContextProvider>
  );
  const headerElement = screen.getByRole('heading', { level: 1 });
  expect(headerElement).toHaveTextContent('2-BACK TASK');
});
