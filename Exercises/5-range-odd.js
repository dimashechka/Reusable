'use strict';

const rangeOdd = (a, b) => {
  const arr = [];
  for (let num = a; num <= b; num++) {
    num % 2 !== 0 && arr.push(num);
  }
  return arr;
};

// console.log(rangeOdd(0, 1));

module.exports = { rangeOdd };
