export class Point {
  public x: number;
  public y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  public toString() {
    return `(${this.x}, ${this.y})`;
  }

  public distance(): number;
  public distance(point: Point): number;
  public distance(x: number, y: number): number;
  public distance(x?: number | Point, y?: number): number {
    if (!x) {
      return this.calcDist(0, 0);
    }

    if (x instanceof Point) {
      return this.calcDist(x.x, x.y);
    }

    if (x && y) {
      return this.calcDist(x, y);
    }
  }

  private calcDist(x: number, y: number) {
    return Math.sqrt((this.x - x) ** 2 + (this.y - y) ** 2);
  }
}
