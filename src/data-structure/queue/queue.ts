export class Queue<T> {
  constructor(public items: T[] = []) {}

  enqueue(element: T): void {
    this.items.push(element);
  }

  dequeue(): void {
    this.items.shift();
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      console.log(`The Queue is empty`);
      return;
    }
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(" -> "));
  }
}
