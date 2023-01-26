const sum = require('../sum');
describe('sum addition', () => {

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2), '1 + 2 = 3').toBe(3);
    expect(sum(3, 4), '3 + 4 = 7').toBe(6);
  });

  test('2 + 2 is 4', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data, '2 2 4').toEqual({one: 1, two: 2});
  });
});

