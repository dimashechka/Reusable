'use strict';

const fn = () => {
  const INFOMAN = {
    name: 'name',
  };
  let person = {
    name: 'name',
  };

  INFOMAN.name = 'dima';
  person.name = 'some';

  person = {
    some: 'name',
  };
};

module.exports = { fn };
