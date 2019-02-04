const euclideanAlgorithm = require('../EuclideanAlgo/EuclideanAlgorithm');

const leastCommonMultiple = (a, b) => {
  return ((a === 0 || b === 0)) ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b);
}

module.exports = leastCommonMultiple;