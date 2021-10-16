import { Pages } from "./pages";

export abstract class Item {
  constructor(protected _pages: Pages){}

  get pages() {
    return this._pages
  }

  abstract toString(): string;
}
