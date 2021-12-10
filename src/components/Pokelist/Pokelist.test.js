import { render } from '@testing-library/react';
import Pokelist from './Pokelist';

test('render the Pokelist', () => {
  const container = render(<Pokelist pokemon={['pokemon']} />);
  expect(container).toMatchSnapshot();
});
