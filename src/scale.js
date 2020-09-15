export default function scale(value, from1, to1, from2, to2) {
  if (value <= from1) {
    return from2;
  }

  if (value >= to1) {
    return to2;
  }

  const p1 = 100 / (to1 - from1) * (value - from1);

  return (to2 - from2) / 100 * p1 + from2;
}
