import { Item } from "./Item";

export abstract class Consumable extends Item {
  private consumed: boolean = false;

  constructor(name: string, value: number, weight: number, private spoiled: boolean) {
    super(name, value, weight);
  }

  public isSpoiled() {
    return this.spoiled;
  }

  public isConsumed() {
    return this.consumed;
  }

  public setConsumed(consumed: boolean) {
    this.consumed = consumed;
  }

  public eat() {
    this.setConsumed(true);
    return `You eat the ${this.getName()}.`;
  }

  public use(): string {
    if (this.isConsumed()) {
      return `There is nothing left of the ${this.getName()} to consume.`;
    }

    if (this.isSpoiled()) {
      return `${this.eat()}\nYou feel sick.`;
    }

    return this.eat();
  }
}
