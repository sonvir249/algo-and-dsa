export class QueueOptimized<T> {
  private items: Record<number, T>; // Use Record<number, T> for object storage
  private head: number;
  private tail: number;

  constructor(initialItems: T[] = []) {
    this.items = {};
    this.head = 0; // Points to the front of the queue
    this.tail = 0; // Points to the next available slot at the end

    // If initial items are provided, enqueue them
    for (const item of initialItems) {
      this.enqueue(item);
    }
  }

  enqueue(element: T): void {
    this.items[this.tail] = element;
    this.tail++;
  }

  // Return T | undefined to be more useful, similar to array.pop()
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      // console.warn("Queue is empty. Cannot dequeue."); // Optional: for debugging
      return undefined;
    }

    const element = this.items[this.head];
    delete this.items[this.head]; // Remove the element from the object
    this.head++;

    // Optional: Reset head and tail to 0 if queue becomes empty after many operations
    // to prevent head/tail from growing indefinitely if the queue is frequently emptied.
    // This is a micro-optimization and might not always be necessary.
    if (this.head === this.tail) {
      this.head = 0;
      this.tail = 0;
    }

    return element;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      // console.log(`The Queue is empty`); // Caller can decide to log
      return undefined;
    }
    return this.items[this.head];
  }

  isEmpty(): boolean {
    // The queue is empty if the head and tail pointers are the same
    // (meaning no elements are between them)
    return this.head === this.tail;
  }

  size(): number {
    // The size is the difference between the tail and head pointers
    return this.tail - this.head;
  }

  print(): void {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    const elementsToPrint: T[] = [];
    for (let i = this.head; i < this.tail; i++) {
      elementsToPrint.push(this.items[i]);
    }
    console.log(elementsToPrint.join(" -> "));
  }

  // Optional: Method to clear the queue
  clear(): void {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
}
