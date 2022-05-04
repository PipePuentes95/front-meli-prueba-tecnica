import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import SearchResult from './SearchResult';

it('should take a snapshot', () => {
  const pathname = createMemoryHistory();
  const { asFragment } = render (
    <Router location={ pathname.location }>
      <SearchResult />
    </Router>
  )

  expect(asFragment(<SearchResult />)).toMatchSnapshot();
});