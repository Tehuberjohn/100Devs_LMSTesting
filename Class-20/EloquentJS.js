//The sum of a range
const range = (start, end, step = 1) => {
  let arr = [];
  // console.log(start, end, step);
  if (step > 0) {
    while (start <= end) {
      arr.push(start);
      start += step;
    }
  } else {
    while (start >= end) {
      arr.push(start);
      start += step;
    }
  }
  return arr;
};

const sum = (arr) => arr.reduce((acc, c) => acc + c, 0);

console.log(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(range(5, 2, -1), [5, 4, 3, 2]);
console.log(sum(range(1, 10)), 55);

//Reversing an array

let arr1 = ["A", "B", "C"];
let arr2 = [1, 2, 3, 4, 5];

const reverseArray = (arr) => {
  const reversed = [];
  let idx = arr.length - 1;
  while (idx >= 0) {
    reversed.push(arr[idx]);
    idx--;
  }
  return reversed;
};

const reverseArrayInPlace = (arr) =>
  arr.splice(0, arr.length, ...reverseArray(arr));

console.log(reverseArray(arr1), ["C", "B", "A"]);
console.log(arr1, ["A", "B", "C"]);
reverseArrayInPlace(arr2);
console.log(arr2, [5, 4, 3, 2, 1]);

//A list

const arrayToList = (arr) => {
  class Node {
    constructor(value) {
      this.value = value;
      this.rest = null;
    }
  }
  let head = null;
  let list = null;
  let current = null;
  for (const item of arr) {
    if (list === null) {
      list = new Node(item);
      head = list;
    } else {
      list.rest = new Node(item);
      list = list.rest;
    }
    list.value = item;
    current = list.rest;
  }
  return head;
};

const listToArray = (list) => {
  const arr = [];
  let current = list;
  while (current) {
    arr.push(current.value);
    current = current.rest;
  }
  return arr;
};

console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
