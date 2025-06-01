export class LinkNode<T> {
  value: T;
  next: LinkNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  head: LinkNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  // Big = O(1)
  prepend(value: T): void {
    const node = new LinkNode<T>(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // O(n)
  append(value: T): void {
    const node = new LinkNode<T>(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      if (prev) {
        while (prev.next) {
          prev = prev.next;
        }
        prev.next = node;
      }
    }
    this.size++;
  }

  insert(value: T, index: number): void {
    if (index < 0 || index > this.size) {
      console.warn(
        `Index ${index} is out of bounds for list size ${this.size}.`
      );
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index > 0) {
      const node = new LinkNode<T>(value);
      let previousNode = this.head!;
      for (let i = 0; i < index - 1; i++) {
        previousNode = previousNode.next!;
      }
      node.next = previousNode.next;
      previousNode.next = node;
      this.size++;
    }
  }

  // Remove by key.
  removFrom(index: number): any {
    if (index < 0 || index >= this.size) {
      console.warn(
        `Index ${index} is out of bounds for list size ${this.size}.`
      );
      return;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head?.next!;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev?.next!;
      }
      if (prev && prev.next) {
        removedNode = prev.next;
        prev.next = removedNode?.next;
      }
    }
    this.size--;
    return removedNode?.value;
  }

  removeValue(value: number): any {
    if (this.isEmpty()) {
      console.log(`The list is empty`);
      return null;
    }

    if (this.head?.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      if (prev) {
        while (prev.next && prev.next.value !== value) {
          prev = prev?.next;
        }
        if (prev.next) {
          const removedNode = prev.next;
          prev.next = removedNode.next;
          this.size--;
          return value;
        }
        console.log(`No node could be deleted`);
        return null;
      }
    }
  }

  print(): void {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log("List values:", listValues);
    }
  }
}
