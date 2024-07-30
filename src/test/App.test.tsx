import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders Header component', () => {
    render(<App />);
    expect(screen.getByText(/Flags: Images of Countries-around-the-World's Flags/i)).toBeInTheDocument();
  });

  test('renders Main component', () => {
    render(<App />);
    expect(screen.getByText(/All/i)).toBeInTheDocument();
  });
});