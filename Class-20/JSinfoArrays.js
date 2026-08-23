//Translate border-left-width to borderLeftWidth
const camelize = (str) => {
  const words = str.split("-");
  let isFirst = true;
  let camel = "";
  for (const word of words) {
    if (isFirst) {
      isFirst = false;
      camel += word.toLowerCase();
    } else {
      camel += word[0].toUpperCase() + word.slice(1);
    }
  }
  return camel;
};
console.log(
  camelize("background-color"),
  camelize("background-color") == "backgroundColor",
);
console.log(
  camelize("list-style-image"),
  camelize("list-style-image") == "listStyleImage",
);
console.log(
  camelize("-webkit-transition"),
  camelize("-webkit-transition") == "WebkitTransition",
);

//Filter range
const filterRange = (arr, low, high) => {
  return arr.filter((x) => x >= low && x <= high);
};
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(`StartingArray: ${arr}`);
console.log(`filtered: ${filtered} Expected: 3,1`);

//Filter range "in place"
console.log(`StartingArray: ${arr}`);
const filterRangeInPlace = (arr, low, high) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < low || arr[i] > high) {
      arr.splice(i, 1);
      i--;
    }
  }
};
filterRangeInPlace(arr, 1, 4);
console.log(`filteredInPlace: ${arr} Expected: 3,1`);

//Sort in decreasing order
let nums = [5, 2, 1, -10, 8];
nums.sort((a, b) => b - a);
console.log(`nums: ${nums} Expected: 8,5,2,1,-10`);

//Copy and sort Array
let techs = ["HTML", "JavaScript", "CSS"];
const copySorted = (arr) => arr.slice(0).sort();

console.log(copySorted(techs), techs);

//Extendable calculator

class Calculator {
  constructor(x) {
    this.operations = {
      "+": (a, b) => +a + +b,
    };
    this.calculate = (str) => {
      let [a, operator, b] = str.split(" ");
      return this.operations[operator](a, b);
    };
    this.addMethod = (operator, func) => {
      this.operations[operator] = func;
    };
  }
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7"), `Expected: 10`);

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result, `Expected: 8`);

//Map to names

const database = [
  { name: "John", surname: "Smith", age: 25, id: 1 },
  { name: "Pete", surname: "Hunt", age: 30, id: 2 },
  { name: "Mary", surname: "Key", age: 28, id: 3 },
];

let names = database.map((person) => person.name);
console.log(names, `Expected: John, Pete, Mary`);

//Map of objects

const usersMapped = database.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped);
console.log("Expected:", [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 },
]);

//Sory by age

const sortedByAge = database.sort((a, b) => a.age - b.age);

console.log(
  database.map((user) => user.name),
  `Expected: John, Mary, Pete`,
);

//Get average age
const getAverageAge = () => {
  const totalAge = database
    .map((user) => user.age)
    .reduce((acc, c) => acc + c, 0);
  return Math.round(totalAge / database.length);
};

console.log(getAverageAge(), `Expected: 28`);

//Filter unique values
let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
const unique = (arr) => [...new Set(arr)];

console.log(unique(strings), `Expected: Hare, Krishna, :-O`);
