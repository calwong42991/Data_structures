const shortestPath = require('./shortest-path');
const queueFn = require('../Queues/index');

const vertex = (k, v) => {
  const key = k;
  let value = v;

  const getKey = () => key;

  const setValue = (val) => {
    value = val;
  };

  const getValue = () => value;

  return {
    getKey,
    setValue,
    getValue
  };
};

const graph = (options) => {
  let vertices = {};
  let edges = {};
  let verticesCount = 0;
  const { directed } = (options && options) || false;
  const self = {};

  const addVertex = () => {};

  self.removeVertex = () => {};

  self.hasVertex = () => {};

  self.countVertices = () => {};

  self.addEdge = () => {};

  self.hasEdge = () => {};

  self.getWeight = () => {};

  self.getEdges = () => {};

  self.removeEdge = () => {};

  const dfsTraverse = () => {};

  const bfsTraverse = () => {};

  self.traverse = () => {};

  self.findShortestPath = () => {};

  self.clear = () => {};

  return self;
};

module.exports = graph;