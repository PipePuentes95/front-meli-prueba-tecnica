import { render } from '@testing-library/react';
import ProductDetail from './ProductDetail';

it('should take a snapshot', () => {
  const { asFragment } = render(<ProductDetail />);

  expect(asFragment(<ProductDetail />)).toMatchSnapshot();
});
