import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color: string, filled?: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw new Error(
        "Shape receives at least 3 points. 2 points it is a line"
      );
    }

    this.points = points;
    this.color = color || "green";
    this.filled = filled ?? true;
  }

  public toString(): string {
    const pointsString = this.points.map((p) => p.toString()).join(", ");

    return `A Shape with color of ${this.color} and ${
      this.filled ? "filled" : "not filled"
    }. Points: ${pointsString}.`;
  }

  public getPerimeter() {
    const { perimeter } = this.points.reduce(
      ({ point, perimeter }, nextPoint) => ({
        point: nextPoint,
        perimeter: perimeter + point.distance(nextPoint),
      }),
      { point: this.points[this.points.length - 1], perimeter: 0 }
    );

    return perimeter;
  }

  abstract getType(): string;
}
