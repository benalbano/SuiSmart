// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SuiSmart title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SuiSmart/i);
    expect(titleElement).toBeInTheDocument();
});
