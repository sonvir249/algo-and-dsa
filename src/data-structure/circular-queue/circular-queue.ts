export class CircularQueue<T> {
  private items: (T | null)[];
  private head: number;
  private tail: number;
  public readonly capacity: number;
  private currentLength: number;
  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error("Capacity must be greater than 0.");
    }
    this.capacity = capacity;
    this.items = new Array<T | null>(capacity);
    this.currentLength = 0;
    this.head = -1;
    this.tail = -1;
  }

  isFull(): boolean {
    return this.currentLength === this.capacity;
  }

  isEmpty(): boolean {
    return this.currentLength === 0;
  }

  enque(element: T) {
    if (this.isFull()) {
      console.log(`The queue is full.`);
      return;
    }
    this.tail = (this.tail + 1) % this.capacity;
    this.items[this.tail] = element;
    this.currentLength += 1;
    if (this.head === -1) {
      this.head = this.tail;
    }
  }

  deque(): undefined | T | null {
    if (this.isEmpty()) {
      console.log(`The queue is full.`);
      return;
    }
    const item = this.items[this.head];
    this.items[this.head] = null;
    this.head = (this.head + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.head = -1;
      this.tail = -1;
    }
    return item;
  }

  peek() {
    if (this.isFull()) {
      console.log(`The queue is full.`);
      return;
    }
    return this.items[this.head];
  }

  print() {
    if (this.isEmpty()) {
      console.log(`The queue is empty.`);
      return;
    }
    let i;
    let str = "";

    for (i = this.head; i !== this.tail; i = (i + 1) % this.capacity) {
      str += this.items[i] + " ";
    }
    console.log("itmes:", str);
  }
}
