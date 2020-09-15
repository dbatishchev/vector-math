import toRadians from './toRadians';

test.each([
  [90, 1.57],
  [30, 0.52],
  [180, 3.14],
  [400, 6.98]
])(
  'toRadians(%i)',
  (d, expected) => {
    expect(Number(toRadians(d).toFixed(2))).toBe(expected);
  },
);
