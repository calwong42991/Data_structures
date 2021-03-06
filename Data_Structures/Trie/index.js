const validate = (str) => {
  if (typeof str !== 'string') {
    throw new Error(`${str} is not a string`);
  }
};

const node = (ch) => {
  const char = ch;
  let endOfWord = false;
  let parent = null;
  const children = {};
  let childrenCount = 0;

  validate(ch);

  const getChar = () => char;

  const setParent = (p) => {
    parent = p;
  };

  const getParent = () => parent;

  const setEndOfWord = (eow) => {
    endOfWord = eow;
  };

  const isEndOfWord = () => endOfWord;

  const addChild = (child) => {
    children[child.getChar()] = child;
    childrenCount += 1;
  };

  const removeChild = (child) => {
    children[child.getChar()] = null;
    childrenCount -= 1;
  };

  const getChild = c => children[c] || null;

  const getChildren = () => children;

  const countChildren = () => childrenCount;

  return {
    getChar,
    setParent,
    getParent,
    setEndOfWord,
    isEndOfWord,
    addChild,
    removeChild,
    getChild,
    getChildren,
    countChildren
  };
};

const trie = () => {
  let nodesCount = 1;
  let wordsCount = 0;
  let rootNode = node('');

  const countNodes = () => nodesCount;

  const countWords = () => wordsCount;

  const search = (word) => {
    validate(word);
    let currentNode = rootNode;
    for (let i = 0; i < word.length; i += 1) {
      const child = currentNode.getChild(word[i]);
      if (child === null) {
        return null;
      }
      currentNode = child;
    }
    if (currentNode.isEndOfWord()) {
      return currentNode;
    }
    return null;
  };

  const insert = (word) => {
    validate(word);
    let currentNode = rootNode;
    for (let i = 0; i < word.length; i += 1) {
      if (currentNode.getChild(word[i]) === null) {
        const child = node(word[i]);
        child.setParent(currentNode);
        currentNode.addChild(child);
        nodesCount += 1;
      }
      currentNode = currentNode.getChild(word[i]);
    }
    if (currentNode.getChar() !== '') {
      currentNode.setEndOfWord(true);
      wordsCount += 1;
    }
  };

  const remove = (word) => {
    let currentNode = search(word);
    if (currentNode !== null && currentNode.getChar() !== '') {
      if (currentNode.countChildren() > 0) {
        currentNode.setEndOfWord(false);
      } else {
        while (currentNode.getParent() !== null) {
          if (currentNode.countChildren() === 0) {
            currentNode.getParent().removeChild(currentNode);
            nodesCount -= 1;
          }
          currentNode = currentNode.getParent();
        }
      }
      wordsCount -= 1;
    }
  };

  const traverse = (cb) => {
    let word = '';
    const traverseFn = (currentNode) => {
      if (currentNode.isEndOfWord()) {
        cb(word);
      }
      const children = currentNode.getChildren();
      Object.keys(children).forEach((char) => {
        const child = children[char];
        word += child.getChar();
        traverseFn(child); 
        word = word.substr(0, word.length - 1);
      });
    };
    return traverseFn(rootNode);
  };

  const clear = () => {
    nodesCount = 1;
    wordsCount = 0;
    rootNode = node('');
  };

  return {
    node,
    countNodes,
    countWords,
    search,
    insert,
    remove,
    traverse,
    clear
  };
};

module.exports = trie;