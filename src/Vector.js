export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  div(k) {
    this.x = this.x / k;
    this.y = this.y / k;
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    this.div(this.mag());
  }

  static fromAngle(rad) {
    return new Vector(Math.cos(rad), Math.sin(rad)); // todo
  }

  static dist(v1, v2) {
    let a = v1.x - v2.x;
    let b = v1.y - v2.y;

    return Math.sqrt(a * a + b * b);
  }
}