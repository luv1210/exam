// Q.1 Insert, View, Delete in Array without using functions

// let arr = [10, 20, 30, 40];  
// let size = 4;  

// let insertPos = 2;   
// let insertVal = 99;  

// for (let i = size; i > insertPos; i--) {
//     arr[i] = arr[i - 1];   
// }
// arr[insertPos] = insertVal;
// size++;

// console.log("Array after Insertion:");
// for (let i = 0; i < size; i++) {
//     console.log(arr[i]);
// }

// let deletePos = 3;   
// for (let i = deletePos; i < size - 1; i++) {
//     arr[i] = arr[i + 1];   
// }
// size--; 

// console.log("Array after Deletion:");
// for (let i = 0; i < size; i++) {
//     console.log(arr[i]);
// }


// Q.2 WAP to implement Quick sort using JavaScript with DSA.


// let arr = [10, 12, 19, 15, 20, 25, 9]

// let sorting = (arr) => {
//     if (arr.length <= 1) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return [...sorting(left), pivot, ...sorting(right)]


// }

// console.log(sorting(arr))

// output:
// [ 9, 10, 12, 15,19, 20, 25]


// Q.3 WAP to count Even and Odd Values from 2D array using JavaScript.
// Count Even and Odd values in 2D Array

let arr = [
    [2, 5, 8],
    [7, 6, 9],
    [4, 11, 14]
];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
}

console.log("Even Count = " + evenCount);
console.log("Odd Count = " + oddCount);


// Q.4 WAP to implement insert and remove element from Queue using JavaScript.

// class Queue {
//     constructor(size) {
//         this.items = [];
//         this.maxSize = size;
//     }

//     insert(element) {
//         if (this.maxSize && this.items.length === this.maxSize) {
//             console.log("Queue is Full");
//             return;
//         }
//         this.items.push(element);
//         console.log(`${element} inserted`);
//     }

//     delete() {
//         if (this.isEmpty()) {
//             console.log("Queue is Empty");
//             return null;
//         }
//         let removed = this.items.shift();
//         console.log(`${removed} removed`);
//         return removed;
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     print() {
//         console.log("Queue:", this.items.join(" <- "));
//     }
// }

// let q = new Queue(5);

// q.insert(10);
// q.insert(20);
// q.insert(30);
// q.print();

// q.delete();
// q.print();

// output:
// 10 inserted
// 20 inserted
// 30 inserted
// Queue: 10 <- 20 <- 30
// 10 removed
// Queue: 20 <- 30


// Q.5 WAP to implement Bubble sort using JavaScript with DSA.

// let arr = [5, 3, 8, 4, 2];

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log("Sorted array:", arr);

// output:
// Sorted array: [ 2, 3, 4, 5, 8 ]