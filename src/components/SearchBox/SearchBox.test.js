import { render } from '@testing-library/react';
import SearchBox from './SearchBox';

it('should take a snapshot', () => {
  const { asFragment } = render(<SearchBox />);

  expect(asFragment(<SearchBox />)).toMatchSnapshot();
});
