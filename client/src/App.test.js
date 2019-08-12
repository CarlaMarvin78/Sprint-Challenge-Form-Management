import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "@testing-library/react";


it('renders without crashing', () => {
  render(<App/>);
});

it('renders the form', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  getByPlaceholderText(/Username/i);
  getByPlaceholderText(/Password/i);
  getByText(/Submit!/i);
});

it('accepts valid changes to the username', async () => {
  const { getByPlaceholderText, findByText, getByDisplayValue } = render(<App />);
  const usernameInput = getByPlaceholderText(/Username/i);
  const username = 'JohnnyBravo';

  fireEvent.change(usernameInput, { target: { value: username } });
  fireEvent.blur(usernameInput);
  getByDisplayValue(username);

  await findByText(/must be at least/i).rejects;
});

it('error on bad input', async () => {
  const { getByPlaceholderText, findByText, getByText } = render(<App />);
  const usernameInput = getByPlaceholderText(/Username/i);
  fireEvent.change(usernameInput, { target: { value: '123' } });
  fireEvent.blur(usernameInput);
  await findByText(/must be at least/i);
});

// one element, one event, and one unit test for a function