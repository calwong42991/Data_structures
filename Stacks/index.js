const stack = () => {
  top = 0;
  elements = [];

  const size = () => top;

  const push = (element) => {
    elements.push(element);
    top += 1;
  }

  const isEmpty = () => top === 0;

  const removePopped = () => {
    if( top * 2 <= elements.length){
      elements = elements.slice(0, top);
    }
  }

  const pop = () => {
    if(!isEmpty()) {
      top -= 1;
      const last = elements[top];
      removePopped();
      return last;
    }
  }

  const peek = () => {
    if(!isEmpty()){
      return elements[top - 1];
    }
    return null;
  }

  const clear = () => {
    top = 0;
    elements = [];
  }

  return {
    size,
    push,
    isEmpty,
    pop,
    peek,
    clear
  }
}

module.exports = stack;