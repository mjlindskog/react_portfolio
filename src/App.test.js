import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio introduction and resume download', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /mark j\. lindskog/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /download pdf/i })
  ).toBeInTheDocument();
});
