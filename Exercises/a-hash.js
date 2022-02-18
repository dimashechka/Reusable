'use strict';

const phonebook = {
  dima: '298(425)350-97-61',
  alina: '5(8262)508-11-17',
  masha: '4(9812)569-55-72',
  dan: '07(891)661-57-36',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
