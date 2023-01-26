const name = require('../name');
const f_name = 'Takahiro'
const l_name = 'Kanno'
const ans = 'I am TakahiroKanno !'

describe('string for name', () => {
  test('introduce', () => {
    expect(name(f_name, l_name)).toBe(ans);
  });
});
