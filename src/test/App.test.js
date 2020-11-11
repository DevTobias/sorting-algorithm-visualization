import React from 'react';
import {render} from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  const {getByText} = render(<App />);
  expect(getByText('Sorting Algorithm Visualization')).toBeInTheDocument();
});
