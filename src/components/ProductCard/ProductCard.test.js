import { render, fireEvent, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import ProductCard from './ProductCard';

const id = "MLA1110584659";
const picture = "http://http2.mlstatic.com/D_947304-MLA48082618871_102021-O.jpg";
const price = {
  "currency": "ARS",
  "amount": 10499,
  "decimals": 0
};
const free_shipping = true;
const state_name = "Buenos Aires";
const title = "Zapatillas adidas Coreracer 2771 Mark";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
})); 

it('should take a snapshot', () => {
  const pathname = createMemoryHistory();
  const { asFragment } = render (
    <Router location={ pathname.location }>
      <ProductCard
        key={ id }
        id={ id }
        title={ title }
        price={ price }
        picture={ picture }
        free_shipping={ free_shipping }
        state_name={ state_name } />
    </Router>
  )

  expect(asFragment(<ProductCard />)).toMatchSnapshot();
});

it('pathname should be /', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  
  render (
    <Router location={ history.location }>
      <ProductCard
        key={ id }
        id={ id }
        title={ title }
        price={ price }
        picture={ picture }
        free_shipping={ free_shipping }
        state_name={ state_name } />
    </Router>
  )

  expect(history.location.pathname).toBe('/');

  fireEvent.click(screen.getByTestId('go-to-product'));

  // expect(history.location.pathname).toBe('/items/123');
})
