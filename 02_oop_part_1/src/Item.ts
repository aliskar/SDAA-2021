import { Comparable } from "./Comparable";

let id = 0;

export abstract class Item implements Comparable<Item> {
  private id: number;

  private static numberOfItems: number = 0;

  constructor(private name: string, private value: number, private weight: number) {
    this.id = id++;
    Item.numberOfItems++;
  }

  public getId() {
    return this.id;
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: number) {
    this.value = value;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getWeight() {
    return this.weight;
  }

  public setWeight(weight: number) {
    this.weight = weight;
  }

  public compareTo(other: Item): number {
    if (this.getValue() > other.getValue()) {
      return 1;
    }

    if (this.getValue() < other.getValue()) {
      return -1;
    }

    return this.getName().toLowerCase().localeCompare(other.getName().toLowerCase());
  }

  public toString() {
    return `${this.name} - Value: ${this.value}, Weight: ${this.getWeight().toFixed(2)}`;
  }

  static reset() {
    id = 0;
    Item.numberOfItems = 0;
  }

  public abstract use(): void;
}
