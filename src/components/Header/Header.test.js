import { render, fireEvent, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Header from './Header';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
})); 

it('should take a snapshot', () => {
  const pathname = createMemoryHistory();
  const { asFragment } = render (
    <Router location={ pathname.location }>
      <Header />
    </Router>
  )

  expect(asFragment(<Header />)).toMatchSnapshot();
});

it('should detect value of input', () => {
  const pathname = createMemoryHistory();

  render (
    <Router location={ pathname.location }>
      <Header />
    </Router>
  )

  fireEvent.change(screen.getByTestId('search-bar'), { target: { value: "adidas"} });
  expect(screen.getByTestId('search-bar')).toHaveValue("adidas")
});

it('should go to home', () => {
  const history = createMemoryHistory();

  render (
    <Router location={ history.location }>
      <Header />
    </Router>
  )

  fireEvent.click(screen.getByTestId('go-to-home'));
  expect(history.location.pathname).toBe('/');
});
