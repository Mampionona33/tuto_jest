import { subtract } from './../subtract';

it('testing substract', () => {
  const actual = subtract(3, 2);
  expect(actual).toBe(1);
});
