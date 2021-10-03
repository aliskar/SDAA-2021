import { Item } from './Item';
import { Pages } from './pages';
import { PagesIterable } from './PagesIterable.mixin';

export class Magazine extends PagesIterable(Item) {
  constructor(private _title: string, pages: Pages) {
    super(pages);
  }

  public get title() {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  toString() {
    return `Magazine: ${this.title} with number of pages: ${this.pages.count}`;
  }
}
