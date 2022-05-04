import { render } from '@testing-library/react';
import Loader from './Loader';

it('should take a snapshot', () => {
  const { asFragment } = render(<Loader />);

  expect(asFragment(<Loader />)).toMatchSnapshot();
});
