import { render } from '@testing-library/react';
import Breadcrumb from './Breadcrumb';

const categories = ["audio", "tecnologia", "celular"]

it('should take a snapshot', () => {
  const { asFragment } = render(<Breadcrumb categories={ categories } />);

  expect(asFragment(<Breadcrumb />)).toMatchSnapshot();
});
