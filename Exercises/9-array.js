'use strict';

const phonebook = [
  {
    name: 'Dima',
    phone: '298(425)350-97-61',
  },
  {
    name: 'Alina',
    phone: '5(8262)508-11-17',
  },
  {
    name: 'Masha',
    phone: '4(9812)569-55-72',
  },
  {
    name: 'Dan',
    phone: '07(891)661-57-36',
  },
];

const findPhoneByName = (name) => {
  for (const person of phonebook) person.name === name && person.phone;
};

module.exports = { phonebook, findPhoneByName };
