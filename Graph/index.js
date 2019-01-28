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

  self.addVertex = (key, value) => {
    if (!vertices[key]) {
      vertices[key] = vertex(key, value);
      edges[key] = {};
      verticesCount += 1;
    }
  };

  self.removeVertex = (key) => {
    if (vertices[key]) {
      vertices[key] = undefined;
      verticesCount -= 1;
    }
  };

  self.hasVertex = key => !!vertices[key];

  self.countVertices = () => verticesCount;

  self.addEdge = (key1, key2, weight) => {
    if (self.hasVertex(key1) && self.hasVertex(key2)) {
      const w = +weight || 0;
      edges[key1][key2] = w;
      if (!directed) {
        edges[key2][key1] = w;
      }
    }
  };

  self.hasEdge = (key1, key2) => {
    if (self.hasVertex(key1) && self.hasVertex(key2)) {
      if (directed && edges[key1][key2] >= 0) {
        return true;
      } else if (edges[key1][key2] >= 0 && edges[key2][key1] >= 0) {
        return true;
      }
    }
    return false;
  };

  self.getWeight = (key1, key2) => {
    if (self.hasVertex(key1) && key1 === key2) {
      return 0;
    } else if (self.hasEdge(key1, key2)) {
      return edges[key1][key2];
    }
    return null;
  };

  self.getEdges = key => edges[key] || {};

  self.removeEdge = (key1, key2) => {
    if (self.hasEdge(key1, key2)) {
      edges[key1][key2] = -1;
      edges[key2][key1] = -1;
    }
  };

  const dfsTraverse = (key, cb) => {
    const visited = {};
    const traverse = (currentKey) => {
      if (self.hasVertex(currentKey) && !visited[currentKey]) {
        cb(vertices[currentKey]);
        visited[currentKey] = true;
        Object.keys(edges[currentKey]).forEach((k) => {
          if (self.hasEdge(currentKey, k) && !visited[k]) {
            traverse(k);
          }
        });
      }
    };
    traverse(key);
  };

  const bfsTraverse = (key, cb) => {
    if (self.hasVertex(key)) {
      const queue = queueFn();
      const visited = {};
      queue.enqueue(key);
      visited[key] = true;
      while (!queue.isEmpty()) {
        const k1 = queue.dequeue();
        cb(vertices[k1]);
        Object.keys(edges[k1]).forEach((k2) => {
          if (self.hasEdge(k1, k2) && !visited[k2]) {
            queue.enqueue(k2);
            visited[k2] = true;
          }
        });
      }
    }
  };

  self.traverse = (key, cb, type) => {
    switch (type) {
      case 'dfs':
        dfsTraverse(key, cb);
        break;
      case 'bfs':
        bfsTraverse(key, cb);
        break;
      default:
        bfsTraverse(key, cb);
        break;
    }
  };

  self.clear = () => {
    vertices = {};
    edges = {};
    verticesCount = 0;
  };

  return self;
};

module.exports = graph;