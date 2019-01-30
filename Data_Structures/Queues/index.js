const queue = () => {
  let elements = [];
  let offset = 0;

  const size = () => elements.length - offset;

  const isEmpty = () => size() === 0;

  const toArray = () => elements.slice(offset);

  const clear = () => {
    offset = 0;
    elements = [];
  };
  const front = () => {
    if(!isEmpty()){
      return elements[offset];
    }
    return null;
  };
  const back = () => {
    if(!isEmpty()){
      return elements[elements.length - 1];
    }
    return null;
  };
  const enqueue = (el) => {
    elements.push(el);
  };

  const dequeue = () => {
    if(!isEmpty()){
      const first = front();
      offset += 1;

      if(offset * 2 >= elements.length){
        elements = elements.slice(offset);
        offset = 0;
      }
      return first;
    }
    return null;
  };

  return {
    size,
    isEmpty,
    toArray,
    clear,
    front,
    back,
    enqueue,
    dequeue
  };
}

module.exports = queue;