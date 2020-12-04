const fizzBuzz = (s, e) => {
  for (let i = s; i <= e; i++) {
    if (i % 15 === 0) console.log("fizzbuzz");
    else if (i % 3 === 0 && i % 5 !== 0) console.log("fizz");
    else if (i % 5 === 0 && i % 3 !== 0) console.log("buzz");
  }
};
fizzBuzz(1, 100);

let array = [1, 2, 3, 3, 6, 6, 8, 9, 9];
let newArray = [];

const dupe = (ar, ar1) => {
  ar.forEach((el) => {
    if (!ar1.includes(el)) {
      ar1.push(el);
    }
  });
  console.log(ar1);
};
dupe(array, newArray);
