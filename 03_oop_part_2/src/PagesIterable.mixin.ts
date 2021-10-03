import { Pages } from './pages';

type AbstractConstructor<T = {}> = abstract new (...args: any[]) => T;

type Pageble = AbstractConstructor<{ pages: Pages }>;

export function PagesIterable<T extends Pageble>(BaseClass: T) {
  abstract class Iterable extends BaseClass {
    constructor(...args: any[]) {
      super(...args);
    }

    *[Symbol.iterator]() {
      for (let cur = 0; cur < this.pages.count; cur++) {     
        yield { toString: () => `${this}, ${this.pages.getPage(cur)}` };
      }
    }
  }

  return Iterable;
}
