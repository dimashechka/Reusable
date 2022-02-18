'use strict';

const range = (a, b) => {
  const arr = [];
  for (let num = a; num <= b; num++) {
    arr.push(num);
  }
  return arr;
};

module.exports = { range };
