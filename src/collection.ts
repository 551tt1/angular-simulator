export class Collection<T> {
  private items: T[] = [];
  constructor(param: T[]) {
    this.items = param;
  }
  getAll() {
    return this.items;
  }
  get(index:number) {
    if(this.items.length === 0) {
      return undefined;
    }
    else if(index >= 0 && index < this.items.length) {
      return this.items[index];
    }
    else return undefined;
  }
  clear() {
    this.items = [];
  }
  remove(index:number) {
    if(index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }
  replace(index:number, newItem:T) {
    if(index >= 0 && index < this.items.length) {
      this.items[index] = newItem;
    }
  }
}

const strings = new Collection<string>(['a', 'b', 'c']);
const numbers = new Collection<number>([1, 2, 3]);