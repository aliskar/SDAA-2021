import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  private items: Item[] = [];

  constructor() {}

  public addItem(item: Item) {
    this.items.push(item);
  }

  public sort(): void;
  public sort(comparator: ItemComparator): void;
  public sort(comparator?: ItemComparator): void {
    if (!comparator) {
      this.items.sort((itemA, itemB) => itemA.compareTo(itemB));
    } else {
      this.items.sort(comparator.compare);
    }
  }

  public toString() {
    return this.items.join(",\n");
  }
}
