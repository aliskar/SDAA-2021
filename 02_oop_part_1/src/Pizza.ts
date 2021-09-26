import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  private slicesEaten: number = 0;

  constructor(private numberOfSlices: number, spoiled: boolean) {
    super("pizza", 1, 1, spoiled);
  }

  public eat() {
    if (this.numberOfSlices > this.slicesEaten) {
      this.slicesEaten++;

      if (this.numberOfSlices === this.slicesEaten) {
        this.setConsumed(true);
      }

      return `You eat a slice of the ${this.getName()}.`;
    }

    return "";
  }
}
