import { readFile } from "fs/promises";
import { isPowerOfTwo, isPowerOfTwoBitwise } from "./algo/maths/power-of-two";
import { getFactorial, getLastRecursiveValue } from "./algo/maths/recursion";
import { cartesianProduct } from "./algo/misc/cartesian-product";
import { climbingStarcase } from "./algo/misc/climbing-starcase";
import { towerOfHanoi } from "./algo/misc/tower-of-hanoi";
import {
  binaryTargetElement,
  recursiveBiarySearch,
} from "./algo/search/binary.search";
import { getTargetElement } from "./algo/search/linear.search";
import { bubbleSort } from "./algo/sort/bubble.sort";
import { insertionSort } from "./algo/sort/insertion.sort";
import { mergeSort } from "./algo/sort/merge.sort";
import { quickSort } from "./algo/sort/quick.sort";
import { CircularQueue } from "./data-structure/circular-queue/circular-queue";
import { LinkedList } from "./data-structure/linkedList/linkedList";
import { Queue } from "./data-structure/queue/queue";
import { QueueOptimized } from "./data-structure/queue/queue.optimized";
import { Stack } from "./data-structure/stack/stack";
import EventEmitter from "events";

// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwoBitwise(3));
// console.log(getLastRecursiveValue(2));
// console.log(getFactorial(4));
// console.log(getTargetElement([1, 2, 4, 6, 9], -1));
// console.log(binaryTargetElement([1, 2, 10, 4, 6, 9], 9));
// console.log(recursiveBiarySearch([1, 2, 10, 4, 6, 9], 10));
const sort = [11, -2, -3, 2, 4, 5, 1];
// const sort = [4, 5, 1];
// bubbleSort(sort);
// console.log("sort:", sort);
// insertionSort(sort);
// console.log("sort:", sort);
// console.log(quickSort(sort));
// console.log(mergeSort(sort));
// console.log(cartesianProduct([1, 2, 4], [3]));
// console.log(climbingStarcase(5));
// console.log(towerOfHanoi(3, "A", "C", "B"));

// Stack of numbers
const numberStack = new Stack<number>();
// numberStack.push(10);
// numberStack.push(20);
// numberStack.print(); // Output: 10 -> 20
// console.log("Peek:", numberStack.peek()); // Output: Peek: 20
// console.log("Pop:", numberStack.pop()); // Output: Pop: 20
// console.log("Is Empty:", numberStack.isEmpty()); // Output: Is Empty: false
// numberStack.print(); // Output: 10
// console.log("Pop:", numberStack.pop()); // Output: Pop: 10
// console.log("Pop from empty:", numberStack.pop()); // Output: The Stack is empty. Cannot pop. (console.warn)
// //         Pop from empty: undefined
// console.log("Peek from empty:", numberStack.peek()); // Output: Peek from empty: undefined
// console.log("Is Empty:", numberStack.isEmpty()); // Output: Is Empty: true

const queue = new Queue<number>();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.print(); // Output: 10 -> 20
// console.log("Peek:", queue.peek()); // Output: Peek: 20
// console.log("Pop:", queue.dequeue()); // Output: Pop: 20
// console.log("Is Empty:", queue.isEmpty()); // Output: Is Empty: false
// queue.print(); // Output: 10
// console.log("Pop:", queue.dequeue()); // Output: Pop: 10
// console.log("Pop from empty:", queue.dequeue()); // Output: The Stack is empty. Cannot pop. (console.warn)
// //         Pop from empty: undefined
// console.log("Peek from empty:", queue.dequeue()); // Output: Peek from empty: undefined
// console.log("Is Empty:", queue.isEmpty()); // Output: Is Empty: true

// --- Example Usage ---
// console.log("--- Number Queue (Object-based) ---");
// const numQueueObj = new QueueOptimized<number>();
// numQueueObj.enqueue(10);
// numQueueObj.enqueue(20);
// numQueueObj.enqueue(30);
// numQueueObj.print(); // Output: 10 -> 20 -> 30
// console.log("Size:", numQueueObj.size()); // Output: Size: 3
// console.log("Peek:", numQueueObj.peek()); // Output: Peek: 10

// console.log("Dequeue:", numQueueObj.dequeue()); // Output: Dequeue: 10
// numQueueObj.print(); // Output: 20 -> 30
// console.log("Size:", numQueueObj.size()); // Output: Size: 2
// console.log("Peek:", numQueueObj.peek()); // Output: Peek: 20

// numQueueObj.enqueue(40);
// numQueueObj.print(); // Output: 20 -> 30 -> 40

// console.log("Dequeue:", numQueueObj.dequeue()); // Output: Dequeue: 20
// console.log("Dequeue:", numQueueObj.dequeue()); // Output: Dequeue: 30
// console.log("Dequeue:", numQueueObj.dequeue()); // Output: Dequeue: 40
// console.log("Is Empty:", numQueueObj.isEmpty()); // Output: Is Empty: true
// numQueueObj.print(); // Output: Queue is empty
// console.log("Dequeue from empty:", numQueueObj.dequeue()); // Output: Dequeue from empty: undefined
// console.log("Peek from empty:", numQueueObj.peek()); // Output: Peek from empty: undefined

const circularQueue = new CircularQueue(5);
// console.log(circularQueue.isEmpty());
// circularQueue.enque(10);
// circularQueue.enque(20);
// circularQueue.enque(30);
// // circularQueue.enque(40);
// // circularQueue.enque(50);
// console.log(circularQueue.isFull());
// circularQueue.print();
// console.log(circularQueue.deque());
// console.log(circularQueue.peek());
// circularQueue.print();
// circularQueue.enque(12);
// // circularQueue.enque(12);
// circularQueue.print();

const list = new LinkedList<number>();
console.log("list is empty? ", list.isEmpty());
console.log("list size? ", list.getSize());
list.print();
list.append(10);
list.print();
list.append(20);
list.print();
list.prepend(30);
list.print();
list.insert(45, 2);
list.print();
list.insert(3, 0);
list.print();
list.insert(12, 1);
list.print();
console.log("size:", list.getSize());
list.removFrom(0);
list.print();
console.log(list.removeValue(10));
list.print();
// timeout_vs_immediate.js
// setTimeout(() => {
//   console.log("timeout");
// }, 0);
// setImmediate(() => {
//   console.log("immediate");
// });

// const eventEmitter = new EventEmitter();

// type Users = Record<string, any[]>;

// let users: Users = {};

// // register a user
// eventEmitter.on("userJoined", (username) => {
//   users[username] = [];
//   console.log(`${username} has joined the chat`);
// });

// eventEmitter.on("sentMessage", (username, message) => {
//   if (users[username]) {
//     users[username].push(message);
//     console.log(`${username} sent: ${message}`);
//   }
// });

// eventEmitter.on("userLeft", (username, message) => {
//   if (users[username]) {
//     delete users[username];
//     console.log(`${username} has left the chat`);
//   }
// });

// // Simulating chat activity
// eventEmitter.emit("userJoined", "Aadyaa");
// eventEmitter.emit("sendMessage", "Aadyaa", "Hello, everyone!");
// eventEmitter.emit("userLeft", "Aadyaa");
