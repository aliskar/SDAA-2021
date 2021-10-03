import { Item } from './Item';
import { Pages } from './pages';
import { PagesIterable } from './PagesIterable.mixin';

export class Book extends PagesIterable(Item) {
  constructor(private _title: string, private _author: string, pages: Pages) {
    super(pages);
  }

  public set author(author: string) {
    this._author = author;
  }

  public get author() {
    return this._author;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get title() {
    return this._title;
  }

  toString(): string {
    return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.count}`;
  }
}
