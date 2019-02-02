const Comparator = require('../../utils/comparator/comparator');

const linearSearch = (array, seekElement, comparatorCallback) => {
  const comparator = new Comparator(comparatorCallback);
  const foundIndices = [];

  array.forEach((element, index) => {
    if (comparator.equal(element, seekElement)) {
      foundIndices.push(index);
    }
  });

  return foundIndices;
}

module.exports = linearSearch;