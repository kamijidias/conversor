import React from 'react';
import { render } from '@testing-library/react';
import ConvesrsorMoedas from './conversor-moedas';

test('deve renderizar o componente sem erros', () => {
  const { getByText } = render(<ConvesrsorMoedas />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
