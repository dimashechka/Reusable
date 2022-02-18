'use strict';

const square = (s) => s * s;

const cube = (c) => c ** 3;

const average = (...nums) => {
  let sum = 0;
  for (const arg of nums) sum += arg;
  return sum / nums.length;
};

const calculate = () => {
  const arr = [];
  for (let i = 0; i <= 9; i++) {
    const result = average(square(i), cube(i));
    arr.push(result);
  }
  return arr;
};

module.exports = { square, cube, average, calculate };
