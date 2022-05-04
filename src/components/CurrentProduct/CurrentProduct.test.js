import { render } from '@testing-library/react';
import CurrentProduct from './CurrentProduct';

const picture = "http://http2.mlstatic.com/D_950723-MLA47397900331_092021-I.jpg";
const  condition = "new";
const sold_quantity = 25;
const title = "Zapatillas Para Hombre Topper Squat Color Negro - Adulto 42 Ar";
const price = {
  "currency": "ARS",
  "amount": 9799,
  "decimals": 0
};
const description = "Topper se destaca en el mercado por ofrecer productos de calidad, confort y diseño que unen moda y deporte. Acerca tendencias y busca que las personas puedan verse y sentirse bien dentro y fuera del campo de juego.  \n\nSuela de goma \nLas zapatillas fabricadas con suela de goma tienen mayor resistencia al desgaste, son naturalmente impermeables y flexibles, y además extienden la estabilidad de la contracción.";

it('should take a snapshot', () => {
  const { asFragment } = render(
    <CurrentProduct 
      picture={ picture }
      condition={ condition }
      sold_quantity={ sold_quantity }
      title={ title }
      price={ price }
      description={ description } />
  );

  expect(asFragment(<CurrentProduct />)).toMatchSnapshot();
});