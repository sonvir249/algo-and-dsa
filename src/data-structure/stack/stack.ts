export class Stack<T> {
  constructor(public items: T[] = []) {}

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      console.log(`The Stack is empty`);
      return;
    }
    return this.items.pop();
  }
  peek(): T | undefined {
    if (this.isEmpty()) {
      console.log(`The Stack is empty`);
      return;
    }
    return this.items[this.size() - 1];
  }
  isEmpty(): boolean {
    return this.size() === 0;
  }
  size(): number {
    return this.items.length;
  }
  print(): void {
    console.log(this.items.join(" -> "));
  }
}
