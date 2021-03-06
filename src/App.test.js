import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import App from './App';

it('should take a snapshot', () => {
  const pathname = createMemoryHistory();
  const { asFragment } = render (
    <Router location={ pathname.location }>
      <App />
    </Router>
  )

  expect(asFragment(<App />)).toMatchSnapshot();
});

