import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import WelcomePage from '../Components/WelcomePage/WelcomePage';

const pageState = {
  container: true,
  welcome: true,
  info: false,
  trial: false,
  ready: false,
  real: false,
  result: false
};

test('initial conditions', () => {
  render(<WelcomePage pageValues={{ pageState }} />);
  const headerElement = screen.getByRole('heading', { level: 1 });
  expect(headerElement).toHaveTextContent('2-BACK TASK');
});
