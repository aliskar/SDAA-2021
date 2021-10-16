import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(p1: Point, p2: Point, p3: Point);
  constructor(p1: Point, p2: Point, p3: Point, color: string, filled: boolean);
  constructor(p1: Point, p2: Point, p3: Point, color: string, filled?: boolean);
  constructor(
    p1: Point,
    p2: Point,
    p3: Point,
    color?: string,
    filled?: boolean
  ) {
    super([p1, p2, p3], color, filled);
  }

  public toString(): string {
    const pointsString = this.points
      .map((p, i) => `v${i + 1}=${p.toString()}`)
      .join(",");

    return `Triangle[${pointsString}]`;
  }

  private getSides() {
    const { sides } = this.points.reduce(
      ({ point, sides }, nextPoint) => {
        sides.push(point.distance(nextPoint));
        return {
          point: nextPoint,
          sides,
        };
      },
      { point: this.points[this.points.length - 1], sides: [] }
    );

    return sides;
  }

  private isCloseSides(
    sideA: number,
    sideB: number,
    tolerance: number = 0.0001
  ) {
    return Math.abs(sideA - sideB) <= tolerance * Math.max(sideA, sideB);
  }

  getType(): string {
    const [a, b, c] = this.getSides();

    if (this.isCloseSides(a, b) && this.isCloseSides(b, c)) {
      return "equilateral triangle";
    }

    if (
      this.isCloseSides(a, b) ||
      this.isCloseSides(b, c) ||
      this.isCloseSides(a, c)
    ) {
      return "isosceles triangle";
    }

    return "scalene triangle";
  }
}
